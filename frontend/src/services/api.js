import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// Attach JWT token to all requests if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth endpoints
export const registerUser = ({ nome, email, senha }) =>
  api.post('/register', { nome, email, senha }).then(r => r.data);

export const loginUser = ({ email, senha }) =>
  api.post('/login', { email, senha }).then(r => r.data);

export const getProfile = () =>
  api.get('/profile').then(r => r.data);

export const createPalette = (prompt) =>
  api.post('/palette', { prompt }).then(r => r.data);

export const listPalettes = () =>
  api.get('/palettes').then(r => r.data);

export const getPalette = (id) =>
  api.get(`/palette/${id}`).then(r => r.data);

export const updatePalette = (id, payload) =>
  api.put(`/palette/${id}`, payload).then(r => r.data);

export const deletePalette = (id) =>
  api.delete(`/palette/${id}`);
