import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl = config.opapiHost

export default {
    //获取公司
    getCollectionCompanies: () => {
        return axios.get(`${ApiBaseUrl}/collection/getCollectionCompanies`)
    },
    //获取人员排版列表
    getSchedule:( params ) => {
        return axios.get(`${ApiBaseUrl}/schedule/get`,{params: params})
    },
    //更新人员排班
    updateSchedule:( params ) => {
        return axios.post(`${ApiBaseUrl}/schedule/update`,qs.stringify(params))
    },
}