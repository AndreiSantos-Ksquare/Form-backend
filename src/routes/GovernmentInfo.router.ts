import { Router, Request, Response } from "express";
import { IGovernmentInfo } from "../interfaces";
import {
  createGovernmentInfo,
  getGovernmentInfo,
  updateGovernmentInfo,
  deleteGovernmentInfo,
} from "../repositories/GovernmentInfo.repo";
import { validateGovernmentInfoSchema } from "../utils/validations";

export const GovernmentInfoRouter = Router();

GovernmentInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateGovernmentInfoSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const { CURP, identification_number, user_id } =
      req.body as IGovernmentInfo;

    const governmentInfo = await createGovernmentInfo({
      CURP,
      identification_number,
      user_id,
    });

    return res.status(200).send({ governmentInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

GovernmentInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const governmentInfo = await getGovernmentInfo(Number(id));

    return res.status(200).send({ governmentInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

GovernmentInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const { CURP, identification_number, user_id } =
      req.body as IGovernmentInfo;

    const governmentInfo = await updateGovernmentInfo(
      {
        CURP,
        identification_number,
        user_id,
      },
      actualId
    );

    return res.status(200).send({ governmentInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

GovernmentInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const governmentInfo = await deleteGovernmentInfo(id);

    return res.status(200).send({ governmentInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});
