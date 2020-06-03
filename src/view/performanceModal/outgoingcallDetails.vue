<template>
    <div class="outgoingcallDetail">
        <Tabs value="name">
            <TabPane :label="auditor" name="name">
                <div>
                    <Form class="coll-form-style" :label-width="100">
                        <!--订单号-->
                        <FormItem :label="uiDataSource.searchCondition.orderId" class="form-item-w-s">
                            <Input v-model="form.orderId" ></Input>
                        </FormItem>
                        <FormItem class="form-item-w">
                            <Button @click="searchData()" type="primary" icon="ios-search" >{{uiDataSource.buttonTitle.search}}</Button>
                        </FormItem>
                    </Form> 
                    <!--查询结果列表-->
                    <div class="resultTable">
                        <Table :row-class-name="rowClassName" :columns="searchResultColumnsHeader" :height="searchResultDataSource.length>0?405:135"
                            :data="searchResultDataSource" border 
                            :no-data-text="uiDataSource.searchResultTip[1]">
                        </Table>
                        <div style="text-align:right;margin:20px 10px 220px 40px;">
                            <Page :total="form.totalItems" :current="form.pageNum"
                                :page-size="form.pageSize" @on-page-size-change="changeSize"
                                @on-change="changePage" size="small" show-total show-elevator show-sizer></Page>
                        </div>
                    </div>
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import performanceAppraisalApi from '../../services/api/performanceAppraisal.service'
    import moment from 'moment'
    import localStorage from '../../services/localStorage.service'
    export default {
        data () {
            return {
                auditorId: '',//催收员id
                auditor: '',//催收员姓名
                searchResultColumnsHeader: [
                    {
                        title: '序号',
                        width: 85,
                        align: 'center',
                        render: (h, params) => {
                            let _show = params.row.serialNumber
                            return h('div', _show)
                        }
                    }, {
                        title: '订单号',
                        key: 'orderId',
                        align: 'center',
                        width: 180,
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
                    searchCondition: {}, //搜索条件
                    buttonTitle: {}, //按钮显示
                    searchResultTotal: {}, //总计
                    searchResultTip: {}, //检索结果提示
                    operationTips: {}, //操作提示
                    infoTitle: {},
                },
                form: {
                    auditorId: '',
                    orderId: '',
                    totalItems: 0,
                    pageSize: 10,
                    pageNum: 1,
                }
            }
        },
        methods: {
            //切换语言
            changeLanguage() {
                this.$i18n.locale = this.language
                this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.outgoingcallDetails
                setTimeout(() => {
                     //table
                    this.searchResultColumnsHeader.forEach((item, j) => {
                        item.title = this.uiDataSource.searchResultColumnsHeader[j] //表头翻译
                    })
                }, 100)
            },
            //改变页码-话单记录
            changePage (page) {
                this.form.pageNum = page
                this.searchData()
            },
            //改变每页显示数量-话单记录
            changeSize (size) {
                this.form.pageSize = size
                this.searchData()
            },
            //查询信息
            searchData () {  
                let content = JSON.parse(JSON.stringify(this.form))
                content.auditorId = this.auditorId

                delete content.totalItems
                
                this.searchResultDataSource = []
                performanceAppraisalApi.getCallForAuditor(content).then(res => {
                    if(res && res.list){
                        this.searchResultDataSource = res.list
                        this.form.totalItems = res.items
                    }
                })
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
            //table隔行换色
            rowClassName (row, index) {
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
        components: {},
        watch: {
           language: function () {
               this.changeLanguage()
           }
        },
        created(){
            this.changeLanguage()
        },
        mounted() {
            this.auditorId = window.decodeURIComponent(window.atob(this.$route.params.auditorId)) || ''
            this.auditor = window.decodeURIComponent(window.atob(this.$route.query.auditor)) || ''

            let currentName = localStorage.get('currentName')
            this.$store.commit('CHANGE_THIRD_BREAD', this.currentName)
            this.$store.commit('CHANGE_FORTH_BREAD', this.auditor)

            this.searchData()
        } 
    }
</script>
<style lang="less" scoped>
    .outgoingcallDetail {
        padding: 20px;
        .coll-form-style {
            .form-item-w-s {
                width: 220px;
                display: inline-block;
            }
            .form-item-w {
                width: 200px;
                margin-right: 20px;
                display: inline-block;
            }
            .ivu-form-item {
                margin-bottom: 5px;
            }
        }
        .resultTable{
            margin-top: 10px;
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

