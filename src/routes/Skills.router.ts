import { Router, Request, Response } from "express";
import { ISkills } from "../interfaces";
import {
  createSkills,
  getSkills,
  updateSkills,
  deleteSkills,
} from "../repositories/Skills.repo";
import { validateSkillsSchema } from "../utils/validations";

export const SkillsRouter = Router();

SkillsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateSkillsSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const { preferred_programming_language, experience, disability, user_id } =
      req.body as ISkills;

    const skills = await createSkills({
      preferred_programming_language,
      experience,
      disability,
      user_id,
    });

    return res.status(200).send({ skills });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

SkillsRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const skills = await getSkills(Number(id));

    return res.status(200).send({ skills });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

SkillsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const { preferred_programming_language, experience, disability, user_id } =
      req.body as ISkills;

    const skills = await updateSkills(
      {
        preferred_programming_language,
        experience,
        disability,
        user_id,
      },
      actualId
    );

    return res.status(200).send({ skills });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

SkillsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const skills = await deleteSkills(id);

    return res.status(200).send({ skills });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});
