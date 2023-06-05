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
exports.AddressRouter = void 0;
const express_1 = require("express");
const Address_repo_1 = require("../repositories/Address.repo");
const validations_1 = require("../utils/validations");
exports.AddressRouter = (0, express_1.Router)();
exports.AddressRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = (0, validations_1.validateAddressSchema)(req.body);
        if (valid["error"]) {
            return res.status(400).send({
                status: "Error",
                error: valid.error,
            });
        }
        const { street, in_between_street_a, in_between_street_b, city, state, country, zip, proof_of_address, user_id, } = req.body;
        const address = yield (0, Address_repo_1.createAddress)({
            street,
            in_between_street_a,
            in_between_street_b,
            city,
            state,
            country,
            zip,
            proof_of_address,
            user_id,
        });
        return res.status(200).send({ address });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.AddressRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const address = yield (0, Address_repo_1.getAddress)(Number(id));
        return res.status(200).send({ address });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.AddressRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualId = req.params.id;
        const { street, in_between_street_a, in_between_street_b, city, state, country, zip, proof_of_address, user_id, } = req.body;
        const address = yield (0, Address_repo_1.updateAddress)({
            street,
            in_between_street_a,
            in_between_street_b,
            city,
            state,
            country,
            zip,
            proof_of_address,
            user_id,
        }, actualId);
        return res.status(200).send({ address });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
exports.AddressRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const addressDeleted = yield (0, Address_repo_1.deleteAddress)(id);
        return res.status(200).send({ addressDeleted });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: error,
        });
    }
}));
