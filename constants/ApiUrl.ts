import { API_URL } from '@env';

let ApiEnv;

if ({ API_URL } == undefined) {
  ApiEnv = 'https://bami-backend.preview.marnixah.com/';
} else {
  ApiEnv = { API_URL }.API_URL;
}

const ApiUrl = ApiEnv.toString();

if (ApiUrl.slice(-1) !== '/')
  throw new Error(
    'API_URL environment variable must end with a slash. Please update your environment.'
  );

// If last character is not a slash, raise an error

export default ApiUrl;
