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
exports.deleteGovernmentInfo = exports.updateGovernmentInfo = exports.getGovernmentInfo = exports.createGovernmentInfo = void 0;
const GovernmentInfo_1 = __importDefault(require("../models/GovernmentInfo"));
const createGovernmentInfo = ({ CURP, identification_number, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [response, created] = yield GovernmentInfo_1.default.findOrCreate({
            where: { user_id: user_id },
            defaults: {
                CURP,
                identification_number,
                user_id,
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
exports.createGovernmentInfo = createGovernmentInfo;
const getGovernmentInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield GovernmentInfo_1.default.findOne({
            where: { user_id: user_id },
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
exports.getGovernmentInfo = getGovernmentInfo;
const updateGovernmentInfo = ({ CURP, identification_number, user_id }, actualId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield GovernmentInfo_1.default.update({
            CURP,
            identification_number,
            user_id,
        }, { where: { user_id: actualId } });
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
exports.updateGovernmentInfo = updateGovernmentInfo;
const deleteGovernmentInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield GovernmentInfo_1.default.destroy({
            where: { user_id: user_id },
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
exports.deleteGovernmentInfo = deleteGovernmentInfo;
