export default {
    //***********手动分案列表**************
    searchCondition:{ //搜索条件
        orderId: 'Nomor Pesanan', //订单号
        belongTo: 'Attribution', //归属
        accountPeriod: 'Periode akun', //账期
        repayDate: 'Harus melunasi waktu', //应还款日
        lastRepay: 'Pelunasan baru-baru ini', //最近还款
        expectedRepay: 'Pembayaran yang diharapkan', //预计还款
        search: 'Permintaan', //查询
        distribute: 'Distribusi', //分配
        clear: 'Dikecualikan', //清空
        collStatus: 'Status koleksi', //催收状态
        collCompany: 'Perusahaan koleksi', //催收公司
        channel: 'Saluran aplikasi'
    },

    collectionStatus:{ //催收状态
        1: 'Belum Dihubungi',//未催收
        2: 'Tidak Dapat Dihubungi',//失联
        3: 'Pemalsuan',//欺诈
        4: 'Tidak ada niat untuk membayar',//无还款意愿
        5: 'Berjanji untuk membayar',//承诺还款
        6: 'Debt Coolector',//上门催收
        10: 'Kontak menghubungi peminjam',//联系人转告
        11: 'Kesulitan pendanaan',//资金困难
    },
    
    searchResultColumnsHeader:[ //查询列表表头
        '全选',//全选
        'Nomor Pesanan',//订单号
        'Attribution',//归属
        'Perusahaan koleksi',//公司
        'Status koleksi',//催收状态
        'Harus melunasi waktu',//应还款日
        'Pelunasan baru-baru ini',//最近还款
        'Koleksi baru',//最近催收
        'Jumlah pinjaman',//借款金额
        'Hari yang terlambat',//逾期天数 
        'Saluran aplikasi',//渠道 
    ],

    searchResultTip:{ //表格查询数据提示
        0: 'Lihat', //查看
        1: 'Bunga dulu kapital kemudian',//先息后本
        2: 'Tidak ada data' ,//'暂无数据'
        3: 'Tidak ada data screening' ,//'暂无筛选数据'
        4: 'Please select'
    },

    //***********弹窗文案*****************
    orderAssignModalText: {
        title: 'Alokasi pesanan',//案件分配
        companyName: 'Perusahaan',//公司
        accountPeriod: 'Akun',//账户
        confirm: 'Konfirmasikan',//确认
        cancel: 'Membatalkan',//取消
        isConfrimAssignOrder: 'Apakah Anda mengkonfirmasi distribusi kasus ini?',//是否确认分配案件？,
        placeholder: 'Please select',//请选择
        companyUncomplate: 'Informasi perusahaan tidak lengkap, harap perbaiki ~',//公司信息不全
        accountPeriodUncomplate: 'Informasi akun tidak lengkap, harap perbaiki ~',//账户信息不全
        companyRepeat: 'Perusahaan memiliki duplikat！',
        assignSuccess: 'Pembagian yang sukses！'//分案成功
    }
}