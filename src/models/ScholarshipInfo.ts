import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class ScholarshipInfo extends Model<
  InferAttributes<ScholarshipInfo>,
  InferCreationAttributes<ScholarshipInfo, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare level: string;
  declare kind: string;
  declare period: number;
  declare user_id: number;
}

export const setupScholarshipInfo = async (sequelize: Sequelize) => {
  ScholarshipInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      level: DataTypes.STRING,
      kind: DataTypes.STRING,
      period: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      modelName: "ScholarshipInfo",
      sequelize,
      paranoid: true,
    }
  );
};

export default ScholarshipInfo;
