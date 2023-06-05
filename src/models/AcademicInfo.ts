import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class AcademicInfo extends Model<
  InferAttributes<AcademicInfo>,
  InferCreationAttributes<AcademicInfo, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare software_devel_comments: string;
  declare degree_level: string;
  declare informal_education: string;
  declare other_education: string;
  declare user_id: number;
}

export const setupAcademicInfo = async (sequelize: Sequelize) => {
  AcademicInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      software_devel_comments: DataTypes.STRING,
      degree_level: DataTypes.STRING,
      informal_education: DataTypes.STRING,
      other_education: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      modelName: "AcademicInfo",
      sequelize,
      paranoid: true,
    }
  );
};

export default AcademicInfo;
