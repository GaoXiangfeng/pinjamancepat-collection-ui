<template>
    <div class="historyorderdetail">
        <Scroll id="scroll">
        <!--本地通讯录-->
        <Card class="detail-card">
            <p slot="title" class="title-label">{{uiDatasource.cardTitle.callBook}}</p>
            <Table :columns="callBookColumnHeaders" :data="callBookDatas"
                    :no-data-text="uiDatasource.searchResultTip[1]" ></Table>
        </Card>
        <!--本地短信-->
        <Card class="detail-card">
            <p slot="title" class="title-label">{{uiDatasource.cardTitle.message}}</p>
            <div class="sort">
                    <Button class="translate" @click="translateFn(messageDatas)" type="primary" v-if="language=='cn'"> translate</Button>
            </div>
            <Table :columns="messageColumnHeaders" :data="messageDatas"
                    :no-data-text="uiDatasource.searchResultTip[1]"></Table>
        </Card>
        <!--通话记录-->
        <Card class="detail-card">
            <p slot="title" class="title-label">{{uiDatasource.cardTitle.callRecord}}</p>
            <Table :columns="callRecordColumnHeaders" :data="callRecordDatas"
                    :no-data-text="uiDatasource.searchResultTip[1]" ></Table>
        </Card>
        <!-- 审核信息 -->
        <Card class="detail-card">
            <p slot="title" class="title-label">{{uiDatasource.cardTitle.reviewInfo}}</p>
            <Table
            :columns="columnAuditInfoHis"
            :data="auditInfoHisData"
            :no-data-text="uiDatasource.searchResultTip[1]"
            ></Table>
        </Card>
        </Scroll>
        <a ref="target" href="" target="_blank"></a>
    </div>
</template>

