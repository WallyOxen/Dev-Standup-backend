import { send } from "micro";
import { router, get } from "microrouter";

import { db } from "./lib/dbConn";

const getActiveDevs = async (req: any, res: any) => {
  const devs = await db("devs").select(["name"]).whereNot("left", true);
  send(res, 200, JSON.stringify(devs));
};

module.exports = router(get("/devs", getActiveDevs));
