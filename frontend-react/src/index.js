import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";

const intercept = () => {
    axios.interceptors.request.use(req => {
        req.headers['X-Requested-With'] = 'XMLHttpRequest';
        return req;
    }, error => {
        return Promise.reject(error);
    });
}
intercept();

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
