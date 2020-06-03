const msPerformanceAppraisalPayback = {
    //统计模块
    statistics:{ 
        //今日
        todayAmountTitle: '今日回款金额',//今日回款金额
        todayAmountTip: '当日累计回款金额（回款本金+回款逾期费）',//当日累计回款金额（回款本金+回款逾期费）
        todayAmountRealtimeCompare: '比昨日实时',//比昨日实时
        todayRateTitle: '今日回款率',//今日回款率
        todayRateTip: '今日实时累计催回本金 ÷ 今日分案本金×100%',//今日实时累计催回本金 ÷ 今日分案本金×100%
        todayRateAllDayCompare: '比昨日实时',//比昨日实时
        //本周
        weekAmountTitle: '本周累计回款金额(Rp)',//本周累计回款金额(Rp)
        weekAmountTip: '本周实时累计回款金额（回款本金+回款逾期费）',//本周实时累计回款金额（回款本金+回款逾期费）
        weekAmountRealtimeCompare: '比上周实时',//比上周实时
        weekRateTitle: '本周累计回款率',//本周累计回款率
        weekRateTip: '本周实时累计催回本金÷本周累计分案本金×100%',//本周实时累计催回本金÷本月累计分案本金×100%
        weekRateAllDayCompare: '比上周实时',//比上周实时
        //上周
        lastweekAmountTitle: '上周回款金额(Rp)',//上周回款金额(Rp)
        lastweekAmountTip: '上周累计回款金额（回款本金+回款逾期费）',//上周累计回款金额（回款本金+回款逾期费）
        lastweekRateTitle: '上周回款率',//上周回款率
        lastweekRateTip: '上周累计催回本金 ÷ 上周累计分案本金×100%',//上周累计催回本金 ÷ 上周累计分案本金×100%
        //本月
        monthAmountTitle: '本月累计回款金额(Rp)',//本月累计回款金额(Rp)
        monthAmountTip: '本月实时累计回款金额（回款本金+回款逾期费）',//本月实时累计回款金额（回款本金+回款逾期费）
        monthAmountRealtimeCompare: '比上月实时',//比上月实时
        monthRateTitle: '本月累计回款率',//本月累计回款率
        monthRateTip: '本月实时累计催回本金÷本月累计分案本金×100%',//本月实时累计催回本金÷本周/本月累计分案本金×100%
        monthRateAllDayCompare: '比上月实时',//比上月实时
        //上月
        lastmonthAmountTitle: '上月回款金额(Rp)',//上月回款金额(Rp)
        lastmonthAmountTip: '上月累计回款金额（回款本金+回款逾期费）',//上月累计回款金额（回款本金+回款逾期费）
        lastmonthRateTitle: '上月回款率',//上月回款率
        lastmonthRateTip: '上月累计催回本金 ÷ 上月累计分案本金×100%',//上月累计催回本金 ÷ 上月累计分案本金×100%
    },
    searchCondition: {
        accountPeriod: '账期', //账期
        company: '公司', //公司
        channel: '渠道',//渠道
        caseTime: '分案时间', //分案时间
        repayTime: '还款时间', //还款时间
        accountPeriodPlaceHolder: '请选择或搜索', //账期暗文
        companyPlaceHolder: '请选择或搜索', //公司暗文
        caseTimePlaceHolder: '请选择', //分案时间暗文
    },
    buttonTitle: {
        search: '查询', //查询
        clear: '清空', //清空
    },
    searchResultColumnsHeader: [
        '序号',
        '账期',
        '公司',
        '姓名',
        '渠道',
        '分案(本金+服务费)',
        '分案逾期费',
        '分案户数',
        '催回(本金+服务费)',
        '催回逾期费',
        '催回户数',
        '回款率',
        '回户率',
        '今日回款笔数'
    ],
    searchResultTotal: {
        0: '总计'
    },
    //表格数据
    searchResultTip: {
        0: '撤销', //撤销
        1: '无数据' ,//'暂无数据'
        2: '暂无筛选数据' ,//'暂无筛选数据'
        3: '请选择'
    },
    operationTips: { //操作提示
        0: '不能只选择分案时间进行查询', //不能只选择分案时间进行查询
        1: '渠道、账期和公司不能同时为空来进行查询', //不能只选择分案时间进行查询
    }
}

export default msPerformanceAppraisalPayback