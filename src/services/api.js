import axios from 'axios';
import {isAuthenticated, getUserData} from './auth'

const api = axios.create({
    baseURL: 'http://192.168.2.13:3030',
    headers: { 'Authorization' : `Bearer ${isAuthenticated() ? JSON.parse(getUserData()).token : ""}` }
});

export default api;