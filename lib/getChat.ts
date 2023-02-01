import backendFetch from './backendFetch';
import Chat from '../types/Chat';

export default async function getChat(id: number): Promise<Chat | null> {
  return await backendFetch<Chat>('GET', `chat/${id}`);
}
