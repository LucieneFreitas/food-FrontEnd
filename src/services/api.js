import axios from "axios"

export const api = axios.create({
    baseURL: 'https://food-backend03.onrender.com'
})