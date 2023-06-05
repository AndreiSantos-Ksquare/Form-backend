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
exports.setupApiResponse = void 0;
const sequelize_1 = require("sequelize");
class ApiResponse extends sequelize_1.Model {
}
const setupApiResponse = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    ApiResponse.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        code: sequelize_1.DataTypes.INTEGER,
        type: sequelize_1.DataTypes.STRING,
        message: sequelize_1.DataTypes.STRING,
    }, {
        modelName: "ApiResponse",
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
exports.setupApiResponse = setupApiResponse;
exports.default = ApiResponse;
