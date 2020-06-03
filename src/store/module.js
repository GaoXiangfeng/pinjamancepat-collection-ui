import * as types from './type'
import Vue from 'vue'
const state = {
    //国际化标记
    language: 'cn',
    //当前路径
    currentPath: 'collectionList',
    activeName: '0-0',//菜单激活项
    //面包屑相关
    secBread: '',//二级面包屑
    thirdBread: '',//三级面包屑
    forthBread: '',//四级面包屑
    isMoreThenThreeDays: false,//是否超过三天案件提醒
    //订单列表查询条件
    collStatus: 0,
    formColl: {
        status: 0,
        orderId: '',
        phoneNo: '',
        auditorId: '',
        accountPeriod: '',
        channelId: '',
        companyId: '',
        startRepayTime: '',
        endRepayTime: '',
        startExpectRepayTime: '',
        endExpectRepayTime: '',
        selectThanThree: false,
        label: '',
        sort: 'DESC',
        sortBy: 'repayTime',
        pageNum: 1,
        pageSize: 20,
        time2: [],
        time5: [],
    },
    //还款列表查询条件
    formRepay: {
        orderId: '',
        phoneNo: '',
        auditorId: '',
        accountPeriod: '',
        startRepayTime: '',
        endRepayTime: '',
        startLastRepayTime: '',
        endLastRepayTime: '',
        startLastCollectionTime: '',
        endLastCollectionTime: '',
        sort: 'DESC',
        sortBy: 'lastRepayTime',
        pageNum: 1,
        pageSize: 20,
        time2: [],
        time3: [],
        time1: [],
    },
    //手动分案列表
    collStatusForHandAssignList: 0,
    formHandAssignList: {
        status: 0,
        orderId: '',
        phoneNo: '',
        auditorId: '',
        accountPeriod: '',
        channelId: '',
        companyId: '',
        startRepayTime: '',
        endRepayTime: '',
        startExpectRepayTime: '',
        endExpectRepayTime: '',
        sort: 'DESC',
        sortBy: 'repayTime',
        pageNum: 1,
        pageSize: 20,
        time2: [],
        time5: [],
    },
    // needKeepAlive: false
    spinShow: false,//查询列表过程中是否显示遮罩层

}

const actions = {
    change_language ({commit}, language) {
        commit(types.CHANGE_LANGUAGE, language)
    },
    change_current_path ({commit}, currentPath) {
        commit(types.CHANGE_CURRENT_PATH, currentPath)
    },
    // change_bread ({commit}, bread) {
    //     commit(types.CHANGE_THIRD_BREAD, bread)
    // },
    change_form_coll ({commit}, form) {
        commit(types.CHANGE_FORM_COLL, form)
    },
    change_spin_show ({commit},spinShow) {
        commit(types.CHANGE_SPIN_SHOW, spinShow)
    },
}

const mutations = {
    [types.CHANGE_LANGUAGE](state, language){
        state.language = language
    },
    [types.CHANGE_ACTIVENAME](state, activeName){//改变菜单激活项
        state.activeName = activeName
    },
    [types.CHANGE_CURRENT_PATH](state, currentPath){
        state.currentPath = currentPath
    },
    [types.CHANGE_SEC_BREAD](state, bread){//二级面包屑
        state.secBread = bread
    },
    [types.CHANGE_THIRD_BREAD](state, bread){//三级面包屑
        state.thirdBread = bread
    },
    [types.CHANGE_FORTH_BREAD](state, bread){//四级面包屑
        state.forthBread = bread
    },
    [types.MORE_THAN_THREEDAYS](state, result){//是否超过三天未跟踪
        state.isMoreThenThreeDays = result
    },
    [types.CHANGE_FORM_COLL](state, form){
        state.formColl = form
    },
    [types.CHANGE_COLL_STATUS](state, status){
        state.collStatus = status
    },
    [types.CHANGE_FORM_REPAY](state, form){
        state.formRepay = form
    },
    [types.CHANGE_SPIN_SHOW](state, spinShow){
        state.spinShow = spinShow
    },
    [types.CHANGE_FORM_HAND_ASSIGN_LIST](state, formHandAssignList){ //手动分案列表
        state.formHandAssignList = formHandAssignList
    },
    [types.CHANGE_COLL_STATUS_FOR_HAND](state, collStatusForHandAssignList){ //手动分案列表
        state.collStatusForHandAssignList = collStatusForHandAssignList
    },
}

const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}

