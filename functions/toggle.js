// @ts-nocheck
const _ = require("lodash");
const { List } = require("./db/models");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "PATCH");
  const name = _.startCase(event.queryStringParameters.name);
  const { id } = event.queryStringParameters;
  const { completed } = JSON.parse(event.body);
  try {
    await List.findOneAndUpdate({ name, "items._id": id }, { "items.$.completed": completed });
    const newList = await List.findOne({ name });
    return respond(200, { items: newList.items });
  } catch (error) {
    errorHandler(error);
  }
};
