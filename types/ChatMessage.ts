import Chat from './Chat';
import User from './User';

export default interface ChatMessage {
  id: number;
  createDate: Date;
  modifyDate?: Date;
  chatId: number;
  chat: Chat;
  senderId: number;
  sender: User;
  message: string;
}
