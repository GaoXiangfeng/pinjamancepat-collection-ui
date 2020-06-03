const msDetailListCn = {
    //订单列表-详情页
    detailCardData: [
        {
            label: '订单信息', //订单信息
            tab: true
        }, {
            label: '用户信息', //用户信息
            tab: true
        }, {
            label: '还款记录',//还款记录
            tab: true
        }, {
            label: '催收记录', //催收记录
            tab: true
        }, {
            label: '历史订单', //历史订单
            tab: true
        }
    ],

    //订单信息-标题
    orderTitle: {
        orderInfo: '订单信息', //订单信息
        bankInfo: '放款银行账号信息', //放款银行信息
        repayBankInfo: '还款银行账号信息', //还款银行信息
        reviewInfo: '审核信息',//审核信息
    },

    //订单信息-订单信息
    userOrderInfo: [
        {
            label: '贷款状态',//贷款状态
            key: 'orderStatus',
            value: '',//值
        }, {
            label: '贷款名称',//贷款名称
            key: 'loanName',
            value: '',//值
        }, {
            label: '借款金额',//借款金额
            key: 'principal',
            value: '',//值
        }, {
            label: '砍头费',//砍头费
            key: 'interest', //
            value: '',//值
        }, {
            label: '借款天数',//借款天数
            key: 'days',
            value: '',//值
        }, {
            label: '利率',//利率
            key: 'rate', //
            value: '',//值
        }, {
            label: '计息方式',//计息方式
            key: 'rateType',
            value: '',//值
        }, {
            label: '申请时间',//申请时间
            key: 'orderTime',
            value: '',//值
        }
    ],

    //订单信息-放款银行账号
    userBankInfo: [
        {
            label: '持卡人姓名',//持卡人姓名
            key: 'applyUserName',
            value: '',//值
        }, {
            label: '身份证号',//身份证号
            key: 'idCardNo',
            value: '',//值
        }, {
            label: '风控校验账户姓名',//风控校验账户姓名
            key: 'verifyUserName',
            value: '',//值
        }, {
            label: '银行名称',//银行名称
            key: 'bankName', //
            value: '',//值
        }, {
            label: '银行账号',//银行账号
            key: 'bankAccount',
            value: '',//值
        }, {
            label: '姓名规则校验',//姓名规则校验
            key: 'authStatus',
            value: '',//值
            color: ''
        }, {
            label: '放款渠道',//放款渠道
            key: 'fundingName',
            value: '',//值
            color: ''
        }
    ],
    //订单信息-还款银行账号信息
    userPayInfo: [
        {
            label: '银行付款码',//银行付款码
            value: ''
        }, {
            label: '银行名称',//银行名称
            value: ''
        }
    ],

    //后端返回的订单详情的国际化
    //订单信息-贷款状态
    loanTypeText: {
        0: '未申请订单',
        1: '申请成功',
        2: '审核中',
        3: '审核拒绝',
        4: '审核通过',
        5: '放款失败',
        6: '放款成功',
        7: '贷款结清',
    },

    //订单详情-借款天数
    loanDay: '天',

    //订单详情-利率
    rate: '日息',

    //订单详情-计息方式
    rateTypeText: {
        0: '先息后本'
    },

    //放款银行账号-姓名规则校验
    nameValid: {
        0:'未校验',
        1: '校验中',
        2: '一致',
        3: '不一致'
    },
    colorText: {
        0:'info',
        1: 'warning',
        2: 'success',
        3: 'error'
    },

    //还款银行账号信息-为找到记录
    nonePay: '未找到记录',


    //用户信息-四个标题-后端返回数据的文案
    userTitle: {
        //标题
        userInfo: '用户信息',//用户信息
        photo: '认证照片',//认证照片
        emergencyContact: '紧急联系人',//紧急联系人
        callBook: '本地通讯录',//本地通讯录
        message: '本地短信',//本地短信
        callRecord: '通话记录',//通话记录
        //认证照片
        lastPhoto: '上次图片',//上次图片
        recentPhoto: '本次照片',//本次照片
        //button
        phone: '手机号',//手机号
        count: '联系次数',//联系次数
        sendOrAcceptTime: '收发时间',//收发时间
        callTime: '通话时间',//通话时间
        callDuration: '通话时长',//通话时长
        //短信列表返回的数据的文案
        haveRead: '已读',//已读
        unread: '未读',//未读
        receive: '接收',//接收
        send: '发送',//发送
        //时分秒、通话类型、通话状态
        h: '小时',//小时
        m: '分钟',//分钟
        s: '秒',//秒
        out:'呼出',//呼出
        in:'呼入',//呼入
        // reject: '拒接',//拒接
        uncall: '未拨打',//未拨打
        no: '未接通',//未接通
        yes: '接通',//接通
        unknown: '未知',//未知
        powerOff: '关机',//关机
        //还款记录
        repayRecord: '还款记录',//还款记录
        repayStatus: '还款状态',//还款状态
        //催收记录
        collectionTime: '催收时间',//催收时间
        //submit
        status: '状态',
        expectRepayTime: '预计还款时间',//预计还款时间
        feedback: '反馈',//反馈
        select: '请选择',//请选择      
        customerLabel: '客户标签',//客户标签
        remark: '备注',
        submit: '提交',
        //通过、拒绝操作弹框
        title:'是否提交催收操作？',//是否提交催收操作
        confirm: '确认',//确认
        cancel: '取消',//取消
        goBack: '返回',//返回订单列表页,
        loading: '加载中',//加载中
        isNeed: '请选择还款时间！',
        isFeedBck:'请选择反馈信息',//请选择反馈信息
        cutApplication: '减免申请',//减免申请
        toRepay: '待还金额:',//待还金额
        maxDeduction: '减免上限:',//减免上限
        deductionAmount: '减免金额:',//减免金额
        msg: '减免说明:',//减免说明
        cutError: '减免金额错误!',//减免金额错误
        numberInfo: '金额必须为大于0的数字!',//金额必须为大于0的数字
        lengthError: '小数位数不能超过两位!',//小数位数不能超过两位
        billRecord: '话单记录',//话单记录
        collRecordAdd: '添加催收记录,话单为：',//添加催收记录,话单为：
        operation: '操作', //操作
        sendMessage: '发送',//发送
        sendMessageTip: '今日发送数量已达上限',//今日发送数量已达上限
        sendMessageModal: '是否发送催收短信',//是否发送催收短信
    },
     //审核信息
     columnAuditInfoTitle: {
        0: '审核时间',//审核时间
        1: '审核阶段',//审核阶段
        2: '审核结果',//审核结果
        3: '审核人员',//审核人员
        4: '审核意见',//审核意见
    },
    //审核阶段
    auditLevel: {
        0: '未审核',//未审核
        1: '初审阶段',//初审阶段
        4: '机审阶段',//机审阶段
        5: '终审阶段',//终审阶段
    },
    //审核结果
    auditResult: {
        0: '未审核',//未审核
        1: '初审通过',//初审通过
        4: '机审通过',//机审通过
        5: '终审通过',//终审通过
    },
    //用户信息-用户信息
    userInfo: [
        {
            label: '电话号码',//电话号码
            key: 'userPhoneNo',
            value: '',//值
        }, {
            label: '真实姓名',//真实姓名
            key: 'userName',
            value: '',//值
        }, {
            label: '母亲姓名',//母亲姓名
            key: 'motherName',
            value: '',//值
        }, {
            label: '性别',//男
            key: 'gender',
            value: '',//值
        }, {
            label: '身份证号',//身份证号
            key: 'idCardNo',
            value: '',//值
        }, {
            label: '学历',//学历
            key: 'education',
            value: '',//值
        }, {
            label: '税号',//税号
            key: 'taxNo',
            value: '',//值
        }, {
            label: '详细地址',//详细地址
            key: 'deatailAddress',
            value: '',//值
        }, {
            label: '借款目的',//借款目的
            key: 'purpose',
            value: '',//值
        }, {
            label: '职业',//职业
            key: 'occupation',
            value: '',//值
        }, {
            label: '月薪',//月薪
            key: 'salary',
            value: '',//值
        }, {
            label: '发薪日',//发薪日
            key: 'payTime',
            value: '',//值
        }, {
            label: '公司名称',//公司名称
            key: 'companyName',
            value: '',//值
        }, {
            label: '公司电话',//公司电话
            key: 'companyPhoneNo',
            value: '',//值
        }, {
            label: '公司地址',//公司地址
            key: 'companyAddress',
            value: '',//值
        }
    ],

    //用户信息-联系人信息
    contactText: [
        {
            label: '联系人姓名#1',//联系人姓名#1
            value: '',//值
        }, {
            label: '联系人姓名#2',//联系人姓名#2
            value: '',//值
        }, {
            label: '联系人关系#1',//联系人关系#1
            value: '',//值
        }, {
            label: '联系人关系#2',//联系人关系#2
            value: '',//值
        }, {
            label: '联系人电话#1',//联系人电话#1
            value: '',//值
        }, {
            label: '联系人电话#2',//联系人电话#2
            value: '',//值
        }
    ],

    //用户信息-table无数据的展示
    tableNoText: '无数据',

    //用户信息-认证照片
    userPhotoTitle: {
        0: '正面照片',//正面照片
        1: '手持照片',//手持照片
        2: '工资照片',//工资照片
        3: '银行流水',//银行流水
        4: '证件照片',//证件照片
    },
    //用户信息-紧急联系人-表头
    emergencyContactTitle: {
        0: '姓名',//姓名
        1: '性别',//性别
        2: '关系',//关系
        3: '电话',//电话
        4: '用户联系次数',//用户联系次数
        5: '总呼叫次数',//总呼叫次数
        6: '今日呼叫次数',//今日呼叫次数
        
    },
    //是否平台用户
    isPlatformUser:{
        0: '是',//是
        1: '否',//否
    },
    //用户信息-本地通讯录-表头
    userCallBookTitle: {
        0: '姓名',//姓名
        1: '电话',//手机号
        2: '用户联系次数',//联系次数
        3: '总呼叫次数',//总呼叫次数
        4: '今日呼叫次数',//今日呼叫次数
        5: '是否平台用户',//是否平台用户
    },
    //用户信息-本地短信-表头
    userMessageTitle: {
        0: '姓名',//姓名
        1: '电话',//手机号
        2: '收发时间',//收发时间
        3: '已读',//已读
        4: '短信类型',//短信类型
        5: '短信内容',//短信内容
        6: '短信翻译',//短信翻译
    },

    //用户信息-本地通话记录-表头
    userCallRecordTitle: {
        0: '姓名',//姓名
        1: '电话',//手机号
        2: '通话时长',//通话时长
        3: '通话时间',//通话时间
        4: '通话类型',//通话类型
        5: '通话状态',//通话状态
    },

    //用户信息-后端返回数据的对应text
    /**
     * genderText: 性别 occupationText: 职业 educationText:学历  relationText: 关系 purposeText: 借款目的
     */
    genderText: {
        0: '女',
        1: '男'
    },
    occupationText: {
        0: '私人雇员',//私人雇员
        1: '企业家',//企业家
        2: '国有企业员工',//国有企业员工
        3: '公务员',//公务员
        4: '学生',//学生
        5: '警察',//警察
        6: '退休',//退休
        7: '医生',//医生
        8: '律师',//律师
        9: '失业',//失业
        10: '其他',//其他
    },
    educationText: {
        0: '小学',//小学
        1: '初中',//初中
        2: '高中',//高中
        3: '大专',//大专
        4: '大学',//大学
        5: '硕士',//硕士
        6: '博士',//博士
    },
    relationText: {
        0: '父母',//父母
        1: '配偶',//配偶
        2: '孩子',//孩子
        3: '亲戚',//亲戚
        4: '朋友',//朋友
        5: '同事',//同事
        6: '同学',//同学
        7: '合作伙伴',//合作伙伴

        8: '父母',//父母
        9: '配偶',//配偶
        10: '孩子',//孩子
        11: '兄弟姐妹',//兄弟姐妹
        12: '其他',//其他
        13: '朋友',//朋友
        14: '同事',//同事
    },
    purposeText: {
        0: '健康医疗',//健康医疗
        1: '偿还债务',//偿还债务
        2: '兼职创业',//兼职创业
        3: '数码产品',//数码产品
        4: '教育培训',//教育培训
        5: '美容整形',//美容整形
        6: '旅行消费',//旅行消费
        7: '家居／装修',//家居／装修
        8: '租房',//租房
        9: '运营周转',//运营周转
        10: '结婚',//结婚
        11: '买车',//买车
        12: '买房',//买房
    },

    //还款记录-还款状态
    repayInfo: [
        {
            label: '借款天数',//借款天数
            key: 'days',
            value: '',//值
        }, {
            label: '借款金额',//借款金额
            key: 'amount',
            value: '',//值
        }, {
            label: '逾期天数',//逾期天数
            key: 'overdueDays',
            value: '',//值
        }, {
            label: '应还金额',//应还金额
            key: 'repayAmount',
            value: '',//值
        }, {
            label: '总计已还',//总计已还
            key: 'alreadyRepay',
            value: '',//值
        }, {
            label: '催收减免',//催收减免
            key: 'deductionAmount',
            value: '',//值
        }, {
            label: '总计待还',//总计待还
            key: 'toRepay',
            value: '',//值
        }
    ],

    //还款记录信息表头
    repayInfoTitle: {
        0: '还款时间',
        1: '还款金额',
        2: '还款类型',
        3: '还款方式',
        4: '是否催收减免还款',
        5: '操作人'
    },
    //后台返回是信息
    repayTypeText: {
        '0': '正常还款',
        '1': '逾期还款',
    },
    repayText: {
        '1': 'VA还款 ',
        '2': '便利店还款',
    },
    //是否减免还款
    isCutText:{
        '0': '否',
        '1': '是'
    },

    //催收记录
    collectionRecordTitle: {
        0: '催收时间',
        1: '催收人',
        2: '电话',
        3: '话单ID',
        4: '催收状态',
        5: '预计还款时间',
        6: '客户标签',
        7: '反馈',
        8: '备注'
    },
    //话单记录
    callBillRecordTitle: {
        0: '话单id',
        1: '呼叫号码',
        2: '通话时间',
        3: '通话时长',
        4: '挂机原因',
        5: '录音地址',
        6: '催收人',
        7: '操作',
    },
    //催收状态
    collectionStatus: {
        1: '未催收',
        2: '失联',
        3: '欺诈',
        4: '无还款意愿',
        5: '承诺还款',
        6: '上门催收',
        7: '客户投诉',
        10: '联系人转告',//联系人转告
        11: '资金困难',//资金困难
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
            value: '失联'
        }, {
            key: '3',
            value: '欺诈'
        },{
            key: '4',
            value: '无还款意愿'
        },{
            key: '5',
            value: '承诺还款'
        },{
            key: '6',
            value: '上门催收'
        },{
            key: '7',
            value: '客户投诉'
        },{
            key: '8',
            value: '承诺后未还款'
        },{
            key: '10',
            value: '联系人转告'//联系人转告
        },{
            key: '11',
            value: '资金困难'//资金困难
        }
    ],
    //反馈情况
    feedbackList: [
        {
            key: '0',
            value: '表示没钱，可以延后还款'//表示没钱，可以延后还款
        }, {
            key: '1',
            value: '表示只归还本金'//表示只归还本金
        },{
            key: '2',
            value: '现在没工作，没收入还款'//现在没工作，没收入还款
        },{
            key: '3',
            value: '亲属或者朋友表示可以帮其归还欠款'//亲属或者朋友表示可以帮其归还欠款
        },{
            key: '4',
            value: '客户明确告知就是不还款'//客户明确告知就是不还款
        },{
            key: '5',
            value: '联系不上客户本人，亲属或者朋友可以帮助告知还款'//联系不上客户本人，亲属或者朋友可以帮助告知还款
        },{
            key: '6',
            value: '客户失联'
        },{
            key: '7',
            value: '其他'
        }
    ],
    //客户标签
    customerLabelList: [
        {
            key: '1',
            value: '特殊职业'//特殊职业
        },{
            key: '2',
            value: '复贷客户'//复贷客户
        },{
            key: '3',
            value: '多贷客户'//多贷客户
        }
    ],
    hangupReasonList:[
        {
            key: '0',
            value: '初始'//初始
        },
        {
            key: '1',
            value: '正常挂机，如果接通，不管是谁挂机都是此原因'//正常挂机，如果接通，不管是谁挂机都是此原因
        },
        {
            key: '2',
            value: '用户繁忙'//用户繁忙
        },
        {
            key: '3',
            value: '主叫挂机（未接通前主叫挂机，归为此原因）'//主叫挂机（未接通前主叫挂机，归为此原因）
        },
        {
            key: '4',
            value: '被叫不可达'//被叫不可达
        },
        {
            key: '5',
            value: '呼叫超时'//呼叫超时
        },
        {
            key: '6',
            value: '其他'//其他
        }
    ],
}

export default msDetailListCn
