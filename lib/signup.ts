import UserCreatedDTO from '../types/UserCreatedDTO';
import UserType from '../types/UserType';
import backendFetch from './backendFetch';
import signin from './signin';

export interface SignupOptions {
  email: string;
  password: string;
  username: string;
  type: UserType;
}

export default async function signup({
  email,
  password,
  username,
  type,
}: SignupOptions): Promise<UserCreatedDTO> {
  const response = await backendFetch<UserCreatedDTO>('POST', 'users/', {
    email,
    password,
    username,
    type,
  });

  await signin(username, password);

  return response;
}
