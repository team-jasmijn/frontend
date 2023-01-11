export interface ProfileSetting {
  description: string;
  education: string;
  goals: string;
  experience: string;
  school: string;
  eductionLevel: string;
}
export default interface Student {
  name: string;
  profileSettings: ProfileSetting;
}
