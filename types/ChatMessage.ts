import Chat from "./Chat";
import User from "./User";

export default interface ChatMessage {
  Id: Number;
  CreateDate: Date;
  ModifyDate?: Date;
  ChatId: Number;
  Chat: Chat;
  SenderId: number;
  Sender: User;
  Message: string;
}
