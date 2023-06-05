"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAddress = void 0;
const sequelize_1 = require("sequelize");
class Address extends sequelize_1.Model {
}
const setupAddress = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    Address.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        street: sequelize_1.DataTypes.STRING,
        in_between_street_a: sequelize_1.DataTypes.STRING,
        in_between_street_b: sequelize_1.DataTypes.STRING,
        city: sequelize_1.DataTypes.STRING,
        state: sequelize_1.DataTypes.STRING,
        country: sequelize_1.DataTypes.STRING,
        zip: sequelize_1.DataTypes.STRING,
        proof_of_address: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        modelName: "Address",
        sequelize,
        paranoid: true,
    });
    // await User.sync();
    // await User.hasMany(Post, {
    //   foreignKey: "userId",
    // });
    // await User.hasMany(Comment, {
    //   foreignKey: "userId",
    // });
});
exports.setupAddress = setupAddress;
exports.default = Address;
