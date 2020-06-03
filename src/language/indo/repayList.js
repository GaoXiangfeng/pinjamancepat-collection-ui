const msRepayListIndo = {
    repayTab: {
        '0': 'Semua Pesanan',//所有订单
    },
    //还款列表页-表格-表头
    repayListTitle: [
        'Operasi',//操作
        'Attribution',//归属 
        'Nomor Telepon', //电话号码
        'Nomor Pesanan',//订单号
        'Harus melunasi waktu',//应还款日
        'Pelunasan baru-baru ini',//最近还款
        'Koleksi baru',//最近催收
        'Jumlah pinjaman',//借款金额
        'Hari yang terlambat',//逾期天数
    ],
    //表格数据
    orderTableData: {
        0: 'Lihat', //查看
        1: 'Bunga dulu kapital kemudian',//先息后本
        2: 'Tidak ada data',//'暂无数据'
        3: 'Tidak ada data screening',//'暂无筛选数据'
        4: 'Please select', //请选择
    },
    //订单列表页  --搜索条件
    orderSearchItem: {
        telephone: 'Nomor Telepon', //电话号码
        orderId: 'Nomor Pesanan',//订单号
        belongTo: 'Attribution', //归属
        accountPeriod: 'Periode akun', //账期
        repayDate: 'Harus melunasi waktu', //应还款日
        lastRepay: 'Pelunasan baru-baru ini', //最近还款
        lastCollection: 'Koleksi baru', //最近催收
        colleOrders: 'Recall orders', //催回单数
        colleAmount: 'Recall principal', //催回本金
        overdueAmount: 'Biaya keterlambatan',//逾期费用
        search: 'Permintaan', //查询
        clear: 'Dikecualikan', //清空
    },
}

export default msRepayListIndo