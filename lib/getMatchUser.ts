import backendFetch from './backendFetch';
import Company from '../types/Company';

export default async function getMatchUser(): Promise<Company | null> {
  let profileData = await backendFetch<Company | null>('GET', 'company/match'); // returns 'random' company

  if (!profileData) return null;

  return {
    name: profileData.name,
    email: profileData.email,
    id: profileData.id,
  };
}
