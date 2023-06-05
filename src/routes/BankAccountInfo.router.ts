import { Router, Request, Response } from "express";
import { IBankAccountInfo } from "../interfaces";
import {
  createBankAccountInfo,
  getBankAccountInfo,
  updateBankAccountInfo,
  deleteBankAccountInfo,
} from "../repositories/BankAccountInfo.repo";
import { validateBankAccountInfoSchema } from "../utils/validations";

export const BankAccountInfoRouter = Router();

BankAccountInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateBankAccountInfoSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const { acc_number, clabe, bank, user_id } = req.body as IBankAccountInfo;

    const bankAccountInfo = await createBankAccountInfo({
      acc_number,
      clabe,
      bank,
      user_id,
    });

    return res.status(200).send({ bankAccountInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

BankAccountInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const bankAccountInfo = await getBankAccountInfo(Number(id));

    return res.status(200).send({ bankAccountInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

BankAccountInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const { acc_number, clabe, bank, user_id } = req.body as IBankAccountInfo;

    const bankAccountInfo = await updateBankAccountInfo(
      {
        acc_number,
        clabe,
        bank,
        user_id,
      },
      actualId
    );

    return res.status(200).send({ bankAccountInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

BankAccountInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const bankAccountInfo = await deleteBankAccountInfo(id);

    return res.status(200).send({ bankAccountInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});
