// @ts-nocheck
const _ = require("lodash");
const knex = require("./db/connectDB");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "DELETE");
  const name = _.startCase(event.queryStringParameters.name);
  const { id } = event.queryStringParameters;
  try {
    const [foundList] = await knex("lists").where({ name });
    const newItems = foundList.items.filter(item => item._id !== id);
    await knex("lists")
      .update({ items: JSON.stringify(newItems) })
      .where({ name });
    return respond(200, { success: true });
  } catch (error) {
    errorHandler(error);
  }
};
