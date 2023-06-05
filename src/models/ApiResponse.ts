import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class ApiResponse extends Model<
  InferAttributes<ApiResponse>,
  InferCreationAttributes<ApiResponse, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare code: number;
  declare type: string;
  declare message: string;
}

export const setupApiResponse = async (sequelize: Sequelize) => {
  ApiResponse.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      code: DataTypes.INTEGER,
      type: DataTypes.STRING,
      message: DataTypes.STRING,
    },
    {
      modelName: "ApiResponse",
      sequelize,
      paranoid: true,
    }
  );
};

export default ApiResponse;
