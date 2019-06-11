import {post} from '../tools/http'
// 登录
export const login = (params) => {
    return post('/api/login',params)
}
