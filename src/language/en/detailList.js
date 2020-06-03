/**
 * Created by sunxiaoying on 2017/12/12.
 */
const msDetailListEn = {
    //订单列表页
    detailCardData: [
        {
            label: 'Order Information', //订单信息
            tab: true
        }, {
            label: 'User Information', //用户信息
            tab: true
        }, {
            label: 'Catatan Pelunasan',//还款记录
            tab: true
        }, {
            label: 'Kumpulkan Catatan', //催收记录
            tab: true
        }, {
            label: 'Historical order', //历史订单
            tab: true
        }
    ],

    //订单信息-标题
    orderTitle: {
        orderInfo :'Order Information', //订单信息
        bankInfo :'Loan Bank Account Information', //放款银行信息
        repayBankInfo :'Repayment Bank Account Information', //还款银行信息
        reviewInfo: 'Audit information',//审核信息
    },

    //订单信息-订单信息
    userOrderInfo: [
        {
            label: 'Loan Type',//贷款状态
            key: 'orderStatus',
            value: '',//值
        }, {
            label: 'Loan Name',//贷款名称
            key: 'loanName',
            value: '',//值
        }, {
            label: 'Loan mount ',//借款金额
            key: 'principal',
            value: '',//值
        }, {
            label: 'One-time Deduction of Fees',//砍头费
            key: 'interest', //
            value: '',//值
        }, {
            label: 'Loan Days',//借款天数
            key: 'days',
            value: '',//值
        }, {
            label: 'Rate',//利率
            key: 'rate', //
            value: '',//值
        }, {
            label: 'Way to alculate Interest',//计息方式
            key: 'rateType',
            value: '',//值
        }, {
            label: 'Application Time',//申请时间
            key: 'orderTime',
            value: '',//值
        }
    ],

    //订单信息-放款银行账号
    userBankInfo: [
        {
            label: "Cardholder's Name",//持卡人姓名
            key: 'applyUserName',
            value: '',//值
        }, {
            label: 'ID Number',//身份证号
            key: 'idCardNo',
            value: '',//值
        }, {
            label: 'Advance Ai Result',//风控校验账户姓名
            key: 'verifyUserName',
            value: '',//值
        }, {
            label: 'Bank Name',//银行名称
            key: 'bankName', //
            value: '',//值
        }, {
            label: 'Bank Account',//银行账号
            key: 'bankAccount',
            value: '',//值
        }, {
            label: 'Verification of Name Rule ',//姓名规则校验
            key: 'authStatus',
            value: '',//值
        }, {
            label: 'Loan channel',//放款渠道
            key: 'fundingName',
            value: '',//值
            color: ''
        }
    ],
    //订单信息-还款银行账号信息
    userPayInfo: [
        {
            label: 'Bank Payment Code',//银行付款码
            value: '',//值
        }, {
            label: 'Bank Name',//银行名称
            value: '',//值
        }
    ],

    //后端返回的订单详情的国际化
    //订单信息-贷款状态
    loanTypeText: {
        0: 'Unapplied orders',//未申请订单
        1: 'Applied successfully',//申请成功
        2: 'Under audit',//审核中
        3: 'Audit rejected',//审核拒绝
        4: 'Audit passed',//审核通过
        5: 'Loan failed',//放款失败
        6: 'Loan successfull',//放款成功
        7: 'Loans settled',//贷款结清
    },

    //订单详情-借款天数
    loanDay: 'days',

    //订单详情-利率
    rate: 'Daily Interest',

    //订单详情-计息方式
    rateTypeText: {
        0: 'After the first interest rate'
    },

    //放款银行账号-姓名规则校验
    nameValid: {
        0:'Not verified',//未校验
        1: 'Checking',//校验中
        2: 'Consistent',//一致
        3: 'Inconsistent'//不一致
    },

    colorText: {
        0:'info',
        1: 'warning',
        2: 'success',
        3: 'error'
    },

    //还款银行账号信息-为找到记录
    nonePay: 'No Record Found',

    //用户信息-四个标题-后端返回数据的文案
    userTitle: {
        //标题
        userInfo: 'User Information',//用户信息
        photo: 'Certified photo',//认证照片
        emergencyContact: 'Emergency contact',//紧急联系人
        callBook: 'Call Book',//本地通讯录
        message: 'Message',//本地短信
        callRecord: 'Call Records',//通话记录
        //认证照片
        lastPhoto: 'Last picture',//上次图片
        recentPhoto: 'This photo',//本次照片
        //button
        phone: 'Phone number',//手机号
        count: 'Number of contacts',//联系次数
        sendOrAcceptTime: 'Receive and send time',//收发时间
        callTime: 'Call time',//通话时间
        callDuration: 'Length of talk',//通话时长
        //短信列表返回的数据的文案
        haveRead: 'Have read',//已读
        unread: 'unread',//未读
        receive: 'receive',//接收
        send: 'send',//发送
        //时分秒、通话类型、通话状态
        h: 'hour',//小时
        m: 'minute',//分钟
        s: 'second',//秒
        out:'exhale',//呼出
        in:'Inbound',//呼入
        reject: 'Reject',//拒接
        uncall: 'Not dialed',//未拨打
        no: 'Not connected',//未接通
        yes: 'Connected',//接通
        unknown: 'Unknown',//未知
        powerOff: 'Power off',//关机
        //还款记录
        repayRecord: 'Repayment records',//还款记录
        repayStatus: 'Repayment status',//还款状态
        //催收记录
        collectionTime: 'Waktu pengumpulan',//催收时间
        //submit
        status: 'Status',
        expectRepayTime: 'Estimated repayment time',//预计还款时间
        feedback: 'Feedback',//反馈
        select: 'Please choose',//请选择
        customerLabel: 'Customer label',//客户标签
        remark: 'Remarks',//备注
        submit: 'Submit',
        //通过、拒绝操作弹框
        title:'Whether to submit the collection operation？',//是否提交催收操作
        confirm: 'Confirm',//确认
        cancel: 'Cancel',//取消
        goBack: 'Return',//返回订单列表页
        loading: 'Loading',//加载中
        isNeed: 'Please choose repayment time！',
        isFeedBck:'Please choose the feedback information',//请选择反馈信息
        cutApplication: 'Relief application',//减免申请
        toRepay: 'Amount to be repaid:',//待还金额
        maxDeduction: 'Reduction ceiling:',//减免上限
        deductionAmount: 'Relief amount:',//减免金额
        msg: 'Relief instructions:',//减免说明
        cutError: 'Relief amount wrong!',//减免金额错误
        numberInfo: 'Amount must be a number and large then 0!',//金额必须为大于0的数字
        lengthError: 'The number of decimal places can not be more than two!',//小数位数不能超过两位
        billRecord: 'Bill record',//话单记录
        collRecordAdd: 'Add a collection record of ',//添加催收记录
        operation: 'Operation', //操作
        sendMessage: 'Send message',//发送
        sendMessageTip: 'The number sent today has reached the upper limit',//今日发送数量已达上限
        sendMessageModal: 'Whether to send the message',//是否发送催收短信
    },
    //审核信息
    columnAuditInfoTitle: {
        0: 'Review time',//审核时间
        1: 'Review stage',//审核阶段
        2: 'Audit results',//审核结果
        3: 'Auditors',//审核人员
        4: 'Audit opinion',//审核意见
    },
    //审核阶段
    auditLevel: {
        0: 'Unreviewed',//未审核
        1: 'Preliminary stage',//初审阶段
        4: 'Machine review stage',//机审阶段
        5: 'Final stage',//终审阶段
    },
    //审核结果
    auditResult: {
        0: 'Unreviewed',//未审核
        1: 'First trial passed',//初审通过
        4: 'Machine audit passed',//机审通过
        5: 'Final review',//终审通过
    },
    //用户信息-用户信息
    userInfo: [
        {
            label: 'Phone Number',//电话号码
            key: 'userPhoneNo',
            value: '',//值
        }, {
            label: 'Actual Name',//真实姓名
            key: 'userName',
            value: '',//值
        }, {
            label: "Mother's Name",//母亲姓名
            key: 'motherName',
            value: '',//值
        }, {
            label: 'Gender',//男
            key: 'gender',
            value: '',//值
        }, {
            label: 'ID Number',//身份证号
            key: 'idCardNo',
            value: '',//值
        }, {
            label: 'Education',//学历
            key: 'education',
            value: '',//值
        }, {
            label: 'Tax ID',//税号
            key: 'taxNo',
            value: '',//值
        }, {
            label: 'Address',//详细地址
            key: 'deatailAddress',
            value: '',//值
        }, {
            label: 'Purpose of Loan',//借款目的
            key: 'purpose',
            value: '',//值
        }, {
            label: 'Occupation',//职业
            key: 'occupation',
            value: '',//值
        }, {
            label: 'Monthly Salary',//月薪
            key: 'salary',
            value: '',//值
        }, {
            label: 'Payday',//发薪日
            key: 'payTime',
            value: '',//值
        }, {
            label: 'Company Name',//公司名称
            key: 'companyName',
            value: '',//值
        }, {
            label: 'Company Phone',//公司电话
            key: 'companyPhoneNo',
            value: '',//值
        }, {
            label: 'Company Address',//公司地址
            key: 'companyAddress',
            value: '',//值
        },
    ],

    //用户信息-联系人信息
    contactText: [
        {
            label: 'Contact Name#1',//联系人姓名#1
            value: '',//值
        }, {
            label: 'Contact Name#2',//联系人姓名#2
            value: '',//值
        }, {
            label: 'Contact Relationship#1',//联系人关系#1
            value: '',//值
        }, {
            label: 'Contact Relationship#2',//联系人关系#2
            value: '',//值
        }, {
            label: 'Contact Number#1',//联系人电话#1
            value: '',//值
        }, {
            label: 'Contact Number#2',//联系人电话#2
            value: '',//值
        }
    ],

    //用户信息-table无数据的展示
    tableNoText: 'no data',

    //用户信息-认证照片
    userPhotoTitle: {
        0: 'protrait photo',//正面照片
        1: 'Handheld photos',//手持照片
        2: 'Salary Photos',//工资照片
        3: 'Bank flow',//银行流水
        4: 'ID Photo',//证件照片
    },

    //用户信息-紧急联系人-表头
    emergencyContactTitle: {
        0: 'Name',//姓名
        1: 'Gender',//姓别
        2: 'Relationship',//关系
        3: 'Phone',//电话
        4: 'Number of contacts',//用户联系次数
        5: 'Total number of calls',//总呼叫次数
        6: 'Calls today',//今日呼叫次数
    },
    //是否平台用户
    isPlatformUser:{
        0: 'yes',//是
        1: 'no',//否
    },
    //用户信息-本地通讯录-表头
    userCallBookTitle: {
        0: 'Name',//姓名
        1: 'Phone',//手机号
        2: 'Number of contacts',//联系次数
        3: 'Total number of calls',//总呼叫次数
        4: 'Calls today',//今日呼叫次数
        5: 'Whether the platform user',//是否平台用户
    },
    //用户信息-本地通讯录-表头-已读-短信类型
    userMessageTitle: {
        0: 'Name',//姓名
        1: 'Phone',//手机号
        2: 'Receive and send time',//收发时间
        3: 'Have read',//已读
        4: 'SMS type',//短信类型
        5: 'SMS content',//短信内容
    },

    //用户信息-本地通话记录-表头
    userCallRecordTitle: {
        0: 'Name',//姓名
        1: 'Phone number',//手机号
        2: 'Length of talk',//通话时长
        3: 'Call time',//通话时间
        4: 'Type of call',//通话类型
        5: 'Status of call',//通话状态
    },

    //用户信息-后端返回数据的对应text
    /**
     * genderText: 性别 professionText: 职业 educationText:学历  relationText: 关系 purposeText: 借款目的
     */
    genderText: {
        0: 'Female',
        1: 'Male'
    },
    occupationText: {
        0: 'Private employee',//私人雇员
        1: 'Entrepreneur' ,//企业家
        2: 'Employees of state-owned enterprises' ,//国有企业员工
        3: 'Civil servants',//公务员
        4: 'Student',//学生
        5: 'Policemen',//警察
        6: 'Retirement',//退休
        7: 'Doctors',//医生
        8: 'Lawyer',//律师
        9: 'Unemployment',//失业
        10: 'Other',//其他
    },
    educationText: {
        0: 'Primary school',//小学
        1: 'Junior high school' ,//初中
        2: 'High school' ,//高中
        3: 'College',//大专
        4: 'the University',//大学
        5: "Master's degree",//硕士
        6: 'Dr.',//博士
    },
    relationText: {
        0: 'Parents',//父母
        1: 'Spouse' ,//配偶
        2: 'Child' ,//孩子
        3: 'Relative',//亲戚
        4: 'Friend',//朋友
        5: 'Colleague',//同事
        6: 'Classmate',//同学
        7: 'Partner',//合作伙伴

        8: 'Parents',//父母
        9: 'Spouse',//配偶
        10: 'Child',//孩子
        11: 'Brothers or sisters',//兄弟姐妹
        12: 'Others',//其他
        13: 'Friend',//朋友
        14: 'Colleague',//同事
    },
    purposeText: {
        0: 'Health care',//健康医疗
        1: 'Repay loan' ,//偿还债务
        2: 'Part-time entrepreneurship' ,//兼职创业
        3: 'Digital product',//数码产品
        4: 'Education and training',//教育培训
        5: 'Cosmetic plastic surgery',//美容整形
        6: 'Travel expenses',//旅行消费
        7: 'Home or renovation',//家居／装修
        8: 'Renting',//租房
        9: 'Operating turnover',//运营周转
        10: 'Marry',//结婚
        11: 'Buy a car',//买车
        12: 'Buy a house',//买房
    },

    //还款记录-还款状态
    repayInfo: [
        {
            label: 'Loan days',//借款天数
            key: 'days',
            value: '',//值
        }, {
            label: 'Loan amount',//借款金额
            key: 'amount',
            value: '',//值
        }, {
            label: 'Days Overdue',//逾期天数
            key: 'overdueDays',
            value: '',//值
        }, {
            label: 'Require Amount',//应还金额
            key: 'repayAmount',
            value: '',//值
        }, {
            label: 'Total repay',//总计已还
            key: 'alreadyRepay',
            value: '',//值
        }, {
            label: 'Collection reduction',//催收减免
            key: 'deductionAmount',
            value: '',//值
        }, {
            label: 'Total need repay',//总计待还
            key: 'toRepay',
            value: '',//值
        }
    ],

    //还款记录信息表头
    repayInfoTitle: {
        0: 'Repayment time',
        1: 'Repayment amount',
        2: 'Repayment type',
        3: 'Repayment',
        4: 'Whether to collect relief',//是否催收减免还款
        5: 'Operator'
    },
    //后台返回是信息
    repayTypeText: {
        '0': 'Normal repayment',
        '1': 'Overdue repayment',
    },
    repayText: {
        '1': 'VA repayment',//VA还款
        '2': 'Convenience store repayment',//便利店还款
    },
    //是否减免还款
    isCutText:{
        '0': 'No',
        '1': 'Yes'
    },

    //催收记录
    collectionRecordTitle: {
        0: 'Collection time',//催收时间
        1: 'Recipient',//催收人
        2: 'Phone',
        3: 'Call record ID',
        4: 'Collection status',//催收状态
        5: 'Estimated repayment time',//预计还款时间
        6: 'Customer label',
        7: 'Feedback',
        8: 'Remarks' // 备注
    },
    //话单记录
    callBillRecordTitle: {
        0: 'Call record ID',
        1: 'Phone Number',
        2: 'Call time',
        3: 'Length of talk',
        4: 'Hang up reason',
        5: 'Recording address',
        6: 'Recipient',
        7: 'Operation？',
    },
    //催收状态
    collectionStatus: {
        1: 'Not catching',
        2: 'Losing contact',
        3: 'Fraud',
        4: 'No repayment Willingness',
        5: 'Promised repayment',
        6: 'Home collection',
        7: 'Customer complaints',
        10: 'Contact whistleblower',//联系人转告
        11: 'Funding difficulties',//资金困难
    },

    //最后的提交表单
    collectionForm: {
        status: '5',
        expectRepayTime: '',
        feedback: '',
        msg: '',
        label: ''
    },

    actionText: [
        {
            key: '2',
            value: 'Losing contact'
        }, {
            key: '3',
            value: 'Fraud'
        },{
            key: '4',
            value: 'No repayment Willingness'
        },{
            key: '5',
            value: 'Promised repayment'
        },{
            key: '6',
            value: 'Home collection'
        },{
            key: '7',
            value: 'Customer complaints'//客户投诉
        },{
            key: '8',
            value: 'Not paid after promission'//承诺后未还款
        },{
            key: '10',
            value: 'Contact whistleblower',//联系人转告
        },{
            key: '11',
            value: 'Funding difficulties',//资金困难
        }
    ],
    //反馈
    feedbackList: [
        {
            key: '0',
            value: 'Said no money, can delay the repayment'//表示没钱，可以延后还款
        }, {
            key: '1',
            value: 'Only return the principal'//表示只归还本金
        },{
            key: '2',
            value: 'Now no work, no income repayment'//现在没工作，没收入还款
        },{
            key: '3',
            value: 'Relatives or friends can help repay their debts'//亲属或者朋友表示可以帮其归还欠款
        },{
            key: '4',
            value: 'Customer explicitly told that is not repayment'//客户明确告知就是不还款
        },{
            key: '5',
            value: "Can't contact the customer, relatives or friends can help inform the repayment"//联系不上客户本人，亲属或者朋友可以帮助告知还款
        },{
            key: '6',
            value: 'Customer lose contact'
        },{
            key: '7',
            value: 'Other'
        }
    ],
    //客户标签
    customerLabelList: [
        {
            key: '1',
            value: 'Special occupation'//特殊职业
        },{
            key: '2',
            value: 'Re-loan customer'//复贷客户
        },{
            key: '3',
            value: 'Multi-loan customer'//多贷客户
        }
    ],
    hangupReasonList:[
        {
            key: '0',
            value: 'initial'//初始
        },
        {
            key: '1',
            value: 'Hang up normally, if connected, whoever hangs up is this reason'//正常挂机，如果接通，不管是谁挂机都是此原因
        },
        {
            key: '2',
            value: 'The user is busy'//用户繁忙
        },
        {
            key: '3',
            value: 'Caller hang up (caller hang up before connecting, attributed to this reason)'//主叫挂机（未接通前主叫挂机，归为此原因）
        },
        {
            key: '4',
            value: 'Called out of reach'//被叫不可达
        },
        {
            key: '5',
            value: 'call time-out'//呼叫超时
        },
        {
            key: '6',
            value: 'Other'//其他
        }
    ],
}

export default msDetailListEn
