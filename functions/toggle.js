// @ts-nocheck
const _ = require("lodash");
const knex = require("./db/connectDB");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "PATCH");
  const name = _.startCase(event.queryStringParameters.name);
  const { id } = event.queryStringParameters;
  const { completed } = JSON.parse(event.body);
  try {
    const [foundList] = await knex("lists").where({ name });
    const newItems = foundList.items.map(item => (item._id === id ? { ...item, completed } : item));
    await knex("lists")
      .update({ items: JSON.stringify(newItems) })
      .where({ name });
    return respond(200, { items: newItems });
  } catch (error) {
    errorHandler(error);
  }
};
