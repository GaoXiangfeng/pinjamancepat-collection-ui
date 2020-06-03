<template>
    <div class="performanceAppraisalPayback">
        <div class="paymentstatistics">
            <div class="statistics1">
                <div class="arefirst">
                    <div class="arefirstchild">
                        <xxfTitleTip fontSize="16" fontWeight="600" :contentText="uiDataSource.statistics.todayAmountTitle" :tipText="uiDataSource.statistics.todayAmountTip"></xxfTitleTip>
                        <div class="num">{{Number(repayStatisticsGraphDataSource.dayAmount).toFixed(2)}}</div>
                        <div class="content" >{{uiDataSource.statistics.todayAmountRealtimeCompare}}
                            <span :class="repayStatisticsGraphDataSource.dayCompareYesterdayAmount >= 0 ? colorRed : colorGreen">{{(Number(repayStatisticsGraphDataSource.dayCompareYesterdayAmount)* 100).toFixed(2)}}%</span>&nbsp
                            <Icon v-if="repayStatisticsGraphDataSource.dayCompareYesterdayAmount >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                    <div>
                        <xxfTitleTip fontSize="16" fontWeight="600" :contentText="uiDataSource.statistics.todayRateTitle" :tipText="uiDataSource.statistics.todayRateTip"></xxfTitleTip>
                        <div class="num">{{(Number(repayStatisticsGraphDataSource.dayRate)* 100).toFixed(2)}}%</div>
                        <div class="content" >{{uiDataSource.statistics.todayRateAllDayCompare}}
                            <span :class="repayStatisticsGraphDataSource.dayCompareYesterdayRate >= 0 ? colorRed : colorGreen">{{(Number(repayStatisticsGraphDataSource.dayCompareYesterdayRate)* 100).toFixed(2)}}%</span>&nbsp
                            <Icon v-if="repayStatisticsGraphDataSource.dayCompareYesterdayRate >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
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
                        <div class="num">{{Number(repayStatisticsGraphDataSource.weekAmount).toFixed(2)}}</div>
                        <div class="content" >{{uiDataSource.statistics.weekAmountRealtimeCompare}}
                            <span :class="repayStatisticsGraphDataSource.weekCompareLastAmount >= 0 ? colorRed : colorGreen">{{(Number(repayStatisticsGraphDataSource.weekCompareLastAmount)* 100).toFixed(2)}}%</span>&nbsp
                            <Icon v-if="repayStatisticsGraphDataSource.weekCompareLastAmount >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.weekRateTitle" :tipText="uiDataSource.statistics.weekRateTip"></xxfTitleTip>
                        <div class="num">{{(Number(repayStatisticsGraphDataSource.weekRate)* 100).toFixed(2)}}%</div>
                        <div class="content" >{{uiDataSource.statistics.weekRateAllDayCompare}}
                            <span :class="repayStatisticsGraphDataSource.weekCompareLastRate >= 0 ? colorRed : colorGreen">{{(Number(repayStatisticsGraphDataSource.weekCompareLastRate)* 100).toFixed(2)}}%</span>&nbsp
                            <Icon v-if="repayStatisticsGraphDataSource.weekCompareLastRate >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                </div>
                <div class="linerow"></div>
                <div class="statistics2child">
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.lastweekAmountTitle" :tipText="uiDataSource.statistics.lastweekAmountTip"></xxfTitleTip>
                        <div class="num">{{Number(repayStatisticsGraphDataSource.lastWeekAmount).toFixed(2)}}</div>
                    </div>
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.lastweekRateTitle" :tipText="uiDataSource.statistics.lastweekRateTip"></xxfTitleTip>
                        <div class="num">{{(Number(repayStatisticsGraphDataSource.lastWeekRate)* 100).toFixed(2)}}%</div>
                    </div>
                </div>
            </div>
            <div class="linecol"></div> 
            <div class="statistics3">
                <div class="statistics2child">
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.monthAmountTitle" :tipText="uiDataSource.statistics.monthAmountTip"></xxfTitleTip>
                        <div class="num">{{Number(repayStatisticsGraphDataSource.monthAmount).toFixed(2)}}</div>
                        <div class="content" >{{uiDataSource.statistics.monthAmountRealtimeCompare}}
                            <span :class="repayStatisticsGraphDataSource.monthCompareLastAmount >= 0 ? colorRed : colorGreen">{{(Number(repayStatisticsGraphDataSource.monthCompareLastAmount)* 100).toFixed(2)}}%</span>&nbsp
                            <Icon v-if="repayStatisticsGraphDataSource.monthCompareLastAmount >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.monthRateTitle" :tipText="uiDataSource.statistics.monthRateTip"></xxfTitleTip>
                        <div class="num">{{(Number(repayStatisticsGraphDataSource.monthRate)* 100).toFixed(2)}}%</div>
                        <div class="content" >{{uiDataSource.statistics.monthRateAllDayCompare}}
                            <span :class="repayStatisticsGraphDataSource.monthCompareLastRate >= 0 ? colorRed : colorGreen">{{(Number(repayStatisticsGraphDataSource.monthCompareLastRate)* 100).toFixed(2)}}%</span>&nbsp
                            <Icon v-if="Number(repayStatisticsGraphDataSource.monthCompareLastRate) >= 0" type="ios-arrow-thin-up" color="red" size="16"></Icon>
                            <Icon v-else type="ios-arrow-thin-down" color="rgb(9, 201, 9)" size="16"></Icon>
                        </div>
                    </div>
                </div>
                <div class="linerow"></div>
                <div class="statistics2child">
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.lastmonthAmountTitle" :tipText="uiDataSource.statistics.lastmonthAmountTip"></xxfTitleTip>
                        <div class="num">{{Number(repayStatisticsGraphDataSource.lastMonthAmount).toFixed(2)}}</div>
                        
                    </div>
                    <div class="arefirst">
                        <xxfTitleTip fontSize="13" fontWeight="500" :contentText="uiDataSource.statistics.lastmonthRateTitle" :tipText="uiDataSource.statistics.lastmonthRateTip"></xxfTitleTip>
                        <div class="num">{{(Number(repayStatisticsGraphDataSource.lastMonthRate)* 100).toFixed(2)}}%</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height:10px;background-color: #f5f7f9;"></div>
        <Form class="performanceappraisal-form-style" :label-width="100">
             <!--账期-->
            <FormItem :label="uiDataSource.searchCondition.accountPeriod" class="form-item-w-s">
                <Select v-model="formPerformanceAppraisal.accountPeriodId" filterable clearable :placeholder="uiDataSource.searchCondition.accountPeriodPlaceHolder"  placement="bottom">
                    <Option v-for="item in acountPeriodList" :key="item.key" :value="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
             <!--公司-->
            <FormItem :label="uiDataSource.searchCondition.company" class="form-item-w-s">
                <Select @on-change="companyChange" :value="formPerformanceAppraisal.companyId" filterable  clearable :placeholder="uiDataSource.searchCondition.companyPlaceHolder" placement="bottom">
                    <Option v-for="item in companyList" :key="item.key" :value="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--渠道-->
            <FormItem v-if="user.role == 1 || user.role == 4" :label="uiDataSource.searchCondition.channel" class="form-item-w-s">
                <Select @on-change="channelChange" :value="formPerformanceAppraisal.channelId" filterable clearable  placement="bottom">
                    <Option :value="item.key" v-for="item in channelList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--分案时间-->
            <FormItem :label="uiDataSource.searchCondition.caseTime" class="form-item-w">
                <DatePicker v-model="formPerformanceAppraisal.timeUi" clearable 
                            :placeholder="uiDataSource.searchCondition.caseTimePlaceHolder" 
                            style="width:280px" 
                            format="yyyy-MM-dd HH:mm:ss" 
                            type="datetimerange"
                            :options="dateOptions"
                            @on-change="timeClearForCase"></DatePicker>
            </FormItem>
            <!--还款时间-->
            <FormItem :label="uiDataSource.searchCondition.repayTime" class="form-item-w">
                <DatePicker v-model="formPerformanceAppraisal.timeForRepay" clearable 
                            :placeholder="uiDataSource.searchCondition.caseTimePlaceHolder" 
                            style="width:280px" 
                            format="yyyy-MM-dd HH:mm:ss" 
                            type="datetimerange"
                            :options="dateOptions"
                            @on-change="timeClearForRepay"></DatePicker>
            </FormItem>
            <FormItem class="form-item-w">
                <Button @click="searchData()" type="primary" icon="ios-search" >{{uiDataSource.buttonTitle.search}}</Button>
                <Button @click="clearSearchItem" type="primary" icon="ios-trash-outline">{{uiDataSource.buttonTitle.clear}}</Button>
            </FormItem>
        </Form>
        <!--查询结果列表-->
        <div>
            <Table :row-class-name="rowClassName" :columns="searchResultColumnsHeader" :height="searchResultDataSource.length>0?405:80"
                :data="searchResultDataSource" border 
                :no-data-text="uiDataSource.searchResultTip[1]">
            </Table>
        </div>
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
                repayStatisticsGraphDataSource:{//回款统计次数
                    dayAmount: 0,
                    dayRate: 0,
                    dayCompareYesterdayAmount: 0,
                    dayCompareYesterdayRate: 0,
                    weekAmount: 0,
                    weekRate: 0,
                    weekCompareLastAmount:0,
                    weekCompareLastRate: 0,
                    lastWeekAmount: 0,
                    lastWeekRate: 0,
                    monthCompareLastAmount:0,
                    monthCompareLastRate: 0,
                    monthAmount: 0,
                    monthRate: 0,
                    lastMonthAmount: 0,
                    lastMonthRate: 0,
                },
                searchResultColumnsHeader: [
                    {
                        title: '序号',
                        width: 85,
                        align: 'center',
                        render: (h, params) => {
                            console.log(params.row)
                            let _show = params.row._index === 0 ?  this.uiDataSource.searchResultTotal[0] : params.row._index 
                            return h('div', _show)
                        }
                    }, {
                        title: '账期',
                        key: 'accountPeriod',
                        align: 'center',
                        width: 180,
                    }, {
                        title: '公司',
                        key: 'companyName',
                        align: 'center',
                        width: 110,
                    }, {
                        title: '姓名',
                        key: 'auditorName',
                        align: 'center',
                        width: 130,
                    }, 
                    {
                        title: '渠道',
                        key: 'channelName',
                        align: 'center',
                        width: 130,
                    },
                    {
                        title: '分案(本金+服务费)',
                        key: 'toRepayPrincipal',
                        align: 'center',
                        width: 150,
                        render: (h, params) => {
                            let _show = Number(params.row.toRepayPrincipal) + Number(params.row.toRepayServiceFee) 
                            return h('div', _show)
                        }
                    },{
                        title: '分案逾期费',
                        key: 'toRepayOverdueFee',
                        align: 'center',
                        width: 150,
                    }, {
                        title: '分案户数',
                        key: 'toRepayUserCount',
                        align: 'center',
                        width: 100
                    }, {
                        title: '催回(本金+服务费)',
                        key: 'collectionPrincipal',
                        align: 'center',
                        width: 120,
                        render: (h, params) => {
                            let _show = Number(params.row.collectionPrincipal) + Number(params.row.collectionServiceFee)
                            return h('div', _show)
                        }
                    }, {
                        title: '催回逾期费',
                        key: 'collectionOverdueFee',
                        align: 'center',
                        width: 150
                    }, {
                        title: '催回户数',
                        key: 'collectionUserCount',
                        align: 'center',
                        width: 150,
                    }, {
                        title: '回款率',
                        key: 'amountRate',
                        align: 'center',
                        width: 150,
                        render: (h, params) => {
                            let _show = (Number(params.row.amountRate) * 100).toFixed(2) + '%' 
                            return h('div', _show)
                        }
                    }, {
                        title: '回户率',
                        key: 'userRate',
                        align: 'center',
                        width: 120,
                        render: (h, params) => {
                            let _show = (Number(params.row.userRate) * 100).toFixed(2) + '%' 
                            return h('div', _show)
                        }
                    }, {
                        title: '今日回款笔数',
                        key: 'repayCountToday',
                        align: 'center',
                        width: 100,
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
                },
                //绩效统计
                formPerformanceAppraisal: {
                    accountPeriodId: '', //账期
                    companyId: '', //公司
                    channelId: '',//渠道
                    startTime: '', //分案时间--开始
                    endTime: '', //分案时间--结束
                    timeUi: '', //分案时间
                    timeForRepay: '',// 还款时间
                    startRepayTime: '', //还款时间--开始
                    endRepayTime: '', //还款时间--结束
                },
                _isSearch: false //查询节流
            }
        },
        methods: {
            //切换语言
            changeLanguage() {
                this.$i18n.locale = this.language
                this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.performanceAppraisalPayback
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
                    this.formPerformanceAppraisal.channelId = ''
                }else{
                    this.formPerformanceAppraisal.companyId = ''
                }
            },
            //渠道变化
            channelChange(value){
                if(value != ''){
                    this.formPerformanceAppraisal.channelId = value
                    this.formPerformanceAppraisal.companyId = ''
                }else{
                    this.formPerformanceAppraisal.channelId = ''
                }
            },
            //获取统计数据
            getRepayStatisticsGraph(){
                performanceAppraisalApi.getRepayStatisticsGraph().then(res => {
                    this.repayStatisticsGraphDataSource = res
                })
            },
            //查询信息
            searchData () {
                let content = JSON.parse(JSON.stringify(this.formPerformanceAppraisal))
                content.startTime = this.formPerformanceAppraisal.timeUi[0] && this.timeToString(this.formPerformanceAppraisal.timeUi[0]) || ''
                content.endTime = this.formPerformanceAppraisal.timeUi[1] && this.timeToString(this.formPerformanceAppraisal.timeUi[1]) || ''

                content.startRepayTime = this.formPerformanceAppraisal.timeForRepay[0] && this.timeToString(this.formPerformanceAppraisal.timeForRepay[0]) || ''
                content.endRepayTime = this.formPerformanceAppraisal.timeForRepay[1] && this.timeToString(this.formPerformanceAppraisal.timeForRepay[1]) || ''
                content.accountPeriodId = content.accountPeriodId != undefined ? String(content.accountPeriodId) : ''
                content.companyId = content.companyId != undefined ? String(content.companyId) : ""
                if(this.user.role == 1 || this.user.role == 4){
                    content.channelId = content.companyId != undefined ? String(content.channelId) : ''
                }else{
                    content.channelId = ''
                }

                if (content.channel != '' || (this.acountPeriodList && this.acountPeriodList.length > 0 && content.accountPeriodId !== '') 
                    || (this.companyList && this.companyList.length > 0 && content.companyId !== '')) {
                    this.$store.dispatch('change_spin_show',true)
                    delete content.timeUi
                    delete content.timeForRepay
                    performanceAppraisalApi.getSearchResult({content: JSON.stringify(content)}).then(res => {
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
            },
            //清空搜索条件
            clearSearchItem () {
                this.formPerformanceAppraisal.accountPeriodId = ''
                this.formPerformanceAppraisal.companyId = ''
                this.formPerformanceAppraisal.channelId = ''
                this.formPerformanceAppraisal.startTime = ''
                this.formPerformanceAppraisal.endTime = ''
                this.formPerformanceAppraisal.timeUi = ''
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
            //清除时间
            timeClearForRepay(time){
                this.formPerformanceAppraisal.timeForRepay = time
                if (this.formPerformanceAppraisal.timeForRepay[0] === '') {
                    this.formPerformanceAppraisal.timeForRepay = []
                } else {
                    this.formPerformanceAppraisal.timeForRepay[1] = this.formPerformanceAppraisal.timeForRepay[1].replace('00:00:00','23:59:59')
                }
            },
            //初始化数据
            initSearchCondition(){
                let _initOK =  false
                //初始化数据（账期，公司）
                performanceAppraisalApi.getAuthAccountPeriodsForPerformance().then(res => {
                    this.acountPeriodList = res
                    if (_initOK) {
                        if ((this.acountPeriodList && this.acountPeriodList.length > 0 && this.formPerformanceAppraisal.accountPeriodId !== '') 
                        || (this.companyList && this.companyList.length > 0 && this.formPerformanceAppraisal.companyId !== '')) {
                            this.searchData()
                            _initOK = false
                            return
                        }
                    }
                    _initOK = true
                })
                performanceAppraisalApi.getCollectionCompanies().then(res => {
                    this.companyList = res
                    if (_initOK) {
                        if ((this.acountPeriodList && this.acountPeriodList.length > 0 && this.formPerformanceAppraisal.accountPeriodId !== '') 
                        || (this.companyList && this.companyList.length > 0 && this.formPerformanceAppraisal.companyId !== '')) {
                            this.searchData()
                            _initOK = false
                            return
                        }
                    }
                    _initOK = true
                })
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
            this.getRepayStatisticsGraph()
        } 
    }
</script>
<style lang="less" scoped>
    .performanceAppraisalPayback {
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

