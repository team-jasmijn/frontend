import ChatMessage from './ChatMessage';
import Company from './Company';
import User from './User';

export default interface Chat {
  Id: number;
  CreateDate: Date;
  ModifyDate?: Date;
  CompanyId: number;
  Company: Company;
  StudentId: number;
  Student: User;
  ChatMessages: ChatMessage[];
}
