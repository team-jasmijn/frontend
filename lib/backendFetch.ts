import ApiUrl from '../constants/ApiUrl';
import BackendError from './backendError';
import getToken from './getToken';

export default async function backendFetch<T>(
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
  endpoint: string,
  data?: any,
  additionalHeaders?: any
): Promise<T | string> {
  const token = await getToken();

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...additionalHeaders,
  };

  const res = await fetch(`${ApiUrl}${endpoint}`, {
    method,
    headers,
    body: JSON.stringify(data),
  });

  let resData = await res.text();

  try {
    resData = JSON.parse(resData);
  } catch (e) {
    // Do nothing, since the response is not JSON
  }

  if (!res.ok) {
    throw new BackendError(resData);
  }

  return resData as T;
}
