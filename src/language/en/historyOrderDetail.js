const msHistoryOrderDetail = {
    //用户信息-四个标题-后端返回数据的文案
    cardTitle: {
        //标题
        callBook: 'Call Book',//本地通讯录
        message: 'Message',//本地短信
        callRecord: 'Call Records',//通话记录
        reviewInfo: 'Audit information',//审核信息
    },
    //审核信息 表头
    columnAuditInfoTitle: {
        0: 'Review time',//审核时间
        1: 'Review stage',//审核阶段
        2: 'Audit results',//审核结果
        3: 'Auditors',//审核人员
        4: 'Audit opinion',//审核意见
    },
    //审核阶段
    auditLevel: {
        0: 'Unreviewed',//未审核
        1: 'Preliminary stage',//初审阶段
        4: 'Machine review stage',//机审阶段
        5: 'Final stage',//终审阶段
    },
    //审核结果
    auditResult: {
        0: 'Unreviewed',//未审核
        1: 'First trial passed',//初审通过
        4: 'Machine audit passed',//机审通过
        5: 'Final review',//终审通过
    },
    //用户信息-本地通讯录-表头
    userCallBookTitle: {
        0: 'Name',//姓名
        1: 'Phone number',//电话
        2: 'Number of contacts',//联系次数
        3: 'Total number of calls',//总呼叫次数
        4: 'Calls today'//今日呼叫次数
    },
    //用户信息-本地短信-表头
    userMessageTitle: {
        0: 'Name',//姓名
        1: 'Phone number',//手机号
        2: 'Receive and send time',//收发时间
        3: 'Have read',//已读
        4: 'SMS type',//短信类型
        5: 'SMS content',//短信内容
    },

    //用户信息-本地通话记录-表头
    userCallRecordTitle: {
        0: 'Name',//姓名
        1: 'Phone number',//手机号
        2: 'Call time',//通话时间
        3: 'Length of talk',//通话时长
        4: 'Type of call',//通话类型
        5: 'Status of call',//通话状态
    },
    //拒绝、通过
    actionText: [
        {
            key: '2',
            value: 'Losing contact'
        }, {
            key: '3',
            value: 'Fraud'
        },{
            key: '4',
            value: 'No repayment Willingness'
        },{
            key: '5',
            value: 'Promised repayment'
        },{
            key: '6',
            value: 'Home collection'
        }
    ],
    //反馈情况
    feedbackList: [
        {
            key: '0',
            value: 'Said no money, can delay the repayment'//表示没钱，可以延后还款
        }, {
            key: '1',
            value: 'Only return the principal'//表示只归还本金
        },{
            key: '2',
            value: 'Now no work, no income repayment'//现在没工作，没收入还款
        },{
            key: '3',
            value: 'Relatives or friends can help repay their debts'//亲属或者朋友表示可以帮其归还欠款
        },{
            key: '4',
            value: 'Customer explicitly told that is not repayment'//客户明确告知就是不还款
        },{
            key: '5',
            value: "Can't contact the customer, relatives or friends can help inform the repayment"//联系不上客户本人，亲属或者朋友可以帮助告知还款
        },{
            key: '6',
            value: 'Customer lose contact'
        },{
            key: '7',
            value: 'Other'
        }
    ],
    searchResultTip: {
        0: 'Check', //查看
        1: 'No data' ,//'暂无数据'
        2: 'No screening data' ,//'暂无筛选数据'
        3: 'Please select'
    },
    tableContent: { //表格内字段
        haveRead: 'Have read',//已读
        unread: 'unread',//未读
        receive: 'receive',//接收
        send: 'send',//发送
        h: 'hour',//小时
        m: 'minute',//分钟
        s: 'second',//秒
        out:'exhale',//呼出
        in:'Inbound',//呼入
        no: 'Not connected',//未接通
        unknown: 'Unknown',//未知
    },
}

export default msHistoryOrderDetail