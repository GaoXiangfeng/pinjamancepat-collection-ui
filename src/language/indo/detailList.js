const msDetailListIndo = {
    //订单列表-详情页
    detailCardData: [
        {
            label: 'Informasi Pesanan', //订单信息
            tab: true
        }, {
            label: 'Informasi Pengguna', //用户信息
            tab: true
        }, {
            label: 'Catatan Pelunasan',//还款记录
            tab: true
        }, {
            label: 'Kumpulkan Catatan', //催收记录
            tab: true
        }, {
            label: 'Urutan historis', //历史订单
            tab: true
        }
    ],

    //订单信息-标题
    orderTitle: {
        orderInfo: 'Informasi Pesanan', //订单信息
        bankInfo: 'Informasi Rekening Bank Peminjam', //放款银行信息
        repayBankInfo: 'Informasi Rekening Bank Pembayar', //还款银行信息
        reviewInfo: 'Informasi audit',//审核信息
    },

    //订单信息-订单信息
    userOrderInfo: [
        {
            label: 'Keadaan Pinjaman',//贷款状态
            key: 'orderStatus',
            value: '',//值
        }, {
            label: 'Nama Pinjaman',//贷款名称
            key: 'loanName',
            value: '',//值
        }, {
            label: 'Jumlah Uang Pinjaman',//借款金额
            key: 'principal',
            value: '',//值
        }, {
            label: 'Ongkos Prosedur',//砍头费
            key: 'interest', //
            value: '',//值
        }, {
            label: 'Jumlah Hari Pinjaman',//借款天数
            key: 'days',
            value: '',//值
        }, {
            label: 'Suku Bunga',//利率
            key: 'rate', //
            value: '',//值
        }, {
            label: 'Metode Suku Bunga',//计息方式
            key: 'rateType',
            value: '',//值
        }, {
            label: 'Waktu Mengajukan Pesanan',//申请时间
            key: 'orderTime',
            value: '',//值
        }
    ],

    //订单信息-放款银行账号
    userBankInfo: [
        {
            label: 'Nama Pemegang Kartu',//持卡人姓名
            key: 'applyUserName',
            value: '',//值
        }, {
            label: 'Nomor Identitas',//身份证号
            key: 'idCardNo',
            value: '',//值
        }, {
            label: 'Advance Ai Hasil',//风控校验账户姓名
            key: 'verifyUserName',
            value: '',//值
        }, {
            label: 'Nama Bank',//银行名称
            key: 'bankName', //
            value: '',//值
        }, {
            label: 'Rekening Bank',//银行账号
            key: 'bankAccount',
            value: '',//值
        }, {
            label: 'Pengecekan Nama',//姓名规则校验
            key: 'authStatus',
            value: '',//值
        }, {
            label: 'Saluran pinjaman',//放款渠道
            key: 'fundingName',
            value: '',//值
            color: ''
        }
    ],

    //订单信息-还款银行账号信息
    userPayInfo: [
        {
            label: 'Code Pembayaran Bank',//银行付款码
            value: ''
        }, {
            label: 'Nama Bank',//银行名称
            value: ''
        }
    ],

    //后端返回的订单详情的国际化
    //订单信息-贷款状态
    loanTypeText: {
        0: 'Pesanan yang belum diajukan',//未申请订单
        1: 'Aplikasi berhasil',//申请成功
        2: 'Sedang diperiksa',//审核中
        3: 'Sitolak&nbsp; pemeriksaan',//审核拒绝
        4: 'Lulus pemeriksaan',//审核通过
        5: 'Peminjaman gagal',//放款失败
        6: 'Sudah dipinjamkan',//放款成功
        7: 'Sudah dilunasi',//贷款结清
    },

    //订单详情-借款天数
    loanDay: 'hari',

    //订单详情-利率
    rate: 'Suku Bunga Harian',

    //订单详情-计息方式
    rateTypeText: {
        0: 'Bunga dulu kapital kemudian'
    },

    //放款银行账号-姓名规则校验
    nameValid: {
        0: 'Tidak diverifikasi',//未校验
        1: 'Memeriksa',//校验中
        2: 'Konsisten',//一致
        3: 'Tidak konsisten'//不一致
    },
    colorText: {
        0: 'info',
        1: 'warning',
        2: 'success',
        3: 'error'
    },

    //还款银行账号信息-为找到记录
    nonePay: 'Tidak ditemukan rekaman',

    //用户信息-四个标题-后端返回数据的文案
    userTitle: {
        //标题
        userInfo: 'Informasi Pengguna',//用户信息
        photo: 'Sertifikasi Foto',//认证照片
        emergencyContact: 'Kontak darurat',//紧急联系人
        callBook: 'Kontak Lokal',//本地通讯录
        message: 'SMS Lokal',//本地短信
        callRecord: 'Riwayat Panggilan',//通话记录
        //认证照片
        lastPhoto: 'Foto Kali Terakhir',//上次图片
        recentPhoto: 'Foto Kali Ini',//本次照片
        //button
        phone: 'omor HP',//手机号
        count: 'Frekuensi Hubungan',//联系次数
        sendOrAcceptTime: 'waktu kirim',//收发时间
        callTime: 'waktu panggila',//通话时间
        callDuration: 'duriasi panggilan',//通话时长
        //短信列表返回的数据的文案
        haveRead: 'sudah dibaca',//已读
        unread: 'belum dibaca',//未读
        receive: 'diterima',//接收
        send: 'kirim',//发送
        //时分秒、通话类型、通话状态
        h: 'jam',//小时
        m: 'menit',//分钟
        s: 'detik',//秒
        out: 'pemanggil',//呼出
        in: 'penjawab',//呼入
        reject: 'ditolak',//拒接
        uncall: 'Tidak dipanggil',//未拨打
        no: 'tdk dijawab',//未接通
        yes: 'dijawab',//接通
        unknown: 'tidak diketahui',//未知
        powerOff: 'mati daya',//关机
        //还款记录
        repayRecord: 'Catatan pelunasan',//还款记录
        repayStatus: 'Status pelunasan',//还款状态
        //催收记录
        collectionTime: 'Collection time',//催收时间
        //submit
        status: 'Negara',
        expectRepayTime: 'Perkiraan waktu pelunasan',//预计还款时间
        feedback: 'Umpan balik',//反馈
        select: 'Silahkan pilih',//请选择
        customerLabel: 'Label pelanggan',//客户标签
        remark: 'Kterangan',//备注
        submit: 'Aju',//提交
        //通过、拒绝操作弹框
        title: 'Apakah akan menyerahkan operasi pengumpulan？',//是否提交审核操作
        confirm: 'Konfirmasi',//确认
        cancel: 'Batal',//取消
        goBack: 'Kembali',//返回订单列表页
        loading: 'Loading',//加载中
        isNeed: 'Silakan pilih waktu pelunasan！',
        isFeedBck: 'Silakan pilih umpan balik',//请选择反馈信息
        cutApplication: 'minta untuk mengurangi',//减免申请
        toRepay: 'minta untuk mengurangi:',//待还金额
        maxDeduction: 'maksimum Kurangi:',//减免上限
        deductionAmount: 'Jumlah yang mengurangi:',//减免金额
        msg: 'Instruksi mengurangi:',//减免说明
        cutError: 'Kurangi jumlah yang salah!',//减免金额错误
        numberInfo: 'Jumlah harus numerik dan lebih besar dari 0!',//金额必须为大于0的数字
        lengthError: 'Jumlah tempat desimal tidak boleh lebih dari dua！',//小数位数不能超过两位
        billRecord: 'Rekam catatan',//话单记录
        collRecordAdd: 'Tambahkan catatan koleksi ',//添加催收记录
        operation: 'Operasi', //操作
        sendMessage: 'Kirim pesan teks',//发送
        sendMessageTip: 'pengiriman pesan hari ini sudah mencapai batas',//今日发送数量已达上限
        sendMessageModal: 'kirim pesan pengingat?',//是否发送催收短信
    },
    //审核信息
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
    //用户信息
    userInfo: [
        {
            label: 'Nomor Telepon',//电话号码
            key: 'userPhoneNo',
            value: '',//值
        }, {
            label: 'Nama Asli',//真实姓名
            key: 'userName',
            value: '',//值
        }, {
            label: 'Nama Ibu',//母亲姓名
            key: 'motherName',
            value: '',//值
        }, {
            label: 'Jenis Kelamin',//男
            key: 'gender',
            value: '',//值
        }, {
            label: 'Nomor Identitas',//身份证号
            key: 'idCardNo',
            value: '',//值
        }, {
            label: 'Riwayat Pendidikan Resmi',//学历
            key: 'education',
            value: '',//值
        }, {
            label: 'Nomor Pajak',//税号
            key: 'taxNo',
            value: '',//值
        }, {
            label: 'Alamat Terinci',//详细地址
            key: 'deatailAddress',
            value: '',//值
        }, {
            label: 'Tujuan Pinjaman',//借款目的
            key: 'purpose',
            value: '',//值
        }, {
            label: 'Profesi',//职业
            key: 'occupation',
            value: '',//值
        }, {
            label: 'Gaji Bulanan',//月薪
            key: 'salary',
            value: '',//值
        }, {
            label: 'Hari Gajian',//发薪日
            key: 'payTime',
            value: '',//值
        }, {
            label: 'Nama Perusahaan',//公司名称
            key: 'companyName',
            value: '',//值
        }, {
            label: 'Nomor Telepon Perusahaan',//公司电话
            key: 'companyPhoneNo',
            value: '',//值
        }, {
            label: 'Alamat Perusahaan',//公司地址
            key: 'companyAddress',
            value: '',//值
        }
    ],

    //用户信息-联系人信息
    contactText: [
        {
            label: 'Nama Konta#1',//联系人姓名#1
            value: '',//值
        }, {
            label: 'Nama Konta#2',//联系人姓名#2
            value: '',//值
        }, {
            label: 'Hubungan Dengan Kontak#1',//联系人关系#1
            value: '',//值
        }, {
            label: 'Hubungan Dengan Kontak#2',//联系人关系#2
            value: '',//值
        }, {
            label: 'Nomor Telepon Kontak#1',//联系人电话#1
            value: '',//值
        }, {
            label: 'Nomor Telepon Kontak#2',//联系人电话#2
            value: '',//值
        }
    ],

    //用户信息-table无数据的展示
    tableNoText: 'Tidak ada data',

    //用户信息-认证照片
    userPhotoTitle: {
        0: 'Foto Sisi Muka',//正面照片
        1: 'Foto Anda Memegang Kartu',//手持照片
        2: 'Foto Bukti Gaji',//工资照片
        3: 'Mutasi rekening',//银行流水
        4: 'Foto Anda Memegang Kerja',//证件照片
    },
    //用户信息-紧急联系人-表头
    emergencyContactTitle: {
        0: 'Nama',//姓名
        1: 'Gender',//性别
        2: 'Hubungan',//关系
        3: 'Telepon',//电话
        4: 'Frekuensi Hubungan',//用户联系次数
        5: 'Jumlah total panggilan',//总呼叫次数
        6: 'Panggilan hari ini',//今日呼叫次数
    },
    //是否平台用户
    isPlatformUser: {
        0: 'ya',//是
        1: 'Tidak',//否
    },
    //用户信息-本地通讯录-表头
    userCallBookTitle: {
        0: 'Nama',//姓名
        1: 'Telepon',//手机号
        2: 'Frekuensi Hubungan',//联系次数
        3: 'Jumlah total panggilan',//总呼叫次数
        4: 'Panggilan hari ini',//今日呼叫次数
        5: 'Baik pengguna platform',//是否平台用户
    },
    //用户信息-本地短信-表头-已读-短信类型
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
        2: 'Duriasi Panggilan',//通话时长
        3: 'Waktu panggilan',//通话时间
        4: 'Jenis panggilan',//通话类型
        5: 'Keadaan panggilan',//通话状态
    },

    //用户信息-后端返回数据的对应text
    /**
     * genderText: 性别 professionText: 职业 educationText:学历  relationText: 关系 purposeText: 借款目的
     */
    genderText: {
        0: 'Perempuan',
        1: 'Lelaki'
    },
    occupationText: {
        0: 'Karyawan Swasta',//私人雇员
        1: 'Pengusaha',//企业家
        2: 'Karyawan Nasional',//国有企业员工
        3: 'Pegawai Negeri Sipil',//公务员
        4: 'Pelajar',//学生
        5: 'Polisi',//警察
        6: 'Pensiunan',//退休
        7: 'Dokter',//医生
        8: 'Pengacara',//律师
        9: 'Menganggur',//失业
        10: 'Other',//其他
    },
    educationText: {
        0: 'Sekolah Dasar',//小学
        1: 'SMP',//初中
        2: 'SMA',//高中
        3: 'Perguruan tinggi',//大专
        4: 'Universitas',//大学
        5: 'Master',//硕士
        6: 'Dr.',//博士
    },
    relationText: {
        0: 'Orang tua',//父母
        1: 'Jodoh',//配偶
        2: 'Anak',//孩子
        3: 'Kaum kerabat',//亲戚
        4: 'Sahabat',//朋友
        5: 'Teman sekerja',//同事
        6: 'Teman sekolah',//同学
        7: 'Partner koperasi',//合作伙伴

        8: 'Orang tua',//父母
        9: 'Jodoh',//配偶
        10: 'Anak',//孩子
        11: 'Saudara laki-laki atau perempuan',//兄弟姐妹
        12: 'Lainnya',//其他
        13: 'Sahabat',//朋友
        14: 'Teman sekerja',//同事
    },
    purposeText: {
        0: 'Kesehatan dan pengobatan',//健康医疗
        1: 'Pelunasan hutang',//偿还债务
        2: 'Merangkap jabatan dan memulai usaha',//兼职创业
        3: 'Produk digital',//数码产品
        4: 'Pendidikan dan pelatihan',//教育培训
        5: 'Kecantikan dan kosmetologi',//美容整形
        6: 'Perjalanan dan konsumsi',//旅行消费
        7: 'Mebel/dekorasi rumah',//家居／装修
        8: 'Penyewaan rumah',//租房
        9: 'Pengusahaan',//运营周转
        10: 'Pernikahan',//结婚
        11: 'Pembelian mobil',//买车
        12: 'Pembelian rumah',//买房
    },

    //还款记录-还款状态
    repayInfo: [
        {
            label: 'Waktu pinjaman',//借款天数
            key: 'days',
            value: '',//值
        }, {
            label: 'Jumblah pinjaman',//借款金额
            key: 'amount',
            value: '',//值
        }, {
            label: 'Hari keterlambatan',//逾期天数
            key: 'overdueDays',
            value: '',//值
        }, {
            label: 'Total tagihan',//应还金额
            key: 'repayAmount',
            value: '',//值
        }, {
            label: 'Jumblah tagihan',//总计已还
            key: 'alreadyRepay',
            value: '',//值
        }, {
            label: 'Pengurangan koleksi',//催收减免
            key: 'deductionAmount',
            value: '',//值
        }, {
            label: 'Total Perlu kembali',//总计待还
            key: 'toRepay',
            value: '',//值
        }
    ],

    //还款记录信息表头
    repayInfoTitle: {
        0: 'Waktu pelunasan',//还款时间
        1: 'Jumlah pelunasan',//还款金额
        2: 'Jenis pelunasan',//还款类型
        3: 'Metode pelunasan',//还款方式
        4: 'Apakah akan mengumpulkan bantuan',//是否催收减免还款
        5: 'Operator'//操作人
    },
    //后台返回是信息
    repayTypeText: {
        '0': 'Waktu jatuh tempo',//正常还款
        '1': 'Keterlambatan pembayaran',//逾期还款
    },
    repayText: {
        '1': 'pelunasan dari VA',//VA还款
        '2': 'pelunasan dari toko',//便利店还款
    },
    //是否减免还款
    isCutText: {
        '0': 'No',
        '1': 'Yes'
    },

    //催收记录
    collectionRecordTitle: {
        0: 'Waktu Penagihan',//催收时间
        1: 'Penerima',//催收人
        2: 'Telepon',
        3: 'Rekam catatan ID',
        4: 'Kumpulkan Status',//催收状态
        5: 'Perkiraan Waktu Pelunasan',//预计还款时间
        6: 'Label pelanggan',
        7: 'Umpan balik',
        8: 'Catatan'
    },
    //话单记录
    callBillRecordTitle: {
        0: 'Rekam catatan ID',
        1: 'Telepon',
        2: 'waktu panggila',
        3: 'duriasi panggilan',
        4: 'Alasan menggantung',
        5: 'Rekaman alamat',
        6: 'Penerima',
        7: 'Operasi',
    },
    //催收状态
    collectionStatus: {
        1: 'Belum dihubungi',//未催收
        2: 'Tidak dapat dihubungi',//失联
        3: 'Pemalsuan',//欺诈
        4: 'Tidak ada niat untuk membayar',//无还款意愿
        5: 'Berjanji untuk membayar',//承诺还款
        6: 'Debt coolector',//上门催收
        7: 'Keluhan pelanggan',//上门催收
        10: 'Kontak menghubungi peminjam',//联系人转告
        11: 'Kesulitan pendanaan',//资金困难
    },

    //最后的提交表单
    collectionForm: {
        status: '5',
        expectRepayTime: '',
        feedback: '',
        msg: '',
        label: ''
    },

    //拒绝、通过
    actionText: [
        {
            key: '2',
            value: 'Tidak dapat dihubungi'//失联
        }, {
            key: '3',
            value: 'Pemalsuan'//欺诈
        }, {
            key: '4',
            value: 'Tidak ada niat untuk membayar'//无还款意愿
        }, {
            key: '5',
            value: 'Berjanji untuk membayar'//承诺还款
        }, {
            key: '6',
            value: 'Debt coolector'//上门催收
        }, {
            key: '7',
            value: 'Keluhan pelanggan'//客户投诉
        }, {
            key: '8',
            value: 'Tidak membayar sesuai perjanjian'//承诺后未还款
        }, {
            key: '10',
            value: 'Kontak menghubungi peminjam',//联系人转告
        }, {
            key: '11',
            value: 'Kesulitan pendanaan',//资金困难
        }
    ],
    //反馈
    feedbackList: [
        {
            key: '0',
            value: 'Tidak ada uang, minta  menunda pelunasannya'//表示没钱，可以延后还款
        }, {
            key: '1',
            value: 'Hanya mengembalikan pokok pinjaman'//表示只归还本金
        }, {
            key: '2',
            value: 'Tidak ada pekerjaan, tidak ada pembayaran pinjaman'//现在没工作，没收入还款
        }, {
            key: '3',
            value: 'Kerabat dan teman bisa membantu bayar pinjaman'//亲属或者朋友表示可以帮其归还欠款
        }, {
            key: '4',
            value: 'Memutuskan untuk tidak membayar pinjaman'//客户明确告知就是不还款
        }, {
            key: '5',
            value: "Tidak dapat menghubungi pelanggan ,Kerabat dan teman bisa memberitahukan dia bayar pinjaman"//联系不上客户本人，亲属或者朋友可以帮助告知还款
        }, {
            key: '6',
            value: 'Tidak dapat menghubungi pelanggan'
        }, {
            key: '7',
            value: 'Lain'
        }
    ],
    //客户标签
    customerLabelList: [
        {
            key: '1',
            value: 'Pekerjaan khusus'//特殊职业
        }, {
            key: '2',
            value: 'Pelanggan yang melakukan pembayaran kembali'//复贷客户
        }, {
            key: '3',
            value: 'Multi-loan users'//多贷客户
        }
    ],
    hangupReasonList: [
        {
            key: '0',
            value: 'Permulaan'//初始
        },
        {
            key: '1',
            value: 'Telepon Normal (Nomor aktif dan tersambung)'//正常挂机，如果接通，不管是谁挂机都是此原因
        },
        {
            key: '2',
            value: 'Pengguna sibuk'//用户繁忙
        },
        {
            key: '3',
            value: 'Nomor aktif tapi tidak ada yang mengangkat dan si penelpon mematikan'//主叫挂机（未接通前主叫挂机，归为此原因）
        },
        {
            key: '4',
            value: 'Telpon habis pulsa, tidak aktif (tidak tersambung sama sekali)'//被叫不可达
        },
        {
            key: '5',
            value: 'Telepon aktif tapi tidak diangkat hingga dering terkakhir'//呼叫超时
        },
        {
            key: '6',
            value: 'Dan lainnya'//其他
        }
    ],

}

export default msDetailListIndo
