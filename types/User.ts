export default interface User {
  education: string;
  educationLevel: string;
  skills: string;
  goals: string;
  name: string;
  email: string;
  role?: 'Moderator' | 'Company' | 'Student';
  id?: number;
  approved?: boolean;
}
