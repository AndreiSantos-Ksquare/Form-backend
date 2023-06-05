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
exports.deleteAcademicInfo = exports.updateAcademicInfo = exports.getAcademicInfo = exports.createAcademicInfo = void 0;
const AcademicInfo_1 = __importDefault(require("../models/AcademicInfo"));
const createAcademicInfo = ({ software_devel_comments, degree_level, informal_education, other_education, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [response, created] = yield AcademicInfo_1.default.findOrCreate({
            where: { user_id: user_id },
            defaults: {
                software_devel_comments,
                degree_level,
                informal_education,
                other_education,
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
exports.createAcademicInfo = createAcademicInfo;
const getAcademicInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AcademicInfo_1.default.findOne({
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
exports.getAcademicInfo = getAcademicInfo;
const updateAcademicInfo = ({ software_devel_comments, degree_level, informal_education, other_education, user_id, }, actualId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield AcademicInfo_1.default.update({
            software_devel_comments,
            degree_level,
            informal_education,
            other_education,
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
exports.updateAcademicInfo = updateAcademicInfo;
const deleteAcademicInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AcademicInfo_1.default.destroy({
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
exports.deleteAcademicInfo = deleteAcademicInfo;
