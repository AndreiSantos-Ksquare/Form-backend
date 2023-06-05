import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare firstname: string;
  declare lastname: string;
  declare email: string;
  declare phone: string;
}

export const setupUser = async (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      modelName: "User",
      sequelize,
      paranoid: true,
    }
  );
};

export default User;
