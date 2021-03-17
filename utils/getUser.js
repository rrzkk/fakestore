import API from './api';

export const getUser=async()=>{
    return API.get('/').then().catch()
}