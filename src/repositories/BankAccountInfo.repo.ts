import BankAccountInfo from "../models/BankAccountInfo";
import { IBankAccountInfo } from "../interfaces";

export const createBankAccountInfo = async ({
  acc_number,
  clabe,
  bank,
  user_id,
}: IBankAccountInfo): Promise<IBankAccountInfo | Object> => {
  try {
    const [response, created] = await BankAccountInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        acc_number,
        clabe,
        bank,
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

export const getBankAccountInfo = async (
  user_id: number
): Promise<IBankAccountInfo | Object> => {
  try {
    const response = await BankAccountInfo.findOne({
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

export const updateBankAccountInfo = async (
  { acc_number, clabe, bank, user_id }: IBankAccountInfo,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await BankAccountInfo.update(
      {
        acc_number,
        clabe,
        bank,
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

export const deleteBankAccountInfo = async (
  user_id: string
): Promise<number | Object> => {
  try {
    const response = await BankAccountInfo.destroy({
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
