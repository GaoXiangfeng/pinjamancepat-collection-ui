<template>
    <div class="staffscheduling">
        <Tabs @on-click="compayTabChange" :value="companyList[0].value">
            <TabPane v-for="item in companyList" :key="item.key" :label="item.value" :name="item.value">
                <Tabs @on-click="monthTabChange" value="1">
                    <TabPane :label="uiDataSource.tabDisplay.localMonth" name="1">
                        <div style="position: relative;top: 5px;right: 20px;text-align:right;margin-bottom:15px;">
                            <Button @click="handleCurReduction" type="primary">{{uiDataSource.tabDisplay.reduction}}</Button>
                            <Button @click="handleCurSubmit" type="primary">{{uiDataSource.tabDisplay.submit}}</Button>
                        </div>
                       <tablexxf ref="curmonth" ></tablexxf>
                    </TabPane>
                    <TabPane :label="uiDataSource.tabDisplay.nextMonth" name="2">
                        <div style="position: relative;top: 5px;right: 20px;text-align:right;margin-bottom:15px;">
                            <Button @click="handleNextReduction" type="primary">{{uiDataSource.tabDisplay.reduction}}</Button>
                            <Button @click="handleNextSubmit" type="primary">{{uiDataSource.tabDisplay.submit}}</Button>
                        </div>
                       <tablexxf ref="nextmonth"></tablexxf>
                    </TabPane>
                </Tabs>
            </TabPane>
        </Tabs>
        <!--本月提交-->
        <Modal v-model="modal1" width="400" :closable="true" :mask-closable="false"> 
            <p>{{uiDataSource.tabDisplay.submitConfirm}}</p>
            <div slot="footer">
                <Button type="primary" @click="submitCur">{{uiDataSource.tabDisplay.submit}}</Button>
            </div>
        </Modal>
        <!--下月提交-->
         <Modal v-model="modal2" width="400" :closable="true" :mask-closable="false"> 
            <p>{{uiDataSource.tabDisplay.submitConfirm}}</p>
            <div slot="footer">
                <Button type="primary" @click="submitNext">{{uiDataSource.tabDisplay.submit}}</Button>
            </div>
        </Modal>
        <!--本月还原-->
        <Modal v-model="modal3" width="400" :closable="true" :mask-closable="false"> 
            <p>{{uiDataSource.tabDisplay.reductionConfirm}}</p>
            <div slot="footer">
                <Button type="primary" @click="reductionCur">{{uiDataSource.tabDisplay.yes}}</Button>
            </div>
        </Modal>
        <!--下月还原-->
        <Modal v-model="modal4" width="400" :closable="true" :mask-closable="false"> 
            <p>{{uiDataSource.tabDisplay.reductionConfirm}}</p>
            <div slot="footer">
                <Button type="primary" @click="reductionNext">{{uiDataSource.tabDisplay.yes}}</Button>
            </div>
        </Modal>
        <Modal v-model="modaltip" width="400" :closable="true" :mask-closable="false"> 
            <p>{{uiDataSource.tabDisplay.noPersonTip}}</p>
            <div slot="footer">
                <Button type="primary" @click="modaltip=false">{{uiDataSource.tabDisplay.submit}}</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import tablexxf from './table_xxf'
