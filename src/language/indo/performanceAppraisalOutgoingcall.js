const msPerformanceAppraisalOutgoingcall = {
    //统计模块
    statistics:{ 
        //今日
        todayAmountTitle: 'Jumlah Panggilan hari ini',//今日拨打量
        todayAmountTip: 'Jumlah total panggilan secara kumulatif pada hari yang sama [volume panggilan (pengguna) + volume panggilan (orang yang bisa dihubungi)]',//当日累计总拨打次数【拨打量（用户）+拨打量（联系人）】
        todayAmountRealtimeCompare: 'Dering real-time dibandingkan dengan kemarin',//比昨日实时
        todayRateTitle: 'Persentase panggilan tersambung Hari Ini',//今日接通率
        todayRateTip: 'Volume panggilan total kumulatif hari ini dibagi total volume panggilan kumulatif hari ini * 100%',//今日累计总接通量 ÷ 今日累计总拨打量×100%
        todayRateAllDayCompare: 'Dering real-time dibandingkan dengan kemarin',//比昨日实时
        //本周
        weekAmountTitle: 'Panggilan kumulatif minggu ini',//本周累计拨打量
        weekAmountTip: 'Total panggilan kumulatif minggu ini [panggilan (pengguna) + panggilan (kontak)]',//本周累计总拨打量【拨打量（用户）+拨打量（联系人）】
        weekAmountRealtimeCompare: 'Dering real-time (atas / bawah) dibandingkan dengan minggu lalu',//比上周实时
        weekRateTitle: 'Tingkat koneksi kumulatif minggu ini',//本周累计接通率
        weekRateTip: 'Volume panggilan total kumulatif minggu ini dibagi total volume panggilan kumulatif minggu ini * 100%',//本周累计总接通量 ÷ 本周累计总拨打量×100%
        weekRateAllDayCompare: 'Dering real-time (atas / bawah) dibandingkan dengan minggu lalu',//比上周实时
        //上周
        lastweekAmountTitle: 'Volume panggilan minggu lalu',//上周拨打量
        lastweekAmountTip: 'Total panggilan minggu lalu [panggilan (pengguna) + panggilan (kontak)]',//上周总拨打量【拨打量（用户）+拨打量（联系人）】
        lastweekRateTitle: 'Tingkat koneksi bulan lalu',//上周接通率
        lastweekRateTip: 'Volume panggilan total minggu lalu dibagi total volume panggilan minggu lalu * 100%',//	上周总接通量÷ 上周总拨打量×100%
        //本月
        monthAmountTitle: 'Panggilan kumulatif bulan ini',//本月累计拨打量
        monthAmountTip: 'Total panggilan kumulatif bulan ini [panggilan (pengguna) + panggilan (kontak)]',//本月累计总拨打量【拨打量（用户）+拨打量（联系人）】
        monthAmountRealtimeCompare: 'Dering real-time dibandingkan dengan bulan lalu',//比上月实时
        monthRateTitle: 'Tingkat koneksi terakumulasi bulan ini',//本月累计接通率
        monthRateTip: 'Volume koneksi total kumulatif bulan ini dibagi total volume panggilan kumulatif bulan ini * 100%',//本月累计总接通量 ÷ 本月累计总拨打量×100%
        monthRateAllDayCompare: 'Dering real-time dibandingkan dengan bulan lalu',//比上月实时
        //上月
        lastmonthAmountTitle: 'Volume panggilan bulan lalu',//上月拨打量
        lastmonthAmountTip: 'Total panggilan bulan lalu [panggilan (pengguna) + panggilan (kontak)]',//上月总拨打量【拨打量（用户）+拨打量（联系人）】
        lastmonthRateTitle: 'Tingkat koneksi bulan lalu',//上月接通率
        lastmonthRateTip: 'Total volume koneksi bulan lalu dibagi total volume panggilan bulan lalu * 100%',//上月累计催回本金 ÷ 上月累计分案本金×100%
    },
    infoTitle: {
        h: 'jam',//小时
        m: 'menit',//分钟
        s: 'detik',//秒
    },
    searchCondition: {
        accountPeriod: 'Periode akun', //账期
        company: 'Perusahaan', //公司
        channel: 'Saluran',//渠道
        connectTime: 'Waktu panggilan', //通话时间
        accountPeriodPlaceHolder: 'Silahkan pilih atau cari', //账期暗文
        companyPlaceHolder: 'Silahkan pilih atau cari', //公司暗文
        connectTimePlaceHolder: 'Silahkan pilih', //通话时间暗文
    },
    buttonTitle: {
        search: 'Menanyakan', //查询
        clear: 'Kosong', //清空
    },
    searchResultColumnsHeader: [
        'Nomor urut',
        'Periode akun',
        'Perusahaan',
        'Penagih',//催收员
        'Total Panggilan',//总拨打量
        'Total Panggilan(pengguna)',//拨打量(用户)
        'Total Panggilan(Kontak)',//拨打量(联系人)
        'total tersambung',//总接通量
        'total tersambung(pengguna)',//接通量(用户)
        'total tersambung(Kontak)',//接通量(联系人)
        'Tingkat tersambung',//接通率
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
        0: 'Anda tidak bisa hanya memilih waktu distribusi pesanan untuk mencari', //不能只选择分案时间进行查询
        1: 'Saluran,Periode akun dan perusahaan tidak boleh kosong pada saat yang bersamaan', //不能只选择分案时间进行查询
    }
}

export default msPerformanceAppraisalOutgoingcall