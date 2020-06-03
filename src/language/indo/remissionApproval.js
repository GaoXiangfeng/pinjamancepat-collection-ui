const msRemissionApprovalIndo = {
    //审批列表页-表格-表头
    remissionListTitle: [
        'Operasi',//操作
        'Status Persetujuan',//审批状态
        'Waktu aplikasi',//申请时间
        'Nomor Telepon', //电话号码
        'Nomor Pesanan',//订单号
        'Hari yang terlambat',//逾期天数 
        'Amount to be repaid', //待还金额
        'Jumlah yang jatuh tempo',//逾期金额
        'Jumlah yang mengurangi',//减免金额
        'jumlah gembalian setelah dikurangi',//减免后应还
        'pemohon', //申请人
        'Perusahaan koleksi',//催收公司
        'Saluran aplikasi',//申请渠道
        'Instruksi mengurangi',//减免说明
        'Persetujuan',//审批人
    ],
    //审批状态
    approvalStatusList: [
        'Masih melamar',//申请中
        'Setuju',//同意
        'Menolak',//拒绝
        'membatalkan',//已撤销
    ],

    //表格数据
    orderTableData: [
        'Setuju', //同意
        'Menolak', //拒绝
        'Tidak ada data' , //'暂无数据'
        'Tidak ada data screening', //'暂无筛选数据'
        'Please select', //请选择,
    ],
    //订单列表页  --搜索条件
    orderSearchItem: {
        telephone: 'Nomor Telepon', //电话号码
        orderId: 'Nomor Pesanan',//订单号
        applicant: 'pemohon', //申请人
        approvalStatus: 'Status Persetujuan', //申批状态
        applicationDate: 'Waktu aplikasi', //申请时间
        search: 'Permintaan', //查询
        clear: 'Dikecualikan', //清空
        confirm: 'Konfirmasi',//确认
        cancel: 'Batal', //取消
        isConfirm: 'Apakah Anda setuju dengan pengurangan?', //是否同意／拒绝该减免
        isReject: 'Apakah akan menolak pengurangan?', //是否同意／拒绝该减免
    },
}

export default msRemissionApprovalIndo