import { Request, Response } from "express";

export function validateId(req: Request, res: Response) {
  const { id } = req.body;
  if (id) {
    const numberValue = Number(id);
    if (!(!isNaN(numberValue) && typeof numberValue === "number")) {
      return res.status(400).send({
        status: "Error",
        message: "Invalid id supplied",
      });
    }
  }
}
