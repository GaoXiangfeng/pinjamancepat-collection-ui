/**
 * Created by sunxiaoying on 2017/12/12.
 */
const msCollectionListIndo = {
    collectionTab: {
        1: 'Belum Dihubungi',//未催收
        2: 'Tidak Dapat Dihubungi',//失联
        3: 'Pemalsuan',//欺诈
        4: 'Tidak ada niat untuk membayar',//无还款意愿
        5: 'Berjanji untuk membayar',//承诺还款
        6: 'Debt Coolector',//上门催收
        7: 'Pemberitahuan kontak',//客户投诉
        10: 'Kontak menghubungi peminjam',//联系人转告
        11: 'Kesulitan pendanaan',//资金困难
    },

    //催收列表页-表格-表头
    collectionListTitle: [
        'Operasi',//操作
        'Attribution',//归属 
        'Nomor Telepon', //电话号码
        'Nomor Pesanan',//订单号
        'Status koleksi',//催收状态
        'Label pelanggan',//客户标签
        'Hari yang terlambat',//逾期天数 
        'Harus melunasi waktu',//应还款日
        'Pelunasan baru-baru ini',//最近还款
        'Koleksi baru',//最近催收
        'Pembayaran yang diharapkan',//预计还款
        'Jumlah pinjaman',//借款金额
        'Perusahaan koleksi',//公司
        'Saluran aplikasi',//渠道 
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
        expectedRepay: 'Pembayaran yang diharapkan', //预计还款
        other: 'Lainnya',//其他
        selectThanThree: 'Case yang tidak di follow up selama lebih dr 3 hari',//3天以上未跟进的案件
        search: 'Permintaan', //查询
        clear: 'Dikecualikan', //清空
        collStatus: 'Status koleksi', //催收状态
        collCompany: 'Perusahaan koleksi', //催收公司
        channel: 'Saluran aplikasi',
        customerLabel: 'Label pelanggan',//客户标签
    },
    //客户标签
    customerLabelList: [
        {
            key: '1',
            value: 'Pekerjaan khusus'//特殊职业
        },{
            key: '2',
            value: 'Pelanggan yang melakukan pembayaran kembali'//复贷客户
        },{
            key: '3',
            value: 'Multi-loan users'//多贷客户
        }
    ]
}

export default msCollectionListIndo
