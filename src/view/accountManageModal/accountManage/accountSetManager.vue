<!---->
<template>
    <div class="accountsetmanager">
        <Modal
            id="accountsetmanagermodal"
            v-model="MyisShowAccountSetManager"
            :title="uiDataSource.accountSetManager.title1+uiDataSource.accountSetManager.title2"
            :okText="uiDataSource.accountSetManager.commit"
            @on-ok="ok"
            @on-visible-change="visibleChange"
            :loading="loading">
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
            MyisShowAccountSetManager: this.isShowAccountSetManager,
            uiDataSource:{
                accountSetManager:{}, //页面显示
            },
            accountList: [],//公司账户信息
            selectedStaffs:[], //选中的员工
            loading: true,
        }
    },
    props:['isShowAccountSetManager','setManagerAccountObj'],
    computed: {
        ...mapState({
            language: state => state.module.language,
        }),
    },
    watch: {
        language: function () {
            this.changeLanguage()
        },
        isShowAccountSetManager (val) {
            this.MyisShowAccountSetManager = val
        }
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
            accountManageApi.setManager({auditorId: this.setManagerAccountObj.auditorId,replaceAuditorIds: this.selectedStaffs.join(',')}).then(res => {
                //如果data不为空，则需要弹框提示
                if(res.data !== null) {
                    this.$Notice.error({title: this.uiDataSource.accountSetManager.noBelong1 + res.noticeMsg + this.uiDataSource.accountSetManager.noBelong2})
                    this.changeLoading()
                    return
                }
                this.$Notice.success({title: this.uiDataSource.accountSetManager.success})
                this.changeLoading()
                this.$emit('closeAccountSetManager',true)
            })
        },
        visibleChange (visible) {
            if(!visible){
                this.$emit('closeAccountSetManager',false)
            }
            if(visible){
                //根据账户id获取可分配的催收人
                accountManageApi.getReplaceForAuditor({auditorId: this.setManagerAccountObj.auditorId}).then(res => {
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
    #accountsetmanagermodal>.ivu-modal-wrap{
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