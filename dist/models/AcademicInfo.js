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
exports.setupAcademicInfo = void 0;
const sequelize_1 = require("sequelize");
class AcademicInfo extends sequelize_1.Model {
}
const setupAcademicInfo = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    AcademicInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        software_devel_comments: sequelize_1.DataTypes.STRING,
        degree_level: sequelize_1.DataTypes.STRING,
        informal_education: sequelize_1.DataTypes.STRING,
        other_education: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        modelName: "AcademicInfo",
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
exports.setupAcademicInfo = setupAcademicInfo;
exports.default = AcademicInfo;
