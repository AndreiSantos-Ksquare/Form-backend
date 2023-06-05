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
exports.GovernmentInfoRouter = void 0;
const express_1 = require("express");
const GovernmentInfo_repo_1 = require("../repositories/GovernmentInfo.repo");
const validations_1 = require("../utils/validations");
exports.GovernmentInfoRouter = (0, express_1.Router)();
exports.GovernmentInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validateGovernmentInfoSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { CURP, identification_number, user_id } = req.body;
        const governmentInfo = yield (0, GovernmentInfo_repo_1.createGovernmentInfo)({
            CURP,
            identification_number,
            user_id,
        });
        return res.status(200).send({ governmentInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.GovernmentInfoRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const governmentInfo = yield (0, GovernmentInfo_repo_1.getGovernmentInfo)(Number(id));
        return res.status(200).send({ governmentInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.GovernmentInfoRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualId = req.params.id;
        const { CURP, identification_number, user_id } = req.body;
        const governmentInfo = yield (0, GovernmentInfo_repo_1.updateGovernmentInfo)({
            CURP,
            identification_number,
            user_id,
        }, actualId);
        return res.status(200).send({ governmentInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.GovernmentInfoRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const governmentInfo = yield (0, GovernmentInfo_repo_1.deleteGovernmentInfo)(id);
        return res.status(200).send({ governmentInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
