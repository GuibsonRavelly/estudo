//c00fb0ec61f889a86bf25c0f559bc282
// Base da URL; https://api.themoviedb.org/3/

import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;