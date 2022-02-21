import { send, json } from "micro";
import { db } from "./dbConn";

const getAllDevs = async (req: any, res: any) => {
  try {
    const devs = await db("devs").select(["name", "id", "left"]);
    send(res, 200, devs);
  } catch (e) {
    console.error(e);
    send(res, 500, {
      error: "There was an error retrieving all developers!",
    });
  }
};

const getActiveDevs = async (req: any, res: any) => {
  try {
    const devs = await db("devs").select(["name", "id"]).whereNot("left", true);
    send(res, 200, devs);
  } catch (e) {
    send(res, 500, {
      error: "There was an error retrieving active developers!",
    });
  }
};

const addDev = async (req: any, res: any) => {
  const request = await json(req);
  if (!request.name) {
    send(res, 422, { error: "You must provide a name to add a user!" });
    return;
  }
  try {
    const result = await db("devs")
      .insert({ name: request.name })
      .returning("*");
    send(res, 200, result);
  } catch (e) {
    console.error(e);
    send(res, 500, { error: "There was an error inserting a new developer!" });
  }
};

const updateDevLeft = async (req: any, res: any) => {
  const request = await json(req);
  if (!request.id) {
    send(res, 422, {
      error: "You must provide the id of the developer that left!",
    });
    return;
  }

  try {
    const result = await db("devs")
      .where("id", request.id)
      .update({
        left: true,
      })
      .returning("*");
    send(res, 200, result);
  } catch (e) {
    console.error(e);
    send(res, 500, { error: "There was an error updating the developer!" });
  }
};

const updateDevJoined = async (req: any, res: any) => {
  const request = await json(req);
  if (!request.id) {
    send(res, 422, {
      error: "You must provide the id of the developer that left!",
    });
    return;
  }

  try {
    const result = await db("devs")
      .where("id", request.id)
      .update({
        left: false,
      })
      .returning("*");
    send(res, 200, result);
  } catch (e) {
    console.error(e);
    send(res, 500, { error: "There was an error updating the developer!" });
  }
};

const getGoneDevs = async (req: any, res: any) => {
  try {
    const devs = await db("devs").select(["name"]).where("left", true);
    send(res, 200, JSON.stringify(devs));
  } catch (e) {
    console.error(e);
    send(res, 500, {
      error: "There was an error retrieving developers that are gone!",
    });
  }
};

export {
  getAllDevs,
  getActiveDevs,
  addDev,
  updateDevLeft,
  updateDevJoined,
  getGoneDevs,
};
