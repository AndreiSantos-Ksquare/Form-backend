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
exports.ProfileRouter = void 0;
const express_1 = require("express");
const Profile_repo_1 = require("../repositories/Profile.repo");
const validations_1 = require("../utils/validations");
exports.ProfileRouter = (0, express_1.Router)();
exports.ProfileRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validateProfileSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { phone, country_code, email, alt_email, reference, other_reference, user_id, } = req.body;
        const profile = yield (0, Profile_repo_1.createProfile)({
            phone,
            country_code,
            email,
            alt_email,
            reference,
            other_reference,
            user_id,
        });
        return res.status(200).send({ profile });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.ProfileRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const profile = yield (0, Profile_repo_1.getProfile)(Number(id));
        return res.status(200).send({ profile });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.ProfileRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualId = req.params.id;
        const { phone, country_code, email, alt_email, reference, other_reference, user_id, } = req.body;
        const profile = yield (0, Profile_repo_1.updateProfile)({
            phone,
            country_code,
            email,
            alt_email,
            reference,
            other_reference,
            user_id,
        }, actualId);
        return res.status(200).send({ profile });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.ProfileRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const profile = yield (0, Profile_repo_1.deleteProfile)(id);
        return res.status(200).send({ profile });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
