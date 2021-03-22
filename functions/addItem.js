// @ts-nocheck
const _ = require("lodash");
const { nanoid } = require("nanoid");
const knex = require("./db/connectDB");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "POST");
  const name = _.startCase(event.queryStringParameters.name);
  const { text } = JSON.parse(event.body);
  const item = {
    _id: nanoid(16),
    task: text,
    completed: false,
  };
  try {
    const [foundList] = await knex("lists").where({ name });
    foundList.items.push(item);
    await knex("lists")
      .update({ items: JSON.stringify(foundList.items) })
      .where({ name });
    return respond(201, { item });
  } catch (error) {
    errorHandler(error);
  }
};
