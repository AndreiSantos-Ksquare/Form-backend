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
exports.ScholarshipInfoRouter = void 0;
const express_1 = require("express");
const ScolarshipInfo_repo_1 = require("../repositories/ScolarshipInfo.repo");
const validations_1 = require("../utils/validations");
exports.ScholarshipInfoRouter = (0, express_1.Router)();
exports.ScholarshipInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validateScholarshipInfoSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { level, kind, period, user_id } = req.body;
        const scholarshipInfo = yield (0, ScolarshipInfo_repo_1.createScholarshipInfo)({
            level,
            kind,
            period,
            user_id,
        });
        return res.status(200).send({ scholarshipInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.ScholarshipInfoRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const scholarshipInfo = yield (0, ScolarshipInfo_repo_1.getScholarshipInfo)(Number(id));
        return res.status(200).send({ scholarshipInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.ScholarshipInfoRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualId = req.params.id;
        const { level, kind, period, user_id } = req.body;
        const scholarshipInfo = yield (0, ScolarshipInfo_repo_1.updateScholarshipInfo)({
            level,
            kind,
            period,
            user_id,
        }, actualId);
        return res.status(200).send({ scholarshipInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.ScholarshipInfoRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const scholarshipInfo = yield (0, ScolarshipInfo_repo_1.deleteScholarshipInfo)(id);
        return res.status(200).send({ scholarshipInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
