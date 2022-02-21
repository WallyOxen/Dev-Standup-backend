import { router, get, post, patch } from "microrouter";
const cors = require("micro-cors")();

import {
  getAllDevs,
  getActiveDevs,
  addDev,
  updateDevLeft,
  updateDevJoined,
  getGoneDevs,
} from "./lib/Devs";
import { getAllNotes, addNotes } from "./lib/Notes";

module.exports = cors(
  router(
    get("/devs", getAllDevs),
    get("/devs/active", getActiveDevs),
    patch("/devs/left", updateDevLeft),
    patch("/devs/joined", updateDevJoined),
    post("/devs", addDev),
    get("/devs/gone", getGoneDevs),
    get("/notes", getAllNotes),
    post("/notes", addNotes)
  )
);
