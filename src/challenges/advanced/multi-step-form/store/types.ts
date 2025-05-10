// Shared types used across slices
export interface PersonalInfoData {
  name: string;
  email: string;
  phone: string;
}

export interface Errors {
  errorName: boolean;
  errorEmail: boolean;
  errorPhone: boolean;
}

export interface UserPlan {
  userPlanTitle: string;
  userPlanPrice: number;
}

export interface AddOn {
  addOnTitle: string;
  addOnText: string;
  addOnPrice: number;
  addOnStatus: boolean;
}