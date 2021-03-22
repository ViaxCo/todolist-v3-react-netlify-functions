const knex = require("./db/connectDB");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "DELETE");
  const { id } = event.queryStringParameters;
  try {
    await knex("lists").delete().where({ _id: id });
    return respond(200, { success: true });
  } catch (error) {
    errorHandler(error);
  }
};
