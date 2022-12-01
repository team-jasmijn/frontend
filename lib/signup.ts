import UserCreatedDTO from '../types/UserCreatedDTO';
import UserType from '../types/UserType';
import backendFetch from './backendFetch';
import signin from './signin';

export interface SignupOptions {
  email: string;
  password: string;
  repeatPassword: string;
  username: string;
  type: UserType;
}

export default async function signup({
  email,
  password,
  repeatPassword,
  username,
  type,
}: SignupOptions): Promise<void> {
  await backendFetch<null>('POST', 'account/register-company', {
    email,
    password,
    repeatPassword,
    username,
    type,
  });

  await signin(email, password);
}
