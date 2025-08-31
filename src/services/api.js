import axios from 'axios';
const API = axios.create({
    baseURL: 'https://bookingsystem-server-xydx.onrender.com/api',
    withCredentials:true,



});

export default API;