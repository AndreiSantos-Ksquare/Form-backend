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
exports.UserRouter = void 0;
const express_1 = require("express");
const User_repo_1 = require("../repositories/User.repo");
const validations_1 = require("../utils/validations");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validateUserSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { username, firstname, lastname, email, phone } = req.body;
        const user = yield (0, User_repo_1.createUser)({
            username,
            firstname,
            lastname,
            email,
            phone,
        });
        return res.status(200).send({ user });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.UserRouter.get("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.params;
        const user = yield (0, User_repo_1.getUser)(username);
        return res.status(200).send({ user });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.UserRouter.put("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualUsername = req.params.username;
        const valid = (0, validations_1.validateUserSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { username, firstname, lastname, email, phone } = req.body;
        const user = yield (0, User_repo_1.updateUser)({
            username,
            firstname,
            lastname,
            email,
            phone,
        }, actualUsername);
        return res.status(200).send({ user });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.UserRouter.delete("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.params;
        const usersDeleted = yield (0, User_repo_1.deleteUser)(username);
        return res.status(200).send({ usersDeleted });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
