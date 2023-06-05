import Skills from "../models/Skills";
import { ISkills } from "../interfaces";

export const createSkills = async ({
  preferred_programming_language,
  experience,
  disability,
  user_id,
}: ISkills): Promise<ISkills | Object> => {
  try {
    const [response, created] = await Skills.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        preferred_programming_language,
        experience,
        disability,
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

export const getSkills = async (user_id: number): Promise<ISkills | Object> => {
  try {
    const response = await Skills.findOne({
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

export const updateSkills = async (
  { preferred_programming_language, experience, disability, user_id }: ISkills,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await Skills.update(
      {
        preferred_programming_language,
        experience,
        disability,
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

export const deleteSkills = async (
  user_id: string
): Promise<number | Object> => {
  try {
    const response = await Skills.destroy({
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
