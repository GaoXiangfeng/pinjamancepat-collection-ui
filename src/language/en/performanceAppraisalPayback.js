const msPerformanceAppraisalPayback = {
    //统计模块
    statistics:{ 
        //今日
        todayAmountTitle: 'Today’s Payment Amount',//今日回款金额
        todayAmountTip: 'Accumulated amount of repayment on that day (basic of repayment + overdue fee of repayment)',//当日累计回款金额（回款本金+回款逾期费）
        todayAmountRealtimeCompare: 'Ring real-time compared with yesterday (up/down)',//比昨日实时
        todayRateTitle: 'Today’s Payment Rate',//今日回款率
        todayRateTip: 'Today’s real-time cumulative reminder of basic : today’s basic repayment * 100%',//今日实时累计催回本金 ÷ 今日分案本金×100%
        todayRateAllDayCompare: 'Ring real-time compared with yesterday (up/down)',//比昨日实时
        //本周
        weekAmountTitle: 'The cumulative amount of repayment this week(Rp)',//本周累计回款金额(Rp)
        weekAmountTip: 'This week’s real-time cumulative amount of repayment (basic repayment + overdue fee)',//本周实时累计回款金额（回款本金+回款逾期费）
        weekAmountRealtimeCompare: 'Ring real-time (up/down) compared with last week',//比上周实时
        weekRateTitle: 'Accumulated Payment Return Rate This Week',//本周累计回款率
        weekRateTip: 'This week’s real-time basic cumulative reminder : this week’s basic cumulative score * 100%',//本周实时累计催回本金÷本月累计分案本金×100%
        weekRateAllDayCompare: 'Ring real-time (up/down) compared with last week',//比上周实时
        //上周
        lastweekAmountTitle: 'Payment amount last week(Rp)',//上周回款金额(Rp)
        lastweekAmountTip: 'Accumulated amount of repayment last week (basic + overdue fee)	',//上周累计回款金额（回款本金+回款逾期费）
        lastweekRateTitle: 'Last week’s repayment rate',//上周回款率
        lastweekRateTip: 'Last week’s cumulative reminder of principal * last week’s basic cumulative score * 100%',//上周累计催回本金 ÷ 上周累计分案本金×100%
        //本月
        monthAmountTitle: 'Accumulated amount of repayment this month(Rp)',//本月累计回款金额(Rp)
        monthAmountTip: 'Real-time cumulative amount of repayment (basic repyament + overdue fee)',//本月实时累计回款金额（回款本金+回款逾期费）
        monthAmountRealtimeCompare: 'Ring real-time compared with last month',//比上月实时
        monthRateTitle: 'Accumulated Return Rate for the Month',//本月累计回款率
        monthRateTip: 'This month’s real-time basic cumulative reminder of principal : this month’s basic cumulative score * 100%',//本月实时累计催回本金÷本周/本月累计分案本金×100%
        monthRateAllDayCompare: 'Ring real-time compared with last month',//比上月实时
        //上月
        lastmonthAmountTitle: 'Payment amount last month(Rp)',//上月回款金额(Rp)
        lastmonthAmountTip: 'Accumulated amount of repayment last month (basic repyament + overdue fee)',//上月累计回款金额（回款本金+回款逾期费）
        lastmonthRateTitle: 'Return rate last month',//上月回款率
        lastmonthRateTip: 'Accumulated recovery of principal last month',//上月累计催回本金 ÷ 上月累计分案本金×100%
    },
    searchCondition: {
        accountPeriod: 'Account period', //账期
        company: 'Company', //公司
        channel: 'Channels',//渠道
        caseTime: 'Order distribution time', //分案时间
        repayTime: 'Repayment time', //还款时间
        accountPeriodPlaceHolder: 'Please select or search', //账期暗文
        companyPlaceHolder: 'Please select or search', //公司暗文
        caseTimePlaceHolder: 'Please select', //分案时间暗文
    },
    buttonTitle: {
        search: 'Inquire', //查询
        clear: 'Empty', //清空
    },
    searchResultColumnsHeader: [
        'Sorting number',
        'Account period',
        'Company',
        'Name',
        'Channel',
        'officer collection(principal + service fee)',
        'Divisional overdue fee',
        'Number of people',
        'total collection(principal + service fee)',
        'Recall overdue fees',
        'number of people having  repaid',
        'Repayment rate',
        'Return rate',
        'Repayments today'
    ],
    searchResultTotal: {
        0: 'Total'
    },
    //表格数据
    searchResultTip: {
        0: 'Undo', //撤销
        1: 'No data' ,//'暂无数据'
        2: 'No filter data' ,//'暂无筛选数据'
        3: 'Please select'
    },
    operationTips: { //操作提示
        0: 'You can not just select the  order distribution time to search', //不能只选择分案时间进行查询
        1: 'Channel,Account period and company cannot be empty at the same time', //不能只选择分案时间进行查询
    }
}

export default msPerformanceAppraisalPayback