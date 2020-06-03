
const msNavIndo = {
    //导航栏
    nav: [
        {
            name: 'Daftar Koleksi',//催收列表
            role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
            path: 'collectionList',
        },
        {
            name: 'Repay List',//还款列表
            role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
            path: 'repayList',
        },
        {
            name: 'Minta Untuk Mengurangi',//减免申请
            role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
            path: 'appliForReduc',
        },
        {
            name: 'Persetujuan Pengurangan',//减免审核
            role: ['DEVGLY','COMPANY', 'USERGLY'],
            path: 'remissionApproval',
        },
        {
            name: 'Manajemen akun',//账户管理
            role: ['DEVGLY', 'USERGLY'],
            path: 'companyManage',
        },
        {
            name: 'Penjadwalan staf',//人员排班
            role: ['DEVGLY', 'USERGLY'],
            path: 'staffScheduling',
        },
        {
            name: 'Manajemen pesanan distribusi',//分案管理
            role: ['DEVGLY', 'USERGLY'],
            path: 'assignManage',
        },
        {
            name: 'Statistik kinerja',//绩效统计
            role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
            path: 'performanceAppraisal',
            children: [
                {
                    name: 'Statistik Pengembalian', //回款统计
                    role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
                    path: 'performanceAppraisal/Payback'
                },
                {
                    name: 'Statistik Panggilan Keluar', //外呼统计
                    role: ['DEVGLY', 'CSRY', 'COMPANY',  'USERGLY'],
                    path: 'performanceAppraisal/Outgoingcall'
                }
            ]
        },
    ]
}

export default msNavIndo
