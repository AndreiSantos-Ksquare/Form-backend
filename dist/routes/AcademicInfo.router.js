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
exports.AcademicInfoRouter = void 0;
const express_1 = require("express");
const AcademicInfo_repo_1 = require("../repositories/AcademicInfo.repo");
const validations_1 = require("../utils/validations");
exports.AcademicInfoRouter = (0, express_1.Router)();
exports.AcademicInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validateAcademicInfoSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { software_devel_comments, degree_level, informal_education, other_education, user_id, } = req.body;
        const academicInfo = yield (0, AcademicInfo_repo_1.createAcademicInfo)({
            software_devel_comments,
            degree_level,
            informal_education,
            other_education,
            user_id,
        });
        return res.status(200).send({ academicInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.AcademicInfoRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const academicInfo = yield (0, AcademicInfo_repo_1.getAcademicInfo)(Number(id));
        return res.status(200).send({ academicInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.AcademicInfoRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualId = req.params.id;
        const { software_devel_comments, degree_level, informal_education, other_education, user_id, } = req.body;
        const academicInfo = yield (0, AcademicInfo_repo_1.updateAcademicInfo)({
            software_devel_comments,
            degree_level,
            informal_education,
            other_education,
            user_id,
        }, actualId);
        return res.status(200).send({ academicInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.AcademicInfoRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const academicInfo = yield (0, AcademicInfo_repo_1.deleteAcademicInfo)(id);
        return res.status(200).send({ academicInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
