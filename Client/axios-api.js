import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    timeout: 1000,
})

export default getAPI  // Ensure default export
