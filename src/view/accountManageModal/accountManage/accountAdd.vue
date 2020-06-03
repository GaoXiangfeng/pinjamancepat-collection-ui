<!---->
<template>
    <div class="accountadd">
        <Modal
            id="accountaddmodal"
            v-model="MyisShowAccountAdd"
            :title="uiDataSource.accountAdd.title"
            :okText="uiDataSource.accountAdd.commit"
            @on-ok="ok"
            @on-visible-change="visibleChange"
            :loading="loading">
            <Form class="accountmanage-form-style" :label-width = "40">
                <!--账户-->
                <FormItem :label="uiDataSource.accountAdd.account" class="form-item-w-s">
                    <Input v-model="auditorName" :maxlength="20" placeholder="" style="width: 300px"></Input>
                </FormItem>
                <!--账期-->
                <FormItem :label="uiDataSource.accountAdd.accountPeriod" class="form-item-w-s">
                    <CheckboxGroup v-model="accountPeriodGroup">
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
            MyisShowAccountAdd: this.isShowAccountAdd,
            uiDataSource:{
                accountAdd:{}, //页面显示
                accountPeriod: [], //账期显示
                accountAddConfirm: {}, //添加账户二次确认
            },
            accountPeriodGroup:[], //选中账期集合
            auditorName: '', //账户名字
            _isReduceRequest: false, //查询节流
            loading: true,
        }
    },
    props:['isShowAccountAdd','companyId'],
    computed: {
        ...mapState({
            language: state => state.module.language,
        })
    },
    watch: {
        language: function () {
            this.changeLanguage()
        },
        isShowAccountAdd (val) {
            this.MyisShowAccountAdd = val
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
            //账户验证,字母加数字，最长20个字符
            var re =  /^[0-9a-zA-Z]{1,20}$/g;
            var re1 =  /^[0-9]{1,20}$/g;
            if (!re.test(this.auditorName))
            {
                this.$Notice.error({title: this.uiDataSource.accountAddConfirm.accountFormatTip})
                return this.changeLoading()
            }
            if (re1.test(this.auditorName))
            {
                this.$Notice.error({title: this.uiDataSource.accountAddConfirm.accountFormatTip})
                return this.changeLoading()
            }
            this.$Modal.confirm({
                title: this.uiDataSource.accountAddConfirm.title,
                content: this.uiDataSource.accountAddConfirm.content,
                onOk: () => {
                    if (!this._isReduceRequest) {
                        this._isReduceRequest = true
                        accountManageApi.accountAdd({auditorName: this.auditorName,accountPeriods: this.accountPeriodGroup.join(','),companyId: this.companyId}).then(res => {
                            this._isReduceRequest = false
                            this.$Notice.success({title: this.uiDataSource.accountAddConfirm.success})
                            this.$emit('closeAccountAdd',true)
                            this.changeLoading();//用于验证账户格式不正确时不退出--2
                        })
                    }

                },
                onCancel: () => {
                    this.changeLoading();//用于验证账户格式不正确时不退出--2
                }
            });
        },
        visibleChange (visible) {
            if(!visible){
                this.$emit('closeAccountAdd',false)
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
    #accountaddmodal>.ivu-modal-wrap{
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