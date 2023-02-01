import backendFetch from './backendFetch';
import Chat from '../types/Chat';

export default async function getChats(): Promise<Chat[] | null> {
  return await backendFetch<Chat[]>('GET', 'chat/'); // returns Chats
}
