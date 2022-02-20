import knex from "knex";
const connections = require("../../knexfile.js");
const connectionType = process.env.NODE_ENV || "development";
export const db = knex(connections[connectionType]);
