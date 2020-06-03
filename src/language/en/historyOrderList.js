const msHistoryOrderList = {
    pageTitle: {
        historyOrder: 'Historical order',
    },
    btnTitle: {
        watch: 'Check',
        close: 'Close',
    },
    searchResultColumnHeaders: [
        '',
        'Order number',
        'Create time',
        'Audit result',
        'Closing time',
        'Repayment count',
        'Overdue days',
    ],
    orderStatus:{
        0: 'Unapplied orders',//未申请订单
        1: 'Applied successfully',//申请成功
        2: 'Under audit',//审核中
        3: 'Audit rejected',//审核拒绝
        4: 'Audit passed',//审核通过
        5: 'Loan failed',//放款失败
        6: 'Loan successfull',//放款成功
        7: 'Loans settled',//贷款结清
    },
    searchResultTip: {
        0: 'Check', //查看
        1: 'No data' ,//'暂无数据'
        2: 'No screening data' ,//'暂无筛选数据'
        3: 'Please select'
    }
}

export default msHistoryOrderList