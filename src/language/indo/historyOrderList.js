const msHistoryOrderList = {
    pageTitle: {
        historyOrder: 'Urutan historis',
    },
    btnTitle: {
        watch: 'Lihat',
        close: 'Tutup',
    },
    searchResultColumnHeaders: [
        '',
        'Nomor pesanan',
        'Waktu pembuatan',
        'Hasil Periksa',
        'Batas terakhir',
        'Yang harus dikembalikan',
        'Hari keterlambatan',
    ],
    orderStatus:{
        0: 'Pesanan yang belum diajukan',//未申请订单
        1: 'Aplikasi berhasil',//申请成功
        2: 'Sedang diperiksa',//审核中
        3: 'Sitolak pemeriksaan',//审核拒绝
        4: 'Lulus pemeriksaan',//审核通过
        5: 'Peminjaman gagal',//放款失败
        6: 'Sudah dipinjamkan',//放款成功
        7: 'Sudah dilunasi',//贷款结清
    },
    searchResultTip: {
        0: 'Lihat', //查看
        1: 'Tidak ada data' ,//'暂无数据'
        2: 'Tidak ada data screening' ,//'暂无筛选数据'
        3: 'Please select'
    }
}

export default msHistoryOrderList