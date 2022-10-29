import axios from 'axios';

export const api = axios.create({
    baseURL: "https://daily-planner-pos.vercel.app/api/"
    // baseURL: "https://daily-planner-pos.vercel.app/api"
})