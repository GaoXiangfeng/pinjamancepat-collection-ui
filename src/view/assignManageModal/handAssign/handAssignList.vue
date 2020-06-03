<!--手动分案列表-->
<template>
    <div class="handassignlist">
        <Form class="coll-form-style" label-position="right" :label-width="110">
            <!--订单号-->
            <FormItem :label="uiDataSource.searchCondition.orderId" class="form-item-w-s">
                <Input v-model="formHandAssignList.orderId" ></Input>
            </FormItem>
            <!--催收状态-->
            <FormItem :label="uiDataSource.searchCondition.collStatus" class="form-item-w-s" style="width: 560px">
                <Select style="width:200px;margin-right: 10px" v-model="formHandAssignList.status" clearable  placement="bottom" :placeholder="uiDataSource.searchResultTip[4]">
                    <Option :value="key" v-for="(value,key) in uiDataSource.collectionStatus" :key="key">{{value}}</Option>
                </Select>
                <!-- 查询/分配 -->
                <Button type="primary" icon="ios-search" @click="searchData(1)">{{uiDataSource.searchCondition.search}}</Button>
                <Button type="primary" icon="ios-list-outline" @click="isShowOrderAssign=true" :disabled="selectedSearchResult.length === 0">{{uiDataSource.searchCondition.distribute}}</Button>
                <Button type="primary" icon="ios-trash-outline" @click="clearSearchItem">{{uiDataSource.searchCondition.clear}}</Button>
            </FormItem>
            <br>
            <!--归属-->
            <FormItem :label="uiDataSource.searchCondition.belongTo" class="form-item-w-s" >
                <Select v-model="formHandAssignList.auditorId" filterable clearable @on-change="changeAuditor()" placement="bottom" :placeholder="uiDataSource.searchResultTip[4]">
                    <Option :value="item.key" v-for="item in auditorList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--账期-->
            <FormItem :label="uiDataSource.searchCondition.accountPeriod" class="form-item-w-s">
                <Select v-model="formHandAssignList.accountPeriod" filterable clearable  placement="bottom" :placeholder="uiDataSource.searchResultTip[4]">
                    <Option :value="item.key" v-for="item in collectionList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--催收公司-->
            <FormItem :label="uiDataSource.searchCondition.collCompany" class="form-item-w-s" >
                <Select v-model="formHandAssignList.companyId" filterable clearable placement="bottom" :placeholder="uiDataSource.searchResultTip[4]">
                    <Option :value="item.key" v-for="item in companyList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--申请渠道-->
            <FormItem :label="uiDataSource.searchCondition.channel" class="form-item-w-s">
                <Select v-model="formHandAssignList.channelId" filterable clearable  placement="bottom" :placeholder="uiDataSource.searchResultTip[4]">
                    <Option :value="item.key" v-for="item in channelList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <br>
            <!--应还款日-->
            <FormItem :label="uiDataSource.searchCondition.repayDate" class="form-item-w">
                <DatePicker v-model="formHandAssignList.time2" type="datetimerange" style="width: 280px"
                            @on-change="timeClear2" clearable></DatePicker>
            </FormItem>
            <!--预计还款-->
            <FormItem :label="uiDataSource.searchCondition.expectedRepay" class="form-item-w">
                <DatePicker v-model="formHandAssignList.time5" type="datetimerange" style="width: 280px" @on-change="timeClear5" clearable></DatePicker>
            </FormItem> 
        </Form>
        <!-- 表格+分页 -->
        <div>
            <Table :columns="searchResultColumnsHeader" 
                :data="searchResultDataSource" 
                :height="searchResultDataSource.length>0?450:''" border
                @on-sort-change="sortChange"
                @on-selection-change = "tableSelectionChange" 
                :no-data-text="uiDataSource.searchResultTip[2]">
            </Table>
            <div style="text-align:center;margin:10px">
                <Page :total="searchResultTotalItems" :current="formHandAssignList.pageNum"  placement="top"
                        :page-size="formHandAssignList.pageSize" @on-page-size-change="changeSize"
                        :page-size-opts="pageSizeOptions"
                        @on-change="changePage" size="small" show-total show-elevator show-sizer></Page>
            </div>
        </div>
        <!-- 案件分配组件 -->
        <order-assign
            :isShowOrderAssign="isShowOrderAssign"
            :orderIds="selectedSearchResyltIds"
            @closeOrderAssign="closeOrderAssignModal" 
        ></order-assign>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import orderAssign from './orderAssignModal'
