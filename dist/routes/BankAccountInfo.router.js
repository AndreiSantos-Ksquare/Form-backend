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
exports.BankAccountInfoRouter = void 0;
const express_1 = require("express");
const BankAccountInfo_repo_1 = require("../repositories/BankAccountInfo.repo");
const validations_1 = require("../utils/validations");
exports.BankAccountInfoRouter = (0, express_1.Router)();
exports.BankAccountInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validateBankAccountInfoSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { acc_number, clabe, bank, user_id } = req.body;
        const bankAccountInfo = yield (0, BankAccountInfo_repo_1.createBankAccountInfo)({
            acc_number,
            clabe,
            bank,
            user_id,
        });
        return res.status(200).send({ bankAccountInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.BankAccountInfoRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const bankAccountInfo = yield (0, BankAccountInfo_repo_1.getBankAccountInfo)(Number(id));
        return res.status(200).send({ bankAccountInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.BankAccountInfoRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualId = req.params.id;
        const { acc_number, clabe, bank, user_id } = req.body;
        const bankAccountInfo = yield (0, BankAccountInfo_repo_1.updateBankAccountInfo)({
            acc_number,
            clabe,
            bank,
            user_id,
        }, actualId);
        return res.status(200).send({ bankAccountInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.BankAccountInfoRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const bankAccountInfo = yield (0, BankAccountInfo_repo_1.deleteBankAccountInfo)(id);
        return res.status(200).send({ bankAccountInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
