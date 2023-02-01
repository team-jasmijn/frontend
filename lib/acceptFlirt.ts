import backendFetch from './backendFetch';

export default async function acceptFlirt(flirtId: number): Promise<void> {
  await backendFetch('POST', `flirts/${flirtId}/accept`, {});
}
