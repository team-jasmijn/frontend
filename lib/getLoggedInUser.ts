import backendFetch from './backendFetch';
import User from '../types/User';

export default async function getLoggedInUser(): Promise<User> {
  return (await backendFetch<User>('GET', 'account')) as User;
}
