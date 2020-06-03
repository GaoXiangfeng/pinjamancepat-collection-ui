const msOutgoingcallDetail = {
    infoTitle: {
        h: 'jam',//小时
        m: 'menit',//分钟
        s: 'detik',//秒
    },
    searchCondition: {
        orderId: 'Nomor Pesanan', //订单号
    },
    buttonTitle: {
        search: 'Menanyakan', //查询
    },
    searchResultColumnsHeader: [
        'Nomor urut',//序号
        'Nomor Pesanan',//订单号
        'Total Panggilan',//总拨打量
        'Total Panggilan(pengguna)',//拨打量(用户)
        'Total Panggilan(Kontak)',//拨打量(联系人)
        'total tersambung',//总接通量
        'total tersambung(pengguna)',//接通量(用户)
        'total tersambung(Kontak)',//接通量(联系人)
        'Total panjang panggilan',//总通话时长
        'Total panjang panggilan(pengguna)',//通话时长(用户)
        'Total panjang panggilan(Kontak)'//通话时长(联系人)
    ],
    searchResultTotal: {
        0: 'Total'
    },
    //表格数据
    searchResultTip: {
        0: 'Kembali', //撤销
        1: 'Tidak ada data' ,//'暂无数据'
        2: 'Tidak ada data filter' ,//'暂无筛选数据'
        3: 'Silahkan pilih'
    },
    operationTips: { //操作提示
        0: '', //不能只选择分案时间进行查询
    }
}

export default msOutgoingcallDetail