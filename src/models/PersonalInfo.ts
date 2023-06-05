import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class PersonalInfo extends Model<
  InferAttributes<PersonalInfo>,
  InferCreationAttributes<PersonalInfo, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare last_name: string;
  declare second_last_name: string;
  declare gender: string;
  declare gender_other: string;
  declare date_of_birth: string;
  declare city_of_birth: string;
  declare state_of_birth: string;
  declare country_of_birth: string;
  declare user_id: number;
}

export const setupPersonalInfo = async (sequelize: Sequelize) => {
  PersonalInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      second_last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      gender_other: DataTypes.STRING,
      date_of_birth: DataTypes.STRING,
      city_of_birth: DataTypes.STRING,
      state_of_birth: DataTypes.STRING,
      country_of_birth: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      modelName: "PersonalInfo",
      sequelize,
      paranoid: true,
    }
  );
};

export default PersonalInfo;
