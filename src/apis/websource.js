import axios from 'axios';

export default axios.create({
  baseURL: 'http://104.248.229.49',
  //endpoint: '/api/v1/customer/login?' params: 'account_name', 'password'
});
