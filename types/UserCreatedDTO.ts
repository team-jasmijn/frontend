import UserType from './UserType';

export default interface UserCreatedDTO {
  url: string;
  username: string;
  email: string;
  type: UserType;
}
