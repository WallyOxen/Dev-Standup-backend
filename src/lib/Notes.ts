import { send, json } from "micro";
import { db } from "./dbConn";

import { noteSchema } from "./schemas/Note";

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
  send(res, 200, notes);
};

const addNotes = async (req: any, res: any) => {
  let valid: boolean;
  const request = await json(req);

  if (Array.isArray(request)) {
    valid = (
      await Promise.all(request.map(async (el) => await noteSchema.isValid(el)))
    ).every((el) => el);
  } else {
    valid = await noteSchema.isValid(request);
  }

  if (!valid) {
    send(res, 422, { error: "Missing data to insert notes!" });
    return;
  }

  try {
    const results = await db("notes").insert(request).returning("*");
    send(res, 200, results);
  } catch (e) {
    console.error(e);
    send(res, 500, { error: "There was a problem adding the notes!" });
  }
};

export { getAllNotes, addNotes };
