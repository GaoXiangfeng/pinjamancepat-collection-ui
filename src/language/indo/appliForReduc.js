const msAppliForReduc = {
    //还款列表页-表格-表头
    searchConditon: {
        telephone: 'Nomor Telepon', //电话号码
        orderId: 'Nomor Pesanan',//订单号
        startAppliTime: 'Waktu aplikasi',//申请时间
        approvalState: 'Status Persetujuan',//审批状态
        search: 'Permintaan', //查询
        clear: 'Dikecualikan', //清空
        isConfirm: 'Apakah akan membatalkan pengurangan?', //确认撤销操作？
    },
    //审批状态列表
    approvalStateList: [
        'Masih melamar',//申请中
        'Setuju',//同意
        'Menolak',//拒绝
        'membatalkan',//已撤销
    ],
    searchResultColumnsHeader: [
        'Operasi',//操作
        'Waktu aplikasi',//申请时间
        'pemohon', //申请人
        'Nomor Telepon',//电话号码
        'Status Persetujuan',//审批状态
        'Nomor Pesanan',//订单号
        'Hari yang terlambat',//逾期天数
        'Amount to be repaid',//待还金额
        'Jumlah yang jatuh tempo',//逾期金额
        'Jumlah yang mengurangi',//减免金额
        'jumlah gembalian setelah dikurangi',//减免后应还
        'Instruksi mengurangi',//减免说明
    ],
    //表格数据
    searchResultTip: {
        0: 'cancel', //撤销
        1: 'Tidak ada data' ,//'暂无数据'
        2: 'Tidak ada data screening' ,//'暂无筛选数据'
        3: 'Please select'// 请选择
    },
}

export default msAppliForReduc