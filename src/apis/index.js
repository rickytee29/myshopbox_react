import axios from 'axios';

let headers = {
  'Content-Type': 'application/json',
};

export const websourceWorkaround = axios.create({
  baseURL: 'http://gatesolutions.andestt.biz',
  headers: headers,
  //endpoint: '/_junk.php' params: NOT NECESSARY
});

export const websource = axios.create({
  baseURL: 'http://104.248.229.49',
  headers,
  //endpoint: '/api/v1/customer/login?' params: 'account_name', 'password'
});

export const ipapi = axios.create({
  baseURL: 'https://ipapi.co',
  //endpoint is '/json/'
});
