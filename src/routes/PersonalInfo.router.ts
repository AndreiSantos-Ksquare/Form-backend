import { Router, Request, Response } from "express";
import { IPersonalInfo } from "../interfaces";
import {
  createPersonalInfo,
  getPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
} from "../repositories/PersonalInfo.repo";
import { validatePersonalInfoSchema } from "../utils/validations";

export const PersonalInfoRouter = Router();

PersonalInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validatePersonalInfoSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const {
      name,
      last_name,
      second_last_name,
      gender,
      gender_other,
      date_of_birth,
      city_of_birth,
      state_of_birth,
      country_of_birth,
      user_id,
    } = req.body as IPersonalInfo;

    const personalInfo = await createPersonalInfo({
      name,
      last_name,
      second_last_name,
      gender,
      gender_other,
      date_of_birth,
      city_of_birth,
      state_of_birth,
      country_of_birth,
      user_id,
    });

    return res.status(200).send({ personalInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

PersonalInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const personalInfo = await getPersonalInfo(Number(id));

    return res.status(200).send({ personalInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

PersonalInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const {
      name,
      last_name,
      second_last_name,
      gender,
      gender_other,
      date_of_birth,
      city_of_birth,
      state_of_birth,
      country_of_birth,
      user_id,
    } = req.body as IPersonalInfo;

    const personalInfo = await updatePersonalInfo(
      {
        name,
        last_name,
        second_last_name,
        gender,
        gender_other,
        date_of_birth,
        city_of_birth,
        state_of_birth,
        country_of_birth,
        user_id,
      },
      actualId
    );

    return res.status(200).send({ personalInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

PersonalInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const personalInfoDeleted = await deletePersonalInfo(id);

    return res.status(200).send({ personalInfoDeleted });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});
