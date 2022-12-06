import CONFIG from './config';

const API_ENDPOINT = {
  ALL_RESTO: `${CONFIG.URL}list`,
  REVIEW: `${CONFIG.URL}review`,
  DETAIL_RESTO: (id) => `${CONFIG.URL}detail/${id}`,
};

export default API_ENDPOINT;
