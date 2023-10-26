import Request from '@/libs/fetch';

function createService() {
  const defaultConfig = {
    baseURL: process.env.API_BASE_PATH || '',
    timeout: Number(process.env.TIME_OUT || 1000 * 60)
  };
  const request = new Request(defaultConfig);
  return request;
}

export default createService();
