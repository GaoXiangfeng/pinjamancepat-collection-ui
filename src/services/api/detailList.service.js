import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl = config.opapiHost
const translateHost = config.translateHost
export default {
    //获取外呼链接接口
    getCallUrl: (params) => {
        return axios.post(`${ApiBaseUrl}/call/getCallUrl`,qs.stringify(params))
    },

    //紧急联系人列表
    getLinkmanList: (params) => {
        return axios.post(`${ApiBaseUrl}/user/getLinkmanList`,qs.stringify(params))
    },

    //催收短信列表
    messagesList: (params) => {
        return axios.post(`${ApiBaseUrl}/user/getSmsList`,qs.stringify(params))
    },
    //催收通讯录列表
    callBooksList: (params)=> {
        return axios.post(`${ApiBaseUrl}/user/getCallBookList`,params,{header:{'Content-Type': 'application/json',}})
    },
    //催收通话记录列表
    callRecordsList: (params)=> {
        return axios.post(`${ApiBaseUrl}/user/getCallRecordList`,qs.stringify(params))
    },

    //话单列表
    callBillList: (params)=> {
        return axios.post(`${ApiBaseUrl}/call/record/list`,qs.stringify(params))
    },

    //订单详情
    ordersDetail: (params)=>{
        return axios.post(`${ApiBaseUrl}/order/getOrderDetail`,qs.stringify(params))
    },

    //用户详情
    userDetail: (params)=>{
        return axios.post(`${ApiBaseUrl}/user/getUserDetail`,qs.stringify(params))
    },

    //还款记录
    repayRecord: (params)=>{
        return axios.post(`${ApiBaseUrl}/repay/getRepayDetail`,qs.stringify(params))
    },
    //还款记录
    repayRecordList: (params)=>{
        return axios.post(`${ApiBaseUrl}/repay/getRepayList`,qs.stringify(params))
    },
    //催收记录
    collectionRecord: (params)=>{
        return axios.post(`${ApiBaseUrl}/collection/getCollectionRecordList`,qs.stringify(params))
    },

    saveOperate(params){
        return axios.post(`${ApiBaseUrl}/collection/operate`,qs.stringify(params))
    },

    transition: (params)=>{
        return axios.get(`${translateHost}/translate`,{params:params})
    },
    //判断是否可以申请催收减免
    checkDeduction: (params) => {
        return axios.get(`${ApiBaseUrl}/deduction/checkDeduction`,{params:params})
    },
    //催收减免弹窗
    preDeduction: (params) => {
        return axios.get(`${ApiBaseUrl}/deduction/preDeduction`, {params:params})
    },
    //提交减免申请
    applyDeduction: (params) => {
        return axios.post(`${ApiBaseUrl}/deduction/applyDeduction`, qs.stringify(params))
    },
    //催收记录--发送催收短信
    sendSms: (params) => {
        return axios.post(`${ApiBaseUrl}/collection/sendSms`, qs.stringify(params))
    },
    //获取审核记录
    findAuditTicketRecords: (params) => {
        return axios.get(`${ApiBaseUrl}/order/findAuditTicketRecords`, {params:params})
    },
}
