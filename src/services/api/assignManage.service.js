/**
 * Created by sunxiaoying on 2018/08/18
 */
import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl =  config.opapiHost
export default {
    //获取当前登录用户权限内可见的所有催收员
    getAuthCollectors: () => {
        return axios.get(`${ApiBaseUrl}/collection/getAuthCollectors`)
    },
    //获取指定用户权限内可见的所有帐期
    getAuthAccountPeriods: (params) => {
        return axios.get(`${ApiBaseUrl}/collection/getAuthAccountPeriods`, {params:params})
    },
    //所有催收公司
    getCollectionCompanies: () => {
        return axios.get(`${ApiBaseUrl}/collection/getCollectionCompanies`)
    },
    //所有申请渠道
    getChannels: () => {
        return axios.get(`${ApiBaseUrl}/collection/getChannels`)
    },
    //查询接口
    collectionList: (params) => {
        return axios.post(`${ApiBaseUrl}/collection/getCollectionOrderList`,qs.stringify(params))
    },
    //获取分案管理接口
    getAssignDataFn: () =>{
        return axios.get(`${ApiBaseUrl}/management/getDistributionResult`)
    },
    //弹窗获取公司和账户信息
    getCompanyAndAuditors: (params) => {
        return axios.post(`${ApiBaseUrl}/management/toSelfDistribution`, qs.stringify(params))
    },
    //手动分配
    handAssignFn: (params) => {
        return axios.post(`${ApiBaseUrl}/management/selfDistribution`, qs.stringify(params))
    }
}