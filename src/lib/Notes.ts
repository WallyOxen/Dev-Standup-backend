import { send } from "micro";
import { db } from "./dbConn";

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

export { getAllNotes };
