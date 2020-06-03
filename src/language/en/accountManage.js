const msAccountManage = {
    roleList:[ //账期管理主页面人员列表
        {id: 2, name:'Recruiter', key: 'AUDITOR'},
        {id: 3, name:'Company administrator', key: 'MANAGER_AUDITOR'},
    ],
    statusList:[ //账期管理主页面状态列表
        {id: '1', name:'Enable'}, //启用
        {id: '0', name:'Disable'}, //禁用
    ],
    searchCondition: {
        role: 'Character', //角色
        rolePlaceHolder: 'Please choose', //状态暗文
        state: 'Status', //状态
        statePlaceHolder: 'Please choose', //状态暗文
    },
    buttonTitle: {
        search: 'Inquire', //查询
        add: 'Add', //添加
        back: 'Return', //返回
        enable: 'Enable', //启用禁用
        disable: 'Disable', //禁用
        modify: 'Modify', //修改
        setManage: 'Set as administrator', //设为管理员
    },
    searchResultColumnsHeader: [
        'Operate', //操作
        'Account', //账户
        'Character', //角色
        'Account period', //账期
        'Status', //状态
        'Final maintenance time', //最后维护时间
    ],
    //表格数据
    searchResultTip: {
        0: 'Cancel', //撤销
        1: 'No data' ,//'暂无数据'
        2: 'No screening data' , //'暂无筛选数据'
        3: 'Please choose', //请选择
        4: 'No administrator', //没有管理员
    },
    accountAdd:{ //添加账户组件--基本显示
        account: 'Account', //账户
        accountPeriod: 'Account period', //账期
        title: 'Add account', //添加账户
        commit: 'Submit', //提交
        ok: 'confirm', //确定
        cancel: 'Cancel', //取消
    },
    accountAddConfirm: { //添加账户组件--二次确认
        title: '',
        content:'Are you sure to add a new account?', //是否确认添加新账户？
        ok: 'confirm', //确定
        cancel: 'Cancel', //取消
        success: 'Added successfully', //添加成功
        accountFormatTip: 'Please fill in the letters or numbers from 1 to 20 for the account name.', //账户名字请填写1到20位的字母或数字
    },
    accountPeriod:[ //添加账户组件--显示的账期
        {id: 1, name:'M0: 0-3 days'}, //天
        {id: 2, name:'M1: 4-7 days'}, //天
        {id: 3, name:'M2: 8-10 days'}, //天
        {id: 4, name:'M3: 11-15 days'}, //天
        {id: 5, name:'M4: 16-20 days'}, //天
        {id: 6, name:'M5: 21-30 days'}, //天
        {id: 7, name:'M6: 31-60 days'}, //天
        {id: 8, name:'M7: 61-90 days'}, //天
        {id: 9, name:'M8: 91 days and above'}, //91天及以上
    ],
    accountEnable:{ //账户启用--基本显示
        content:'Whether to confirm the activation', //是否确认启用
        ok: 'confirm', //确定
        cancel: 'Cancel', //取消
        success: 'Successfully enabled', //启用成功
    },
    accountDisabled:{ //账户停用--基本显示
        title1: 'Is it confirmed to disable', //是否确认禁用
        title2: 'and release the case to other owners?', //并释放案件给其他归属？
        commit: 'Submit', //提交
        ok: 'confirm', //确定
        cancel: 'Cancel', //取消
        noBelong1: 'There is no other attribution in the account period', //账期
        noBelong2: 'please configure first', //无其他归属，请先配置
        success: 'Disabled successfully', //禁用成功
    },
    accountDisabledConfirm: { //账户禁用组件--二次确认
        title: '',
        content:'Whether to confirm the disabled account', //是否确认禁用账户
        ok: 'confirm', //确定
        cancel: 'Cancel', //取消
    },
    accountModify:{ //修改账户组件--基本显示
        account: 'Account', //账户
        accountPeriod: 'Account period', //账期
        title: 'Modify account', //修改账户
        commit: 'Submit', //提交
        noBelong1: 'There is no other attribution in the account period', //账期
        noBelong2: 'please configure first', //无其他归属，请先配置
        success: 'Successfully modified', //修改成功
    },
    accountModifyConfirm: { //修改账户组件--二次确认
        title: '',
        content:'Whether to confirm the modification of the account？',
        ok: 'confirm', //确定
        cancel: 'Cancel', //取消
    },
    accountSetManager:{ //设置管理员
        title1: 'Whether to set', //是否设置
        title2: 'to the administrator and release the case  to other owners?', //为管理员并释放案件给其他归属？
        commit: 'Submit', //提交
        noBelong1: 'There is no other attribution in the account period', //账期
        noBelong2: 'please configure first', //无其他归属，请先配置
        success: 'Set administrator success', //禁用成功
    }
}

export default msAccountManage