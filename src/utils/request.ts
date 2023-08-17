import axios from 'axios';
import qs from 'qs';

declare module 'axios' {
    export interface AxiosRequestConfig {
        other?: any;
    }
}
const http = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    withCredentials: true
});

// 请求对象  
http.interceptors.request.use(
    config => {
        let token: string = localStorage.getItem('token') || 'asasas';
        if (config.other == 'down') {//下载
            config.data = true
            config.responseType = 'blob';
            config.headers['Content-Type'] = 'application/octet-stream';
            return config
        }
        if (config.other == 'upload') {//上传
            config.headers['Content-Type'] = 'multipart/form-data;boundary=' + new Date().getTime();
            return config
        }
        if (token != '') {
            config.headers['token'] = token;
        }
        if (config.other == 1) {
            config.data && (config.data = qs.stringify(config.data)) // 转为formdata数据格式
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        } else if (config.other != 'import') {
            config.data && (config.data = qs.parse(config.data))
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应对象
http.interceptors.response.use(
    response => {
        if (response.status != 200) {
            console.log(response.data.msg || '请求异常')
            return Promise.reject(new Error(response.data.msg || '请求异常'));
        }
        return response.data || response;
    },
    error => {
        console.log(error.message || '请求异常')
        return Promise.reject(error);
    }
);

export const Post = (url: string, data = {}, config = null) => {
    return http.post(url, data, { other: config });
};
export const Get = (url: string, params = {}, config = null) => {
    return http.get(url, { params, other: config });
};
export const Delete = (url: string, data = {}, config = null) => {
    return http.delete(url, { data, other: config });
};
export const Put = (url: string, data = {}, config = null) => {
    return http.put(url, data, { other: config });
};