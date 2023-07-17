import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api/', // Замените на ваш базовый URL сервера
  headers: {
    'Content-Type': 'application/json',
    // Другие заголовки, если необходимо
  },
});

export default api;
