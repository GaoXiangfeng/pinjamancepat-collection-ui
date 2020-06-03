<template>
    <div >
        <Card class="detail-card">
            <p slot="title" class="title-label">{{uiDataSource.pageTitle.historyOrder}}</p>
            <Table :columns="searchResultColumnHeaders" :data="searchResultData"
                    :no-data-text="uiDataSource.searchResultTip[1]" @on-sort-change="cTimeSortChange"></Table>
            <div style="text-align:right;margin:20px 10px 220px 40px;">
                <Page :total="totalItems" :current="pageNum"
                        :page-size="pageSize" @on-page-size-change="changeSize"
                        @on-change="changePage" size="small" show-total show-elevator show-sizer></Page>
            </div>
        </Card>
        <Modal
            v-model="modalOpen"
            title=" "
            id="historydetailmodal">
            <div>
                <history-order-detail ref="hisorddetail"></history-order-detail>
            </div>
            <div slot="footer">
                <Button style="width:80px;" type="primary" @click="closeModal">{{uiDataSource.btnTitle.close}}</Button >
            </div>
        </Modal>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import historyOrderDetail from './historyOrderDetail.vue'
import historyOrderApi from '../../../services/api/historyOrder.service' 
import localStorage from '../../../services/localStorage.service'
export default {
    data(){
        return {
            channelId: 0, //channelID
            orderId: 0, //要操作的orderId
            modalOpen: false, //查看提示框是否显示
            uiDataSource:{ //ui显示
                pageTitle: {},
                btnTitle: {},
                searchResultColumnHeaders: {},
                orderStatus: {}, //审核状态
                searchResultTip: {}
            },
            searchResultColumnHeaders: [ //查询结果表头
                {
                    title: '',
                    key: '',
                    align: 'center',
                    width: 60,
                    render: (h, params) => {
                        let showOperaBtn = this.channelId == 13 ? 'none' : 'block'
                        return h('div', [
                            h('Button', {
                                props: {
                                    size: 'small',
                                    type: 'primary',
                                    disabled: this.channelId == 13
                                },
                                style:{
                                    display: showOperaBtn
                                },
                                on: {
                                    click: () => {
                                        this.watchDetail(params.row.id)
                                    }
                                }
                            }, this.uiDataSource.btnTitle.watch),
                        ])
                    }
                }, {
                    title: '订单号',
                    key: 'id',
                    align: 'center',
                },{
                    title: '创建时间',
                    key: 'ctime',
                    align: 'center',
                    sortType: 'desc',
                    sortable: 'custom',
                    minWidth: 140,
                    render: (h, params) => {
                        return h('div', this.crtTimeFtt(params.row.ctime))
                    }
                },{
                    title: '审核结果',
                    key: 'orderStatus',
                    align: 'center',
                    width: 130,
                    render: (h, params) => {
                        return h('div', this.uiDataSource.orderStatus[params.row.orderStatus])
                    }
                },{
                    title: '还款时间',
                    key: 'completeTime',
                    align: 'center',
                    minWidth: 140,
                    render: (h, params) => {
                        return h('div', this.crtTimeFtt(params.row.completeTime))
                    }
                },{
                    title: '还款次数',
                    key: 'repayCnt',
                    align: 'center',
                    width: 110,
                },{
                    title: '逾期天数',
                    key: 'overDue',
                    align: 'center',
                    width: 110,
                },
            ],
            searchResultData: [], //查询结果
            pageNum: 0,
            totalItems: 0,
            sort: 'DESC',
            sortBy: 'ctime',
            pageNum: 1,
            pageSize: 20,
            _isSearch: false //查询节流
        }
    },
    components: {
        historyOrderDetail,
    },
    methods: {
        //切换语言
        changeLanguage() {
            this.$i18n.locale = this.language
            this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.historyOrderList
            setTimeout(() => {
                    //table
                this.searchResultColumnHeaders.forEach((item, j) => {
                    item.title = this.uiDataSource.searchResultColumnHeaders[j] //表头翻译
                })
            }, 100)
        },
        //改变页码-
        changePage (page) {
            this.pageNum = page
            this.searchData(page)
        },
        //改变每页显示数量-
        changeSize (size) {
            this.pageSize = size
            this.searchData(1)
        },
        //短信排序
        cTimeSortChange(column){ //短信排序
            this.sortBy = column.key || 'ctime' //默认申请时间倒序排列
            if(column.order === 'normal') column.order = 'asc'
            this.sort = column.order && column.order.toUpperCase() || 'DESC'
            this.searchData(1)
        },
        //列表按钮--查看详细
        watchDetail(id){
            this.modalOpen = true
            this.orderId = id
            this.$refs.hisorddetail.orderId = this.orderId
            this.$refs.hisorddetail.initData()
        },
        searchData(page){
            if(!this._isSearch){
                let content = {
                    orderId: this.orderId,
                    sort: this.sort,
                    sortBy: this.sortBy,
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                }
                this._isSearch = true
                historyOrderApi.getHistoryOrder({content: JSON.stringify(content)}).then(res=>{
                    this._isSearch = false
                    this.searchResultData = res.orderOverDueInfoList
                    this.totalItems = res.totalElements
                    this.pageNum = res.page
                    if(this.res.length === 0){
                       this.$Notice.success({title: this.uiDataSource.searchResultTip[2]})
                    }
                })
            }
        },
        closeModal(){
            this.modalOpen = false
        },
        /**************************************时间格式化处理************************************/
        dateFtt(fmt,date){ //author: meizz   
            var o = {   
                "M+" : date.getMonth()+1,                 //月份   
                "d+" : date.getDate(),                    //日   
                "h+" : date.getHours(),                   //小时   
                "m+" : date.getMinutes(),                 //分   
                "s+" : date.getSeconds(),                 //秒   
                "q+" : Math.floor((date.getMonth()+3)/3), //季度   
                "S"  : date.getMilliseconds()             //毫秒   
            };   
            if(/(y+)/.test(fmt))   
                fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
            for(var k in o)   
                if(new RegExp("("+ k +")").test(fmt))   
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
            return fmt;   
        },
        crtTimeFtt(value,row,index){
            var crtTime = new Date(value);
            return this.dateFtt("yyyy-MM-dd hh:mm:ss",crtTime);//直接调用公共JS里面的时间类处理的办法     
        },
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
        this.channelId = localStorage.get('channelId')
        this.changeLanguage()
    },
    mounted () {
        this.orderId = window.decodeURIComponent(window.atob(this.$route.params.orderNo)) || ''
        this.searchData(1)
    },
}
</script>

<style lang="less">
    #historydetailmodal>.ivu-modal-wrap{
        .ivu-modal{
            width: 800px!important;
            .ivu-modal-body{
                height: 500px;
            }
        }
    }
</style>

