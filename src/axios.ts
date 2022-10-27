import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

// const response = instance.get(`users/${username}`);
export default instance;