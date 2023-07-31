import axios from './axiosConfig.js';

export const profileCompanyRequest = async () => await axios.get('/profile/company');
export const profileCandidateRequest = async () => await axios.get('/profile/candidate');