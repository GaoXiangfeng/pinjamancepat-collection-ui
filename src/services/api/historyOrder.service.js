import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl = config.opapiHost

export default {
    //获取历史纪录
    getHistoryOrder: (params) => {
        return axios.post(`${ApiBaseUrl}/order/getRelatedOrderList`,qs.stringify(params))
    },
    //获取本地通讯录
    getCallBookList: (params) => {
        return axios.post(`${ApiBaseUrl}/user/getCallBookList`,qs.stringify(params))
    },
    //获取本地短信列表
    getMessageList: (params) => {
        return axios.post(`${ApiBaseUrl}/user/getSmsList`,qs.stringify(params))
    },
    //通话记录列表
    getCallRecordList: (params) => {
        return axios.post(`${ApiBaseUrl}/user/getCallRecordList`,qs.stringify(params))
    },
    //获取审核记录
    findAuditTicketRecords: (params) => {
        return axios.get(`${ApiBaseUrl}/order/findAuditTicketRecords`, {params:params})
    },
}