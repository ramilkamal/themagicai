export type VacancyRequirementTypes = {
  company: string;
  position: string;
  vacancy: {
    one: string;
    other: string;
  };
};

export type PersonalInformationTypes = {
  grade: string;
  skills: string[];
  info: {
    summary: string;
    yourself: string;
    experience: string;
    education: string;
    licenses: string;
    sertifications: string;
    other: string;
  };
};

export type ResultTypes = (VacancyRequirementTypes &
  PersonalInformationTypes) & {
  VacancyRequirement: VacancyRequirementTypes;
  PersonalInformation: PersonalInformationTypes;
};
