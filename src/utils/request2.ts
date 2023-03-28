import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
import { getToken } from '@/utils/auth';
import { baseUrl } from '@/config';

const http = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

// 请求对象
http.interceptors.request.use(
    config => {
        // 设置token
        if (getToken()) {
            config.headers['token'] = getToken();
        }
        if (config.other == 1) {
            config.headers['Content-Type'] = 'application/json';
            config.data = qs.parse(config.data);
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
http.interceptors.request.use(
    config => {
        if (config.other != 1) {
            config.data = qs.stringify(config.data); // 转为formdata数据格式
        }
        return config;
    },
    error => Promise.error(error)
);
// 响应对象
http.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code != 200) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            });
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return res.data || res;
        }
    },
    error => {
        if (error.response.status == 500) {
            console.log(error.response.data.code == 401);
            if (error.response.data.code == 401) {
                Message({
                    message: '登陆失效',
                    type: 'error'
                });
                setTimeout(() => {
                    window.location.href =
                        'https://museum1.wisesoft.net.cn/project-cloud/backFrame/login.html'; //博物馆云测试
                    // 'http://220.167.103.91:8084/project-yaan/backFrame/login.html'; //雅安正式
                    // 'http://yaan.eimm.wisesoft.net.cn:8099/project-yaan/backFrame/login.html'; //雅安测试
                }, 1000);

                return Promise.reject(error);
            }
        } else {
            Message({
                message: error.message,
                type: 'error',
                duration: 5 * 1000
            });
            return Promise.reject(error);
        }
    }
);

export const Post = (url, data = {}, config = 0) => {
    return http.post(url, data, { other: config });
};
export const Get = (url, params = {}, config = {}) => {
    return http.get(
        url,
        {
            params
        },
        config
    );
};
