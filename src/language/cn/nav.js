const msNavCn = {
    //导航栏
    nav: [
        {
            name: '催收列表',
            role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
            path: 'collectionList',
        },
        {
            name: '还款列表',
            role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
            path: 'repayList',
        },
        {
            name: '减免申请',
            role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
            path: 'appliForReduc',
        },
        {
            name: '减免审批',
            role: ['DEVGLY','COMPANY', 'USERGLY'],
            path: 'remissionApproval',
        }, 
        {
            name: '账户管理',
            role: ['DEVGLY', 'USERGLY'],
            path: 'companyManage',
        },
        {
            name: '人员排班',
            role: ['DEVGLY', 'USERGLY'],
            path: 'staffScheduling',
        },
        {
            name: '分案管理',
            role: ['DEVGLY', 'USERGLY'],
            path: 'assignManage',
        },
        {
            name: '绩效统计',
            role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
            path: 'performanceAppraisal',
            children: [
                {
                    name: '回款统计', //回款统计
                    role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
                    path: 'performanceAppraisal/Payback'
                },
                {
                    name: '外呼统计', //外呼统计
                    role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
                    path: 'performanceAppraisal/Outgoingcall'
                }
            ]
        },
        // {
        //     name: '催收分配',
        //     role: ['DEVGLY', 'USERGLY'],
        //     path: 'collectionAssign',
        // },
        // {
        //     name: '用户管理',
        //     role: ['DEVGLY', 'USERGLY'],
        //     path: 'userManage',
        // },
    ]
}

export default msNavCn
