<!-- 减免审批 -->
<template>
    <div class="remissionApproval">
       <Form class="remission-form-style" :label-width="100">
           <!--电话号码-->
            <FormItem :label="data.orderSearchItem.telephone" class="form-item-w-s">
                <Input v-model="formRemission.phoneNo" ></Input>
            </FormItem>
             <!--订单号-->
            <FormItem :label="data.orderSearchItem.orderId" class="form-item-w-s">
                <Input v-model="formRemission.orderId"></Input>
            </FormItem>
             <!--申请人-->
            <FormItem :label="data.orderSearchItem.applicant" class="form-item-w-s">
                <Select v-model="formRemission.applyAuditorId" filterable clearable   placement="bottom" :placeholder="data.orderTableData[4]">
                    <p v-if="applicantList.length>0"><Option :value="item.key" v-for="item in applicantList" :key="item.key">{{item.value}}</Option></p>
                </Select>
            </FormItem>
             <!--审批状态-->
            <FormItem :label="data.orderSearchItem.approvalStatus" class="form-item-w-s">
                <Select v-model="formRemission.status" filterable clearable  placement="bottom" :placeholder="data.orderTableData[4]">
                    <p v-if="data.approvalStatusList.length>0"><Option :value="index+1" v-for="(item,index) in data.approvalStatusList" :key="index">{{item}}</Option></p>
                </Select>
            </FormItem>
            <!--申请时间-->
            <FormItem :label="data.orderSearchItem.applicationDate" class="form-item-w">
                <DatePicker v-model="formRemission.time1"  clearable type="datetimerange" style="width:350px"
                                @on-change="timeClear1"></DatePicker>
            </FormItem>
            <FormItem class="form-item-w">
                 <Button type="primary" icon="ios-search" @click="searchData(1)">{{data.orderSearchItem.search}}</Button>
                <Button type="primary" icon="ios-trash-outline" @click="clearSearchItem">{{data.orderSearchItem.clear}}</Button>
            </FormItem>
        </Form>
        <div>
            <Table :columns="columns1" :data="remissionData" border :height="remissionData.length > 0 ? 410: ''"
            :no-data-text="data.orderTableData[2]" @on-sort-change="sortChange"></Table>
            <div style="text-align:center;margin:5px">
                <Page :total="totalItems" :current="formRemission.pageNum" placement="top"
                        :page-size="formRemission.pageSize" @on-page-size-change="changeSize"
                        :page-size-opts="pageSizeOptions"
                        @on-change="changePage" size="small" show-total show-elevator show-sizer></Page>
            </div>
        </div>
        <Modal v-model="confirmOpen" :title="data.orderSearchItem.confirm" :width="400">
            <h3 style="text-align:center">{{isConfirm ? data.orderSearchItem.isConfirm : data.orderSearchItem.isReject}}</h3>
            <div slot="footer">
                <Button type="primary" @click="confirm">{{data.orderSearchItem.confirm}}</Button>
                <Button type="primary" @click="close">{{data.orderSearchItem.cancel}}</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import collectionListApi from '../../services/api/collectionList.service'
    import appliForReducApi from '../../services/api/appliForReduc.service'
    import remissionApprovalApi from '../../services/api/remissionApproval.service'
    import moment from 'moment'
    import localStorage from '../../services/localStorage.service'
    export default {
        data () {
            return {
                confirmOpen: false,
                isConfirm: true,
                deductionId: '',//申请减免ID
                status: 2, //申请状态
                //重定义分页的每页显示数目
                pageSizeOptions: [20,50,80,100],
                totalItems: 0,
                columns1: [
                    {
                        title: '操作',
                        key: 'action',
                        width: 160,
                        fixed: 'left',
                        align: 'center',
                        render: (h, params) => {
                            let status = Number(params.row.status) !== 1
                            return h('div', [
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'primary',
                                        disabled: status
                                    },
                                    style: {
                                        marginRight: '2px'
                                    },
                                    on: {
                                        click: () => {
                                            this.confirmOpen = true
                                            this.deductionId = params.row.deductionId
                                            this.status = 2 //同意
                                        }
                                    }
                                }, this.data.orderTableData[0]),
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'error',
                                        disabled: status
                                    },
                                    on: {
                                        click: () => {
                                            this.confirmOpen = true
                                            this.isConfirm = false
                                            this.deductionId = params.row.deductionId
                                            this.status = 3 //拒绝
                                        }
                                    }
                                }, this.data.orderTableData[1]),
                            ])
                        }
                    }, {
                        title: '审批状态',
                        key: 'status',
                        align: 'center',
                        width: 100,
                        render: (h, params) => {
                            return h('div', this.data.approvalStatusList[Number(params.row.status)-1])
                        }
                    }, {
                        title: '申请时间',
                        key: 'ctime',
                        sortable: 'custom',
                        align: 'center',
                        sortType: 'asc',
                        width: 190
                    }, {
                        title: '电话号码',
                        key: 'phoneNo',
                        align: 'center',
                        width: 140
                    }, {
                        title: '订单号',
                        key: 'orderId',
                        align: 'center',
                        width: 130
                    }, {
                        title: '逾期天数',
                        key: 'overdueDays',
                        align: 'center',
                        width: 130
                    }, {
                        title: '待还金额',
                        key: 'toRepayAmount',
                        align: 'center',
                        width: 130,
                        render: (h, params) => {
                            return h('div', Number(params.row.toRepayAmount).toFixed(0))
                        }
                    }, {
                        title: '逾期金额',
                        key: 'toRepayOverdueAmount',
                        align: 'center',
                        width: 130,
                        render: (h, params) => {
                            return h('div', Number(params.row.toRepayOverdueAmount).toFixed(0))
                        }
                    }, {
                        title: '减免金额',
                        key: 'deductionAmount',
                        align: 'center',
                        width: 130,
                        render: (h, params) => {
                            return h('div', Number(params.row.deductionAmount).toFixed(0))
                        }
                    }, {
                        title: '减免后应还',
                        key: 'toRepayAfterDeduction',
                        align: 'center',
                        width: 130,
                        render: (h, params) => {
                            return h('div', Number(params.row.toRepayAfterDeduction).toFixed(0))
                        }
                    }, {
                        title: '申请人',
                        key: 'auditorName',
                        align: 'center',
                        width: 130,
                    }, {
                        title: '催收公司',
                        key: 'companyName',
                        align: 'center',
                        width: 150
                    }, {
                        title: '申请渠道',
                        key: 'channelName',
                        align: 'center',
                        width: 130,
                    }, {
                        title: '减免说明',
                        key: 'msg',
                        align: 'center',
                        width: 150
                    }, {
                        title: '审批人',
                        key: 'reviewAuditorName',
                        align: 'center',
                        width: 130,
                    }

                ],
                remissionData: [],
                data: {
                    orderTableData: {},
                    approvalStatusList: [],
                    remissionListTitle: [],
                    orderSearchItem: [],
                },
                formRemission: {
                    type: 2,//1、表示减免申请列表  2、减免审批列表
                    phoneNo: '',//手机号码
                    orderId: '',//订单编号
                    status: 1,//审批状态\默认申请中
                    applyAuditorId: '',//申请人ID
                    endApplyTime: '',//申请时间--开始
                    startApplyTime: '',//申请时间--结束
                    sort: 'ASC',
                    sortBy: 'ctime',//申请时间排序
                    pageNum: 1,
                    pageSize: 20,
                    time1: [],
                },
                applicantList: [],
                _isSearch: false //查询节流
            }
        },
        methods: {
            //获取申请人
            getApplicant() {
                collectionListApi.getAuthCollectors().then( res => {
                    this.applicantList = res
                })
            },
            //排序
            sortChange(column) {
                this.formRemission.sortBy = column.key || 'ctime'
                this.formRemission.sort = column.order && column.order.toUpperCase() || 'DESC'
                this.searchData(1)
            },
            //清除时间
            timeClear1(date){
                this.timeClearFn(1, date)
            },
            timeClearFn(index, date){
                this.formRemission[`time${index}`] = date
                if (this.formRemission[`time${index}`][0] === '') {
                    this.formRemission[`time${index}`] = []
                }else{
                    this.formRemission[`time${index}`][1] = this.formRemission[`time${index}`][1].replace('00:00:00','23:59:59')
                }
            },
            clearSearchItem(){
                this.formRemission.phoneNo = ''
                this.formRemission.orderId = ''
                this.formRemission.time1 = []
                this.formRemission.applyAuditorId = ''
                this.formRemission.status = ''
            },
            //数据格式转换
            timeToString(time){
                return moment(time).format('YYYY-MM-DD HH:mm:ss')
            },
            //查询数据
            searchData(pageNo){
                if (!this._isSearch) {
                    this.$store.dispatch('change_spin_show',true)
                    this.formRemission.pageNum = pageNo
                    let content = JSON.parse(JSON.stringify(this.formRemission))
                    //申请时间
                    content.startApplyTime = this.formRemission.time1[0] && this.timeToString(this.formRemission.time1[0]) || ''
                    content.endApplyTime = this.formRemission.time1[1] && this.timeToString(this.formRemission.time1[1]) || ''
                    delete content.time1
                    this._isSearch = true
                    appliForReducApi.getSearchResultList({content: JSON.stringify(content)}).then(res => {
                        this._isSearch = false
                        this.remissionData = res.deductionDetails || []
                        this.totalItems = Number(res.basePageResponse.totalNum) || 0
                        if(this.remissionData.length === 0){
                            this.$Notice.success({title: this.data.orderTableData[3]})
                        }
                        this.$store.dispatch('change_spin_show',false)
                    })
                }
            },
            changeLanguage(){
                this.$i18n.locale = this.language
                this.data = this.$i18n.messages[this.$i18n.locale].message.remissionApproval
                this.$nextTick(() => {
                     //table
                    this.columns1.forEach((item, j) => {
                        item.title = this.data.remissionListTitle[j] //表头翻译
                    })
                })
                setTimeout(() => {
                   this.$set(this.formRemission,'status',1)
                }, 100)
            },
            //改变页码-
            changePage (page) {
                this.formRemission.pageNum = page
                this.searchData(page)
            },
            //改变每页显示数量-
            changeSize (size) {
                this.formRemission.pageSize = size
                this.searchData(1)
            },
            confirm () {
                //调接口
                let params = {
                    deductionId: this.deductionId,
                    status: this.status
                }
                remissionApprovalApi.reviewDeduction(params).then( res => {
                    //审批成功后 关闭弹窗、刷新列表
                    if(res.result){
                        this.$Notice.success({title: 'Success!'})
                        this.searchData(this.formRemission.pageNum)
                    }else{
                        this.$Notice.error({title: 'Operation error!'})
                    }
                    this.close() 
                })
            },
            close() {
                this.confirmOpen = false
                this.isConfirm = true
            }
        },
        computed: {
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
        mounted(){
            //获取申请人
            this.getApplicant()
            this.searchData(1)
        }

    }
</script>
<style lang="less" scoped>
    .remissionApproval {
        padding-top: 5px;
        .remission-form-style {
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
