import { Router, Request, Response } from "express";
import { IAddress } from "../interfaces";
import {
  createAddress,
  getAddress,
  updateAddress,
  deleteAddress,
} from "../repositories/Address.repo";
import { validateAddressSchema } from "../utils/validations";

export const AddressRouter = Router();

AddressRouter.post("/", async (req: Request, res: Response) => {
  try {
    const valid = validateAddressSchema(req.body);

    if (valid["error"]) {
      return res.status(400).send({
        status: "Error",
        error: valid.error,
      });
    }

    const {
      street,
      in_between_street_a,
      in_between_street_b,
      city,
      state,
      country,
      zip,
      proof_of_address,
      user_id,
    } = req.body as IAddress;

    const address = await createAddress({
      street,
      in_between_street_a,
      in_between_street_b,
      city,
      state,
      country,
      zip,
      proof_of_address,
      user_id,
    });

    return res.status(200).send({ address });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

AddressRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const address = await getAddress(Number(id));

    return res.status(200).send({ address });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

AddressRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const actualId = req.params.id;

    const {
      street,
      in_between_street_a,
      in_between_street_b,
      city,
      state,
      country,
      zip,
      proof_of_address,
      user_id,
    } = req.body as IAddress;

    const address = await updateAddress(
      {
        street,
        in_between_street_a,
        in_between_street_b,
        city,
        state,
        country,
        zip,
        proof_of_address,
        user_id,
      },
      actualId
    );

    return res.status(200).send({ address });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});

AddressRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const addressDeleted = await deleteAddress(id);

    return res.status(200).send({ addressDeleted });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: error,
    });
  }
});
