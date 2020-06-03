<template>
    <div class="performanceAppraisalOutgoingcall">
        <div class="paymentstatistics">
            <div class="statistics1">
                <div class="arefirst">
                    <div class="arefirstchild">
                        <xxfTitleTip fontSize="16" fontWeight="600" :contentText="uiDataSource.statistics.todayAmountTitle" :tipText="uiDataSource.statistics.todayAmountTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.dayCount}}</div>
                        <div class="content" >
                            {{uiDataSource.statistics.todayAmountRealtimeCompare}}
                            <span :class="callStaticsCountDataSource.contrastDayCountRate >= 0 ? colorRed : colorGreen">{{callStaticsCountDataSource.contrastDayCountRate}}%</span>&nbsp
                            <Icon v-if="callStaticsCountDataSource.contrastDayCountRate >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                    <div>
                        <xxfTitleTip fontSize="16" fontWeight="600" :contentText="uiDataSource.statistics.todayRateTitle" :tipText="uiDataSource.statistics.todayRateTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.dayRate}}%</div>
                        <div class="content" >{{uiDataSource.statistics.todayRateAllDayCompare}}
                            <span :class="callStaticsCountDataSource.contrastDayYesRate >= 0 ? colorRed : colorGreen">{{callStaticsCountDataSource.contrastDayYesRate}}%</span>&nbsp
                            <Icon v-if="callStaticsCountDataSource.contrastDayYesRate >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="linecol"></div> 
            <div class="statistics2">
                <div class="statistics2child">
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.weekAmountTitle" :tipText="uiDataSource.statistics.weekAmountTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.weekCount}}</div>
                        <div class="content" >{{uiDataSource.statistics.weekAmountRealtimeCompare}}
                            <span :class="callStaticsCountDataSource.contrastWeekCountRate >= 0 ? colorRed : colorGreen">{{callStaticsCountDataSource.contrastWeekCountRate}}%</span>&nbsp
                            <Icon v-if="callStaticsCountDataSource.contrastWeekCountRate >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.weekRateTitle" :tipText="uiDataSource.statistics.weekRateTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.weekRate}}%</div>
                        <div class="content" >{{uiDataSource.statistics.weekRateAllDayCompare}}
                            <span :class="callStaticsCountDataSource.contrastWeekYesRate>= 0 ? colorRed: colorGreen">{{callStaticsCountDataSource.contrastWeekYesRate}}%</span>&nbsp
                            <Icon v-if="callStaticsCountDataSource.contrastWeekYesRate>= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                </div>
                <div class="linerow"></div>
                <div class="statistics2child">
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.lastweekAmountTitle" :tipText="uiDataSource.statistics.lastweekAmountTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.lastweekCount}}</div>
                    </div>
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.lastweekRateTitle" :tipText="uiDataSource.statistics.lastweekRateTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.lastweekRate}}%</div>
                    </div>
                </div>
            </div>
            <div class="linecol"></div> 
            <div class="statistics3">
                <div class="statistics2child">
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.monthAmountTitle" :tipText="uiDataSource.statistics.monthAmountTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.monthCount}}</div>
                        <div class="content" >{{uiDataSource.statistics.monthAmountRealtimeCompare}}
                            <span :class="callStaticsCountDataSource.contrastMonthCountRate >= 0 ? colorRed : colorGreen">{{callStaticsCountDataSource.contrastMonthCountRate}}%</span>&nbsp
                            <Icon v-if="callStaticsCountDataSource.contrastMonthCountRate >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.monthRateTitle" :tipText="uiDataSource.statistics.monthRateTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.monthRate}}%</div>
                        <div class="content" >{{uiDataSource.statistics.monthRateAllDayCompare}}
                            <span :class="callStaticsCountDataSource.contrastMonthYesRate >= 0 ? colorRed : colorGreen">{{callStaticsCountDataSource.contrastMonthYesRate}}%</span>&nbsp
                            <Icon v-if="callStaticsCountDataSource.contrastMonthYesRate >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                </div>
                <div class="linerow"></div>
                <div class="statistics2child">
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.lastmonthAmountTitle" :tipText="uiDataSource.statistics.lastmonthAmountTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.lastmonthCount}}</div>
                        
                    </div>
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.lastmonthRateTitle" :tipText="uiDataSource.statistics.lastmonthRateTip"></xxfTitleTip>
                        <div class="num">{{callStaticsCountDataSource.lastmonthRate}}%</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height:10px;background-color: #f5f7f9;"></div>
        <Form class="performanceappraisal-form-style" :label-width="100">
             <!--账期-->
            <FormItem :label="uiDataSource.searchCondition.accountPeriod" class="form-item-w-s">
                <Select v-model="formPerformanceAppraisal.periodId" filterable clearable :placeholder="uiDataSource.searchCondition.accountPeriodPlaceHolder"  placement="bottom">
                    <Option v-for="item in acountPeriodList" :key="item.key" :value="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
             <!--公司-->
            <FormItem :label="uiDataSource.searchCondition.company" class="form-item-w-s">
                <Select @on-change="companyChange"  :value="formPerformanceAppraisal.companyId" filterable  clearable :placeholder="uiDataSource.searchCondition.companyPlaceHolder" placement="bottom">
                   <Option v-for="item in companyList" :key="item.key" :value="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--渠道-->
            <FormItem v-if="user.role == 1 || user.role == 4" :label="uiDataSource.searchCondition.channel" class="form-item-w-s">
                <Select @on-change="channelChange" :value="formPerformanceAppraisal.channel" filterable clearable  placement="bottom">
                    <Option :value="item.key" v-for="item in channelList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--通话时间-->
            <FormItem :label="uiDataSource.searchCondition.connectTime" class="form-item-w">
                <DatePicker v-model="formPerformanceAppraisal.timeUi" clearable 
                            :placeholder="uiDataSource.searchCondition.connectTimePlaceHolder" 
                            style="width:280px" 
                            format="yyyy-MM-dd HH:mm:ss" 
                            type="datetimerange"
                            :options="dateOptions"
                            @on-change="timeClearForCase"></DatePicker>
            </FormItem>
            <FormItem class="form-item-w">
                <Button @click="searchData()" type="primary" icon="ios-search" >{{uiDataSource.buttonTitle.search}}</Button>
                <Button @click="clearSearchItem" type="primary" icon="ios-trash-outline">{{uiDataSource.buttonTitle.clear}}</Button>
            </FormItem>
        </Form>
        <!--查询结果列表-->
        <div>
            <Table :row-class-name="rowClassName" :columns="searchResultColumnsHeader" :height="searchResultDataSource.length>0?405:405"
                :data="searchResultDataSource" border 
                :no-data-text="uiDataSource.searchResultTip[1]">
            </Table>
        </div>
        <a ref="target" href="" target="_blank"></a>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import performanceAppraisalApi from '../../services/api/performanceAppraisal.service'
    import moment from 'moment'
    import localStorage from '../../services/localStorage.service'
    import xxfTitleTip from '../../components/xxf_Title-tip.vue'
    import { Promise } from 'es6-promise';
    export default {
        data () {
            return {
                user: {},//用户信息
                colorRed: 'colorRed',
                colorGreen: 'colorGreen',
                acountPeriodList: [], //查询条件 -- 账期列表
                companyList: [], //查询条件 --  公司列表 
                channelList: [], //查询条件 -- 渠道列表
                isCompantSelect: false,
                dateOptions: {
                    disabledDate (date) {
                        let initdate = new Date(2018,6,1)
                        return (date && date.valueOf() < initdate) || (date && date.valueOf() > Date.now())
                    }
                },
                operaterRole: 0, //操作人员角色
                callStaticsCountDataSource:{//外呼统计次数
                    dayCount: 0,
                    lastdayCount: 0,
                    weekCount: 0,
                    lastweekCount: 0,
                    monthCount: 0,
                    lastmonthCount: 0,
                    dayRate:0,
                    lastdayRate: 0,
                    weekRate: 0,
                    lastweekRate: 0,
                    monthRate:0,
                    lastmonthRate: 0,
                    contrastDayCountRate: 0,
                    contrastWeekCountRate: 0,
                    contrastMonthCountRate: 0,
                    contrastDayYesRate: 0,
                    contrastWeekYesRate: 0,
                    contrastMonthYesRate: 0
                },
                searchResultColumnsHeader: [
                    {
                        title: '序号',
                        width: 85,
                        align: 'center',
                        render: (h, params) => {
                            let _show = params.row._index === 0 ?  this.uiDataSource.searchResultTotal[0] : params.row.serialNumber 
                            return h('div', _show)
                        }
                    }, {
                        title: '账期',
                        key: 'period',
                        align: 'center',
                        width: 180,
                    }, {
                        title: '公司',
                        key: 'companyName',
                        align: 'center',
                        width: 110,
                    }, {
                        title: '催收员',
                        key: 'auditor',
                        align: 'center',
                        width: 130,
                        render: (h, params) => {
                            if(this.user.role == 1 || this.user.role == 4){
                                return h('a',{
                                    on: {
                                        click: (e) => {
                                            this.getAuditorDetail(params.row.auditor,params.row.auditorId)
                                        }
                                    }
                                },params.row.auditor)
                            }else{
                                return h('div', params.row.auditor)
                            }
                        }
                    }, 
                    {
                        title: '总拨打量',
                        key: 'allCount',
                        align: 'center',
                        width: 150,
                    },{
                        title: '拨打量(用户)',
                        key: 'userCount',
                        align: 'center',
                        width: 150,
                    }, {
                        title: '拨打量(联系人)',
                        key: 'contactCount',
                        align: 'center',
                        width: 100
                    }, {
                        title: '总接通量',
                        key: 'allYesCount',
                        align: 'center',
                        width: 120
                    }, {
                        title: '接通量(用户)',
                        key: 'userYesCount',
                        align: 'center',
                        width: 150
                    }, {
                        title: '接通量(联系人)',
                        key: 'contactYesCount',
                        align: 'center',
                        width: 150,
                    }, {
                        title: '接通率',
                        key: 'allYesRate',
                        align: 'center',
                        width: 150,
                        // render: (h, params) => {
                        //     let _show = (Number(params.row.amountRate) * 100).toFixed(2) + '%' 
                        //     return h('div', _show)
                        // }
                    }, {
                        title: '总通话时长',
                        key: 'allCallTime',
                        align: 'center',
                        width: 150,
                        render: (h, params) => {
                            return h('div', this.secondToDate(params.row.allCallTime))
                        }
                    }, {
                        title: '通话时长(用户)',
                        key: 'userCallTime',
                        align: 'center',
                        width: 150,
                        render: (h, params) => {
                            return h('div', this.secondToDate(params.row.userCallTime))
                        }
                    }, {
                        title: '通话时长(联系人)',
                        key: 'contactCallTime',
                        align: 'center',
                        width: 150,
                        render: (h, params) => {
                            return h('div', this.secondToDate(params.row.contactCallTime))
                        }
                    }
                ],
                searchResultDataSource: [], //检索结果数据源
                uiDataSource: { //页面显示
                    statistics: {},//统计
                    searchCondition: {}, //搜索条件
                    buttonTitle: {}, //按钮显示
                    searchResultTotal: {}, //总计
                    searchResultTip: {}, //检索结果提示
                    operationTips: {}, //操作提示
                    infoTitle: {}, //时分秒等
                },
                //绩效统计
                formPerformanceAppraisal: {
                    periodId: '', //账期
                    period: '',//账期名字
                    companyId: '', //公司
                    companyName: '',//公司名称
                    channel: '',//渠道
                    startTime: '', //通话时间--开始
                    endTime: '', //通话时间--结束
                    timeUi: '', //通话时间
                },
                _isSearch: false //查询节流
            }
        },
        methods: {
            //切换语言
            changeLanguage() {
                this.$i18n.locale = this.language
                this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.performanceAppraisalOutgoingcall
                setTimeout(() => {
                     //table
                    this.searchResultColumnsHeader.forEach((item, j) => {
                        item.title = this.uiDataSource.searchResultColumnsHeader[j] //表头翻译
                    })
                }, 100)
            },
            //公司变化
            companyChange(value){    
                if(value != ''){
                    this.formPerformanceAppraisal.companyId = value
                    this.formPerformanceAppraisal.channel = ''
                }else{
                    this.formPerformanceAppraisal.companyId = ''
                }
                
            },
            //渠道变化
            channelChange(value){
                if(value != ''){
                    this.formPerformanceAppraisal.channel = value
                    this.formPerformanceAppraisal.companyId = ''
                    this.formPerformanceAppraisal.companyName = ''
                }else{
                    this.formPerformanceAppraisal.channel = ''
                }
            },
            //点击催收员，获取催收员详细信息
            getAuditorDetail(auditor,auditorId){
                 if (auditor !== 'undefined') {
                    //localStorage.set('currentPath', 'orderDetail')
                    auditor = window.btoa(window.encodeURIComponent(auditor))//加密
                    auditorId = window.btoa(window.encodeURIComponent(auditorId))//加密
                    this.openNewTable(auditor,auditorId)
                } else {
                    this.$Notice.error({title: 'auditor  undefined!'})
                }
            },
            openNewTable(auditor,auditorId) {
                let target = this.$refs.target
                target.setAttribute('href', window.location.origin + `/home/performanceAppraisal/Outgoingcall/detail/${auditorId}?auditor=${auditor}`)
                target.click()

                // let target = this.$refs.target
                // target.setAttribute('href', window.location.origin + `/home/performanceAppraisal/test`)
                // target.click()
            },
            //查询信息
            searchData () {
                if (!this._isSearch) {

                    let content = JSON.parse(JSON.stringify(this.formPerformanceAppraisal))
                    //content.
                    content.startTime = this.formPerformanceAppraisal.timeUi[0] && this.timeToString(this.formPerformanceAppraisal.timeUi[0]) || ''
                    content.endTime = this.formPerformanceAppraisal.timeUi[1] && this.timeToString(this.formPerformanceAppraisal.timeUi[1]) || ''

                    content.periodId = content.periodId != undefined ? String(content.periodId) : ""
                    content.period = (this.acountPeriodList.find(function(item){return item.key == content.periodId}) && this.acountPeriodList.find(function(item){return item.key == content.periodId}).value) || ''
                    content.companyId = content.companyId != undefined ? String(content.companyId) : ''
                    content.companyName = (this.companyList.find(function(item){return item.key == content.companyId}) && this.companyList.find(function(item){return item.key == content.companyId}).value) || ''

                    if(this.user.role == 1 || this.user.role == 4){
                        content.channel = content.channel != undefined ? String(content.channel) : ""
                    }else{
                        content.channel = ''
                    }

                    if (content.channel != '' || (this.acountPeriodList && this.acountPeriodList.length > 0 && content.periodId !== '') 
                        || (this.companyList && this.companyList.length > 0 && content.companyId !== '')) {
                        this.$store.dispatch('change_spin_show',true)
                        delete content.timeUi
                        this._isSearch = true
                        this.searchResultDataSource = []
                        performanceAppraisalApi.getCallListStatistics(content).then(res => {
                            this._isSearch = false
                            this.searchResultDataSource = res

                            if (!this.searchResultDataSource || this.searchResultDataSource <= 0) {
                                this.$Notice.success({title: '', desc: this.uiDataSource.searchResultTip[2]})
                            }
                            this.$store.dispatch('change_spin_show',false)
                        })
                    } else {
                        this.$Notice.error({title: '', desc: this.uiDataSource.operationTips[1]})
                        return
                    }
                }
            },
            //清空搜索条件
            clearSearchItem () {
                this.formPerformanceAppraisal.periodId = ''
                this.formPerformanceAppraisal.period = ''
                this.formPerformanceAppraisal.companyId = ''
                this.formPerformanceAppraisal.companyName = ''
                this.formPerformanceAppraisal.channel = ''
                this.formPerformanceAppraisal.startTime = ''
                this.formPerformanceAppraisal.endTime = ''
                this.formPerformanceAppraisal.timeUi = ''
            },
            //秒转化成 时分秒
            secondToDate(time) {
                let h, m, s, result
                h = Math.floor(time / 3600);
                m = Math.floor((time / 60 % 60));
                s = Math.floor((time % 60));
                if (time < 60) {
                    result = `${s} ${this.uiDataSource.infoTitle.s}`
                } else if (time >= 60 && time < 3600) {
                    result = `${m + this.uiDataSource.infoTitle.m} ${s} ${this.uiDataSource.infoTitle.s}`
                } else {
                    result = `${h} ${this.uiDataSource.infoTitle.h} ${m + this.uiDataSource.infoTitle.m} ${s} ${this.uiDataSource.infoTitle.s}`
                }
                return result
            },
            //数据格式转换
            timeToString(time){
                return moment(time).format('YYYY-MM-DD HH:mm:ss')
            },
            //清除时间
            timeClearForCase(time){
                this.formPerformanceAppraisal.timeUi = time
                if (this.formPerformanceAppraisal.timeUi[0] === '') {
                    this.formPerformanceAppraisal.timeUi = []
                } else {
                    this.formPerformanceAppraisal.timeUi[1] = this.formPerformanceAppraisal.timeUi[1].replace('00:00:00','23:59:59')
                }
            },
            //初始化数据
            initSearchCondition(){
                this.user = localStorage.get('user')
                let task = []
                task.push(performanceAppraisalApi.getAuthAccountPeriodsForPerformance())
                task.push(performanceAppraisalApi.getCollectionCompanies())
                task.push(performanceAppraisalApi.getChannels())
                Promise.all(task).then(res =>{
                    if(res && res[0]){
                        this.acountPeriodList = res[0]
                    }
                    if(res && res[1]){
                        this.companyList = res[1]
                    }
                    if(res && res[2]){
                        this.channelList = res[2]
                    }
                    if(res[0] && res[1]){
                        //this.searchData()
                    }
                })
            },
            //获取统计数据
            getCallStaticsCount(){
                performanceAppraisalApi.getCallStatisticsCount().then(res => {
                    this.callStaticsCountDataSource = res
                })
            },
            //table隔行换色
            rowClassName (row, index) {
                if(index == 0){//第一行统计
                    return 'demo-total';
                }
                if (index%2 == 0) {
                    return 'demo-table-info-row';
                } 
                return '';
            }
        },
        computed:{
            ...mapState({
                language: state => state.module.language
            })
        },
        components: {
            xxfTitleTip,
        },
        watch: {
           language: function () {
               this.changeLanguage()
           }
        },
        created(){
            this.changeLanguage()
        },
        mounted() {
            this.initSearchCondition()
            this.getCallStaticsCount()
        } 
    }
