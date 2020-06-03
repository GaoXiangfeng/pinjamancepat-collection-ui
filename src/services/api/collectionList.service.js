import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl =  config.opapiHost
export default {
    //查询接口
    collectionList: (params) => {
       return axios.post(`${ApiBaseUrl}/collection/getCollectionOrderList`,qs.stringify(params))
    },
    //获取当前登录用户权限内可见的所有催收员
    getAuthCollectors: () => {
        return axios.get(`${ApiBaseUrl}/collection/getAuthCollectors`)
    },
    //获取指定用户权限内可见的所有帐期
    getAuthAccountPeriods: (params) => {
        return axios.get(`${ApiBaseUrl}/collection/getAuthAccountPeriods`, {params:params})
    },
    //还款列表查询
    getCollectionRepayList: (params) => {
        return axios.post(`${ApiBaseUrl}/collection/getCollectionRepayList`,qs.stringify(params))
    },
    //所有催收公司
    getCollectionCompanies: () => {
        return axios.get(`${ApiBaseUrl}/collection/getCollectionCompanies`)
    },
    //所有申请渠道
    getChannels: () => {
        return axios.get(`${ApiBaseUrl}/collection/getChannels`)
    },
    //获取是否有三天未跟踪的事件
    greaterThanThreeOrder: () => {
        return axios.get(`${ApiBaseUrl}/order/greaterThanThreeOrder`)
    },
    // 查询承诺还款的案件
    getPromiseRepayOrderInToday: () => {
        return axios.get(`${ApiBaseUrl}/collection/getPromiseRepayOrderInToday`)
    },
}