<script>
import moment from 'moment'
import {mapState} from 'vuex';
import historyOrderApi from '../../../services/api/historyOrder.service'
import detailListApi from '../../../services/api/detailList.service'
export default {
    data(){
        return {
            myOriginOrderId: '',
            orderId: 0,
            uiDatasource: { //ui显示
                cardTitle: {}, //用户信息-四个标题-后端返回数据的文案
                userCallBookTitle: {}, //用户信息-本地通讯录-表头
                userMessageTitle: {}, //用户信息-本地短信-表头
                userCallRecordTitle: {}, //用户信息-本地通话记录-表头
                actionText: [], //拒绝、通过
                feedbackList: [], //反馈情况
                searchResultTip: {},
                tableContent: {}, //表格内字段
            },
            //本地通讯模块
            callBookColumnHeaders: [ //本地通讯录表头
                {
                    title: '姓名',
                    key: 'name',
                }, {
                    title: '电话',
                    key: 'phone',
                    render: (h, params) => {
                        return h('a',{
                            on: {
                                click: (e) => {
                                    this.getCallUrl(e,params.row.phone)
                                }
                            }
                        },params.row.phone)
                    }
                }, {
                    title: '用户联系次数',
                    key: 'count',
                }, {
                    title: '总呼叫次数',
                    key: 'totalCallCount',
                }, {
                    title: '今日呼叫次数',
                    key: 'todayCallCount',
                }
            ],
            callBookDatas: [], //本地通讯查询出的数据结果
            callBookForm: {
                totalItems: 0,
                pageNum: 1,
                pageSize: 10,
            },
            //本地短信模块
            messageColumnHeaders: [ //本地短信表头
                {
                    title: '姓名',
                    key: 'name',
                },{
                    title: '电话',
                    key: 'phone',
                    width: 140,
                    render: (h, params) => {
                        return h('a',{
                            on: {
                                click: (e) => {
                                    this.getCallUrl(e,params.row.phone)
                                }
                            }
                        },params.row.phone)
                    }
                }, {
                    title: '收发时间',
                    key: 'sendOrAcceptTime',
                    width: 90,
                    render: (h, params) => {
                        return h('div', this.timeFormat(params.row.sendOrAcceptTime))
                    }
                },  {
                    title: '已读',
                    key: 'messageRead',
                    width: 100,
                    render: (h, params) => {
                        return h('span', Number(params.row.messageRead) === 1 ? this.uiDatasource.tableContent.haveRead : this.uiDatasource.tableContent.unread)
                    }
                }, {
                    title: '短信类型',
                    key: 'messageType',
                    width: 80,
                    render: (h, params) => {
                        if (Number(params.row.messageType) === 1) {
                            return h('span', {style: this.infoStyle}, this.uiDatasource.tableContent.receive)
                        } else {
                            return h('span', {style: this.greenStyle}, this.uiDatasource.tableContent.send)
                        }
                    }
                }, {
                    title: '短信内容',
                    key: 'content',
                    width: 200
                }
            ],
            messageDatas: [], //本地短讯查询数据
            messageForm: {
                totalItems: 0,
                pageNum: 1,
                pageSize: 10,
                sort: 'DESC',
                sortBy: 'sendOrAcceptTime'
            },
            //通话记录模块
            callRecordColumnHeaders: [ //通话记录表头
                {
                    title: '姓名',
                    key: 'name',
                }, {
                    title: '电话',
                    key: 'phoneNo',
                    width: 150,
                    render: (h, params) => {
                        return h('a',{
                            on: {
                                click: (e) => {
                                    this.getCallUrl(e,params.row.phone)
                                }
                            }
                        },params.row.phone)
                    }
                }, {
                    title: '通话时间',
                    key: 'callTime',
                    width: 180,
                    render: (h, params) => {
                        return h('div', this.timeFormat(params.row.callTime))
                    }

                }, {
                    title: '通话时长',
                    key: 'duration',
                    render: (h, params) => {
                        return h('div', this.secondToDate(params.row.duration))
                    }
                }, {
                    title: '通话状态',
                    key: 'callType',
                    render: (h, params) => {
                        switch (params.row.callType) {
                            case 1:
                                return h('span', {style: this.infoStyle}, this.uiDatasource.tableContent.in)
                                break
                            case 2:
                                return h('span', {style: this.greenStyle}, this.uiDatasource.tableContent.out)
                                break
                            case 3:
                                return h('span', {style: this.redStyle}, this.uiDatasource.tableContent.no)
                                break
                            default:
                                return h('span', {style: this.warningStyle}, this.uiDatasource.tableContent.unknown)
                                break
                        }
                    }

                }
            ],
            callRecordDatas: [], //通话记录查询数据结果
            callRecordForm: {
                totalItems: 0,
                pageNum: 1,
                pageSize: 10,
                sort: 'DESC',
                sortBy: 'callTime'
            },
            auditInfoHisData: [],
            columnAuditInfoHis: [
                {
                    title: "审核时间",
                    key: "auditTime",
                    render: (h, params) => {
                        return h("div", this.timeFormat(params.row.auditTime));
                    }
                },
                {
                    title: "审核阶段",
                    key: "level",
                    render: (h, params) => {
                        return h("div", this.uiDatasource.auditLevel[params.row.level]);
                    }
                },
                {
                    title: "审核结果",
                    key: "action",
                    render: (h, params) => {
                        return h("div", this.uiDatasource.auditResult[params.row.action]);
                    }
                },
                {
                    title: "审核人员",
                    key: "auditor"
                },
                {
                    title: "审核意见",
                    key: "remark"
                }
            ],
            //颜色、样式
            redStyle: { //红色
                color: '#ff4b58',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#ff4b58',
                padding: '1px',
            },
            greenStyle: { //绿色
                color: '#2ed272',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#2ed272',
                padding: '1px'
            },
            warningStyle: { //黄色
                color: '#ecc23d',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#ecc23d',
                padding: '1px',
                borderRadius: '5px'
            },
            infoStyle: { //蓝色
                color: '#2d8cf0',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#2d8cf0',
                padding: '1px'
            },
        }
    },
    methods: {
        //获取外呼链接
        getCallUrl(e,phone){
            detailListApi.getCallUrl({orderId: this.myOriginOrderId,phoneNo: phone}).then(res => {
                let target = this.$refs.target
                target.setAttribute('href', res)
                target.click()
            })
        },
        //切换语言
        changeLanguage(){
            this.$i18n.locale = this.language
            this.uiDatasource = this.$i18n.messages[this.$i18n.locale].message.historyOrderDetail
            this.$nextTick(() => {
                //切换语言修改表头,将表头信息组成数组
                var titleArr = [
                    {
                        coloumn:  this.callBookColumnHeaders, //通讯录列表表头
                        title: this.uiDatasource.userCallBookTitle 
                    },
                    {
                        coloumn:  this.messageColumnHeaders, //短信列表
                        title: this.uiDatasource.userMessageTitle 
                    },
                    {
                        coloumn:  this.callRecordColumnHeaders, //通话记录列表
                        title: this.uiDatasource.userCallRecordTitle 
                    },
                    {
                        coloumn: this.columnAuditInfoHis, //通话记录列表
                        title: this.uiDatasource.columnAuditInfoTitle
                    },
                ]
                for(let item of titleArr) {
                    this.changeTableTitleFn(item.coloumn, item.title)
                }
            })
        },
        //时间格式化
        timeFormat(time){
            return moment(time).format('YYYY-MM-DD HH:mm:ss')
        },
        //秒转化成 时分秒
        secondToDate(time) {
            let h, m, s, result
            h = Math.floor(time / 3600);
            m = Math.floor((time / 60 % 60));
            s = Math.floor((time % 60));
            if (time < 60) {
                result = `${s} ${this.uiDatasource.tableContent.s}`
            } else if (time >= 60 && time < 3600) {
                result = `${m + this.uiDatasource.tableContent.m} ${s} ${this.uiDatasource.tableContent.s}`
            } else {
                result = `${h} ${this.uiDatasource.tableContent.h} ${m + this.uiDatasource.tableContent.m} ${s} ${this.uiDatasource.tableContent.s}`
            }
            return result
        },
        // 表头翻译、函数提取
        changeTableTitleFn (column, title) {
            column.forEach( (item, index) => {
                item.title = title[index]
            })
        },
        //翻译短信服务
        translateFn(UserNativeMessageInfo) {
            if(this.UserMessageColumns[this.UserMessageColumns.length-1].key!=='contentCh'){
                this.UserNativeMessageInfo = []
                this.UserMessageColumns.push({
                    title: '短信翻译',
                    key: 'contentCh',
                    width: 200
                })
                if (UserNativeMessageInfo.length > 0) {
                    this.UserMessageColumns.forEach((item, i) => {
                        item.title = this.data.userMessageTitle[i]
                    })
                    let transformData = ''
                    let transformArr = []
                    UserNativeMessageInfo.forEach((item, i) => {
                        item.contentCh = ''
                        if (i !== UserNativeMessageInfo.length - 1) transformData += `${item.content}[^]`
                        else transformData += item.content
                    })
                    let param = {
                        text: transformData,
                        from: 'in',
                        to: 'cn'
                    }
                    detailListApi.transition(param).then(res => {
                        let result = ''
                        if (res && res.data.length > 0) {
                            for (let key of res.data) {
                                result += key
                            }
                        }
                        transformArr = result.split('[^]')
                        UserNativeMessageInfo.forEach((item, i) => {
                            item.contentCh = transformArr[i]
                        })
                        this.UserNativeMessageInfo = UserNativeMessageInfo
                    })     
                }
            }else{
                return
            }
        },

        copyFn(param){
            return JSON.parse(JSON.stringify(param))
        },
        //获取本地通讯录
        getCallBookList(){
            historyOrderApi.getCallBookList({orderId: this.orderId}).then(res => {
                //table
                this.callBookColumnHeaders.forEach((item, i) => {
                    item.title = this.uiDatasource.userCallBookTitle[i]
                })
                this.callBookDatas = res || []
            })
        },
        //获取本地短信列表
        getMessageList(){
            historyOrderApi.getMessageList({orderId: this.orderId}).then(res => {
                //table
                let messageDatas = res || []
                this.messageDatas = messageDatas
                if(this.messageColumnHeaders[this.messageColumnHeaders.length-1].key == 'contentCh'){
                    this.messageColumnHeaders.pop()
                }
            })
        },
        //通话记录列表
        getCallRecordList(){
            historyOrderApi.getCallRecordList({orderId: this.orderId}).then(res => {
                //table
                this.callRecordColumnHeaders.forEach((item, i) => {
                    item.title = this.uiDatasource.userCallRecordTitle[i]
                })
                this.callRecordDatas = res  || []
            })
        },
        // 审核信息列表
        getAuditRecordForOrderInfo(){
            historyOrderApi.findAuditTicketRecords({orderId: this.orderId}).then(res => {
                this.auditInfoHisData = res
            })
        },
        initData(){
            this.callBookDatas = []
            this.messageDatas = []
            this.callRecordDatas = []
            //获取本地通讯录
            this.getCallBookList()
            //获取本地短信列表
            this.getMessageList()
            //通话记录列表
            this.getCallRecordList()
            this.getAuditRecordForOrderInfo()
        }
    },
    computed: {
        ...mapState({
            language: state => state.module.language,
        })
    },
    watch: {
        language() {
            this.changeLanguage()
        },
    },
    created() {
        this.changeLanguage()
    },
    mounted () {
        this.myOriginOrderId = window.decodeURIComponent(window.atob(this.$route.params.orderNo)) || ''
    }
}
</script>

<style lang="less">
    #scroll>.ivu-scroll-container{
        position: relative;
        height: 470px!important;
        .ivu-select-dropdown{ 
            position: fixed !important;
        }
        .sort{
            height: 30px;
            margin-bottom: 5px;
            .translate{
                height: 30px;
                position: absolute;
                right:25px;
            }
        }
    }
</style>
