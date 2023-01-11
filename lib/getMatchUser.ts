import backendFetch from "./backendFetch";
import Company from "../types/Company";

export default async function getMatchUser(): Promise<Company> {

  let profileData = await backendFetch<Company>('GET', 'company/match') // returns 'random' company

  return {
    name: profileData.name,
    email: profileData.email,
  }


}
