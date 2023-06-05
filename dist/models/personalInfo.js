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
exports.setupPersonalInfo = void 0;
const sequelize_1 = require("sequelize");
class PersonalInfo extends sequelize_1.Model {
}
const setupPersonalInfo = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    PersonalInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: sequelize_1.DataTypes.STRING,
        last_name: sequelize_1.DataTypes.STRING,
        second_last_name: sequelize_1.DataTypes.STRING,
        gender: sequelize_1.DataTypes.STRING,
        gender_other: sequelize_1.DataTypes.STRING,
        date_of_birth: sequelize_1.DataTypes.STRING,
        city_of_birth: sequelize_1.DataTypes.STRING,
        state_of_birth: sequelize_1.DataTypes.STRING,
        country_of_birth: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        modelName: "PersonalInfo",
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
exports.setupPersonalInfo = setupPersonalInfo;
exports.default = PersonalInfo;
