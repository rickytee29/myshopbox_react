import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  //endpoints: '/posts' '/users' '/photos' '/comments'
});
