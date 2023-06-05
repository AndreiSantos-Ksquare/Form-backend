import AcademicInfo from "../models/AcademicInfo";
import { IAcademicInfo } from "../interfaces";

export const createAcademicInfo = async ({
  software_devel_comments,
  degree_level,
  informal_education,
  other_education,
  user_id,
}: IAcademicInfo): Promise<IAcademicInfo | Object> => {
  try {
    const [response, created] = await AcademicInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        software_devel_comments,
        degree_level,
        informal_education,
        other_education,
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

export const getAcademicInfo = async (
  user_id: number
): Promise<IAcademicInfo | Object> => {
  try {
    const response = await AcademicInfo.findOne({
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

export const updateAcademicInfo = async (
  {
    software_devel_comments,
    degree_level,
    informal_education,
    other_education,
    user_id,
  }: IAcademicInfo,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await AcademicInfo.update(
      {
        software_devel_comments,
        degree_level,
        informal_education,
        other_education,
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

export const deleteAcademicInfo = async (
  user_id: string
): Promise<number | Object> => {
  try {
    const response = await AcademicInfo.destroy({
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
