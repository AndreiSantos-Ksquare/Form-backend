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
exports.AddressExtraInfoRouter = void 0;
const express_1 = require("express");
const AddressExtraInfo_repo_1 = require("../repositories/AddressExtraInfo.repo");
const validations_1 = require("../utils/validations");
exports.AddressExtraInfoRouter = (0, express_1.Router)();
exports.AddressExtraInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validateAddressExtraInfoSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { type_of_residency, other_residency, people, address_id } = req.body;
        const addressExtraInfo = yield (0, AddressExtraInfo_repo_1.createAddressExtraInfo)({
            type_of_residency,
            other_residency,
            people,
            address_id,
        });
        return res.status(200).send({ addressExtraInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.AddressExtraInfoRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const addressExtraInfo = yield (0, AddressExtraInfo_repo_1.getAddressExtraInfo)(Number(id));
        return res.status(200).send({ addressExtraInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.AddressExtraInfoRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualId = req.params.id;
        const { type_of_residency, other_residency, people, address_id } = req.body;
        const addressExtraInfo = yield (0, AddressExtraInfo_repo_1.updateAddressExtraInfo)({
            type_of_residency,
            other_residency,
            people,
            address_id,
        }, actualId);
        return res.status(200).send({ addressExtraInfo });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.AddressExtraInfoRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const addressExtraInfoDeleted = yield (0, AddressExtraInfo_repo_1.deleteAddressExtraInfo)(id);
        return res.status(200).send({ addressExtraInfoDeleted });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
