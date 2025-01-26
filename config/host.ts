const isDev = process.env.APP_MODE === 'development';

const host = isDev ? 'http://localhost:3000/' : 'http://localhost:3000/';

export default host;
