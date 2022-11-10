//@ts-expect-error
import { API_URL } from '@env';

let ApiEnv;

if (API_URL == undefined) {
  ApiEnv = 'https://bami-backend.preview.marnixah.com/';
} else {
  ApiEnv = API_URL;
}

const ApiUrl = ApiEnv


if (ApiUrl.slice(-1) !== '/')
  throw new Error(
    'API_URL environment variable must end with a slash. Please update your environment.'
  );

export default ApiUrl;
