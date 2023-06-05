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
exports.PersonalInfoRouter = void 0;
const express_1 = require("express");
const PersonalInfo_repo_1 = require("../repositories/PersonalInfo.repo");
const validations_1 = require("../utils/validations");
exports.PersonalInfoRouter = (0, express_1.Router)();
exports.PersonalInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validatePersonalInfoSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { name, last_name, second_last_name, gender, gender_other, date_of_birth, city_of_birth, state_of_birth, country_of_birth, user_id, } = req.body;
        const personalInfo = yield (0, PersonalInfo_repo_1.createPersonalInfo)({
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
        });
        return res.status(200).send({ personalInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.PersonalInfoRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const personalInfo = yield (0, PersonalInfo_repo_1.getPersonalInfo)(Number(id));
        return res.status(200).send({ personalInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.PersonalInfoRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualId = req.params.id;
        const { name, last_name, second_last_name, gender, gender_other, date_of_birth, city_of_birth, state_of_birth, country_of_birth, user_id, } = req.body;
        const personalInfo = yield (0, PersonalInfo_repo_1.updatePersonalInfo)({
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
        }, actualId);
        return res.status(200).send({ personalInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.PersonalInfoRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const personalInfoDeleted = yield (0, PersonalInfo_repo_1.deletePersonalInfo)(id);
        return res.status(200).send({ personalInfoDeleted });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
