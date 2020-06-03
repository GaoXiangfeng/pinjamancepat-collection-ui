<template>
    <div class="collection">
        <Form class="coll-form-style" label-position="right" :label-width="110">
            <!--电话号码-->
            <FormItem :label="data.orderSearchItem.telephone" class="form-item-w-s">
                <Input v-model="form.phoneNo"></Input>
            </FormItem>
                <!--订单号-->
            <FormItem :label="data.orderSearchItem.orderId" class="form-item-w-s">
                <Input v-model="form.orderId" ></Input>
            </FormItem>
            <!--催收状态-->
            <FormItem :label="data.orderSearchItem.collStatus" class="form-item-w-s" style="width: 560px">
                <Select style="width:200px;margin-right: 10px" v-model="form.status" clearable  placement="bottom" :placeholder="data.orderTableData[4]">
                    <Option :value="key" v-for="(value,key) in data.collectionTab" :key="key">{{value}}</Option>
                </Select>
                <!-- 查询/清空 -->
                <Button type="primary" icon="ios-search" @click="searchData(1)">{{data.orderSearchItem.search}}</Button>
                <Button type="primary" icon="ios-trash-outline" @click="clearSearchItem">{{data.orderSearchItem.clear}}</Button>
            </FormItem>
            <br>
            <!--归属-->
            <FormItem :label="data.orderSearchItem.belongTo" class="form-item-w-s" >
                <Select v-model="form.auditorId" filterable clearable @on-change="changeAuditor()" placement="bottom" :placeholder="data.orderTableData[4]">
                    <Option :value="item.key" v-for="item in auditorList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--账期-->
            <FormItem :label="data.orderSearchItem.accountPeriod" class="form-item-w-s">
                <Select v-model="form.accountPeriod" filterable clearable  placement="bottom" :placeholder="data.orderTableData[4]">
                    <Option :value="item.key" v-for="item in collectionList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--催收公司-->
            <FormItem :label="data.orderSearchItem.collCompany" class="form-item-w-s" >
                <Select v-model="form.companyId" filterable clearable placement="bottom" :placeholder="data.orderTableData[4]">
                    <Option :value="item.key" v-for="item in companyList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--申请渠道-->
            <FormItem :label="data.orderSearchItem.channel" class="form-item-w-s">
                <Select v-model="form.channelId" filterable clearable  placement="bottom" :placeholder="data.orderTableData[4]">
                    <Option :value="item.key" v-for="item in channelList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <br>
            <!--应还款日-->
            <FormItem :label="data.orderSearchItem.repayDate" class="form-item-w">
                <DatePicker v-model="form.time2" type="datetimerange" style="width: 280px"
                            @on-change="timeClear2" clearable></DatePicker>
            </FormItem>
            <!--预计还款-->
            <FormItem :label="data.orderSearchItem.expectedRepay" class="form-item-w">
                <DatePicker v-model="form.time5" type="datetimerange" style="width: 280px" @on-change="timeClear5" clearable></DatePicker>
            </FormItem> 
            <!--客户标签-->
            <FormItem :label="data.orderSearchItem.customerLabel" class="form-item-w">
                <Select style="width:200px;margin-right: 10px" v-model="form.label" clearable  placement="bottom" :placeholder="data.orderTableData[4]">
                    <Option :value="item.key" v-for="(item) in data.customerLabelList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--三天未跟进提醒-->
            <br> 
            <FormItem :label="data.orderSearchItem.other"  class="form-item-w-s">
                <Checkbox v-model="form.selectThanThree" style="width: 350px">{{data.orderSearchItem.selectThanThree}}</Checkbox>
            </FormItem>
            
        </Form>
        <!-- 表格+分页 -->
        <div>
            <Table :columns="columns1" :data="data1" :height="data1.length>0?450:80" border
            @on-sort-change="sortChange" 
            :no-data-text="data.orderTableData[2]"></Table>
            <div style="text-align:center;margin:10px">
                <Page :total="totalItems" :current="form.pageNum"  placement="top"
                        :page-size="form.pageSize" @on-page-size-change="changeSize"
                        :page-size-opts="pageSizeOptions"
                        @on-change="changePage" size="small" show-total show-elevator show-sizer></Page>
            </div>
        </div>
        <a ref="target" href="" target="_blank"></a>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import collectionListApi from '../../services/api/collectionList.service'
    import moment from 'moment'
    import localStorage from '../../services/localStorage.service'
    export default {
        data () {
            return {
                //重定义分页的每页显示数目
                pageSizeOptions: [20,50,80,100],
                totalItems: 0,
                //归属列表
                auditorList: [],
                //账期列表
                collectionList: [],
                //催收公司列表
                companyList: [],
                //申请渠道列表
                channelList: [],
                columns1: [
                    {
                        title: '操作',
                        key: 'action',
                        width: 100,
                        fixed: 'left',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'primary'
                                    },
                                    on: {
                                        click: () => {
                                            this.checkList(params.row.orderId, params.row.repayTime)
                                        }
                                    }
                                }, this.data.orderTableData[0])
                            ])
                        }
                    }, {
                        title: '归属',
                        key: 'auditorName',
                        width: 100
                    }, {
                        title: '电话号码',
                        key: 'phoneNo',
                        width: 140
                    }, {
                        title: '订单号',
                        key: 'orderId',
                        width: 130
                    }, {
                        title: '催收状态',
                        key: 'status',
                        width: 150,
                        render: (h, params) => {
                            return h('div', this.data.collectionTab[params.row.status])
                        }
                    }, {
                        title: '客户标签',
                        key: 'status',
                        width: 150,
                        render: (h, params) => {
                            return h('div', params.row.label != null && params.row.label != undefined && this.data.customerLabelList.find((i)=>i.key == params.row.label ).value)
                        }
                    }, {
                        title: '逾期天数',
                        key: 'overdueDays',
                        width: 150,
                    }, {
                        title: '应还款日',
                        key: 'repayTime',
                        sortable: 'custom',
                        sortType: 'desc',
                        width: 190
                    }, {
                        title: '最近还款',
                        key: 'lastRepayTime',
                        sortable: 'custom',
                        width: 190
                    }, {
                        title: '最近催收',
                        key: 'lastCollectionTime',
                        sortable: 'custom',
                        width: 180
                    }, {
                        title: '预计还款',
                        key: 'expectRepayTime',
                        sortable: 'custom',
                        width: 230
                    }, {
                        title: '借款金额',
                        key: 'amount',
                        width: 150,
                        render: (h, params) => {
                            return h('div', Number(params.row.amount).toFixed(0))
                        }
                    }, {
                        title: '公司',
                        key: 'collectionCompanyName',
                        width: 120,
                    }, {
                        title: '渠道',
                        key: 'applyChannelName',
                        width: 120,
                    }

                ],    
                data1: [],
                data: {
                    orderTableData: {},
                    collectionListTitle: [],
                    orderSearchItem: [],
                    collectionTab: {},
                    customerLabelList: []
                },
                count: 0, //为解决7个tab标签，执行下拉框的选择时，调用接口7次的bug ，需要记录次数。
                _isSearch: false //查询节流
            }
        },
        methods: {
            sortChange(column) {
                this.form.sortBy = column.key || 'repayTime'
                if(column.order === 'normal') column.order = 'asc'
                this.form.sort = column.order && column.order.toUpperCase() || 'DESC'
                this.searchData(1)
            },
            //选择归属联动账期
            changeAuditor() {
                this.form.accountPeriod = ''
                this.getPeriod(this.form.auditorId)
            },
            //获取所有归属
            getAuditors() {
                collectionListApi.getAuthCollectors().then( res => {
                    this.auditorList = res
                })
            },
            //获取所有账期
            getPeriod(id) {
                //id 如果为空就是当前登录用户的所有账期，不为空就是 当前归属的所有账期
                let auditorId = id || ''
                collectionListApi.getAuthAccountPeriods({auditorId: auditorId}).then( res => {
                    this.collectionList = res
                }) 
            },
            //获取所有催收公司
            getCompanies () {
                collectionListApi.getCollectionCompanies().then( res => {
                    this.companyList = res
                })
            },
            //获取申请渠道
            getChannelsFn() {
                collectionListApi.getChannels().then( res => {
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
                this.form[`time${index}`] = date
                if (this.form[`time${index}`][0] === '') {
                    this.form[`time${index}`] = []
                }else{
                    this.form[`time${index}`][1] = this.form[`time${index}`][1].replace('00:00:00','23:59:59')
                }
            },
            clearSearchItem(){
                this.form.phoneNo = ''
                this.form.orderId = ''
                this.form.status = ''
                this.form.auditorId = ''
                this.form.accountPeriod = ''
                this.form.companyId = ''
                this.form.channelId = ''
                this.form.selectThanThree = false
                this.form.time2 = []
                this.form.time5 = []
            },
            checkList(orderId, repayTime){
                if (orderId !== 'undefined') {
                    //localStorage.set('currentPath', 'orderDetail')
                    orderId = window.btoa(window.encodeURIComponent(orderId))//加密
                    repayTime = window.btoa(window.encodeURIComponent(repayTime))//加密
                    this.openNewTable(orderId,repayTime)
                } else {
                    this.$Notice.error({title: 'orderId  undefined!'})
                }
            },
            openNewTable(orderId,repayTime) {
                let target = this.$refs.target
                target.setAttribute('href', window.location.origin + `/home/collectionList/detailList/${orderId}?repayTime=${repayTime}`)
                target.click()
            },

            //数据格式转换
            timeToString(time){
                return moment(time).format('YYYY-MM-DD HH:mm:ss')
            },
            //查询数据
            searchData(pageNo){
                if (!this._isSearch) {
                    this.$store.dispatch('change_spin_show',true)
                    this.form.pageNum = pageNo
                    let content = JSON.parse(JSON.stringify(this.form))
                    //催收状态
                    if(content.status === '') content.status = 0
                    //应还款时间
                    content.startRepayTime = this.form.time2[0] && this.timeToString(this.form.time2[0]) || ''
                    content.endRepayTime = this.form.time2[1] && this.timeToString(this.form.time2[1]) || ''
                    //预计还款时间
                    content.startExpectRepayTime = this.form.time5[0] && this.timeToString(this.form.time5[0]) || ''
                    content.endExpectRepayTime = this.form.time5[1] && this.timeToString(this.form.time5[1]) || ''
                    content.selectThanThree = content.selectThanThree ? 1 : 0
                    delete content.time2
                    delete content.time5
                    this._isSearch = true
                    collectionListApi.collectionList({content: JSON.stringify(content)}).then(res => {
                        this._isSearch = false
                        this.data1 = res.collectionOrderDetails || []
                        this.totalItems = Number(res.basePageResponse.totalNum) || 0

                        if(this.data1.length === 0){
                            this.$Notice.success({title: this.data.orderTableData[3]})
                        }
                        this.$store.dispatch('change_spin_show',false)
                    })
                }
            },
            changeLanguage(){
                this.data.collectionTab = {}
                this.data.customerLabelList = []
                this.$i18n.locale = this.language
                let data = this.$i18n.messages[this.$i18n.locale].message.collectionList
                this.$nextTick(() => {
                    this.data = data
                    //table
                    this.columns1.forEach((item, j) => {
                        item.title = this.data.collectionListTitle[j] //表头翻译
                    })
                })
                setTimeout(() => {
                    //催收状态要变化
                    this.form.status = this.collStatus
                }, 100)
            },
            //改变页码-
            changePage (page) {
                this.form.pageNum = page
                this.searchData(page)
            },
            //改变每页显示数量-
            changeSize (size) {
                this.form.pageSize = size
                this.searchData(1)
            },
        },
        computed: {
            ...mapState({
                language: state => state.module.language,
                form: state => state.module.formColl,
                collStatus: state => state.module.collStatus,
                
            }),
        },
        watch: {
            language: function () {
                this.$store.commit('CHANGE_FORM_COLL', this.form)
                this.$store.commit('CHANGE_COLL_STATUS', this.form.status)
                this.changeLanguage()
            },
        },
        created(){
            this.changeLanguage()
        },
        mounted(){
            if (this.$route.query.isSearch) {
                this.searchData(this.form.pageNum)
            } else {
                this.clearSearchItem()
            }
            //获取所有归属
            this.getAuditors()
            //获取所有账期
            this.getPeriod()
            //获取所有催收公司
            this.getCompanies()
            //获取所有申请渠道
            this.getChannelsFn()
        }

    }
</script>
<style lang="less" scoped>
    .collection {
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
