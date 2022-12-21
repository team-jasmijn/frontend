export default interface User {
  education: string;
  educationLevel: string;
  skills: string;
  goals: string;
  name: string;
  email: string;
  isAdmin?: boolean;
  id?: number;
  approved?: boolean;
}
