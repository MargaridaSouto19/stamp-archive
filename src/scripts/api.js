import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'http://stamparchive.local/wp-json/wp/v2',
  timeout: 150 * 1000,
});
const api = {
  getPosts(query) {
    return axiosInstance.get('/posts' + query);
  },
  getMedia(query) {
    return axiosInstance.get('/media' + query);
  },
};
export default api;
