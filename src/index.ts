import { send } from "micro";
import { router, get } from "microrouter";

import { db } from "./lib/dbConn";

const getActiveDevs = async (req: any, res: any) => {
  const devs = await db("devs").select(["name"]).whereNot("left", true);
  send(res, 200, JSON.stringify(devs));
};

const getGoneDevs = async (req: any, res: any) => {
  const devs = await db("devs").select(["name"]).where("left", true);
  send(res, 200, JSON.stringify(devs));
};

const getAllNotes = async (req: any, res: any) => {
  const notes = await db("notes")
    .join("devs", "devs.id", "notes.dev_id")
    .where("devs.left", "false")
    .select([
      "notes.id",
      "notes.dev_id",
      "devs.name",
      "notes.yesterday",
      "notes.today",
      "notes.blockers",
      "notes.date",
    ]);
  send(res, 200, JSON.stringify(notes));
};

module.exports = router(
  get("/devs", getActiveDevs),
  get("/devs/gone", getGoneDevs),
  get("/notes", getAllNotes)
);
