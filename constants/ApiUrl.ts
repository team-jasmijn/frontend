const ApiUrl = process.env.API_URL || 'http://localhost:8000/';

// If last character is not a slash, raise an error
if (ApiUrl.slice(-1) !== '/')
  throw new Error(
    'API_URL environment variable must end with a slash. Please update your environment.'
  );

export default ApiUrl;
