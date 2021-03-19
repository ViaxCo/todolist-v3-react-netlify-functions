const { List } = require("./db/models");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "GET");
  try {
    const lists = await List.find();
    return respond(200, {
      lists,
    });
  } catch (error) {
    errorHandler(error);
  }
};
