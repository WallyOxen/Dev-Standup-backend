import { router, get, post, patch } from "microrouter";

import { getActiveDevs, addDev, updateDevLeft, getGoneDevs } from "./lib/Devs";
import { getAllNotes, addNotes } from "./lib/Notes";

module.exports = router(
  get("/devs", getActiveDevs),
  post("/devs", addDev),
  patch("/devs/left", updateDevLeft),
  get("/devs/gone", getGoneDevs),
  get("/notes", getAllNotes),
  post("/notes", addNotes)
);
