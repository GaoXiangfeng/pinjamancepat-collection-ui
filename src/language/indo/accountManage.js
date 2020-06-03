const msAccountManage = {
    roleList:[ //账期管理主页面人员列表
        {id: 2, name:'Perekrut', key: 'AUDITOR'},
        {id: 3, name:'Administrator perusahaan', key: 'MANAGER_AUDITOR'},
    ],
    statusList:[ //账期管理主页面状态列表
        {id: '1', name:'Mengaktifkan'}, //启用
        {id: '0', name:'Nonaktifkan'}, //禁用
    ],
    searchCondition: {
        role: 'Karakter ', //角色
        rolePlaceHolder: 'Silahkan pilih', //状态暗文
        state: 'Status', //状态
        statePlaceHolder: 'Silahkan pilih', //状态暗文
    },
    buttonTitle: {
        search: 'Menanyakan', //查询
        add: 'Menambahkan', //添加
        back: 'Kembali', //返回
        enable: 'Mengaktifkan', //启用禁用
        disable: 'Nonaktifkan', //禁用
        modify: 'Modifikasi', //修改
        setManage: 'Ditetapkan sebagai admin', //设为管理员
    },
    searchResultColumnsHeader: [
        'Beroperasi', //操作
        'Akun', //账户
        'Karakter', //角色
        'Periode Akun', //账期
        'Status', //状态
        'Waktu pemeliharaan keuangan', //最后维护时间
    ],
    //表格数据
    searchResultTip: {
        0: 'Membatalkan', //撤销
        1: 'Tidak ada data' ,//'暂无数据'
        2: 'Tidak ada data yang ditayangkan' , //'暂无筛选数据'
        3: 'Silahkan pilih', //请选择
        4: 'Tidak ada administrator', //没有管理员
    },
    accountAdd:{ //添加账户组件--基本显示
        account: 'Akun', //账户
        accountPeriod: 'Periode Akun', //账期
        title: 'Menambahkan akun', //添加账户
        commit: 'Kirim', //提交
        ok: 'Konfirmasi', //确定
        cancel: 'Membatalkan', //取消
    },
    accountAddConfirm: { //添加账户组件--二次确认
        title: '',
        content:'Apakah anda yakin untuk menambahkan akun baru?', //是否确认添加新账户？
        ok: 'Konfirmasi', //确定
        cancel: 'Membatalkan', //取消
        success: 'Berhasil ditambahkan', //添加成功
        accountFormatTip: 'Harap isi surat atau angka dari 1 hingga 20 untuk nama akun.', //账户名字请填写1到20位的字母或数字
    },
    accountPeriod:[ //添加账户组件--显示的账期
        {id: 1, name:'M0: 0-3 Hari'}, //天
        {id: 2, name:'M1: 4-7 Hari'}, //天
        {id: 3, name:'M2: 8-10 Hari'}, //天
        {id: 4, name:'M3: 11-15 Hari'}, //天
        {id: 5, name:'M4: 16-20 Hari'}, //天
        {id: 6, name:'M5: 21-30 Hari'}, //天
        {id: 7, name:'M6: 31-60 Hari'}, //天
        {id: 8, name:'M7: 61-90 Hari'}, //天
        {id: 9, name:'M8: 91 hari ke atas'}, //91天及以上
    ],
    accountEnable:{ //账户启用--基本显示
        content:'Apakah anda yakin untuk mengkonfirmasi aktivasi', //是否确认启用
        ok: 'Konfirmasi', //确定
        cancel: 'Membatalkan', //取消
        success: 'Berhasil diaktifkan', //启用成功
    },
    accountDisabled:{ //账户停用--基本显示
        title1: 'Apakah anda yakin untuk menonaktifkan', //是否确认禁用
        title2: 'memberikan perintah ke penanggung jawab lainnya?', //并释放案件给其他归属？
        commit: 'Kirim', //提交
        ok: 'Konfirmasi', //确定
        cancel: 'Membatalkan', //取消
        noBelong1: 'Tidak ada atribusi lain dalam periode akun', //账期
        noBelong2: 'konfigurasikan terlebih dahulu', //无其他归属，请先配置
        success: 'Dinonaktifkan berhasil', //禁用成功
    },
    accountDisabledConfirm: { //账户禁用组件--二次确认
        title: '',
        content:'Apakah akan mengonfirmasi akun yang dinonaktifkan', //是否确认禁用账户
        ok: 'Konfirmasi', //确定
        cancel: 'Membatalkan', //取消
    },
    accountModify:{ //修改账户组件--基本显示
        account: 'Akun', //账户
        accountPeriod: 'Periode Akun', //账期
        title: 'Modifikasi akun', //修改账户
        commit: 'Kirim', //提交
        noBelong1: 'Tidak ada atribusi lain dalam periode akun', //账期
        noBelong2: 'konfigurasikan terlebih dahulu', //无其他归属，请先配置
        success: 'Berhasil dimodifikasi', //修改成功
    },
    accountModifyConfirm: { //修改账户组件--二次确认
        title: '',
        content:'Apakah anda yakin untuk modifikasi akun？',
        ok: 'Konfirmasi', //确定
        cancel: 'Membatalkan', //取消
    },
    accountSetManager:{ //设置管理员
        title1: 'Apakah anda yakin untuk mengatur', //是否设置
        title2: 'memberikan perintah dari penanggung jawab ke pemilik?', //为管理员并释放案件给其他归属？
        commit: 'Kirim', //提交
        noBelong1: 'Tidak ada atribusi lain dalam periode akun', //账期
        noBelong2: 'konfigurasikan terlebih dahulu', //无其他归属，请先配置
        success: 'Setel kesuksesan administrator', //禁用成功
    }
}

export default msAccountManage