/**
 * Created by sunxiaoying on 2017/12/14.
 */
import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl = config.opapiHost
export default {
    //登录
    login: (params)=> {
        return axios.post(`${ApiBaseUrl}/auth/login`,qs.stringify(params));
    },
    //退出
    logout: ()=> {
        return axios.get(`${ApiBaseUrl}/auth/logout`);
    },
    //获取用户列表
    getUserList: ()=> {
        return axios.get(`${ApiBaseUrl}/management/getAuditorList`)
    },
    //添加用户
    addUser: (params) => {
        return axios.post(`${ApiBaseUrl}/management/register`, qs.stringify(params))
    },
    //启用/禁用用户
    changeStatus: (params) => {
        return axios.post(`${ApiBaseUrl}/management/changeAuditorStatus`, qs.stringify(params))
    },
    //重置密码
    resetPassWord: (params) => {
        return axios.post(`${ApiBaseUrl}/auth/resetPassword`, qs.stringify(params))
    }
}
