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
  if (type === UserType.Business) {
    await backendFetch<null>('POST', 'account/register-company', {
      email,
      password,
      repeatPassword,
      companyName: username,
      type,
    });
  } else if (type === UserType.Student) {
    await backendFetch<UserCreatedDTO>('POST', 'account/register-student', {
      email,
      password,
      repeatPassword,
      username,
      type,
    });
  } else {
    throw new Error('Invalid user type');
  }

  await signin(email, password);
}
