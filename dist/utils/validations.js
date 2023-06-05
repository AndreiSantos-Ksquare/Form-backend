"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSkillsSchema = exports.validateBankAccountInfoSchema = exports.validateScholarshipInfoSchema = exports.validateFormalEducationInfoSchema = exports.validateAcademicInfoSchema = exports.validateProfileSchema = exports.validateGovernmentInfoSchema = exports.validateAddressExtraInfoSchema = exports.validateAddressSchema = exports.validatePersonalInfoSchema = exports.validateUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const validateUserSchema = (data) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string().required(),
        firstname: joi_1.default.string(),
        lastname: joi_1.default.string(),
        email: joi_1.default.string().email(),
        phone: joi_1.default.string(),
    });
    return schema.validate(data);
};
exports.validateUserSchema = validateUserSchema;
const validatePersonalInfoSchema = (data) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string(),
        last_name: joi_1.default.string(),
        second_last_name: joi_1.default.string(),
        gender: joi_1.default.string(),
        gender_other: joi_1.default.string(),
        date_of_birth: joi_1.default.string(),
        city_of_birth: joi_1.default.string(),
        state_of_birth: joi_1.default.string(),
        country_of_birth: joi_1.default.string(),
        user_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validatePersonalInfoSchema = validatePersonalInfoSchema;
const validateAddressSchema = (data) => {
    const schema = joi_1.default.object({
        street: joi_1.default.string(),
        in_between_street_a: joi_1.default.string(),
        in_between_street_b: joi_1.default.string(),
        city: joi_1.default.string(),
        state: joi_1.default.string(),
        country: joi_1.default.string(),
        zip: joi_1.default.string(),
        proof_of_address: joi_1.default.string(),
        user_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validateAddressSchema = validateAddressSchema;
const validateAddressExtraInfoSchema = (data) => {
    const schema = joi_1.default.object({
        type_of_residency: joi_1.default.string(),
        other_residency: joi_1.default.string(),
        people: joi_1.default.string(),
        address_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validateAddressExtraInfoSchema = validateAddressExtraInfoSchema;
const validateGovernmentInfoSchema = (data) => {
    const schema = joi_1.default.object({
        CURP: joi_1.default.string(),
        identification_number: joi_1.default.string(),
        user_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validateGovernmentInfoSchema = validateGovernmentInfoSchema;
const validateProfileSchema = (data) => {
    const schema = joi_1.default.object({
        phone: joi_1.default.string(),
        country_code: joi_1.default.string(),
        email: joi_1.default.string().email(),
        alt_email: joi_1.default.string().email(),
        reference: joi_1.default.string(),
        other_reference: joi_1.default.string(),
        user_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validateProfileSchema = validateProfileSchema;
const validateAcademicInfoSchema = (data) => {
    const schema = joi_1.default.object({
        software_devel_comments: joi_1.default.string(),
        degree_level: joi_1.default.string(),
        informal_education: joi_1.default.string(),
        other_education: joi_1.default.string(),
        user_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validateAcademicInfoSchema = validateAcademicInfoSchema;
const validateFormalEducationInfoSchema = (data) => {
    const schema = joi_1.default.object({
        university_name: joi_1.default.string(),
        state: joi_1.default.string(),
        country: joi_1.default.number(),
        career_name: joi_1.default.string(),
        classes_completed: joi_1.default.number(),
        proof_classes_completed: joi_1.default.string(),
        degree_completed: joi_1.default.number(),
        proof_degree_completed: joi_1.default.string(),
        license_completed: joi_1.default.number(),
        proof_license_completed: joi_1.default.string(),
        user_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validateFormalEducationInfoSchema = validateFormalEducationInfoSchema;
const validateScholarshipInfoSchema = (data) => {
    const schema = joi_1.default.object({
        level: joi_1.default.string(),
        kind: joi_1.default.string(),
        period: joi_1.default.number(),
        user_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validateScholarshipInfoSchema = validateScholarshipInfoSchema;
const validateBankAccountInfoSchema = (data) => {
    const schema = joi_1.default.object({
        acc_number: joi_1.default.number(),
        clabe: joi_1.default.number(),
        bank: joi_1.default.string(),
        user_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validateBankAccountInfoSchema = validateBankAccountInfoSchema;
const validateSkillsSchema = (data) => {
    const schema = joi_1.default.object({
        preferred_programming_language: joi_1.default.string(),
        experience: joi_1.default.string(),
        disability: joi_1.default.string(),
        user_id: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.validateSkillsSchema = validateSkillsSchema;
