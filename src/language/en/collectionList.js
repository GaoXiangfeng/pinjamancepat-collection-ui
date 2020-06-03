const msCollectionListEn = {
    collectionTab: {
        1: 'Not catching',//未催收
        2: 'Losing contact',//失联
        3: 'Fraud',//欺诈
        4: 'No repayment willingness',////无还款意愿
        5: 'Promised repayment',//承诺还款
        6: 'Go home to collect',//上门催收
        7: 'Customer complaints', //客户投诉
        8: 'Not paid after promission', //承诺后未还款
        10: 'Contact whistleblower',//联系人转告
        11: 'Funding difficulties',//资金困难
    },

    //催收列表页-表格-表头
    collectionListTitle: [
        'Action',//操作
        'Attribution',//归属  
        'Phone Number', //电话号码
        'Order Number',//订单号
        'Collection status',//催收状态
        'Customer label',//客户标签
        'Overdue days',//逾期天数
        'Should repay time',//应还款日
        'Recent repayment',//最近还款
        'Recent collection',//最近催收
        'Estimated repayment',//预计还款
        'Loan amount',//借款金额
        'Collection company',//公司
        'Application channels',//渠道 
    ],

    //表格数据
    orderTableData: {
        0: 'Check', //查看
        1: 'After the first interest rate',//先息后本
        2: 'No data' ,//'暂无数据'
        3: 'No screening data' ,//'暂无筛选数据'
        4: 'Please select', //请选择
    },

    //订单列表页  --搜索条件
    orderSearchItem: {
        telephone: 'Phone number', //电话号码
        orderId: 'Order number',//订单号
        belongTo: 'Attribution', //归属
        accountPeriod: 'Account period', //账期
        repayDate: 'Should repay time', //应还款日
        lastRepay: 'Recent repayment', //最近还款
        lastCollection: 'Recent collection', //最近催收
        expectedRepay: 'Estimated repayment', //预计还款
        other: 'Others',//其他
        selectThanThree: 'Unfollowed-up cases for more than 3 days',//3天以上未跟进的案件
        search: 'Search', //查询
        clear: 'Clear', //清空
        collStatus: 'Collection status', //催收状态
        collCompany: 'Collection company', //催收公司
        channel: 'Application channels',
        customerLabel: 'Customer label',//客户标签
    },
    //客户标签
    customerLabelList: [
        {
            key: '1',
            value: 'Special occupation'//特殊职业
        },{
            key: '2',
            value: 'Re-loan customer'//复贷客户
        },{
            key: '3',
            value: 'Multi-loan customer'//多贷客户
        }
    ]
}
export default msCollectionListEn
