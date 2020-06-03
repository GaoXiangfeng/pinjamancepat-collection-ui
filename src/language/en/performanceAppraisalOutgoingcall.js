const msPerformanceAppraisalOutgoingcall = {
    //统计模块
    statistics:{ 
        //今日
        todayAmountTitle: 'Call volume today',//今日拨打量
        todayAmountTip: 'Cumulative total number of calls on the same day [call volume (user) + call volume (contact person)]',//当日累计总拨打次数【拨打量（用户）+拨打量（联系人）】
        todayAmountRealtimeCompare: 'Ring real-time compared with yesterday',//比昨日实时
        todayRateTitle: 'Connected Rate Today',//今日接通率
        todayRateTip: 'Today’s cumulative total call volume : today’s cumulative total call volume * 100%',//今日累计总接通量 ÷ 今日累计总拨打量×100%
        todayRateAllDayCompare: 'Ring real-time compared with yesterday',//比昨日实时
        //本周
        weekAmountTitle: 'Cumulative calls this week',//本周累计拨打量
        weekAmountTip: 'Cumulative total calls this week [calls (users) +calls (contacts)]',//本周累计总拨打量【拨打量（用户）+拨打量（联系人）】
        weekAmountRealtimeCompare: 'Ring real-time (up/down) compared with last week',//比上周实时
        weekRateTitle: 'Cumulative connection rate this week',//本周累计接通率
        weekRateTip: 'This week’s cumulative total call volume : this week’s cumulative total call volume * 100%',//本周累计总接通量 ÷ 本周累计总拨打量×100%
        weekRateAllDayCompare: 'Ring real-time (up/down) compared with last week',//比上周实时
        //上周
        lastweekAmountTitle: 'Call volume last week',//上周拨打量
        lastweekAmountTip: 'Total calls last week [calls (users) +calls (contacts)]',//上周总拨打量【拨打量（用户）+拨打量（联系人）】
        lastweekRateTitle: 'Connected rate last week',//上周接通率
        lastweekRateTip: '	Last week’s total call volume : last week’s total call volume * 100%',//	上周总接通量÷ 上周总拨打量×100%
        //本月
        monthAmountTitle: 'Cumulative calls this month',//本月累计拨打量
        monthAmountTip: 'Cumulative total calls this month [calls (users) + calls (contacts)]',//本月累计总拨打量【拨打量（用户）+拨打量（联系人）】
        monthAmountRealtimeCompare: 'Ring real-time compared with last month',//比上月实时
        monthRateTitle: 'Accumulated connection rate this month',//本月累计接通率
        monthRateTip: 'This month’s cumulative total connection volume : this month’s cumulative total call volume * 100%',//本月累计总接通量 ÷ 本月累计总拨打量×100%
        monthRateAllDayCompare: 'Ring real-time compared with last month',//比上月实时
        //上月
        lastmonthAmountTitle: 'Call volume last month',//上月拨打量
        lastmonthAmountTip: 'Total calls last month [calls (users) +calls (contacts)]',//上月总拨打量【拨打量（用户）+拨打量（联系人）】
        lastmonthRateTitle: 'Connected rate last month',//上月接通率
        lastmonthRateTip: 'Last month’s total connection volume : last month’s total call volume * 100%',//上月累计催回本金 ÷ 上月累计分案本金×100%
    },
    infoTitle: {
        h: 'hour',//小时
        m: 'minute',//分钟
        s: 'second',//秒
    },
    searchCondition: {
        accountPeriod: 'Account period', //账期
        company: 'Company', //公司
        channel: 'Channels',//渠道
        connectTime: 'Call time', //通话时间
        accountPeriodPlaceHolder: 'Please select or search', //账期暗文
        companyPlaceHolder: 'Please select or search', //公司暗文
        connectTimePlaceHolder: 'Please select', //通话时间暗文
    },
    buttonTitle: {
        search: 'Inquire', //查询
        clear: 'Empty', //清空
    },
    searchResultColumnsHeader: [
        'Sorting number',
        'Account period',
        'Company',
        'Collector',//催收员
        'Total dial up',//总拨打量
        'Total dial up(user)',//拨打量(用户)
        'Total dial up(Contacts)',//拨打量(联系人)
        'Total Connected',//总接通量
        'Total Connected(user)',//接通量(用户)
        'Total Connected(Contacts)',//接通量(联系人)
        'Connected rate',//接通率
        'Total length of call',//总通话时长
        'Total length of call(user)',//通话时长(用户)
        'Total length of call(Contacts)'//通话时长(联系人)
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

export default msPerformanceAppraisalOutgoingcall