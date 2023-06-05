import { Router, Request, Response } from "express";
import { IProfile } from "../interfaces";
import {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
} from "../repositories/Profile.repo";
import { validateProfileSchema } from "../utils/validations";

export const ProfileRouter = Router();

ProfileRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateProfileSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const {
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    } = req.body as IProfile;

    const profile = await createProfile({
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    });

    return res.status(200).send({ profile });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

ProfileRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const profile = await getProfile(Number(id));

    return res.status(200).send({ profile });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

ProfileRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const {
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    } = req.body as IProfile;

    const profile = await updateProfile(
      {
        phone,
        country_code,
        email,
        alt_email,
        reference,
        other_reference,
        user_id,
      },
      actualId
    );

    return res.status(200).send({ profile });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

ProfileRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const profile = await deleteProfile(id);

    return res.status(200).send({ profile });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});
