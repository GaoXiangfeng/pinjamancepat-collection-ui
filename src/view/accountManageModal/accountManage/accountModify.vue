<!---->
<template>
    <div class="accountmodify">
        <Modal
            id="accountmodifymodal"
            v-model="MyisShowAccountModify"
            :title="uiDataSource.accountModify.title"
            :okText="uiDataSource.accountModify.commit"
            @on-ok="ok"
            @on-visible-change="visibleChange"
            :loading="loading">
            <Form class="accountmanage-form-style" :label-width = "40">
                <!--账户-->
                <FormItem :label="uiDataSource.accountModify.account" class="form-item-w-s">
                    <label style="width: 300px">{{modifyAccountObj.auditorName}}</label>
                </FormItem>
                <!--账期-->
                <FormItem :label="uiDataSource.accountModify.accountPeriod" class="form-item-w-s">
                    <CheckboxGroup v-model="modifyAccountObj.accoutPeriodIds">
                        <Checkbox class="period" v-for="item in uiDataSource.accountPeriod" :key="item.id" :label="item.id">{{item.name}}</Checkbox>
                    </CheckboxGroup>
                </FormItem>
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
            MyisShowAccountModify: this.isShowAccountModify,
            uiDataSource:{
                accountModify:{}, //页面显示
                accountPeriod: [], //账期显示
                accountModifyConfirm: {}, //修改账户组件--二次确认
            },
            loading: true,
        }
    },
    props:['isShowAccountModify','modifyAccountObj'],
    computed: {
        ...mapState({
            language: state => state.module.language,
        }),
    },
    watch: {
        language: function () {
            this.changeLanguage()
        },
        isShowAccountModify (val) {
            this.MyisShowAccountModify = val
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
            this.$Modal.confirm({
                title: this.uiDataSource.accountModifyConfirm.title,
                content: this.uiDataSource.accountModifyConfirm.content,
                onOk: () => {
                    accountManageApi.accountModify({auditorId: this.modifyAccountObj.auditorId,accountPeriods: this.modifyAccountObj.accoutPeriodIds.join(',')}).then(res => {
                        //如果data不为空，则需要弹框提示
                        if(res.data !== null) {
                            this.$Notice.error({title: this.uiDataSource.accountModify.noBelong1 + res.data + this.uiDataSource.accountModify.noBelong2})
                            return 
                        }
                        this.$Notice.success({title: this.uiDataSource.accountModify.success})
                        this.changeLoading()
                        this.$emit('closeAccountModify',true)
                    })
                },
                onCancel: () => {
                    this.changeLoading()
                    this.$emit('closeAccountModify',false)
                }
            });
        },
        visibleChange (visible) {
            if(!visible){
                this.$emit('closeAccountModify',false)
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
    #accountmodifymodal>.ivu-modal-wrap{
        .ivu-modal-body{
            height: 300px;
            .accountmanage-form-style{
                .form-item-w-s{
                    .ivu-form-item-label{
                        width: 20px;
                    }
                    .ivu-form-item-content{
                        margin-left: 20px;
                    }
                    .period{
                        width: 120px;
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