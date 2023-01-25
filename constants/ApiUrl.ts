//@ts-expect-error - this is a hack to get the environment variables to work
import { API_URL } from '@env';

let ApiUrl = API_URL;

if (!ApiUrl) {
  ApiUrl = 'https://oneplace-frontend.roboco.dev/';
  console.warn('API_URL environment variable not set. Defaulting to', ApiUrl);
}

if (ApiUrl.slice(-1) !== '/')
  throw new Error(
    'API_URL environment variable must end with a slash. Please update your environment.'
  );
console.log('fetching from ', ApiUrl);
export default ApiUrl;
