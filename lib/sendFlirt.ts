import backendFetch from './backendFetch';

export default async function sendFlirt(companyId: number): Promise<void> {
  await backendFetch('POST', 'flirts/', {
    companyId: companyId,
  });
}
