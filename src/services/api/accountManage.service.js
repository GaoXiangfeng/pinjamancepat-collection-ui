import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl = config.opapiHost

export default {
    //获取公司下账户的列表
    getAccountsByCompany: (params) => {
        return axios.post(`${ApiBaseUrl}/management/getCompanyAuditorResponseList`,qs.stringify(params))
    },
    //添加账户
    accountAdd: (params) => {
        return axios.post(`${ApiBaseUrl}/management/addAuditor`,qs.stringify(params))
    },
    //修改账户
    accountModify:(params) => {
        return axios.post(`${ApiBaseUrl}/management/editAuditor`,qs.stringify(params))
    },
    //获取可分配催收人
    getReplaceForAuditor:(params) => {
        return axios.post(`${ApiBaseUrl}/management/getReplaceForAuditor`,qs.stringify(params))
    },
    //启用账户
    enableAuditor: (params) => {
        return axios.post(`${ApiBaseUrl}/management/enableAuditor`,qs.stringify(params))
    },
    //禁用账户
    disableAuditor:(params) => {
        return axios.post(`${ApiBaseUrl}/management/disableAuditor`,qs.stringify(params))
    },
    //设置管理员
    setManager:(params) => {
        return axios.post(`${ApiBaseUrl}/management/setManager`,qs.stringify(params))
    }
}