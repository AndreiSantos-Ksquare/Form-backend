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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressExtraInfo = exports.updateAddressExtraInfo = exports.getAddressExtraInfo = exports.createAddressExtraInfo = void 0;
const AddressExtraInfo_1 = __importDefault(require("../models/AddressExtraInfo"));
const createAddressExtraInfo = ({ type_of_residency, other_residency, people, address_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [response, created] = yield AddressExtraInfo_1.default.findOrCreate({
            where: { address_id: address_id },
            defaults: {
                type_of_residency,
                other_residency,
                people,
                address_id,
            },
        });
        return {
            status: "Ok",
            message: "successful operation",
            response,
        };
    }
    catch (error) {
        return {
            status: "Error",
            message: error,
        };
    }
});
exports.createAddressExtraInfo = createAddressExtraInfo;
const getAddressExtraInfo = (address_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AddressExtraInfo_1.default.findOne({
            where: { address_id: address_id },
        });
        return {
            status: "Ok",
            message: "successful operation",
            response,
        };
    }
    catch (error) {
        return {
            status: "Error",
            message: error,
        };
    }
});
exports.getAddressExtraInfo = getAddressExtraInfo;
const updateAddressExtraInfo = ({ type_of_residency, other_residency, people, address_id }, actualId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield AddressExtraInfo_1.default.update({
            type_of_residency,
            other_residency,
            people,
            address_id,
        }, { where: { address_id: actualId } });
        return {
            status: "Ok",
            message: "successful operation",
            affectedCount,
        };
    }
    catch (error) {
        return {
            status: "Error",
            message: error,
        };
    }
});
exports.updateAddressExtraInfo = updateAddressExtraInfo;
const deleteAddressExtraInfo = (address_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AddressExtraInfo_1.default.destroy({
            where: { address_id: address_id },
        });
        return {
            status: "Ok",
            message: "successful operation",
            response,
        };
    }
    catch (error) {
        return {
            status: "Error",
            message: error,
        };
    }
});
exports.deleteAddressExtraInfo = deleteAddressExtraInfo;
