import { Sequelize } from "sequelize";
import { setupPersonalInfo } from "../models/PersonalInfo";
import { setupAddress } from "../models/Address";
import { setupAddressExtraInfo } from "../models/AddressExtraInfo";
import { setupGovernmentInfo } from "../models/GovernmentInfo";
import { setupProfile } from "../models/Profile";
import { setupAcademicInfo } from "../models/AcademicInfo";
import { setupFormalEducationInfo } from "../models/FormalEducationInfo";
import { setupScholarshipInfo } from "../models/ScholarshipInfo";
import { setupBankAccountInfo } from "../models/BankAccountInfo";
import { setupSkills } from "../models/Skills";
import { setupUser } from "../models/User";
import { setupApiResponse } from "../models/ApiResponse";

export let sequelize: Sequelize;

export const startDB = async (url: string): Promise<Sequelize> => {
  sequelize = new Sequelize(url);
  setupPersonalInfo(sequelize);
  setupAddress(sequelize);
  setupAddressExtraInfo(sequelize);
  setupGovernmentInfo(sequelize);
  setupProfile(sequelize);
  setupAcademicInfo(sequelize);
  setupFormalEducationInfo(sequelize);
  setupScholarshipInfo(sequelize);
  setupBankAccountInfo(sequelize);
  setupSkills(sequelize);
  setupUser(sequelize);
  setupApiResponse(sequelize);
  return sequelize;
};
