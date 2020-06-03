<template>
    <div class="applicationforreduc">
        <Form class="coll-form-style" :label-width="70">
             <!--电话号码-->
            <FormItem :label="uiDataSource.searchConditon.telephone" class="form-item-w-s" >
                <Input  v-model="formAppliForReduc.phoneNo"></Input>
            </FormItem>
             <!--订单号-->
            <FormItem :label="uiDataSource.searchConditon.orderId" class="form-item-w-s" >
                <Input   v-model="formAppliForReduc.orderId"></Input>
            </FormItem>
             <!--审批状态-->
            <FormItem :label="uiDataSource.searchConditon.approvalState" class="form-item-w-s" >
                <Select  :placeholder="uiDataSource.searchResultTip[3]" filterable
                    v-model="formAppliForReduc.status">
                    <Option v-for="(item, key) in uiDataSource.approvalStateList" :value='key+1' :key='key'>{{item}}</Option>
                </Select>
            </FormItem>
             <!--申请时间-->
            <FormItem :label="uiDataSource.searchConditon.startAppliTime" class="form-item-w" >
                <DatePicker style="width:280px" :placeholder="uiDataSource.searchResultTip[3]"  
                    type="datetimerange" 
                    v-model="formAppliForReduc.time1" 
                    @on-change="timeClear1"
                    clearable>
                </DatePicker>
                </FormItem>
            <FormItem style="text-align:center">
                 <!--查询、清空按钮-->
                <Button type="primary" icon="ios-search" @click="searchData(1)">{{uiDataSource.searchConditon.search}}</Button>
                <Button type="primary" icon="ios-trash-outline"  @click="clearSearchItem">{{uiDataSource.searchConditon.clear}}</Button>
            </FormItem>   
        </Form>
        <!--查询结果列表-->
        <div>
            <Table :columns="searchResultColumnsHeader" :height="searchResultDataSource.length>0?405:80"
                :data="searchResultDataSource" border 
                :no-data-text="uiDataSource.searchResultTip[1]"
                @on-sort-change="searchResultSortChange">
            </Table>
            <div style="text-align:center;margin:5px">
                <Page :total="searchResultTotalItems" :current="formAppliForReduc.pageNum"  placement="top"
                        :page-size="formAppliForReduc.pageSize" @on-page-size-change="changeSize"
                        :page-size-opts="pageSizeOptions"
                        @on-change="changePage" size="small" show-total show-elevator show-sizer></Page>
            </div>
        </div>
        <Modal v-model="open" :title="uiDataSource.searchConditon.confirm" :width="400">
            <h3 style="text-align:center">{{uiDataSource.searchConditon.isConfirm}}</h3>
            <div slot="footer">
                <Button type="primary" @click="revokeFn">{{uiDataSource.searchConditon.confirm}}</Button>
                <Button type="primary" @click="close">{{uiDataSource.searchConditon.cancel}}</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import appliForReducApi from '../../services/api/appliForReduc.service'
    import moment from 'moment'
    export default {
        data () {
            return {
                open: false,
                deductionId: '',//减免申请的ID
                //重定义分页的每页显示数目
                pageSizeOptions: [20,50,80,100],
                searchResultTotalItems: 0,
                searchResultColumnsHeader: [
                    {
                        title: '操作',
                        key: 'name',
                        width: 100,
                        fixed: 'left',
                        align: 'center',
                        render: (h, params) => {
                            let btnState = (Number(params.row.status) !== 1)
                            return h('div', [
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'primary',
                                        disabled: btnState
                                    },
                                    on: {
                                        click: () => {
                                            this.open = true
                                            this.deductionId = params.row.deductionId
                                        }
                                    }
                                }, this.uiDataSource.searchResultTip[0])
                            ])
                        }
                    }, {
                        title: '申请时间',
                        key: 'ctime',
                        align: 'center',
                        width: 180,
                        sortType: 'desc',
                        sortable: 'custom'
                    }, {
                        title: '申请人',
                        key: 'auditorName',
                        align: 'center',
                        width: 100,
                    }, {
                        title: '电话号码',
                        key: 'phoneNo',
                        align: 'center',
                        width: 140,
                    }, {
                        title: '审批状态',
                        key: 'status',
                        align: 'center',
                        width: 100,
                        render: (h, params) => {
                            return h('div', this.uiDataSource.approvalStateList[Number(params.row.status)-1])
                        }
                    }, 
                    {
                        title: '订单号',
                        key: 'orderId',
                        align: 'center',
                        width: 150,
                    }, {
                        title: '逾期天数',
                        key: 'overdueDays',
                        align: 'center',
                        width: 100
                    }, {
                        title: '待还金额',
                        key: 'toRepayAmount',
                        align: 'center',
                        width: 120
                    }, {
                        title: '逾期金额',
                        key: 'toRepayOverdueAmount',
                        align: 'center',
                        width: 150
                    }, {
                        title: '减免金额',
                        key: 'deductionAmount',
                        align: 'center',
                        width: 150,
                    }, {
                        title: '减免后应还',
                        key: 'toRepayAfterDeduction',
                        align: 'center',
                        width: 150,
                    }, {
                        title: '减免说明',
                        key: 'msg',
                        align: 'center',
                        width: 120
                    }
                ],
                searchResultDataSource: [],
                uiDataSource: {//页面显示
                    searchConditon: {},//搜索条件
                    approvalStateList: [],//申请状态列表
                    searchResultColumnsHeader: [],//查询结果列表表头,
                    searchResultTip: {}//查询结果列表显示数据
                },
                //减免申请
                formAppliForReduc: {
                    type: 1,//1、表示减免申请列表  2、减免审批列表
                    phoneNo: '',//手机号码
                    orderId: '',//订单编号
                    status:'',//审批状态
                    endApplyTime: '',//申请时间--开始
                    startApplyTime: '',//申请时间--结束
                    sort: 'DESC',
                    sortBy: 'ctime',
                    pageNum: 1,
                    pageSize: 20,
                    time1: [],
                },
                _isSearch: false //查询节流
            }
        },
        methods: {
            //切换语言
            changeLanguage(){
                this.$i18n.locale = this.language
                this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.appliForReduc
                setTimeout(() => {
                    //table
                    this.searchResultColumnsHeader.forEach((item, j) => {
                        item.title = this.uiDataSource.searchResultColumnsHeader[j] //表头翻译
                    })
                }, 100)
            },
            //清空搜索条件
            clearSearchItem() {
                this.formAppliForReduc.phoneNo = ''
                this.formAppliForReduc.orderId = ''
                this.formAppliForReduc.time1 = ''
                this.formAppliForReduc.status = ''
            },
            //清除时间
            timeClear1(date) {
                this.timeClearFn(1, date)
            },
            timeClearFn(index, date) {
                this.formAppliForReduc[`time${index}`] = date
                if (this.formAppliForReduc[`time${index}`][0] === '') {
                    this.formAppliForReduc[`time${index}`] = []
                }else{
                    this.formAppliForReduc[`time${index}`][1] = this.formAppliForReduc[`time${index}`][1].replace('00:00:00','23:59:59')
                }
            },
            //数据格式转换
            timeToString(time) {
                return moment(time).format('YYYY-MM-DD HH:mm:ss')
            },
            //查询数据
            searchData(pageNo) { 
                if (!this._isSearch) {
                    this.$store.dispatch('change_spin_show',true) 
                    this.formAppliForReduc.pageNum = pageNo
                    let content = JSON.parse(JSON.stringify(this.formAppliForReduc))
                    //申请时间
                    content.startApplyTime = this.formAppliForReduc.time1[0] && this.timeToString(this.formAppliForReduc.time1[0]) || ''
                    content.endApplyTime = this.formAppliForReduc.time1[1] && this.timeToString(this.formAppliForReduc.time1[1]) || ''
                    delete content.time1
                    //通过接口获取数据
                    this._isSearch = true
                    appliForReducApi.getSearchResultList({content: JSON.stringify(content)})
                        .then(res => {
                            this._isSearch = false
                            this.searchResultDataSource = res.deductionDetails || []
                            this.searchResultTotalItems = Number(res.basePageResponse.totalNum) || 0
                            if (this.searchResultDataSource.length === 0) {
                                this.$Notice.success({title: this.uiDataSource.searchResultTip[2]})
                            }
                            this.$store.dispatch('change_spin_show',false)
                        })
                }
            },
            //撤销操作
            revokeFn(){
               //调接口
               appliForReducApi.rollbackDeduction({deductionId: this.deductionId}).then( res => {
                    if(res.result){
                        this.$Notice.success({title: 'Success!'})
                        //刷新当前列表
                        this.searchData(this.formAppliForReduc.pageNum)
                    }else{
                        this.$Notice.error({title: 'Operation error!'})
                    }
                    //撤销成功后关闭弹窗
                    this.close()
               })
            },
            //排序操作
            searchResultSortChange(column) {
                this.formAppliForReduc.sortBy = column.key || 'ctime' //默认申请时间倒序排列
                if(column.order === 'normal') column.order = 'asc'
                this.formAppliForReduc.sort = column.order && column.order.toUpperCase() || 'DESC'
                this.searchData(1)
            },
            //改变页码
            changePage (page) {
                this.formAppliForReduc.pageNum = page
                this.searchData(page)
            },
            //改变每页显示数量
            changeSize (size) {
                this.formAppliForReduc.pageSize = size
                this.searchData(1)
            },
            close() {
                this.open = false
            }
        },
        computed:{
            ...mapState({
                language: state => state.module.language,
            })
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
            //测试用例
            this.searchData(1)
        } 
    }
</script>
<style lang="less" scoped>
    .applicationforreduc {
        padding-top: 5px;
        .coll-form-style {
            .form-item-w-s {
                width: 210px;
                display: inline-block;
            }
            .form-item-w {
                width: 300px;
                display: inline-block;
            }
            .ivu-form-item {
                margin-bottom: 5px;
            }
        }
    }
</style>
