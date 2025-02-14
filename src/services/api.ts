// src/services/api.ts
import axios from 'axios';

const apiService = axios.create({
    baseURL: import.meta.env.VITE_PAYPAL_API_BASE_URL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});
 
// Request interceptor
apiService.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Response interceptor
apiService.interceptors.response.use(
    response => response, // Remove .data access here
    error => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default apiService;