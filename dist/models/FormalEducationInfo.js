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
exports.setupFormalEducationInfo = void 0;
const sequelize_1 = require("sequelize");
class FormalEducationInfo extends sequelize_1.Model {
}
const setupFormalEducationInfo = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    FormalEducationInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        university_name: sequelize_1.DataTypes.STRING,
        state: sequelize_1.DataTypes.STRING,
        country: sequelize_1.DataTypes.STRING,
        career_name: sequelize_1.DataTypes.STRING,
        classes_completed: sequelize_1.DataTypes.BOOLEAN,
        proof_classes_completed: sequelize_1.DataTypes.STRING,
        degree_completed: sequelize_1.DataTypes.BOOLEAN,
        proof_degree_completed: sequelize_1.DataTypes.STRING,
        license_completed: sequelize_1.DataTypes.BOOLEAN,
        proof_license_completed: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        modelName: "FormalEducationInfo",
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
exports.setupFormalEducationInfo = setupFormalEducationInfo;
exports.default = FormalEducationInfo;
