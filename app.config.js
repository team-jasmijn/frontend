require('dotenv').config();

const apiUrl = process.env.API_URL;

if (typeof apiUrl !== 'string') {
  throw new Error('ApiUrl is not defined in app.json');
}

if (!apiUrl.startsWith('http')) {
  throw new Error('ApiUrl must start with http or https');
}

if (!apiUrl.endsWith('/')) {
  throw new Error('ApiUrl must end with a /');
}

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      apiUrl,
    },
  };
};
