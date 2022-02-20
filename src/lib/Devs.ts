import { send } from "micro";
import { db } from "./dbConn";

const getActiveDevs = async (req: any, res: any) => {
  const devs = await db("devs").select(["name"]).whereNot("left", true);
  send(res, 200, JSON.stringify(devs));
};
const getGoneDevs = async (req: any, res: any) => {
  const devs = await db("devs").select(["name"]).where("left", true);
  send(res, 200, JSON.stringify(devs));
};

export { getActiveDevs, getGoneDevs };
