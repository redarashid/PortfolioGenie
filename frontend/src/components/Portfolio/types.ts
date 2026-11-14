export type SkillCategoryId = "languages" | "frameworks" | "tools" | "soft";

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  country: string;
}

export interface AboutInfo {
  summary: string;
  objective: string;
}

export type Skills = Record<SkillCategoryId, string[]>;

export type EmploymentType =
  | ""
  | "Full-time"
  | "Part-time"
  | "Internship"
  | "Freelance"
  | "Contract"
  | "Temporary";

export interface WorkExperience {
  id: string;
  jobTitle: string;
  companyName: string;
  employmentType: EmploymentType;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  fieldOfStudy: string;
  startYear: string;
  graduationYear: string;
  description: string;
}
export interface SocialLinks {
  github: string;
  linkedin: string;
  website: string;
  behance: string;
}

export interface PortfolioDraft {
  personal: PersonalInfo;
  about: AboutInfo;
  skills: Skills;
  experiences: WorkExperience[];
  education: Education[];
  socialLinks: SocialLinks;
}

export type FormErrors = Partial<
  Record<"fullName" | "title" | "email" | "summary", string>
>;
