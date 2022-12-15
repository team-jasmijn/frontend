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
  console.log('token2', token);

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

  let resText = await res.text();
  let resData: T | string;

  try {
    resData = JSON.parse(resText);
  } catch (e) {
    resData = resText;
  }

  if (!res.ok) {
    throw new BackendError(resData as BackendErrors);
  }

  return resData as T;
}
