import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class AddressExtraInfo extends Model<
  InferAttributes<AddressExtraInfo>,
  InferCreationAttributes<AddressExtraInfo, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare type_of_residency: string;
  declare other_residency: string;
  declare people: string;
  declare address_id: number;
}

export const setupAddressExtraInfo = async (sequelize: Sequelize) => {
  AddressExtraInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type_of_residency: DataTypes.STRING,
      other_residency: DataTypes.STRING,
      people: DataTypes.STRING,
      address_id: DataTypes.INTEGER,
    },
    {
      modelName: "AddressExtraInfo",
      sequelize,
      paranoid: true,
    }
  );
};

export default AddressExtraInfo;
