import ApiUrl from '../constants/ApiUrl';

export class BackendError extends Error {
  constructor(message: { [key: string]: string[] }) {
    super(JSON.stringify(message));
    this.name = 'BackendError';
  }
}

export default async function backendFetch<T>(
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
  endpoint: string,
  data?: any,
  additionalHeaders?: any
) {
  const headers = {
    'Content-Type': 'application/json',
    ...additionalHeaders,
  };

  const res = await fetch(`${ApiUrl}${endpoint}`, {
    method,
    headers,
    body: JSON.stringify(data),
  });

  const resData = await res.json();

  if (!res.ok) {
    throw new BackendError(resData);
  }

  return resData as T;
}
