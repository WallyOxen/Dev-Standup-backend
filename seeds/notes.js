/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const TABLE = "notes";
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(TABLE).del();
  await knex(TABLE).insert([
    {
      dev_id: 10,
      yesterday: "123",
      today: "234",
      blockers: "345",
      date: new Date(),
    },
    {
      dev_id: 11,
      yesterday: "234",
      today: "345",
      blockers: "456",
      date: new Date(),
    },
    {
      dev_id: 12,
      yesterday: "456",
      today: "456",
      blockers: "567",
      date: new Date(),
    },
    {
      dev_id: 13,
      yesterday: "567",
      today: "567",
      blockers: "678",
      date: new Date(),
    },
    {
      dev_id: 14,
      yesterday: "678",
      today: "678",
      blockers: "789",
      date: new Date(),
    },
    {
      dev_id: 15,
      yesterday: "789",
      today: "789",
      blockers: "890",
      date: new Date(),
    },
    {
      dev_id: 16,
      yesterday: "890",
      today: "890",
      blockers: "901",
      date: new Date(),
    },
    {
      dev_id: 17,
      yesterday: "901",
      today: "901",
      blockers: "012",
      date: new Date(),
    },
    {
      dev_id: 18,
      yesterday: "012",
      today: "012",
      blockers: "123",
      date: new Date(),
    },
  ]);
};
