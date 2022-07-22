import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:5000/',
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `bearer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost,
}