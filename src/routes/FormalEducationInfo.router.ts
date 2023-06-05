import { Router, Request, Response } from "express";
import { IFormalEducationInfo } from "../interfaces";
import {
  createFormalEducationInfo,
  getFormalEducationInfo,
  updateFormalEducationInfo,
  deleteFormalEducationInfo,
} from "../repositories/FormalEducationInfo.repo";
import { validateFormalEducationInfoSchema } from "../utils/validations";

export const FormalEducationInfoRouter = Router();

FormalEducationInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateFormalEducationInfoSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const {
      university_name,
      state,
      country,
      career_name,
      classes_completed,
      proof_classes_completed,
      degree_completed,
      proof_degree_completed,
      license_completed,
      proof_license_completed,
      user_id,
    } = req.body as IFormalEducationInfo;

    const formalEducationInfo = await createFormalEducationInfo({
      university_name,
      state,
      country,
      career_name,
      classes_completed,
      proof_classes_completed,
      degree_completed,
      proof_degree_completed,
      license_completed,
      proof_license_completed,
      user_id,
    });

    return res.status(200).send({ formalEducationInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

FormalEducationInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const formalEducationInfo = await getFormalEducationInfo(Number(id));

    return res.status(200).send({ formalEducationInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

FormalEducationInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const {
      university_name,
      state,
      country,
      career_name,
      classes_completed,
      proof_classes_completed,
      degree_completed,
      proof_degree_completed,
      license_completed,
      proof_license_completed,
      user_id,
    } = req.body as IFormalEducationInfo;

    const formalEducationInfo = await updateFormalEducationInfo(
      {
        university_name,
        state,
        country,
        career_name,
        classes_completed,
        proof_classes_completed,
        degree_completed,
        proof_degree_completed,
        license_completed,
        proof_license_completed,
        user_id,
      },
      actualId
    );

    return res.status(200).send({ formalEducationInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

FormalEducationInfoRouter.delete(
  "/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const formalEducationInfo = await deleteFormalEducationInfo(id);

      return res.status(200).send({ formalEducationInfo });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: error,
      });
    }
  }
);
