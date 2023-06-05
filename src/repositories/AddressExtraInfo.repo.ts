import AddressExtraInfo from "../models/AddressExtraInfo";
import { IAddressExtraInfo } from "../interfaces";

export const createAddressExtraInfo = async ({
  type_of_residency,
  other_residency,
  people,
  address_id,
}: IAddressExtraInfo): Promise<IAddressExtraInfo | Object> => {
  try {
    const [response, created] = await AddressExtraInfo.findOrCreate({
      where: { address_id: address_id },
      defaults: {
        type_of_residency,
        other_residency,
        people,
        address_id,
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

export const getAddressExtraInfo = async (
  address_id: number
): Promise<IAddressExtraInfo | Object> => {
  try {
    const response = await AddressExtraInfo.findOne({
      where: { address_id: address_id },
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

export const updateAddressExtraInfo = async (
  { type_of_residency, other_residency, people, address_id }: IAddressExtraInfo,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await AddressExtraInfo.update(
      {
        type_of_residency,
        other_residency,
        people,
        address_id,
      },
      { where: { address_id: actualId } }
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

export const deleteAddressExtraInfo = async (
  address_id: string
): Promise<number | Object> => {
  try {
    const response = await AddressExtraInfo.destroy({
      where: { address_id: address_id },
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
