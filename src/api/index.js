import {post} from '../tools/http'
// 登录
export const login = () => {
    return post('/api/login',{})
}