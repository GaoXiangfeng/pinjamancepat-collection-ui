/**
 * Created by sunxiaoying on 2018/6/13.
 */
import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl =  config.opapiHost

export default {
    //审批催收减免
    reviewDeduction: (params) => {
        return axios.post(`${ApiBaseUrl}/deduction/reviewDeduction`,qs.stringify(params))
    },
}