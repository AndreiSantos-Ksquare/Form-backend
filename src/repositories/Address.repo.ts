import Address from "../models/Address";
import { IAddress } from "../interfaces";

export const createAddress = async ({
  street,
  in_between_street_a,
  in_between_street_b,
  city,
  state,
  country,
  zip,
  proof_of_address,
  user_id,
}: IAddress): Promise<IAddress | Object> => {
  try {
    const [response, created] = await Address.findOrCreate({
      where: { user_id: user_id },
      defaults: {
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
    });
    return {
      status: "Ok",
      message: "successful operation",
      response,
    };
  } catch (error) {
    return {
      status: "Error",
      message: error,
    };
  }
};

export const getAddress = async (
  user_id: number
): Promise<IAddress | Object> => {
  try {
    const response = await Address.findOne({
      where: { user_id: user_id },
    });
    return {
      status: "Ok",
      message: "successful operation",
      response,
    };
  } catch (error) {
    return {
      status: "Error",
      message: error,
    };
  }
};

export const updateAddress = async (
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
  }: IAddress,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await Address.update(
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
      { where: { user_id: actualId } }
    );
    return {
      status: "Ok",
      message: "successful operation",
      affectedCount,
    };
  } catch (error) {
    return {
      status: "Error",
      message: error,
    };
  }
};

export const deleteAddress = async (
  user_id: string
): Promise<number | Object> => {
  try {
    const response = await Address.destroy({
      where: { user_id: user_id },
    });
    return {
      status: "Ok",
      message: "successful operation",
      response,
    };
  } catch (error) {
    return {
      status: "Error",
      message: error,
    };
  }
};
