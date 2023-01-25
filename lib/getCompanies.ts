import backendFetch from './backendFetch';
import User from '../types/User';

export default function getCompanies() {
  return backendFetch<User[]>('GET', 'company');
}
