export default {
    //***********手动分案列表**************
    searchCondition:{ //搜索条件
        orderId: 'Order Number', //订单号
        belongTo: 'Attribution', //归属
        accountPeriod: 'Account period', //账期
        repayDate: 'Should repay time', //应还款日
        lastRepay: 'Recent repayment', //最近还款
        expectedRepay: 'Estimated repayment', //预计还款
        search: 'Search', //查询
        distribute: 'Distribution', //分配
        clear: 'Clear', //清空
        collStatus: 'Collection status', //催收状态
        collCompany: 'Collection company', //催收公司
        channel: 'Application channels'
    },

    collectionStatus:{ //催收状态
        1: 'Not catching',//未催收
        2: 'Losing contact',//失联
        3: 'Fraud',//欺诈
        4: 'No repayment willingness',////无还款意愿
        5: 'Promised repayment',//承诺还款
        6: 'Go home to collect',//上门催收
        10: 'Contact whistleblower',//联系人转告
        11: 'Funding difficulties',//资金困难
    },
    
    searchResultColumnsHeader:[ //查询列表表头
        '全选',//全选
        'Order Number',//订单号
        'Attribution',//归属
        'Collection company',//公司
        'Collection status',//催收状态
        'Should repay time',//应还款日
        'Recent repayment',//最近还款
        'Recent collection',//最近催收
        'Loan amount',//借款金额
        'Overdue days',//逾期天数 
        'Application channels',//渠道 
    ],

    searchResultTip:{ //表格查询数据提示
        0: 'Check', //查看
        1: 'After the first interest rate',//先息后本
        2: 'No data' ,//'暂无数据'
        3: 'No screening data' ,//'暂无筛选数据'
        4: 'Please select'
    },

    //***********弹窗文案*****************
    orderAssignModalText: {
        title: 'Order allocation',//案件分配
        companyName: 'Company',//公司
        accountPeriod: 'Account',//账户
        confirm: 'confirm',//确认
        cancel: 'cancel',//取消
        isConfrimAssignOrder: 'Do you confirm the distribution of the case?',//是否确认分配案件？,
        placeholder: 'Please select',//请选择
        companyUncomplate: 'Company information is not complete, please improve~',//公司信息不全
        accountPeriodUncomplate: 'Account information is not complete, please improve~',//账户信息不全
        companyRepeat: 'Company has duplicates！',//公司重复
        assignSuccess: 'Successful division！'//分案成功
    }
}