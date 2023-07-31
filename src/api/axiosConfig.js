import axios from "axios";

const newInstance = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true
})

export default newInstance