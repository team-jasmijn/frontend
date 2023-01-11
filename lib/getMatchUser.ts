import User from '../types/User';

export default async function getMatchUser(): Promise<User> {
  return {
    id: 1,
    name: 'John Doe',
    email: 'gaming@gaming.co.uk',
    education: 'University',
    educationLevel: "What's a school?",
    goals: 'I wanna be cool',
    skills: 'programming!!',
  };
}
