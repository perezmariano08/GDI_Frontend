import axios from 'axios';

const api = axios.create({
    // baseURL: "http://localhost:3001/api",
    baseURL: "https://apigolesdeinstituto.vercel.app/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
