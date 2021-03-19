const connectDB = require("../db/connectDB");

module.exports = (event, method) => {
  if (event.httpMethod !== method) {
    return { statusCode: 405, body: "Function not found..." };
  }
  connectDB();
};
