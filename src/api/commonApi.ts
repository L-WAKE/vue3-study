import { Post, Get, Put, Delete } from '@/utils/request';
export const login = (data: any) => Post('/testPost/flow', data, 1); //Post
export const getUserInfo = () => Get('/getTest/info');//get
