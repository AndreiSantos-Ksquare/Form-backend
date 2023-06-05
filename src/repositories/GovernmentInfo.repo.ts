import GovernmentInfo from "../models/GovernmentInfo";
import { IGovernmentInfo } from "../interfaces";

export const createGovernmentInfo = async ({
  CURP,
  identification_number,
  user_id,
}: IGovernmentInfo): Promise<IGovernmentInfo | Object> => {
  try {
    const [response, created] = await GovernmentInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        CURP,
        identification_number,
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

export const getGovernmentInfo = async (
  user_id: number
): Promise<IGovernmentInfo | Object> => {
  try {
    const response = await GovernmentInfo.findOne({
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

export const updateGovernmentInfo = async (
  { CURP, identification_number, user_id }: IGovernmentInfo,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await GovernmentInfo.update(
      {
        CURP,
        identification_number,
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

export const deleteGovernmentInfo = async (
  user_id: string
): Promise<number | Object> => {
  try {
    const response = await GovernmentInfo.destroy({
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
