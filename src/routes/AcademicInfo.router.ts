import { Router, Request, Response } from "express";
import { IAcademicInfo } from "../interfaces";
import {
  createAcademicInfo,
  getAcademicInfo,
  updateAcademicInfo,
  deleteAcademicInfo,
} from "../repositories/AcademicInfo.repo";
import { validateAcademicInfoSchema } from "../utils/validations";

export const AcademicInfoRouter = Router();

AcademicInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateAcademicInfoSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const {
      software_devel_comments,
      degree_level,
      informal_education,
      other_education,
      user_id,
    } = req.body as IAcademicInfo;

    const academicInfo = await createAcademicInfo({
      software_devel_comments,
      degree_level,
      informal_education,
      other_education,
      user_id,
    });

    return res.status(200).send({ academicInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

AcademicInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const academicInfo = await getAcademicInfo(Number(id));

    return res.status(200).send({ academicInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

AcademicInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const {
      software_devel_comments,
      degree_level,
      informal_education,
      other_education,
      user_id,
    } = req.body as IAcademicInfo;

    const academicInfo = await updateAcademicInfo(
      {
        software_devel_comments,
        degree_level,
        informal_education,
        other_education,
        user_id,
      },
      actualId
    );

    return res.status(200).send({ academicInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

AcademicInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const academicInfo = await deleteAcademicInfo(id);

    return res.status(200).send({ academicInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});
