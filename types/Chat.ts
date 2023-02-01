import ChatMessage from './ChatMessage';
import Company from './Company';
import User from './User';

export default interface Chat {
  id: number;
  createDate: Date;
  modifyDate?: Date;
  companyId: number;
  company: Company;
  studentId: number;
  student: User;
  chatMessages: ChatMessage[];
}
