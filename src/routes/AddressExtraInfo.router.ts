import { Router, Request, Response } from "express";
import { IAddressExtraInfo } from "../interfaces";
import {
  createAddressExtraInfo,
  getAddressExtraInfo,
  updateAddressExtraInfo,
  deleteAddressExtraInfo,
} from "../repositories/AddressExtraInfo.repo";
import { validateAddressExtraInfoSchema } from "../utils/validations";

export const AddressExtraInfoRouter = Router();

AddressExtraInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateAddressExtraInfoSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const { type_of_residency, other_residency, people, address_id } =
      req.body as IAddressExtraInfo;

    const addressExtraInfo = await createAddressExtraInfo({
      type_of_residency,
      other_residency,
      people,
      address_id,
    });

    return res.status(200).send({ addressExtraInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

AddressExtraInfoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const addressExtraInfo = await getAddressExtraInfo(Number(id));

    return res.status(200).send({ addressExtraInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

AddressExtraInfoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const { type_of_residency, other_residency, people, address_id } =
      req.body as IAddressExtraInfo;

    const addressExtraInfo = await updateAddressExtraInfo(
      {
        type_of_residency,
        other_residency,
        people,
        address_id,
      },
      actualId
    );

    return res.status(200).send({ addressExtraInfo });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

AddressExtraInfoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const addressExtraInfoDeleted = await deleteAddressExtraInfo(id);

    return res.status(200).send({ addressExtraInfoDeleted });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});