import staffSchedulingApi from '../../services/api/staffScheduling.service'
export default {
    data(){
        return {
            uiDataSource: {//ui显示
                tabDisplay: {},
            }, 
            modal1: false,//提交确认框(本月)
            modal2: false,//提交确认框(下月)
            modal3: false,//还原确认框（本月）
            modal4: false,//还原确认框（下月）
            modaltip: false,//某账期没有催收员排班提醒
            companyList: [{key: 2,value: 'Qworks'}], //公司列表
            curSchedule: { //初始化数据
                itemList:[
                    {
                        periodId:1,
                        period: "M0(0~3)",
                        periodHasAuditorCount: 1,
                        isFirst: true,
                        auditor: "Eeng",
                        auditorId: 1,
                        dateItem: [
                            {
                                recId: 11,
                                auditorId: 1,
                                check: true,
                                isUpdateStatus: false,
                                date: "2019-03-01"
                            }
                        ]
                    }
                ],
                days:[
                    1
                ]
            },//本月排班数据源
            nextSchedule: { //初始化数据
                itemList:[
                    {
                        periodId:1,
                        period: "M0(0~3)",
                        periodHasAuditorCount: 1,
                        isFirst: true,
                        auditor: "Eeng",
                        auditorId: 1,
                        dateItem: [
                            {
                                recId: 11,
                                auditorId: 1,
                                check: true,
                                isUpdateStatus: false,
                                date: "2019-03-01"
                            }
                        ]
                    }
                ],
                days:[
                    1
                ]
            }, //下月排班数据源
            operaCompanyID: 0,//当前操作公司的ID
            operaMonthID: 0,//当前操作月份的ID
            operaIndex: 0,//当前操作公司的index,用于获取相应的表格控件
        }
    },
    components: {
        tablexxf,
    },
    methods: {
        //切换语言
        changeLanguage() {
            this.$i18n.locale = this.language
            this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.staffScheduling
        },
        //获取公司
        getCompany(){
            this.$store.dispatch('change_spin_show',true)
            staffSchedulingApi.getCollectionCompanies().then(res => {
                this.companyList = res
                //首次获取完公司,查询当前公司下的本月排班
                if(this.companyList && this.companyList.length > 0){
                    this.operaCompanyID = this.companyList[0].key
                    this.getScheduleForCur(this.companyList[0].key,1)
                }
            })
        },
        //获取本月排版列表
        getScheduleForCur(companyId){
            this.$store.dispatch('change_spin_show',true)
            staffSchedulingApi.getSchedule({companyId: companyId,monthType: 1}).then(res => {
                this.curSchedule = res
                this.$refs.curmonth[this.operaIndex].dataSource = this.curSchedule
                this.$store.dispatch('change_spin_show',false)
            })
        },
        //本月还原
        handleCurReduction(){
            this.modal3 = true
        },
        //本月还原
        reductionCur(){
            this.modal3 = false
            this.getScheduleForCur(this.operaCompanyID)
            this.$refs.curmonth[this.operaIndex].updateDataSource = []
        },
        //本月提交
        handleCurSubmit(){
            this.modal1 = true
        },
        //本月提交
        submitCur(){
            this.modal1 = false
            console.log(this.$refs.curmonth[this.operaIndex].updateDataSource)
            staffSchedulingApi.updateSchedule({content: JSON.stringify(this.$refs.curmonth[this.operaIndex].updateDataSource)}).then(res=>{
                this.$Notice.success({title: 'successd'})
                //本月提交成功后，将要操作的数据数组清空
                this.$refs.curmonth[this.operaIndex].updateDataSource = []
                this.getScheduleForCur(this.operaCompanyID)
            })
        },
        //下月还原
        handleNextReduction(){
            this.modal4 = true
        },
        //下月还原
        reductionNext(){
            this.modal4 = false
            this.getScheduleForNext(this.operaCompanyID)
            this.$refs.nextmonth[this.operaIndex].updateDataSource = []
        },
        //下月提交
        handleNextSubmit(){
            this.modal2 = true
        },
        //下月提交
        submitNext(){
            this.modal2 = false
            console.log(this.$refs.nextmonth[this.operaIndex].updateDataSource)
            staffSchedulingApi.updateSchedule({content: JSON.stringify(this.$refs.nextmonth[this.operaIndex].updateDataSource)}).then(res=>{
                this.$Notice.success({title: 'successd'})
                //本月提交成功后，将要操作的数据数组清空
                this.$refs.nextmonth[this.operaIndex].updateDataSource = []
                this.getScheduleForNext(this.operaCompanyID)
            })
        },
        //获取下月排版列表
        getScheduleForNext(companyId){
            this.$store.dispatch('change_spin_show',true)
            staffSchedulingApi.getSchedule({companyId: companyId,monthType: 2}).then(res => {
                this.nextSchedule = res
                this.$refs.nextmonth[this.operaIndex].dataSource = this.nextSchedule
                this.$store.dispatch('change_spin_show',false)
            })
        },
        //公司列表切换
        compayTabChange(companyName){
            this.companyList.forEach(element => {
                if(element.value == companyName){
                    this.operaCompanyID = element.key
                    this.operaIndex = this.companyList.indexOf(element)
                    this.getScheduleForCur(element.key)
                }
            });
        },
        //月份切换
        monthTabChange(monthName){
            this.operaMonthID = Number(monthName)
            if(this.operaMonthID == 2){
                this.getScheduleForNext(this.operaCompanyID)
            }
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
    mounted () {
        this.getCompany()
    },
}
</script>

<style lang="less">
    .staffscheduling{
        padding: 20px;
    }
</style>

