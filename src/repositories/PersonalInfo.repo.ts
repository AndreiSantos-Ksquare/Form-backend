import PersonalInfo from "../models/PersonalInfo";
import { IPersonalInfo } from "../interfaces";

export const createPersonalInfo = async ({
  name,
  last_name,
  second_last_name,
  gender,
  gender_other,
  date_of_birth,
  city_of_birth,
  state_of_birth,
  country_of_birth,
  user_id,
}: IPersonalInfo): Promise<PersonalInfo | Object> => {
  try {
    const [response, created] = await PersonalInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        name,
        last_name,
        second_last_name,
        gender,
        gender_other,
        date_of_birth,
        city_of_birth,
        state_of_birth,
        country_of_birth,
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

export const getPersonalInfo = async (
  user_id: number
): Promise<PersonalInfo | Object> => {
  try {
    const response = await PersonalInfo.findOne({
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

export const updatePersonalInfo = async (
  {
    name,
    last_name,
    second_last_name,
    gender,
    gender_other,
    date_of_birth,
    city_of_birth,
    state_of_birth,
    country_of_birth,
    user_id,
  }: IPersonalInfo,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await PersonalInfo.update(
      {
        name,
        last_name,
        second_last_name,
        gender,
        gender_other,
        date_of_birth,
        city_of_birth,
        state_of_birth,
        country_of_birth,
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

export const deletePersonalInfo = async (
  user_id: string
): Promise<number | Object> => {
  try {
    const response = await PersonalInfo.destroy({
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
