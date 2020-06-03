export default {
    //***********手动分案列表**************
    searchCondition:{ //搜索条件
        orderId: '订单号', //订单号
        belongTo: '归属', //归属
        accountPeriod: '账期', //账期
        repayDate: '应还款日', //应还款日
        lastRepay: '最近还款', //最近还款
        expectedRepay: '预计还款', //预计还款
        collection: '催款人' ,//催款人
        search: '查询', //查询
        distribute: '分配', //分配
        clear: '清空', //清空
        collStatus: '催收状态', //催收状态
        collCompany: '催收公司', //催收公司
        channel: '申请渠道'
    },

    collectionStatus:{ //催收状态
        1: '未催收',
        2: '失联',
        3: '欺诈',
        4: '无还款意愿',
        5: '承诺还款',
        6: '上门催收',
        10: '联系人转告',//联系人转告
        11: '资金困难',//资金困难
    },
    
    searchResultColumnsHeader:[ //查询列表表头
        '全选',//全选
        '订单号',//订单号
        '归属',//归属
        '公司',//公司
        '催收状态',//催收状态
        '应还款日',//应还款日
        '最近还款',//最近还款
        '最近催收',//最近催收
        '借款金额',//借款金额
        '逾期天数',//逾期天数 
        '渠道',//渠道 
    ],

    searchResultTip:{ //表格查询数据提示
        0: '查看', //查看
        1: '先息后本',//先息后本
        2: '无数据' ,//'暂无数据'
        3: '暂无筛选数据' ,//'暂无筛选数据'
        4: '请选择'
    },

    //***********弹窗文案*****************
    orderAssignModalText: {
        title: '案件分配',//案件分配
        companyName: '公司',//公司
        accountPeriod: '账户',//账户
        confirm: '确认',//确认
        cancel: '取消',//取消
        isConfrimAssignOrder: '是否确认分配案件？',//是否确认分配案件？,
        placeholder: '请选择',//请选择
        companyUncomplate: '公司信息不全，请完善~',//公司信息不全
        accountPeriodUncomplate: '账户信息不全，请完善~',//账户信息不全
        companyRepeat: '公司有重复！',
        assignSuccess: '分案成功！'
    }
}