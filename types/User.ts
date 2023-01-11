import Role from './Role';

export default interface User {
  education: string;
  educationLevel: string;
  skills: string;
  goals: string;
  name: string;
  email: string;
  role: Role;
  id?: number;
  approved?: boolean;
}
