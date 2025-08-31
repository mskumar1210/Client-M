import axios from 'axios';
const API = axios.create({
    baseURL: 'https://serverm-anx3.onrender.com/api',
    withCredentials:true,



});

export default API;