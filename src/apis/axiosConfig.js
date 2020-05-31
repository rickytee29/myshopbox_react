import axios from 'axios';

const axiosConfig = () => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;

  console.log('AXIOS CONFIGURATION SET: ');
};
export default axiosConfig;
