import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-cc247.firebaseio.com/'
});

export default instance;