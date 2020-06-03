<template>
    <div class="table_xxf">
        <Scroll >
            <table ref="table" border=1 class="defineTable">  
                <thead>  
                    <tr class="accountName">  
                        <th colspan='2'>{{uiDataSource.tabDisplay.person}}\{{uiDataSource.tabDisplay.date}}</th>
                        <th v-for="(day,index) in dataSource.days" :key="index" v-html="day"></th>
                    </tr>  
                </thead>  
                <tbody>  
                    <tr class="schedulingInfo" v-for="(item,index) in dataSource.itemList" :key="index">  
                        <td :rowspan='item.periodHasAuditorCount' v-show="item.isFirst"><div class="date">{{item.period}}</div></td> 
                        <td class="tdname"><div class="date">{{item.auditor}}</div></td>
                        <td v-for="(cell,index) in item.dateItem" :key="index"><input :disabled="!cell.isUpdateStatus"  type="checkbox" name="" v-bind:class="[cell.check ? checkClass : unCheckClass, cell.isUpdateStatus ? '' : disableClass, inChangeArr(cell) ? changeClass : '' ]" v-model="cell.check" @change="handleRecordChange(cell)"/></td> 
                    </tr>   
                </tbody>  
            </table>
        </Scroll> 
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    data(){
        return {
            uiDataSource: {//ui显示
                tabDisplay: {},
            }, 
            checkClass: 'checkClass',//选中的单元格样式
            unCheckClass: 'unCheckClass',//未选中的单元格样式
            disableClass: 'disableClass',
            changeClass: 'changeClass',//有变动的颜色
            schedulingInfo: [],//排班信息
            dataSource: {//数据源
                itemList:[
                    {
                        periodId:1,
                        period: "",
                        periodHasAuditorCount: 1,
                        isFirst: true,
                        auditor: "",
                        auditorId: 1,
                        dateItem: []
                    }
                ],
                days:[]
            },
            updateDataSource: [],//待更新的数据源
        }
    },
    components: {},
    methods: {
        //切换语言
        changeLanguage() {
            this.$i18n.locale = this.language
            this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.staffScheduling
        },
        //记录变化
        handleRecordChange(cellInfo){
            //更改数据源中的数据
            this.changeAllStatusForPerson(cellInfo.auditorId,cellInfo.date,cellInfo.check)
            //变更变化列表中的数据
            let resultIndex = this.updateDataSource.findIndex(function(value, index) {
				return (value.auditorId == cellInfo.auditorId && value.date == cellInfo.date);
            })
            if(resultIndex >= 0){//如果变化列表中存在该数据项,删除记录
                this.updateDataSource.splice(resultIndex,1)
            }else { //如果变化列表中不存在该变化项，添加该项
                this.updateDataSource.push(cellInfo)
            }
        },
        //判断当前表格是否在变化数组中
        inChangeArr(cellInfo){
            let resultIndex = this.updateDataSource.findIndex(function(value, index) {
				return (value.auditorId == cellInfo.auditorId && value.date == cellInfo.date);
            })
            return (resultIndex >= 0)
        },
        //如果状态有变化，将该人当日所有状态都改变
        changeAllStatusForPerson(auditorId,date,check){
            this.dataSource.itemList.forEach(element => {
                element.dateItem.forEach(item => {
                    if(item.auditorId == auditorId && item.date == date){
                        item.check = check
                    }
                })
            });
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
        }
    },
    created() {
        this.changeLanguage()
    },
    mounted () {},
}
</script>

<style lang="less">
    .table_xxf{
        
        .ivu-scroll-wrapper>.ivu-scroll-container{//滚动区域高度
            height: 600px!important;
            overflow-y: auto!important;
        }

        table{height:100%;font-size: 12px;border-collapse: collapse;border:none;}
        th,td{padding: 5px;text-align: center;border:1px solid #999;min-width: 50px;border:solid #e9eaec 1px;}
        th{background-color: #f8f8f9;position: sticky;top:0px;z-index: 2;}
        th:first-child{background-color: #f8f8f9;position: sticky;top:0px;left: 0px; z-index: 5;min-width: 80px;}
        td:first-child{background-color: #f8f8f9;position: sticky;left:0px;min-width: 80px;}
        .tdname{background-color: #f8f8f9;position: sticky;left:80px;min-width: 100px;}
        td{padding: 0}

    	.checkClass{
    		width: 100%;
			height: 40px;
			border: 0 #FFFFFF;
            background: url('') no-repeat center;
            //background: url('../../img/paibanyes.png') no-repeat center;
			background-size:25px 25px;
			-moz-background-size:25px 25px;
			display: inline-block;  
			vertical-align: middle;  
			-webkit-appearance: none;  
			background-color: transparent;  
			border: 0;  
			outline: 0 !important;
			margin: 0;  
			color: #d8d8d8;
        }
        .unCheckClass{
    		width: 100%;
			height: 40px;
			border: 0 #FFFFFF;
			background: url('../../img/paibanno.png') no-repeat center;
			background-size:25px 25px;
			-moz-background-size:25px 25px;
			display: inline-block;  
			vertical-align: middle;  
			-webkit-appearance: none;  
			background-color: transparent;  
			border: 0;  
			outline: 0 !important;
			margin: 0;  
			color: #d8d8d8;
        }
        .disableClass{
            background-color: rgb(218, 213, 213);
        }
        .changeClass{
            background-color: rgb(200, 235, 184);
        }
    }
</style>

