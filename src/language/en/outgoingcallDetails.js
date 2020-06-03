const msOutgoingcallDetail = {
    infoTitle: {
        h: 'hour',//小时
        m: 'minute',//分钟
        s: 'second',//秒
    },
    searchCondition: {
        orderId: 'Order number', //订单号
    },
    buttonTitle: {
        search: 'Inquire', //查询
    },
    searchResultColumnsHeader: [
        'Sorting number',//序号
        'Order number',//订单号
        'Total dial up',//总拨打量
        'Total dial up(user)',//拨打量(用户)
        'Total dial up(Contacts)',//拨打量(联系人)
        'Total Connected',//总接通量
        'Total Connected(user)',//接通量(用户)
        'Total Connected(Contacts)',//接通量(联系人)
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
        0: '', //不能只选择分案时间进行查询
    }
}

export default msOutgoingcallDetail