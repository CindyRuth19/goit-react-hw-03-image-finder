import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43179961-2576e9622a291de547c0fc184';

export const getAPI = async (query, page) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url);

  return response.data;
};
