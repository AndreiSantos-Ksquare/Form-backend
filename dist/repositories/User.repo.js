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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const createUser = ({ username, firstname, lastname, email, phone, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [response, created] = yield User_1.default.findOrCreate({
            where: { username: username },
            defaults: {
                username,
                firstname,
                lastname,
                email,
                phone,
            },
        });
        return {
            status: "Ok",
            message: "successful operation",
            response,
        };
    }
    catch (error) {
        return {
            status: "Error",
            message: error,
        };
    }
});
exports.createUser = createUser;
const getUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield User_1.default.findOne({ where: { username: username } });
        return {
            status: "Ok",
            message: "successful operation",
            response,
        };
    }
    catch (error) {
        return {
            status: "Error",
            message: error,
        };
    }
});
exports.getUser = getUser;
const updateUser = ({ username, firstname, lastname, email, phone }, actualUsername) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield User_1.default.update({
            username,
            firstname,
            lastname,
            email,
            phone,
        }, { where: { username: actualUsername } });
        return {
            status: "Ok",
            message: "successful operation",
            affectedCount,
        };
    }
    catch (error) {
        return {
            status: "Error",
            message: error,
        };
    }
});
exports.updateUser = updateUser;
const deleteUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield User_1.default.destroy({ where: { username: username } });
        return {
            status: "Ok",
            message: "successful operation",
            response,
        };
    }
    catch (error) {
        return {
            status: "Error",
            message: error,
        };
    }
});
exports.deleteUser = deleteUser;
