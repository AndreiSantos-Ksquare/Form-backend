import { Router, Request, Response } from "express";
import { IScholarshipInfo } from "../interfaces";
import {
  createScholarshipInfo,
  getScholarshipInfo,
  updateScholarshipInfo,
  deleteScholarshipInfo,
} from "../repositories/ScolarshipInfo.repo";
import { validateScholarshipInfoSchema } from "../utils/validations";

export const ScholarshipInfoRouter = Router();

ScholarshipInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateScholarshipInfoSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const { level, kind, period, user_id } = req.body as IScholarshipInfo;

    const scholarshipInfo = await createScholarshipInfo({
      level,
      kind,
      period,
      user_id,
    });

    return res.status(200).send({ scholarshipInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

ScholarshipInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const scholarshipInfo = await getScholarshipInfo(Number(id));

    return res.status(200).send({ scholarshipInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

ScholarshipInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const { level, kind, period, user_id } = req.body as IScholarshipInfo;

    const scholarshipInfo = await updateScholarshipInfo(
      {
        level,
        kind,
        period,
        user_id,
      },
      actualId
    );

    return res.status(200).send({ scholarshipInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

ScholarshipInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const scholarshipInfo = await deleteScholarshipInfo(id);

    return res.status(200).send({ scholarshipInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});
