import User from "../models/User";
import { IUser } from "../interfaces";

export const createUser = async ({
  username,
  firstname,
  lastname,
  email,
  phone,
}: IUser): Promise<User | Object> => {
  try {
    const [response, created] = await User.findOrCreate({
      where: { username: username },
      defaults: {
        username,
        firstname,
        lastname,
        email,
        phone,
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

export const getUser = async (username: string): Promise<User | Object> => {
  try {
    const response = await User.findOne({ where: { username: username } });
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

export const updateUser = async (
  { username, firstname, lastname, email, phone }: IUser,
  actualUsername: string
): Promise<Object> => {
  try {
    const [affectedCount] = await User.update(
      {
        username,
        firstname,
        lastname,
        email,
        phone,
      },
      { where: { username: actualUsername } }
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

export const deleteUser = async (username: string): Promise<Object> => {
  try {
    const response = await User.destroy({ where: { username: username } });
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
