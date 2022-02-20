import { router, get } from "microrouter";

import { getActiveDevs, getGoneDevs } from "./lib/Devs";
import { getAllNotes } from "./lib/Notes";

module.exports = router(
  get("/devs", getActiveDevs),
  get("/devs/gone", getGoneDevs),
  get("/notes", getAllNotes)
);
