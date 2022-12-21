//@ts-expect-error
import { API_URL } from '@env';

if (API_URL.slice(-1) !== '/')
  throw new Error(
    'API_URL environment variable must end with a slash. Please update your environment.'
  );
console.log('fetching from ', API_URL);
export default API_URL;
