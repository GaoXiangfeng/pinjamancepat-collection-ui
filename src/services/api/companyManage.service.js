/**
 * Created by sunxiaoying on 2018/08/18
 */
import axios from '../http.service'
import qs from 'qs'
import config from '../../config'
const ApiBaseUrl =  config.opapiHost
export default {
    //获取公司管理列表接口
    getCompanyDataFn: () =>{
        return axios.get(`${ApiBaseUrl}/management/getCompanyResponseList`)
    },
    //添加公司
    addCompanyFn: (params) => {
        return axios.post(`${ApiBaseUrl}/management/addCompany`, qs.stringify(params))
    },
    //公司禁用、启用
    changeCompanyStatus: (params) => {
        return axios.post(`${ApiBaseUrl}/management/updateCompanyStatus`, qs.stringify(params))
    }
}