import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import config from '../config'
import localStorage from '../services/localStorage.service'

Vue.use(VueRouter)

const login = r => require.ensure([], () => r(require('../view/common/Login.vue')), 'login')
const home = r => require.ensure([], () => r(require('../view/common/Home.vue')), 'login')
const collectionList = r => require.ensure([], () => r(require('../view/collectionModal/collectionList')), 'collectionList')
const detailList = r => require.ensure([], () => r(require('../view/orderDetail/detailList')), 'detailList')
const repayList = r => require.ensure([], () => r(require('../view/repayModal/repayList')), 'repayList')
const appliForReduc = r => require.ensure([], () => r(require('../view/cutModal/appliForReduc')), 'appliForReduc')
const remissionApproval = r => require.ensure([], () => r(require('../view/cutModal/remissionApproval')), 'remissionApproval')
const performanceAppraisalPayback = r => require.ensure([], () => r(require('../view/performanceModal/performanceAppraisalPayback')), 'performanceAppraisalPayback')
const performanceAppraisalOutgoingcall = r => require.ensure([], () => r(require('../view/performanceModal/performanceAppraisalOutgoingcall')), 'performanceAppraisalOutgoingcall')
const outgoingcallDetails = r => require.ensure([], () => r(require('../view/performanceModal/outgoingcallDetails')), 'outgoingcallDetails')
const assignManage = r => require.ensure([], () => r(require('../view/assignManageModal/assignManage')), 'assignManage')
const companyManage = r => require.ensure([], () => r(require('../view/accountManageModal/companyManage')), 'companyManage')
const staffScheduling = r => require.ensure([], () => r(require('../view/staffSchedulingModal/staffScheduling')), 'staffScheduling')
const accountManage = r => require.ensure([], () => r(require('../view/accountManageModal//accountManage/accountManage')), 'accountManage')

const routes = [
    {
        path: '/',
        redirect: '/home/collectionList',
        meta: {
            role: '1,2,3,4'
        }
    },
    {
        path: '/login',
        component: login,
        meta: {
            role: '1,2,3,4'
        }
    },
    {
        path: '/home',
        component: home,
        meta: {
            requireAuth: true,
            role: '1,2,3,4'
        },
        children: [
            {
                path: 'collectionList',
                meta: {
                    role: '1,2,3,4'
                },
                component: collectionList,
            },{
                path: 'collectionList/detailList/:orderNo',
                meta: {
                    role: '1,2,3,4'
                },
                component: detailList,
            },
            {
                path: 'repayList',
                meta: {
                    role: '1,2,3,4'
                },
                component: repayList,
            },{
                path: 'repayList/detailList/:orderNo',
                meta: {
                    role: '1,2,3,4'
                },
                component: detailList,
            },
            {
                path: 'appliForReduc',//减免申请
                meta: {
                    role: '1,2,3,4'
                },
                component: appliForReduc,
            },
            {
                path: 'remissionApproval',//减免审批
                meta: {
                    role: '1,3,4'
                },
                component: remissionApproval,
            },
            {
                path: 'performanceAppraisal/Payback',//绩效统计--外呼统计
                meta: {
                    role: '1,2,3,4'
                },
                component: performanceAppraisalPayback,
            },
            {
                path: 'performanceAppraisal/Outgoingcall',//绩效统计--外呼统计
                meta: {
                    role: '1,2,3,4'
                },
                component: performanceAppraisalOutgoingcall,
            },
            {
                path: 'performanceAppraisal/Outgoingcall/detail/:auditorId',//绩效统计--外呼统计--详细信息
                meta: {
                    role: '1,2,3,4'
                },
                component: outgoingcallDetails,
            },
            {
                path: 'companyManage',//公司管理
                meta: {
                    role: '1,4'
                },
                component: companyManage          
            },
            {
                path: 'accountManage',//账户管理
                meta: {
                    role: '1,4'
                },
                component: accountManage          
            },
            {
                path: 'staffScheduling',//人员排班
                meta: {
                    role: '1,4'
                },
                component: staffScheduling          
            },
            {
                path: 'assignManage',//分案管理
                meta: {
                    role: '1,4'
                },
                component: assignManage           
            },
        ]

    }]

const router = new VueRouter({
    mode: 'history',
    routes
})

const opRedirectUrl = config.LoginUrl

router.beforeEach(async(to, from, next) => {
    let requireAuth = to.matched.some(route => route.meta.requireAuth)
    if (!requireAuth) {
        return next()
    }

    //判断是否登录
    let user = localStorage.get('user')
    if (!localStorage.get('token') || !user) {
        window.location.href = opRedirectUrl
        return
    }

    //如果登录，判断是否有当前路由的权限
    let role = user.role || ''
    to.matched.some(route => {
        if(!route.meta.role.includes(role)){
            window.location.href = opRedirectUrl
        }
    })

    //第一次运行程序 设置菜单选中项
    if(to.path == '/home/collectionList'){
        localStorage.set('activeName','0-0')
    }
    next()
})

export default router
