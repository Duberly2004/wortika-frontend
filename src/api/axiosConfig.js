import axios from "axios";

const newInstance = axios.create({
    baseURL: "https://wortika-backend.onrender.com/api",
    withCredentials: true
})

export default newInstance