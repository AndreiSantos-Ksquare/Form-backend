import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class GovernmentInfo extends Model<
  InferAttributes<GovernmentInfo>,
  InferCreationAttributes<GovernmentInfo, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare CURP: string;
  declare identification_number: string;
  declare user_id: number;
}

export const setupGovernmentInfo = async (sequelize: Sequelize) => {
  GovernmentInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CURP: DataTypes.STRING,
      identification_number: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      modelName: "GovernmentInfo",
      sequelize,
      paranoid: true,
    }
  );
};

export default GovernmentInfo;
