import { Router } from "express";
import { validateId } from "../utils/utils";

import { UserRouter } from "./User.router";
import { PersonalInfoRouter } from "./PersonalInfo.router";
import { AddressRouter } from "./Address.router";
import { AddressExtraInfoRouter } from "./AddressExtraInfo.router";
import { GovernmentInfoRouter } from "./GovernmentInfo.router";
import { ProfileRouter } from "./Profile.router";
import { AcademicInfoRouter } from "./AcademicInfo.router";
import { FormalEducationInfoRouter } from "./FormalEducationInfo.router";
import { ScholarshipInfoRouter } from "./ScholarshipInfo.router";
import { BankAccountInfoRouter } from "./BankAccountInfo.router";
import { SkillsRouter } from "./Skills.router";

const APIRouter = Router();

APIRouter.use("/user", UserRouter);
APIRouter.use("/personalInfo", validateId, PersonalInfoRouter);
APIRouter.use("/address", validateId, AddressRouter);
APIRouter.use("/addressExtraInfo", validateId, AddressExtraInfoRouter);
APIRouter.use("/governmentInfo", validateId, GovernmentInfoRouter);
APIRouter.use("/profile", validateId, ProfileRouter);
APIRouter.use("/academicInfo", validateId, AcademicInfoRouter);
APIRouter.use("/formalEducationInfo", validateId, FormalEducationInfoRouter);
APIRouter.use("/scholarshipInfo", validateId, ScholarshipInfoRouter);
APIRouter.use("/bankAccountInfo", validateId, BankAccountInfoRouter);
APIRouter.use("/skills", validateId, SkillsRouter);

export default APIRouter;
