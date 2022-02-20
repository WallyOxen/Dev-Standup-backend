/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const TABLE = "notes";
exports.up = async function (knex) {
  const exists = await knex.schema.hasTable(TABLE);

  if (exists) {
    return;
  }

  await knex.schema.createTable(TABLE, (table) => {
    table.bigIncrements("id").primary();
    table.integer("dev_id").references("id").inTable("devs");
    table.string("yesterday");
    table.string("today");
    table.string("blockers");
    table.dateTime("date");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await Promise.all([knex.schema.dropTableIfExists(TABLE)]);
};
