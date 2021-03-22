const knex = require("./connectDB");

module.exports = async () => {
  const exists = await knex.schema.hasTable("lists");
  if (!exists) {
    return knex.schema.createTable("lists", table => {
      table.increments("_id");
      table.string("name");
      table.jsonb("items");
    });
  }
};
