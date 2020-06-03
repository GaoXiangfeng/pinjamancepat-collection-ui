const msRemissionApprovalEn = {
    //审批列表页-表格-表头
    remissionListTitle: [
        'Action',//操作
        'Approval Status',//审批状态
        'Application time',//申请时间
        'Phone Number', //电话号码
        'Order Number',//订单号
        'Overdue days',//逾期天数 
        'Amount to be repaid', //待还金额
        'Overdue amount',//逾期金额
        'Relief amount',//减免金额
        'Refund after',//减免后应还
        'Applicant',//申请人
        'Collection company',//催收公司
        'Application channels',//申请渠道
        'Relief instructions',//减免说明
        'Approver',//审批人  
    ],
    //审批状态
    approvalStatusList: [
        'Applying',//申请中
        'agree',//同意
        'Refuse',//拒绝
        'Revoked',//已撤销
    ],

    //表格数据
    orderTableData: [
        'Agree', //同意
        'Reject ', //拒绝
        'No data' , //'暂无数据'
        'No screening data', //'暂无筛选数据'
        'Please select', //请选择,
    ],
    //订单列表页  --搜索条件
    orderSearchItem: {
        telephone: 'Phone number', //电话号码
        orderId: 'Order number',//订单号
        applicant: 'Applicant', //申请人
        approvalStatus: 'Approval Status', //申批状态
        applicationDate: 'Application time', //申请时间
        search: 'Search', //查询
        clear: 'Clear', //清空
        confirm: 'Confirm',//确认
        cancel: 'cancel', //取消
        isConfirm: 'Do you agree with the reduction?', //是否同意／拒绝该减免
        isReject: 'Whether to reject the reduction?', //是否同意／拒绝该减免
    },
}

export default msRemissionApprovalEn