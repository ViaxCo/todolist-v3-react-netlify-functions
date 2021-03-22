// @ts-nocheck
const _ = require("lodash");
const knex = require("./db/connectDB");
const defaultItems = require("./db/defaultItems");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "GET");
  const name = _.startCase(event.queryStringParameters.name);
  try {
    const [foundList] = await knex("lists").where({ name });
    if (foundList) {
      return respond(200, { listTitle: foundList.name, items: foundList.items });
    } else {
      const [newList] = await knex("lists")
        .insert({
          name,
          items: JSON.stringify(defaultItems),
        })
        .returning("*");
      return respond(201, { listTitle: newList.name, items: newList.items });
    }
  } catch (error) {
    errorHandler(error);
  }
};
