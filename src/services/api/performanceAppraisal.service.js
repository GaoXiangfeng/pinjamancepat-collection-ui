import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl =  config.opapiHost


export default {
    //获取回款统计次数
    getRepayStatisticsGraph: () => {
        return axios.get(`${ApiBaseUrl}/statistics/repay/graph`)
    },
    getAuthAccountPeriodsForPerformance: () => {
        return axios.get(`${ApiBaseUrl}/collection/getAuthAccountPeriodsForPerformance`)
    },
    getCollectionCompanies: () => {
        return axios.get(`${ApiBaseUrl}/collection/getCollectionCompanies`)
    },
    getSearchResult: (params) => {
        return axios.post(`${ApiBaseUrl}/statistics/repay/list`,qs.stringify(params))
    },
    //获取渠道
    getChannels: () => {
        return axios.get(`${ApiBaseUrl}/collection/getChannels`)
    },
    //获取外呼统计次数
    getCallStatisticsCount: () => {
        return axios.get(`${ApiBaseUrl}/statistics/call/count`)
    },
    //获取外呼统计列表
    getCallListStatistics: (params) => {
        return axios.get(`${ApiBaseUrl}/statistics/call/list`, {params: params})
    },
    //外呼统计催收员个人统计
    getCallForAuditor: (params) => {
        return axios.get(`${ApiBaseUrl}/statistics/call/auditorList`, {params: params})
    },
    
}