/**
 * Created by Gao on 2018/6/7.
 */
import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl =  config.opapiHost

export default {
    //查询数据接口
    getSearchResultList: (params) => {
        return axios.post(`${ApiBaseUrl}/deduction/getDeductionList`,qs.stringify(params))
    },
    //撤销申请
    rollbackDeduction: (params) => {
        return axios.post(`${ApiBaseUrl}/deduction/rollbackDeduction`,qs.stringify(params))
    },
    //获取当前登录用户权限内可见的所有催收员
    getAuthCollectors: () => {
        return axios.get(`${ApiBaseUrl}/collection/getAuthCollectors`)
    } 
}