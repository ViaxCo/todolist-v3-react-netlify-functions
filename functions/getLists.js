// @ts-nocheck
const knex = require("./db/connectDB");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");
const createTable = require("./db/models");

exports.handler = async (event, context) => {
  init(event, "GET");
  try {
    await createTable();
    const lists = await knex("lists").orderBy("_id");
    return respond(200, {
      lists,
    });
  } catch (error) {
    errorHandler(error);
  }
};
