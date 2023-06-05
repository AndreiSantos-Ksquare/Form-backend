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
exports.setupScholarshipInfo = void 0;
const sequelize_1 = require("sequelize");
class ScholarshipInfo extends sequelize_1.Model {
}
const setupScholarshipInfo = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    ScholarshipInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        level: sequelize_1.DataTypes.STRING,
        kind: sequelize_1.DataTypes.STRING,
        period: sequelize_1.DataTypes.INTEGER,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        modelName: "ScholarshipInfo",
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
exports.setupScholarshipInfo = setupScholarshipInfo;
exports.default = ScholarshipInfo;
