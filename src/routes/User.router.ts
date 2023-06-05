import { Router, Request, Response } from "express";
import { IUser } from "../interfaces";
import Joi from "joi";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../repositories/User.repo";
import { validateUserSchema } from "../utils/validations";

export const UserRouter = Router();

UserRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateUserSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const { username, firstname, lastname, email, phone } = req.body as IUser;

    const user = await createUser({
      username,
      firstname,
      lastname,
      email,
      phone,
    });

    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

UserRouter.get("/:username", async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    const user = await getUser(username);

    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "Invalid username supplied",
    });
  }
});

UserRouter.put("/:username", async (req: Request, res: Response) => {
  try {
    const actualUsername = req.params.username;

    const valid = validateUserSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const { username, firstname, lastname, email, phone } = req.body as IUser;

    const user = await updateUser(
      {
        username,
        firstname,
        lastname,
        email,
        phone,
      },
      actualUsername
    );

    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "User not found",
    });
  }
});

UserRouter.delete("/:username", async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    const usersDeleted = await deleteUser(username);

    return res.status(200).send({ usersDeleted });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "Invalid username supplied",
    });
  }
});
