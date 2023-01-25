import backendFetch from './backendFetch';

export default async function acceptFlirt(flirtId: number): Promise<void> {
  console.log('flirtid', flirtId);
  await backendFetch('POST', `flirts/${flirtId}/accept`, {});
}
