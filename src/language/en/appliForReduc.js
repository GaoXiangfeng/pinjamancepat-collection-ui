const msAppliForReduc = {
    //搜索条件
    searchConditon: {
        telephone: 'Phone Number', //电话号码
        orderId: 'Order Number',//订单号
        startAppliTime: 'Application time',//申请时间
        approvalState: 'Approval Status',//审批状态
        search: 'Search', //查询
        clear: 'Clear', //清空
        isConfirm: 'Whether to revoke the relief?', //确认撤销操作？
    },
    //审批状态列表
    approvalStateList: [
        'Applying',//申请中
        'agree',//同意
        'Refuse',//拒绝
        'Revoked',//已撤销
    ],
    //表头
    searchResultColumnsHeader: [
        'Operasi',//操作
        'Application time',//申请时间
        'Applicant',//申请人
        'Nomor Telepon',//电话号码
        'Approval Status',//审批状态
        'Nomor Pesanan',//订单号
        'Hari yang terlambat',//逾期天数
        'Amount to be repaid',//待还金额
        'Overdue amount',//逾期金额
        'Relief amount',//减免金额
        'Refund after',//减免后应还
        'Relief instructions',//减免说明
    ],
    //表格数据
    searchResultTip: {
        0: 'Undo', //撤销
        1: 'No data' ,//'暂无数据'
        2: 'No screening data' ,//'暂无筛选数据'
        3: 'Please select'
    },
}

export default msAppliForReduc