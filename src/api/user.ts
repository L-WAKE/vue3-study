import Axios from '../utils/request'

// 接口响应通过格式
interface HttpResponse {
    status: number
    statusText: string
    data: {
        code: number
        desc: string
        [key: string]: any
    }
}
// 登录参数
interface LoginParams {
    username: string
    password: string
}
// 封装User类型的接口方法
export class UserService {
    static async login(params: LoginParams): Promise<HttpResponse> {
        return Axios('/assets/test1.text', {
            method: 'get',
            responseType: 'json',
            params: {
                ...params
            },
        })
    }
    static async resgister(params: LoginParams): Promise<HttpResponse> {
        return Axios('/api/user/resgister', {
            method: 'get',
            responseType: 'json',
            params: {
                ...params
            },
        })
    }
}