import assignManageApi from '../../../services/api/assignManage.service'
export default {
    data () {
        return {
            isShowOrderAssign: false, //是否显示分案弹出框
            //重定义分页的每页显示数目
            pageSizeOptions: [20,50,80,100],
            //归属列表
            auditorList: [],
            //账期列表
            collectionList: [],
            //催收公司列表
            companyList: [],
            //申请渠道列表
            channelList: [],
            uiDataSource:{
                collectionStatus:{}, //催收状态
                searchCondition:{}, //搜索条件
                searchResultColumnsHeader: [], //查询列表表头
                searchResultTip: {}, //表格查询数据提示
            },
            searchResultColumnsHeader: [
                {
                    type: 'selection',
                    align: 'center',
                    width: 80,
                }, 
                {
                    title: '订单号',
                    key: 'orderId',
                    width: 130
                },
                {
                    title: '归属',
                    key: 'auditorName',
                    width: 100
                },
                {
                    title: '公司',
                    key: 'collectionCompanyName',
                    width: 120,
                },
                {
                    title: '催收状态',
                    key: 'status',
                    width: 150,
                    render: (h, params) => {
                        return h('div', this.uiDataSource.collectionStatus[params.row.status])
                    }
                },
                {
                    title: '应还款日',
                    key: 'repayTime',
                    sortable: 'custom',
                    sortType: 'desc',
                    width: 190
                },
                {
                    title: '最近还款',
                    key: 'lastRepayTime',
                    width: 190
                }, {
                    title: '最近催收',
                    key: 'lastCollectionTime',
                    width: 180
                },
                {
                    title: '借款金额',
                    key: 'amount',
                    width: 150,
                    render: (h, params) => {
                        return h('div', Number(params.row.amount).toFixed(0))
                    }
                },
                {
                    title: '逾期天数',
                    key: 'overdueDays',
                    width: 150,
                },
                {
                    title: '渠道',
                    key: 'applyChannelName',
                    width: 120,
                },
            ], 
            searchResultDataSource: [],//查询结果列表
            selectedSearchResult: [], //选中的数组
            selectedSearchResyltIds: '', //传给手动分案弹出框组件的参数
            searchResultTotalItems: 0, //查询结果总条数 
            totalNum: 0, //数据总量
            _isSearch: false //查询节流   
        }
    },
    props:[],
    components: {
		orderAssign,
	},
    computed: {
        ...mapState({
            language: state => state.module.language,
            formHandAssignList: state => state.module.formHandAssignList,
            collStatusForHandAssignList: state => state.module.collStatusForHandAssignList,
        }),
    },
    watch: {
        language: function () {
            this.$store.commit('CHANGE_FORM_HAND_ASSIGN_LIST', this.formHandAssignList)
            this.$store.commit('CHANGE_COLL_STATUS_FOR_HAND', this.formHandAssignList.collStatusForHandAssignList)
            this.changeLanguage()
        },
    },
    methods: {
        //切换语言
        changeLanguage() {
            this.uiDataSource.collectionStatus = {}
            this.$i18n.locale = this.language
            let uiDataSource = this.$i18n.messages[this.$i18n.locale].message.handAssignList
            this.$nextTick(() => {
                this.uiDataSource = uiDataSource
                //table
                this.searchResultColumnsHeader.forEach((item, j) => {
                    item.title = this.uiDataSource.searchResultColumnsHeader[j] //表头翻译
                })
            })
            setTimeout(() => {
                //催收状态要变化
                this.formHandAssignList.status = this.collStatusForHandAssignList
            }, 100)
        },
        //获取所有归属
        getAuditors() {
            assignManageApi.getAuthCollectors().then( res => {
                this.auditorList = res
            })
        },
        //选择归属联动账期
        changeAuditor() {
            this.formHandAssignList.accountPeriod = ''
            this.getPeriod(this.formHandAssignList.auditorId)
        },
        //获取所有账期
        getPeriod(id) {
            //id 如果为空就是当前登录用户的所有账期，不为空就是 当前归属的所有账期
            let auditorId = id || ''
            assignManageApi.getAuthAccountPeriods({auditorId: auditorId}).then( res => {
                this.collectionList = res
            }) 
        },
        //获取所有催收公司
        getCompanies () {
            assignManageApi.getCollectionCompanies().then( res => {
                this.companyList = res
            })
        },
        //获取申请渠道
        getChannelsFn() {
            assignManageApi.getChannels().then( res => {
                this.channelList = res
            })
        },
        //清除时间
        timeClear2(date){
            this.timeClearFn(2, date)
        },
        timeClear5(date){
            this.timeClearFn(5, date)
        },
        timeClearFn(index, date){
            this.formHandAssignList[`time${index}`] = date
            if (this.formHandAssignList[`time${index}`][0] === '') {
                this.formHandAssignList[`time${index}`] = []
            }else{
                this.formHandAssignList[`time${index}`][1] = this.formHandAssignList[`time${index}`][1].replace('00:00:00','23:59:59')
            }
        },
        //数据格式转换
        timeToString(time){
            return moment(time).format('YYYY-MM-DD HH:mm:ss')
        },
        //查询数据
        searchData(pageNo){
            if (!this._isSearch) {
                this.$store.dispatch('change_spin_show',true)
                this.formHandAssignList.pageNum = pageNo
                let content = JSON.parse(JSON.stringify(this.formHandAssignList))
                //催收状态
                if(content.status === '') content.status = 0
                //预计还款
                content.startRepayTime = this.formHandAssignList.time2[0] && this.timeToString(this.formHandAssignList.time2[0]) || ''
                content.endRepayTime = this.formHandAssignList.time2[1] && this.timeToString(this.formHandAssignList.time2[1]) || ''
                //最近催收时间
                content.startExpectRepayTime = this.formHandAssignList.time5[0] && this.timeToString(this.formHandAssignList.time5[0]) || ''
                content.endExpectRepayTime = this.formHandAssignList.time5[1] && this.timeToString(this.formHandAssignList.time5[1]) || ''
                delete content.time2
                delete content.time5
                this._isSearch = true
                assignManageApi.collectionList({content: JSON.stringify(content)}).then(res => {
                    this._isSearch = false
                    this.searchResultDataSource = res.collectionOrderDetails || []
                    this.searchResultTotalItems = Number(res.basePageResponse.totalNum) || 0

                    if(this.searchResultDataSource.length === 0){
                        this.$Notice.success({title: this.uiDataSource.searchResultTip[3]})
                    }
                    this.$store.dispatch('change_spin_show',false)
                })
            }
        },
        clearSearchItem(){
            this.formHandAssignList.status = ''
            this.formHandAssignList.orderId = ''
            this.formHandAssignList.phoneNo = ''
            this.formHandAssignList.auditorId = ''
            this.formHandAssignList.accountPeriod = ''
            this.formHandAssignList.channelId = ''
            this.formHandAssignList.companyId = ''
            this.formHandAssignList.channelId = ''
            this.formHandAssignList.time2 = []
            this.formHandAssignList.time5 = []
        },
        tableSelectionChange(selection){
            this.selectedSearchResult = selection
            this.selectedSearchResyltIds = this.selectedSearchResult.map(item => item.orderId).join(',')
        },
        sortChange(column) {
            this.formHandAssignList.sortBy = column.key || 'repayTime'
            if(column.order === 'normal') column.order = 'asc'
            this.formHandAssignList.sort = column.order && column.order.toUpperCase() || 'DESC'
            this.searchData(1)
        },
        //改变页码-
        changePage (page) {
            this.formHandAssignList.pageNum = page
            this.searchData(page)
        },
        //改变每页显示数量-
        changeSize (size) {
            this.formHandAssignList.pageSize = size
            this.searchData(1)
        },
        initData(){ //初始化搜索条件
            //获取所有归属
            this.getAuditors()
            //获取所有账期
            this.getPeriod()
            //获取所有催收公司
            this.getCompanies()
            //获取所有申请渠道
            this.getChannelsFn()
        },
        //关闭案件分配窗口
        closeOrderAssignModal(flag){
            if(flag){
                this.searchData(this.formHandAssignList.pageNum) //分案成功 刷新列表
                this.isShowOrderAssign = false
            }else{
                this.isShowOrderAssign = false
            }
        }
    },
    created() {
        this.changeLanguage()
    },
    mounted () {
        this.clearSearchItem()
    }
}

</script>
<style lang='less'>
    .handassignlist {
        padding-top: 5px;
        .coll-form-style {
            .form-item-w-s {
                width: 220px;
                display: inline-block;
            }
            .form-item-w {
                width: 400px;
                margin-right: 40px;
                display: inline-block;
            }
            .ivu-form-item {
                margin-bottom: 5px;
            }
        }
        
    }
</style>