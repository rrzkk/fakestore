import API from './api';

export const getProduct =async()=>{
    return API.get('/').then().catch()
}