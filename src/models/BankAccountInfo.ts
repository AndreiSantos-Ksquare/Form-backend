import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class BankAccountInfo extends Model<
  InferAttributes<BankAccountInfo>,
  InferCreationAttributes<BankAccountInfo, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare acc_number: number;
  declare clabe: number;
  declare bank: string;
  declare user_id: number;
}

export const setupBankAccountInfo = async (sequelize: Sequelize) => {
  BankAccountInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      acc_number: DataTypes.INTEGER,
      clabe: DataTypes.INTEGER,
      bank: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      modelName: "BankAccountInfo",
      sequelize,
      paranoid: true,
    }
  );
};

export default BankAccountInfo;
