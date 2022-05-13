import axios from 'axios';

// base url: https://api-ssl.bitly.com/v4/
// key 96a0b44ce91a06398c22782d18b35f3eb4143f9b

export const key = '96a0b44ce91a06398c22782d18b35f3eb4143f9b';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    }
})

export default api;
