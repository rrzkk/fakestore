import axios from 'axios';
import { host } from '../config/axiosSetup';


const API = axios.create({
    baseURL: `http://${host}`,
    timeout: 5000
});

//TODO: Implement Interceptors for checking JWT



export default API;
