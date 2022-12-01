import UserType from './UserType';

export default interface UserDTO {
  id: number;
  name: string;
  email: string;
  userType: UserType;
  profileSettings: { [key: string]: string };
}
