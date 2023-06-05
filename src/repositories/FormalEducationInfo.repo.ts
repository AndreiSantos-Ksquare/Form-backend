import FormalEducationInfo from "../models/FormalEducationInfo";
import { IFormalEducationInfo } from "../interfaces";

export const createFormalEducationInfo = async ({
  university_name,
  state,
  country,
  career_name,
  classes_completed,
  proof_classes_completed,
  degree_completed,
  proof_degree_completed,
  license_completed,
  proof_license_completed,
  user_id,
}: IFormalEducationInfo): Promise<IFormalEducationInfo | Object> => {
  try {
    const [response, created] = await FormalEducationInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        university_name,
        state,
        country,
        career_name,
        classes_completed,
        proof_classes_completed,
        degree_completed,
        proof_degree_completed,
        license_completed,
        proof_license_completed,
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

export const getFormalEducationInfo = async (
  user_id: number
): Promise<IFormalEducationInfo | Object> => {
  try {
    const response = await FormalEducationInfo.findOne({
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

export const updateFormalEducationInfo = async (
  {
    university_name,
    state,
    country,
    career_name,
    classes_completed,
    proof_classes_completed,
    degree_completed,
    proof_degree_completed,
    license_completed,
    proof_license_completed,
    user_id,
  }: IFormalEducationInfo,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await FormalEducationInfo.update(
      {
        university_name,
        state,
        country,
        career_name,
        classes_completed,
        proof_classes_completed,
        degree_completed,
        proof_degree_completed,
        license_completed,
        proof_license_completed,
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

export const deleteFormalEducationInfo = async (
  user_id: string
): Promise<number | Object> => {
  try {
    const response = await FormalEducationInfo.destroy({
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
