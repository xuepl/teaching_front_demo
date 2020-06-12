import axios from "axios"


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
export const addMessage  = params => { return axios.post('/v01/messages/', params).then(res => res.data); };
