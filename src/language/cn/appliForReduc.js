const msAppliForReduc = {
    //还款列表页-表格-表头
    searchConditon: {
        telephone: '电话号码', //电话号码
        orderId: '订单号',//订单号
        startAppliTime: '申请时间',//申请时间
        approvalState: '审批状态',//审批状态
        search: '查询', //查询
        clear: '清空', //清空
        confirm: '确认',//确认
        cancel: '取消', //取消
        isConfirm: '是否撤销该减免?', //确认撤销操作？
    },
    //审批状态列表
    approvalStateList: [
        '申请中',//申请中
        '同意',//同意
        '拒绝',//拒绝
        '已撤销',//已撤销
    ],
    searchResultColumnsHeader: [
        '操作',
        '申请时间',
        '申请人',
        '电话号码',
        '审批状态',
        '订单号',
        '逾期天数',
        '待还金额',
        '逾期金额',
        '减免金额',
        '减免后应还',
        '减免说明',
    ],
    //表格数据
    searchResultTip: {
        0: '撤销', //撤销
        1: '无数据' ,//'暂无数据'
        2: '暂无筛选数据' ,//'暂无筛选数据'
        3: '请选择'
    },
}

export default msAppliForReduc