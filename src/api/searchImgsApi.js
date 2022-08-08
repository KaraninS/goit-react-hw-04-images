import axios from 'axios';

const API_KEY = '27862087-edc264b2265208386e6abd16d';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const searchByName = async (searchQuery, page) => {
  return await axios.get(`?q=${searchQuery}&page=${page}&key=${API_KEY}`);
}