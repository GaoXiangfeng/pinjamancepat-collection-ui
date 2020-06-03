const msOutgoingcallDetail = {
    infoTitle: {
        h: '小时',//小时
        m: '分钟',//分钟
        s: '秒',//秒
    },
    searchCondition: {
        orderId: '订单号', //订单号
    },
    buttonTitle: {
        search: '查询', //查询
    },
    searchResultColumnsHeader: [
        '序号',//序号
        '订单号',//订单号
        '总拨打量',//总拨打量
        '拨打量(用户)',//拨打量(用户)
        '拨打量(联系人)',//拨打量(联系人)
        '总接通量',//总接通量
        '接通量(用户)',//接通量(用户)
        '接通量(联系人)',//接通量(联系人)
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
        0: '', //不能只选择分案时间进行查询
    }
}

export default msOutgoingcallDetail