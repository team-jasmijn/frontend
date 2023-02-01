import backendFetch from './backendFetch';

export default function sendChatMessage(
  chatId: number,
  message: string
): Promise<void> {
  return backendFetch('POST', `chat/${chatId}/message`, { message });
}
