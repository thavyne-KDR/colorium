import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

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
