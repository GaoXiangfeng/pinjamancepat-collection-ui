<!---->
<template>
    <div class="accountdisabled">
        <Modal
            id="accountdisabledmodal"
            v-model="MyisShowAccountDisabled"
            :title="uiDataSource.accountDisabled.title1+' '+disabledAccountObj.auditorName+' '+uiDataSource.accountDisabled.title2"
            :okText="uiDataSource.accountDisabled.commit"
            :loading="loading"
            @on-ok="ok"
            @on-cancel="cancel"
            @on-visible-change="visibleChange">
            <Form class="accountmanage-form-style" :label-width = "80">
                <Scroll class="scroll">
                    <!--公司与人员-->
                    <FormItem v-for="accountinfo in accountList" :label="accountinfo.companyName +':'" :key="accountinfo.companyName" :value="accountinfo.companyName" class="form-item-w-s">
                        <CheckboxGroup v-model="selectedStaffs">
                            <Checkbox class="staff" v-for="staff in accountinfo.auditors" :key="staff.id" :label="staff.id">{{staff.name}}</Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                </Scroll>
            </Form>
        </Modal>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import accountManageApi from '../../../services/api/accountManage.service'
export default {
    data () {
        return {
            MyisShowAccountDisabled: this.isShowAccountDisabled,
            uiDataSource:{
                accountDisabled: {}, //账户停用--基本显示
            },
            accountList: [],//公司账户信息
            selectedStaffs:[], //选中的员工
            loading: true,
        }
    },
    props:['isShowAccountDisabled','disabledAccountObj'],
    computed: {
        ...mapState({
            language: state => state.module.language,
        })
    },
    watch: {
        language: function () {
            this.changeLanguage()
        },
        isShowAccountDisabled(val){
            this.MyisShowAccountDisabled = val
            this.selectedStaffs = []
        },
    },
    methods: {
        //切换语言
        changeLanguage() {
            this.$i18n.locale = this.language
            this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.accountManage
        },
        changeLoading() { //用于验证账户格式不正确时不退出--1
            this.loading = false;
            this.$nextTick(() => {
              this.loading = true;
            });
        },
        ok () {
            this.$Modal.confirm({
                title: this.uiDataSource.accountDisabledConfirm.title,
                content: this.uiDataSource.accountDisabledConfirm.content + this.disabledAccountObj.auditorName + '?',
                onOk: () => {
                    accountManageApi.disableAuditor({auditorId: this.disabledAccountObj.auditorId,replaceAuditorIds: this.selectedStaffs.join(',')}).then(res => {
                        //如果data不为空，则需要弹框提示
                        if(res.data !== null) {
                            this.$Notice.error({title: this.uiDataSource.accountDisabled.noBelong1 + res.noticeMsg + this.uiDataSource.accountDisabled.noBelong2})
                            this.changeLoading();
                            return
                        }
                        this.$Notice.success({title: this.uiDataSource.accountDisabled.success})
                        this.changeLoading();
                        this.$emit('closeAccountDisabled',true)
                    })
                },
                onCancel: () => {
                    this.changeLoading();
                }
            });
        },
        cancel () {
            this.$emit('closeAccountDisabled')
        },
        visibleChange (visible) {
            if(!visible){
                this.$emit('closeAccountDisabled',false)
            }
            if(visible){
                //根据账户id获取可分配的催收人
                accountManageApi.getReplaceForAuditor({auditorId: this.disabledAccountObj.auditorId}).then(res => {
                    this.accountList = res
                })
            }
        }
    },
    created() {
        this.changeLanguage()
    },
    mounted () {}
}

</script>
<style lang='less'>
    #accountdisabledmodal>.ivu-modal-wrap{
        .ivu-modal-body{
            height: 320px;
            .accountmanage-form-style{
                .scroll{
                    height: 288px;
                    .ivu-scroll-container{
                        height: 288px!important;
                    }
                    .form-item-w-s{
                        .ivu-form-item-label{
                            font-size: 12px;
                            font-weight: bold;
                        }
                        .ivu-form-item-content{
                            margin-left: 20px;
                        }
                    }
                    .staff{
                        margin-right: 15px;
                    }
                }
            }
        }
        .ivu-btn:first-child{
            opacity: 0;
        }
        .ivu-btn:nth-child(2){
            width: 80px;
        }
    }
</style>