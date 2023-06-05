import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class Profile extends Model<
  InferAttributes<Profile>,
  InferCreationAttributes<Profile, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare phone: string;
  declare country_code: string;
  declare email: string;
  declare alt_email: string;
  declare reference: string;
  declare other_reference: string;
  declare user_id: number;
}

export const setupProfile = async (sequelize: Sequelize) => {
  Profile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      phone: DataTypes.STRING,
      country_code: DataTypes.STRING,
      email: DataTypes.STRING,
      alt_email: DataTypes.STRING,
      reference: DataTypes.STRING,
      other_reference: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      modelName: "Profile",
      sequelize,
      paranoid: true,
    }
  );
};

export default Profile;
