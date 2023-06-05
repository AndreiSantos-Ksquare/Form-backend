import ScholarshipInfo from "../models/ScholarshipInfo";
import { IScholarshipInfo } from "../interfaces";

export const createScholarshipInfo = async ({
  level,
  kind,
  period,
  user_id,
}: IScholarshipInfo): Promise<IScholarshipInfo | Object> => {
  try {
    const [response, created] = await ScholarshipInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        level,
        kind,
        period,
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

export const getScholarshipInfo = async (
  user_id: number
): Promise<IScholarshipInfo | Object> => {
  try {
    const response = await ScholarshipInfo.findOne({
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

export const updateScholarshipInfo = async (
  { level, kind, period, user_id }: IScholarshipInfo,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await ScholarshipInfo.update(
      {
        level,
        kind,
        period,
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

export const deleteScholarshipInfo = async (
  user_id: string
): Promise<number | Object> => {
  try {
    const response = await ScholarshipInfo.destroy({
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
