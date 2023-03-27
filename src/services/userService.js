import * as request from './requester';

const baseUrl = 'https://petyadesignstudio-api.onrender.com/users';

export const getOne = (userId) => request.get(`${baseUrl}/${userId}`);

export const edit = (userId, userData) => request.put(`${baseUrl}/${userId}`, userData);