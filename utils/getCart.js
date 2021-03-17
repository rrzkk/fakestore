import API from './api';

export const getCart = async () => {
    return API.get('/').then().catch()
}