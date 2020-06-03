const msCollectionListCn = {
    collectionTab: {
        1: '未催收',//未催收
        2: '失联',//失联
        3: '欺诈',//欺诈
        4: '无还款意愿',//无还款意愿
        5: '承诺还款',//承诺还款
        6: '上门催收',//上门催收
        7: '客户投诉',//客户投诉
        10: '联系人转告',//联系人转告
        11: '资金困难',//资金困难
    },

    //催收列表页-表格-表头
    collectionListTitle: [
        '操作',//操作
        '归属',//归属
        '电话号码', //电话号码
        '订单号',//订单号
        '催收状态',//催收状态
        '客户标签',//客户标签
        '逾期天数',//逾期天数 
        '应还款日',//应还款日
        '最近还款',//最近还款
        '最近催收',//最近催收
        '预计还款',//预计还款时间
        '借款金额',//借款金额
        '公司',//公司
        '渠道',//渠道 
    ],

    //表格数据
    orderTableData: {
        0: '查看', //查看
        1: '先息后本',//先息后本
        2: '无数据' ,//'暂无数据'
        3: '暂无筛选数据' ,//'暂无筛选数据'
        4: '请选择'
    },

    //订单列表页  --搜索条件
    orderSearchItem: {
        telephone: '电话号码', //电话号码
        orderId: '订单号', //订单号
        belongTo: '归属', //归属
        accountPeriod: '账期', //账期
        repayDate: '应还款日', //应还款日
        lastRepay: '最近还款', //最近还款
        lastCollection: '最近催收', //最近催收
        expectedRepay: '预计还款', //预计还款
        collection: '催款人' ,//催款人
        other: '其他',//其他
        selectThanThree: '3天以上未跟进的案件',//3天以上未跟进的案件
        search: '查询', //查询
        clear: '清空', //清空
        collStatus: '催收状态', //催收状态
        collCompany: '催收公司', //催收公司
        channel: '申请渠道',
        customerLabel: '客户标签',//客户标签
    },
    //客户标签
    customerLabelList: [
        {
            key: '1',
            value: '特殊职业'//特殊职业
        },{
            key: '2',
            value: '复贷客户'//复贷客户
        },{
            key: '3',
            value: '多贷客户'//多贷客户
        }
    ]
}

export default msCollectionListCn
