import axios from './axiosConfig.js';
export const registerCandidateRequest = async (cadidate) => await axios.post('/candidate',cadidate);