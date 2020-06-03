const msPerformanceAppraisalPayback = {
    //统计模块
    statistics:{ 
        //今日
        todayAmountTitle: 'Total Pengembalian hari ini',//今日回款金额
        todayAmountTip: 'Total Nominal Pengembalian hari ini (Pokok pengembalian+Pengembalian yg telat)',//当日累计回款金额（回款本金+回款逾期费）
        todayAmountRealtimeCompare: 'Dering real-time dibandingkan dengan kemarin',//比昨日实时
        todayRateTitle: 'Persentase Pengembalian hari ini',//今日回款率
        todayRateTip: 'Pengingat kumulatif real-time hari ini dari prinsipal : pokok pinjaman data hari ini * 100%',//今日实时累计催回本金 ÷ 今日分案本金×100%
        todayRateAllDayCompare: 'Dering real-time dibandingkan dengan kemarin',//比昨日实时
        //本周
        weekAmountTitle: 'Total Kumulatif Persentase Pengembalian Hari ini(Rp)',//本周累计回款金额(Rp)
        weekAmountTip: 'Jumlah pembayaran kumulatif real-time minggu ini (pokok ditambah biaya jatuh tempo)',//本周实时累计回款金额（回款本金+回款逾期费）
        weekAmountRealtimeCompare: 'Dering real-time (atas / bawah) dibandingkan dengan minggu lalu',//比上周实时
        weekRateTitle: 'Akumulasi Persentase Pengembalian Minggu ini',//本周累计回款率
        weekRateTip: 'Pengingat kumulatif real-time minggu ini dari pelaku : pokok skor kumulatif minggu ini * 100%',//本周实时累计催回本金÷本月累计分案本金×100%
        weekRateAllDayCompare: 'Dering real-time (atas / bawah) dibandingkan dengan minggu lalu',//比上周实时
        //上周
        lastweekAmountTitle: 'Nominal Pengembalian Minggu lalu(Rp)',//上周回款金额(Rp)
        lastweekAmountTip: 'Akumulasi jumlah pembayaran minggu lalu (pokok ditambah biaya jatuh tempo)',//上周累计回款金额（回款本金+回款逾期费）
        lastweekRateTitle: 'Tingkat pembayaran minggu lalu',//上周回款率
        lastweekRateTip: 'Pengingat kumulatif kepala sekolah minggu lalu * pokok skor kumulatif minggu lalu * 100%',//上周累计催回本金 ÷ 上周累计分案本金×100%
        //本月
        monthAmountTitle: '	Akumulasi jumlah pembayaran bulan ini(Rp)',//本月累计回款金额(Rp)
        monthAmountTip: 'Jumlah pembayaran kumulatif real-time (pokok ditambah biaya tunggakan)',//本月实时累计回款金额（回款本金+回款逾期费）
        monthAmountRealtimeCompare: 'Dering real-time dibandingkan dengan bulan lalu',//比上月实时
        monthRateTitle: 'Akumulasi Tingkat Pengembalian untuk Bulan Ini',//本月累计回款率
        monthRateTip: 'Pengingat kumulatif real-time bulan ini untuk kepala sekolah ：dari nilai pokok kumulatif bulan ini * 100%',//本月实时累计催回本金÷本周/本月累计分案本金×100%
        monthRateAllDayCompare: 'Dering real-time dibandingkan dengan bulan lalu',//比上月实时
        //上月
        lastmonthAmountTitle: 'Jumlah pembayaran bulan lalu(Rp)',//上月回款金额(Rp)
        lastmonthAmountTip: 'Akumulasi jumlah pembayaran bulan lalu (pokok ditambah biaya jatuh tempo)',//上月累计回款金额（回款本金+回款逾期费）
        lastmonthRateTitle: 'Tingkat pengembalian bulan lalu',//上月回款率
        lastmonthRateTip: '	Akumulasi pemulihan pokok bulan lalu',//上月累计催回本金 ÷ 上月累计分案本金×100%
    },
    searchCondition: {
        accountPeriod: 'Periode akun', //账期
        company: 'Perusahaan', //公司
        channel: 'Saluran',//渠道
        caseTime: 'Waktu distribusi order', //分案时间
        repayTime: 'Waktu pelunasan', //还款时间
        accountPeriodPlaceHolder: 'Silahkan pilih atau cari', //账期暗文
        companyPlaceHolder: 'Silahkan pilih atau cari', //公司暗文
        caseTimePlaceHolder: 'Silahkan pilih', //分案时间暗文
    },
    buttonTitle: {
        search: 'Menanyakan', //查询
        clear: 'Kosong', //清空
    },
    searchResultColumnsHeader: [
        'Nomor urut',
        'Periode akun',
        'Perusahaan',
        'Nama',
        'Saluran',
        'Sebar data(pokok + service fee)',
        'Onvisional fee yang terlambat',
        'Jumlah pengguna',
        'Tagihkan(pokok + service fee)',
        'Melihat denda pinjaman',
        'Jumlah pengguna yang telah melunasi',
        'Tingkat pembayaran kembali',
        'Tingkat pengembalian',
        'Pembayaran hari in'
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

export default msPerformanceAppraisalPayback