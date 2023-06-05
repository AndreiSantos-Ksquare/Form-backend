import Joi from "joi";
import {
  IUser,
  IPersonalInfo,
  IAddress,
  IProfile,
  IAddressExtraInfo,
  IGovernmentInfo,
  IAcademicInfo,
  IScholarshipInfo,
  IBankAccountInfo,
  ISkills,
  IFormalEducationInfo,
} from "../interfaces";

export const validateUserSchema = (data: IUser) => {
  const schema = Joi.object<IUser>({
    username: Joi.string().required(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string(),
  });

  return schema.validate(data);
};

export const validatePersonalInfoSchema = (data: IPersonalInfo) => {
  const schema = Joi.object<IPersonalInfo>({
    name: Joi.string(),
    last_name: Joi.string(),
    second_last_name: Joi.string(),
    gender: Joi.string(),
    gender_other: Joi.string(),
    date_of_birth: Joi.string(),
    city_of_birth: Joi.string(),
    state_of_birth: Joi.string(),
    country_of_birth: Joi.string(),
    user_id: Joi.number().required(),
  });

  return schema.validate(data);
};

export const validateAddressSchema = (data: IAddress) => {
  const schema = Joi.object<IAddress>({
    street: Joi.string(),
    in_between_street_a: Joi.string(),
    in_between_street_b: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
    zip: Joi.string(),
    proof_of_address: Joi.string(),
    user_id: Joi.number().required(),
  });

  return schema.validate(data);
};

export const validateAddressExtraInfoSchema = (data: IAddressExtraInfo) => {
  const schema = Joi.object<IAddressExtraInfo>({
    type_of_residency: Joi.string(),
    other_residency: Joi.string(),
    people: Joi.string(),
    address_id: Joi.number().required(),
  });

  return schema.validate(data);
};

export const validateGovernmentInfoSchema = (data: IGovernmentInfo) => {
  const schema = Joi.object<IGovernmentInfo>({
    CURP: Joi.string(),
    identification_number: Joi.string(),
    user_id: Joi.number().required(),
  });

  return schema.validate(data);
};

export const validateProfileSchema = (data: IProfile) => {
  const schema = Joi.object<IProfile>({
    phone: Joi.string(),
    country_code: Joi.string(),
    email: Joi.string().email(),
    alt_email: Joi.string().email(),
    reference: Joi.string(),
    other_reference: Joi.string(),
    user_id: Joi.number().required(),
  });

  return schema.validate(data);
};

export const validateAcademicInfoSchema = (data: IAcademicInfo) => {
  const schema = Joi.object<IAcademicInfo>({
    software_devel_comments: Joi.string(),
    degree_level: Joi.string(),
    informal_education: Joi.string(),
    other_education: Joi.string(),
    user_id: Joi.number().required(),
  });

  return schema.validate(data);
};

export const validateFormalEducationInfoSchema = (
  data: IFormalEducationInfo
) => {
  const schema = Joi.object<IFormalEducationInfo>({
    university_name: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
    career_name: Joi.string(),
    classes_completed: Joi.boolean(),
    proof_classes_completed: Joi.string(),
    degree_completed: Joi.boolean(),
    proof_degree_completed: Joi.string(),
    license_completed: Joi.boolean(),
    proof_license_completed: Joi.string(),
    user_id: Joi.number().required(),
  });

  return schema.validate(data);
};

export const validateScholarshipInfoSchema = (data: IScholarshipInfo) => {
  const schema = Joi.object<IScholarshipInfo>({
    level: Joi.string(),
    kind: Joi.string(),
    period: Joi.number(),
    user_id: Joi.number().required(),
  });

  return schema.validate(data);
};

export const validateBankAccountInfoSchema = (data: IBankAccountInfo) => {
  const schema = Joi.object<IBankAccountInfo>({
    acc_number: Joi.number(),
    clabe: Joi.number(),
    bank: Joi.string(),
    user_id: Joi.number().required(),
  });

  return schema.validate(data);
};

export const validateSkillsSchema = (data: ISkills) => {
  const schema = Joi.object<ISkills>({
    preferred_programming_language: Joi.string(),
    experience: Joi.string(),
    disability: Joi.string(),
    user_id: Joi.number().required(),
  });

  return schema.validate(data);
};
