const msPerformanceAppraisalOutgoingcall = {
    //统计模块
    statistics:{ 
        //今日
        todayAmountTitle: '今日拨打量',//今日拨打量
        todayAmountTip: '当日累计总拨打次数【拨打量（用户）+拨打量（联系人）】',//当日累计总拨打次数【拨打量（用户）+拨打量（联系人）】
        todayAmountRealtimeCompare: '比昨日实时',//比昨日实时
        todayRateTitle: '今日接通率',//今日接通率
        todayRateTip: '今日累计总接通量 ÷ 今日累计总拨打量×100%',//今日累计总接通量 ÷ 今日累计总拨打量×100%
        todayRateAllDayCompare: '比昨日实时',//比昨日实时
        //本周
        weekAmountTitle: '本周累计拨打量',//本周累计拨打量
        weekAmountTip: '本周累计总拨打量【拨打量（用户）+拨打量（联系人）】',//本周累计总拨打量【拨打量（用户）+拨打量（联系人）】
        weekAmountRealtimeCompare: '比上周实时',//比上周实时
        weekRateTitle: '本周累计接通率',//本周累计接通率
        weekRateTip: '本周累计总接通量 ÷ 本周累计总拨打量×100%',//本周累计总接通量 ÷ 本周累计总拨打量×100%
        weekRateAllDayCompare: '比上周实时',//比上周实时
        //上周
        lastweekAmountTitle: '上周拨打量',//上周拨打量
        lastweekAmountTip: '上周总拨打量【拨打量（用户）+拨打量（联系人）】',//上周总拨打量【拨打量（用户）+拨打量（联系人）】
        lastweekRateTitle: '上周接通率',//上周接通率
        lastweekRateTip: '上周总接通量÷ 上周总拨打量×100%',//	上周总接通量÷ 上周总拨打量×100%
        //本月
        monthAmountTitle: '本月累计拨打量',//本月累计拨打量
        monthAmountTip: '本月累计总拨打量【拨打量（用户）+拨打量（联系人）】',//本月累计总拨打量【拨打量（用户）+拨打量（联系人）】
        monthAmountRealtimeCompare: '比上月实时',//比上月实时
        monthRateTitle: '本月累计接通率',//本月累计接通率
        monthRateTip: '本月累计总接通量 ÷ 本月累计总拨打量×100%',//本月累计总接通量 ÷ 本月累计总拨打量×100%
        monthRateAllDayCompare: '比上月实时',//比上月实时
        //上月
        lastmonthAmountTitle: '上月拨打量',//上月拨打量
        lastmonthAmountTip: '上月总拨打量【拨打量（用户）+ 拨打量（联系人）】',//上月总拨打量【拨打量（用户）+拨打量（联系人）】
        lastmonthRateTitle: '上月接通率',//上月接通率
        lastmonthRateTip: '	上月总接通量÷ 上月总拨打量×100%',//上月累计催回本金 ÷ 上月累计分案本金×100%
    },
    infoTitle: {
        h: '小时',//小时
        m: '分钟',//分钟
        s: '秒',//秒
    },
    searchCondition: {
        accountPeriod: '账期', //账期
        company: '公司', //公司
        channel: '渠道',//渠道
        connectTime: '通话时间', //通话时间
        accountPeriodPlaceHolder: '请选择或搜索', //账期暗文
        companyPlaceHolder: '请选择或搜索', //公司暗文
        connectTimePlaceHolder: '请选择', //通话时间暗文
    },
    buttonTitle: {
        search: '查询', //查询
        clear: '清空', //清空
    },
    searchResultColumnsHeader: [
        '序号',//序号
        '账期',//账期
        '公司',//公司
        '催收员',//催收员
        '总拨打量',//总拨打量
        '拨打量(用户)',//拨打量(用户)
        '拨打量(联系人)',//拨打量(联系人)
        '总接通量',//总接通量
        '接通量(用户)',//接通量(用户)
        '接通量(联系人)',//接通量(联系人)
        '接通率',//接通率
        '总通话时长',//总通话时长
        '通话时长(用户)',//通话时长(用户)
        '通话时长(联系人)'//通话时长(联系人)
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

export default msPerformanceAppraisalOutgoingcall