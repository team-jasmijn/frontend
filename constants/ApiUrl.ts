let API_URL: string;

try {
  API_URL = require('@env').API_URL;
} catch (e) {
  API_URL = 'https://oneplace-frontend.roboco.dev/';
}

if (API_URL.slice(-1) !== '/')
  throw new Error(
    'API_URL environment variable must end with a slash. Please update your environment.'
  );
console.log('fetching from ', API_URL);
export default API_URL;
