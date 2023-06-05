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
exports.deletePersonalInfo = exports.updatePersonalInfo = exports.getPersonalInfo = exports.createPersonalInfo = void 0;
const PersonalInfo_1 = __importDefault(require("../models/PersonalInfo"));
const createPersonalInfo = ({ name, last_name, second_last_name, gender, gender_other, date_of_birth, city_of_birth, state_of_birth, country_of_birth, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [response, created] = yield PersonalInfo_1.default.findOrCreate({
            where: { user_id: user_id },
            defaults: {
                name,
                last_name,
                second_last_name,
                gender,
                gender_other,
                date_of_birth,
                city_of_birth,
                state_of_birth,
                country_of_birth,
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
exports.createPersonalInfo = createPersonalInfo;
const getPersonalInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield PersonalInfo_1.default.findOne({
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
exports.getPersonalInfo = getPersonalInfo;
const updatePersonalInfo = ({ name, last_name, second_last_name, gender, gender_other, date_of_birth, city_of_birth, state_of_birth, country_of_birth, user_id, }, actualId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield PersonalInfo_1.default.update({
            name,
            last_name,
            second_last_name,
            gender,
            gender_other,
            date_of_birth,
            city_of_birth,
            state_of_birth,
            country_of_birth,
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
exports.updatePersonalInfo = updatePersonalInfo;
const deletePersonalInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield PersonalInfo_1.default.destroy({
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
exports.deletePersonalInfo = deletePersonalInfo;
