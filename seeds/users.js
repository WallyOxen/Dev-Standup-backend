/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const TABLE = "devs";
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(TABLE).del();
  await knex(TABLE).insert([
    { name: "Jeffrey" },
    { name: "Matthew" },
    { name: "Tyler" },
    { name: "Ayman" },
    { name: "Christopher" },
    { name: "Gerald" },
    { name: "Kody" },
    { name: "Andrew" },
    { name: "Michael" },
    { name: "Drew", left: true },
  ]);
};
