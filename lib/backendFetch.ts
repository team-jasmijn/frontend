import Constants from 'expo-constants';
import BackendError from './backendError';
import getToken from './getToken';

const apiUrl = Constants.expoConfig?.extra?.ApiUrl as string;

export default async function backendFetch<T>(
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
  endpoint: string,
  data?: any,
  additionalHeaders?: any
): Promise<T> {
  let token = await getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...additionalHeaders,
  };

  const res = await fetch(`${apiUrl}${endpoint}`, {
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

  if (resData === 'null') {
    return null as any;
  }

  return resData as T;
}
