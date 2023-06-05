import Profile from "../models/Profile";
import { IProfile } from "../interfaces";

export const createProfile = async ({
  phone,
  country_code,
  email,
  alt_email,
  reference,
  other_reference,
  user_id,
}: IProfile): Promise<IProfile | Object> => {
  try {
    const [response, created] = await Profile.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        phone,
        country_code,
        email,
        alt_email,
        reference,
        other_reference,
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

export const getProfile = async (
  user_id: number
): Promise<IProfile | Object> => {
  try {
    const response = await Profile.findOne({
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

export const updateProfile = async (
  {
    phone,
    country_code,
    email,
    alt_email,
    reference,
    other_reference,
    user_id,
  }: IProfile,
  actualId: string
): Promise<number | Object> => {
  try {
    const [affectedCount] = await Profile.update(
      {
        phone,
        country_code,
        email,
        alt_email,
        reference,
        other_reference,
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

export const deleteProfile = async (
  user_id: string
): Promise<number | Object> => {
  try {
    const response = await Profile.destroy({
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
