<!-- 还款列表 -->
<template>
    <div class="collection">
       <Form class="coll-form-style" :label-width="140">
           <!--电话号码-->
            <FormItem :label="data.orderSearchItem.telephone" class="form-item-w-s">
                <Input v-model="formRepay.phoneNo" ></Input>
            </FormItem>
             <!--订单号-->
            <FormItem :label="data.orderSearchItem.orderId" class="form-item-w-s">
                <Input v-model="formRepay.orderId"></Input>
            </FormItem>
             <!--归属-->
            <FormItem :label="data.orderSearchItem.belongTo" class="form-item-w-s">
                <Select v-model="formRepay.auditorId" filterable clearable @on-change="changeAuditor"  placement="bottom" :placeholder="data.orderTableData[4]">
                    <Option :value="item.key" v-for="item in auditorList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
             <!--账期-->
            <FormItem :label="data.orderSearchItem.accountPeriod" class="form-item-w-s">
                <Select v-model="formRepay.accountPeriod" filterable clearable  placement="bottom" :placeholder="data.orderTableData[4]">
                    <Option :value="item.key" v-for="item in collectionList" :key="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
            <!--应还款日-->
            <FormItem :label="data.orderSearchItem.repayDate" class="form-item-w">
                <DatePicker v-model="formRepay.time2"  clearable type="datetimerange" style="width:350px"
                                @on-change="timeClear2"></DatePicker>
            </FormItem>
            <FormItem :label="data.orderSearchItem.lastRepay" class="form-item-w">
                <!----最近还款-->
                <DatePicker v-model="formRepay.time3" clearable type="datetimerange" style="width:350px" 
                                @on-change="timeClear3"></DatePicker>
            </FormItem>
           <!--最近催收-->
            <FormItem :label="data.orderSearchItem.lastCollection" class="form-item-w">
                <DatePicker v-model="formRepay.time1" clearable type="datetimerange" style="width:350px"
                                @on-change="timeClear1"></DatePicker>
            </FormItem>
            <FormItem class="form-item-w">
                 <Button type="primary" icon="ios-search" @click="searchData(1)">{{data.orderSearchItem.search}}</Button>
                <Button type="primary" icon="ios-trash-outline" @click="clearSearchItem">{{data.orderSearchItem.clear}}</Button>
            </FormItem>
        </Form>
        
        <div>
            <Table :columns="columns1" :data="data1" border :height="data1.length>0?400:80"
            :no-data-text="data.orderTableData[2]" @on-sort-change="sortChange"></Table>
            <div style="text-align:center;margin:10px">
                <Page :total="totalItems" :current="formRepay.pageNum" placement="top"
                        :page-size="formRepay.pageSize" @on-page-size-change="changeSize"
                        :page-size-opts="pageSizeOptions"
                        @on-change="changePage" size="small" show-total show-elevator show-sizer></Page>
            </div>
        </div>
        <a ref="target1" href="" target="_blank"></a>
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
                disburseSort: false,
                repaySort: false,
                lastRepaySort: false,
                lastCollSort: false,
                expectSort: false,
                //归属列表
                auditorList: [],
                //账期列表
                collectionList: [],
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
                        width: 150
                    }, {
                        title: '应还款日',
                        key: 'repayTime',
                        sortable: 'custom',
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
                        title: '借款金额',
                        key: 'amount',
                        width: 130,
                        render: (h, params) => {
                            return h('div', Number(params.row.amount).toFixed(0))
                        }
                    }, {
                        title: '逾期天数',
                        key: 'overdueDays',
                        width: 150
                    }
                ],
                data1: [
                ],
                data: {
                    orderTableData: {},
                    repayListTitle: [],
                    orderSearchItem: [],
                    orderStatus: [],
                    repayTab: []
                },
                formRepayCopy: {},
                _isSearch: false //查询节流
            }
        },
        methods: {
            //排序
            sortChange(column) {
                this.formRepay.sortBy = column.key || 'lastRepayTime'
                if(column.order === 'normal') column.order = 'asc'
                this.formRepay.sort = column.order && column.order.toUpperCase() || 'DESC'
                this.searchData(1)
            },
            //选择归属联动账期
            changeAuditor() {
                this.formRepay.accountPeriod = ''
                this.getPeriod(this.formRepay.auditorId)
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
            //清除时间
            timeClear1(date){
                this.timeClearFn(1, date)
            },
            timeClear2(date){
                this.timeClearFn(2, date)
            },
            timeClear3(date){
                this.timeClearFn(3, date)
            },
            timeClearFn(index, date){
                this.formRepay[`time${index}`] = date
                if (this.formRepay[`time${index}`][0] === '') {
                    this.formRepay[`time${index}`] = []
                }else{
                    this.formRepay[`time${index}`][1] = this.formRepay[`time${index}`][1].replace('00:00:00','23:59:59')
                }
            },
            clearSearchItem(){
                this.formRepay.phoneNo = ''
                this.formRepay.orderId = ''
                this.formRepay.time1 = []
                this.formRepay.time2 = []
                this.formRepay.time3 = []
                this.formRepay.auditorId = ''
                this.formRepay.accountPeriod = ''
            },
            checkList(orderId, repayTime){
                if (orderId !== 'undefined') {
                    localStorage.set('currentPath', 'orderDetail')
                    orderId = window.btoa(window.encodeURIComponent(orderId))//加密
                    repayTime = window.btoa(window.encodeURIComponent(repayTime))//加密
                    // this.$router.push({
                    //     path: `/home/collectionList/detailList/${orderId}`,
                    //     query: {repayTime: repayTime}
                    // })
                    this.openNewTable(orderId,repayTime)
                } else {
                    this.$Notice.error({title: 'orderId  undefined!'})
                }
            },
            openNewTable(orderId,repayTime) {
                let target = this.$refs.target1
                target.setAttribute('href', window.location.origin + `/home/repayList/detailList/${orderId}?repayTime=${repayTime}`)
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
                    this.formRepay.pageNum = pageNo
                    let content = JSON.parse(JSON.stringify(this.formRepay))
                    //最近催收 
                    //TODO
                    content.startLastCollectionTime = this.formRepay.time1[0] && this.timeToString(this.formRepay.time1[0]) || ''
                    content.endLastCollectionTime = this.formRepay.time1[1] && this.timeToString(this.formRepay.time1[1]) || ''
                    //应还款时间
                    content.startRepayTime = this.formRepay.time2[0] && this.timeToString(this.formRepay.time2[0]) || ''
                    content.endRepayTime = this.formRepay.time2[1] && this.timeToString(this.formRepay.time2[1]) || ''
                    //最后还款时间
                    content.startLastRepayTime = this.formRepay.time3[0] && this.timeToString(this.formRepay.time3[0]) || ''
                    content.endLastRepayTime = this.formRepay.time3[1] && this.timeToString(this.formRepay.time3[1]) || ''
                    delete content.time1
                    delete content.time2
                    delete content.time3
                    this._isSearch = true
                    collectionListApi.getCollectionRepayList({content: JSON.stringify(content)}).then(res => {
                        this._isSearch = false
                        this.data1 = res.collectionRepayDetails || []
                        this.totalItems = Number(res.basePageResponse.totalNum) || 0

                        if(this.data1.length === 0){
                            this.$Notice.success({title: this.data.orderTableData[3]})
                        }
                        this.$store.dispatch('change_spin_show',false)
                    })
                }
            },
            changeLanguage(){
                this.$i18n.locale = this.language
                this.data = this.$i18n.messages[this.$i18n.locale].message.repayList
                setTimeout(() => {
                    //table
                    this.columns1.forEach((item, j) => {
                        item.title = this.data.repayListTitle[j] //表头翻译
                    })
                }, 100)
            },
            //改变页码-
            changePage (page) {
                this.formRepay.pageNum = page
                this.searchData(page)
            },
            //改变每页显示数量-
            changeSize (size) {
                this.formRepay.pageSize = size
                this.searchData(1)
            }
        },
        computed: {
            ...mapState({
                language: state => state.module.language,
                formRepay: state => state.module.formRepay,
            }),
        },
        watch: {
            language: function () {
                this.changeLanguage()
            }
        },
        created(){
            this.changeLanguage()
        },
        mounted(){
            if (this.$route.query.isSearch) {
                this.searchData(this.formRepay.pageNum)
            } else {
                this.clearSearchItem()
            }
            //获取所有归属
            this.getAuditors()
            //获取所有账期
            this.getPeriod()
        }

    }
</script>
<style lang="less" scoped>
    .collection {
        padding-top: 5px;
        .coll-form-style {
            .form-item-w-s {
                width: 245px;
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
