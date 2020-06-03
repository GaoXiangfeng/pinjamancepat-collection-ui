const msHistoryOrderDetail = {
    //用户信息-四个标题-后端返回数据的文案
    cardTitle: {
        //标题
        callBook: 'Kontak Lokal',//本地通讯录
        message: 'SMS Lokal',//本地短信
        callRecord: 'Riwayat Panggilan',//通话记录
        reviewInfo: 'Informasi audit',//审核信息
    },
    //审核信息 表头
    columnAuditInfoTitle: {
        0: 'Tinjau waktu',//审核时间
        1: 'Tahap peninjauan',//审核阶段
        2: 'Hasil audit',//审核结果
        3: 'Peninjau',//审核人员
        4: 'Opini audit',//审核意见
    },
    //审核阶段
    auditLevel: {
        0: 'Tidak direview',//未审核
        1: 'Tahap awal',//初审阶段
        4: 'Tahap tinjauan mesin',//机审阶段
        5: 'Tahap akhir',//终审阶段
    },
    //审核结果
    auditResult: {
        0: 'Tidak direview',//未审核
        1: 'Uji coba pertama berlalu',//初审通过
        4: 'Audit mesin lulus',//机审通过
        5: 'Ulasan akhir',//终审通过
    },
    //用户信息-本地通讯录-表头
    userCallBookTitle: {
        0: 'Nama',//姓名
        1: 'Nomor HP',//手机号
        2: 'Frekuensi Hubungan',//联系次数
        3: 'Jumlah total panggilan',//总呼叫次数
        4: 'Panggilan hari ini'//今日呼叫次数
    },
    //用户信息-本地短信-表头
    userMessageTitle: {
        0: 'Nama',//姓名
        1: 'Nomor HP',//手机号
        2: 'Waktu Kirim',//收发时间
        3: 'Sudah Dibaca',//已读
        4: 'Jenis SMS',//短信类型
        5: 'Isi SMS',//短信内容
    },

    //用户信息-本地通话记录-表头
    userCallRecordTitle: {
        0: 'Nama',//姓名
        1: 'Nomor HP',//手机号
        2: 'Waktu panggilan',//通话时间
        3: 'Duriasi Panggilan',//通话时长
        4: 'Jenis panggilan',//通话类型
        5: 'Keadaan panggilan',//通话状态
    },
    //拒绝、通过
    actionText: [
        {
            key: '2',
            value: 'Tidak dapat dihubungi'//失联
        }, {
            key: '3',
            value: 'Pemalsuan'//欺诈
        },{
            key: '4',
            value: 'Tidak ada niat untuk membayar'//无还款意愿
        },{
            key: '5',
            value: 'Berjanji untuk membayar'//承诺还款
        },{
            key: '6',
            value: 'Debt coolector'//上门催收
        }
    ],
    //反馈情况
    feedbackList: [
        {
            key: '0',
            value: 'Tidak ada uang, minta  menunda pelunasannya'//表示没钱，可以延后还款
        }, {
            key: '1',
            value: 'Hanya mengembalikan pokok pinjaman'//表示只归还本金
        },{
            key: '2',
            value: 'Tidak ada pekerjaan, tidak ada pembayaran pinjaman'//现在没工作，没收入还款
        },{
            key: '3',
            value: 'Kerabat dan teman bisa membantu bayar pinjaman'//亲属或者朋友表示可以帮其归还欠款
        },{
            key: '4',
            value: 'Memutuskan untuk tidak membayar pinjaman'//客户明确告知就是不还款
        },{
            key: '5',
            value: "Tidak dapat menghubungi pelanggan ,Kerabat dan teman bisa memberitahukan dia bayar pinjaman"//联系不上客户本人，亲属或者朋友可以帮助告知还款
        },{
            key: '6',
            value: 'Tidak dapat menghubungi pelanggan'
        },{
            key: '7',
            value: 'Lain'
        }
    ],
    searchResultTip: {
        0: 'Lihat', //查看
        1: 'Tidak ada data' ,//'暂无数据'
        2: 'Tidak ada data screening' ,//'暂无筛选数据'
        3: 'Please select'
    },
    tableContent: { //表格内字段
        haveRead: 'sudah dibaca',//已读
        unread: 'belum dibaca',//未读
        receive: 'diterima',//接收
        send: 'kirim',//发送
        h: 'jam',//小时
        m: 'menit',//分钟
        s: 'detik',//秒
        out:'pemanggil',//呼出
        in:'penjawab',//呼入
        no: 'tdk dijawab',//未接通
        unknown: 'tidak diketahui',//未知
    },
}

export default msHistoryOrderDetail