</script>
<style lang="less" scoped>
    .performanceAppraisalOutgoingcall {
        padding-top: 5px;
        .paymentstatistics{//回款统计
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center; 
            flex-wrap: wrap;
            .statistics1{
                width: 500px;
                padding: 15px;
                .arefirst{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin-left: 10%;
                    .num{
                        font-size: 27px;
                        color:rgb(92, 143, 253);
                        margin: 10px 0;
                    }
                    .arefirstchild{
                        width:200px;
                        margin-right: 15px;
                    }
                }
            }
            .statistics2{
                width: 500px;
                padding: 15px;
                .num{
                    font-size: 16px;
                    color:rgb(92, 143, 253);
                    margin: 3px 0;
                } 
                .statistics2child{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin-left: 10%;
                }
                .arefirst{
                    width: 50%;
                    margin-right: 15px;
                }
            }
            .statistics3{
                width: 500px;
                padding: 15px;
                .num{
                    font-size: 16px;
                    color:rgb(92, 143, 253);
                    margin: 3px 0;
                } 
                .statistics2child{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin-left: 10%;
                }
                .arefirst{
                    width: 200px;
                    margin-right: 15px;
                }
            }
            .linecol{
                float:left;
                margin: 10px 5px;
                width: 1px;
                height: 90%;
                min-height: 150px; 
                background: lightgray;
            }
            .linerow{
                margin: 10px auto;
                width: 90%;
                height: 1px; 
                background: lightgray;
            }
            .colorRed{
                color: red;
            }
            .colorGreen{
                color: rgb(9, 201, 9);
            }
        }
        .performanceappraisal-form-style {
            padding-top: 15px;
            .form-item-w-s {
                width: 260px;
                display: inline-block;
            }
            .form-item-w {
                width: 490px;
                margin-right: 5px;
                display: inline-block;
            }
            .ivu-form-item {
                margin-bottom: 5px;
            }
        } 
    }
</style>
<style lang="less">
    //隔行换色
    .ivu-table .demo-table-info-row td{
        background-color: rgb(226, 239, 250);
    }
    //隔行换色
    .ivu-table .demo-total td{
        background-color: rgb(246, 248, 192);
    }
</style>

