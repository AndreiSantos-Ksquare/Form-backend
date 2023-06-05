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
exports.startDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const PersonalInfo_1 = require("../models/PersonalInfo");
const Address_1 = require("../models/Address");
const AddressExtraInfo_1 = require("../models/AddressExtraInfo");
const GovernmentInfo_1 = require("../models/GovernmentInfo");
const Profile_1 = require("../models/Profile");
const AcademicInfo_1 = require("../models/AcademicInfo");
const FormalEducationInfo_1 = require("../models/FormalEducationInfo");
const ScholarshipInfo_1 = require("../models/ScholarshipInfo");
const BankAccountInfo_1 = require("../models/BankAccountInfo");
const Skills_1 = require("../models/Skills");
const User_1 = require("../models/User");
const ApiResponse_1 = require("../models/ApiResponse");
const startDB = (url) => __awaiter(void 0, void 0, void 0, function* () {
    exports.sequelize = new sequelize_1.Sequelize(url);
    (0, PersonalInfo_1.setupPersonalInfo)(exports.sequelize);
    (0, Address_1.setupAddress)(exports.sequelize);
    (0, AddressExtraInfo_1.setupAddressExtraInfo)(exports.sequelize);
    (0, GovernmentInfo_1.setupGovernmentInfo)(exports.sequelize);
    (0, Profile_1.setupProfile)(exports.sequelize);
    (0, AcademicInfo_1.setupAcademicInfo)(exports.sequelize);
    (0, FormalEducationInfo_1.setupFormalEducationInfo)(exports.sequelize);
    (0, ScholarshipInfo_1.setupScholarshipInfo)(exports.sequelize);
    (0, BankAccountInfo_1.setupBankAccountInfo)(exports.sequelize);
    (0, Skills_1.setupSkills)(exports.sequelize);
    (0, User_1.setupUser)(exports.sequelize);
    (0, ApiResponse_1.setupApiResponse)(exports.sequelize);
    return exports.sequelize;
});
exports.startDB = startDB;
