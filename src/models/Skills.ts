import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class Skills extends Model<
  InferAttributes<Skills>,
  InferCreationAttributes<Skills, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare preferred_programming_language: string;
  declare experience: string;
  declare disability: string;
  declare user_id: number;
}

export const setupSkills = async (sequelize: Sequelize) => {
  Skills.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      preferred_programming_language: DataTypes.STRING,
      experience: DataTypes.STRING,
      disability: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      modelName: "Skills",
      sequelize,
      paranoid: true,
    }
  );
};

export default Skills;
