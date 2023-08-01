import axios from './axiosConfig.js';
export const registerRequest = async (user) => await axios.post('/auth/register',user);

export const loginRequest = async (user) => await axios.post('/auth/login',user);
export const logoutRequest = async () => await axios.post('/auth/logout');

export const verifyTokenRequest = async () => await axios.get('/auth/verify-token')
export const verifyEmailRequest = async (email) => await axios.post('/auth/email-verify',email)

// Ruta para obtener el usuario completo
export const  getUserRequest = async () => await axios.get('/auth/user')