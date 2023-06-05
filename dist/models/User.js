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
exports.setupUser = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
const setupUser = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: sequelize_1.DataTypes.STRING,
        firstname: sequelize_1.DataTypes.STRING,
        lastname: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        phone: sequelize_1.DataTypes.STRING,
    }, {
        modelName: "User",
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
exports.setupUser = setupUser;
exports.default = User;
