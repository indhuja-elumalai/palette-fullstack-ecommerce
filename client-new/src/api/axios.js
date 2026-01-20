import axios from 'axios';

// This centralizes your API calls so you don't have to type the 
// URL and headers in every single component.
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5050/api',
});

// This "Interceptor" automatically attaches your JWT token from 
// Issue 5 to every request you make in Issue 6 and 7.
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export default API;