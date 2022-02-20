/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const TABLE = "devs";
exports.up = async function (knex) {
  const exists = await knex.schema.hasTable(TABLE);

  if (exists) {
    return;
  }

  await knex.schema.createTable(TABLE, (table) => {
    table.bigIncrements("id").primary();
    table.string("name").notNullable();
    table.boolean("left").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await Promise.all([knex.schema.dropTableIfExists(TABLE)]);
};
