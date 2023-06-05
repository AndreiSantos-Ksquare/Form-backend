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
exports.SkillsRouter = void 0;
const express_1 = require("express");
const Skills_repo_1 = require("../repositories/Skills.repo");
const validations_1 = require("../utils/validations");
exports.SkillsRouter = (0, express_1.Router)();
exports.SkillsRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validateSkillsSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { preferred_programming_language, experience, disability, user_id } = req.body;
        const skills = yield (0, Skills_repo_1.createSkills)({
            preferred_programming_language,
            experience,
            disability,
            user_id,
        });
        return res.status(200).send({ skills });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.SkillsRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const skills = yield (0, Skills_repo_1.getSkills)(Number(id));
        return res.status(200).send({ skills });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.SkillsRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualId = req.params.id;
        const { preferred_programming_language, experience, disability, user_id } = req.body;
        const skills = yield (0, Skills_repo_1.updateSkills)({
            preferred_programming_language,
            experience,
            disability,
            user_id,
        }, actualId);
        return res.status(200).send({ skills });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.SkillsRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const skills = yield (0, Skills_repo_1.deleteSkills)(id);
        return res.status(200).send({ skills });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
