import axios from './axiosConfig.js';

export const registerCompanyRequest = async (company) => await axios.post('/company',company);
export const getCompanyRequest = async (id) => await axios.get(`/company/${id}`);


