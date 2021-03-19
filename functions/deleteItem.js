// @ts-nocheck
const _ = require("lodash");
const { List } = require("./db/models");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "DELETE");
  const name = _.startCase(event.queryStringParameters.name);
  const { id } = event.queryStringParameters;
  try {
    await List.findOneAndUpdate({ name }, { $pull: { items: { _id: id } } });
    return respond(200, { success: true });
  } catch (error) {
    errorHandler(error);
  }
};
