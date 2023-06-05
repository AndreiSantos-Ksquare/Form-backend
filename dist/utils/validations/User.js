"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const validateUserSchema = (user) => {
    const userPostSchema = joi_1.default.object({
        username: joi_1.default.string().required(),
        firstname: joi_1.default.string(),
        lastname: joi_1.default.string(),
        email: joi_1.default.string().email(),
        phone: joi_1.default.string(),
    });
    return userPostSchema.validate(user);
};
exports.validateUserSchema = validateUserSchema;
