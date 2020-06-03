const msAccountManage = {
    roleList:[ //账期管理主页面人员列表
        {id: 2, name:'催收员', key: 'AUDITOR'},
        {id: 3, name:'公司管理员', key: 'MANAGER_AUDITOR'},
    ],
    statusList:[ //账期管理主页面状态列表
        {id: '1', name:'启用'}, //启用
        {id: '0', name:'禁用'}, //禁用
    ],
    searchCondition: {
        role: '角色', //角色
        rolePlaceHolder: '请选择', //状态暗文
        state: '状态', //状态
        statePlaceHolder: '请选择', //状态暗文
    },
    buttonTitle: {
        search: '查询', //查询
        add: '添加', //添加
        back: '返回', //返回
        enable: '启用', //启用禁用
        disable: '禁用', //禁用
        modify: '修改', //修改
        setManage: '设为管理员', //设为管理员
    },
    searchResultColumnsHeader: [
        '操作', //操作
        '账户', //账户
        '角色', //角色
        '账期', //账期
        '状态', //状态
        '最后维护时间', //最后维护时间
    ],
    //表格数据
    searchResultTip: {
        0: '撤销', //撤销
        1: '无数据' ,//'暂无数据'
        2: '暂无筛选数据' , //'暂无筛选数据'
        3: '请选择', //请选择
        4: '没有管理员', //没有管理员
    },
    accountAdd:{ //添加账户组件--基本显示
        account: '账户', //账户
        accountPeriod: '账期', //账期
        title: '添加账户', //添加账户
        commit: '提交', //提交
        ok: '确定', //确定
        cancel: '取消', //取消
    },
    accountAddConfirm: { //添加账户组件--二次确认
        title: '',
        content:'是否确认添加新账户？', //是否确认添加新账户？
        ok: '确定', //确定
        cancel: '取消', //取消
        success: '添加成功', //添加成功
        accountFormatTip: '账户名字请填写1到20位的字母加数字', //账户名字请填写1到20位的字母或数字
    },
    accountPeriod:[ //添加账户组件--显示的账期
        {id: 1, name:'M0: 0-3天'}, //天
        {id: 2, name:'M1: 4-7天'}, //天
        {id: 3, name:'M2: 8-10天'}, //天
        {id: 4, name:'M3: 11-15天'}, //天
        {id: 5, name:'M4: 16-20天'}, //天
        {id: 6, name:'M5: 21-30天'}, //天
        {id: 7, name:'M6: 31-60天'}, //天
        {id: 8, name:'M7: 61-90天'}, //天
        {id: 9, name:'M8: 91天及以上'}, //91天及以上
    ],
    accountEnable:{ //账户启用--基本显示
        content:'是否确认启用', //是否确认启用
        ok: '确定', //确定
        cancel: '取消', //取消
        success: '启用成功', //启用成功
    },
    accountDisabled:{ //账户停用--基本显示
        title1: '是否确认禁用', //是否确认禁用
        title2: '并释放案件给其他归属？', //并释放案件给其他归属？
        commit: '提交', //提交
        ok: '确定', //确定
        cancel: '取消', //取消
        noBelong1: '账期', //账期
        noBelong2: '无其他归属，请先配置', //无其他归属，请先配置
        success: '禁用成功', //禁用成功
    },
    accountDisabledConfirm: { //账户禁用组件--二次确认
        title: '',
        content:'是否确认禁用账户', //是否确认禁用账户
        ok: '确定', //确定
        cancel: '取消', //取消
    },
    accountModify:{ //修改账户组件--基本显示
        account: '账户', //账户
        accountPeriod: '账期', //账期
        title: '修改账户', //修改账户
        commit: '提交', //提交
        noBelong1: '账期', //账期
        noBelong2: '无其他归属，请先配置', //无其他归属，请先配置
        success: '修改成功', //修改成功
    },
    accountModifyConfirm: { //修改账户组件--二次确认
        title: '',
        content:'是否确认修改账户？',
        ok: '确定', //确定
        cancel: '取消', //取消
    },
    accountSetManager:{ //设置管理员
        title1: '是否设置', //是否设置
        title2: '为管理员并释放案件给其他归属？', //为管理员并释放案件给其他归属？
        commit: '提交', //提交
        noBelong1: '账期', //账期
        noBelong2: '无其他归属，请先配置', //无其他归属，请先配置
        success: '设置管理员成功', //禁用成功
    }
}

export default msAccountManage