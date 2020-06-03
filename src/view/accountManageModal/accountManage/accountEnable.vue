<!---->
<template>
    <div class="accountenable">
        <Modal
            id="accountenablemodal"
            v-model="MyisShowAccountEnable"
            :okText="uiDataSource.accountEnable.ok"
            :cancelText="uiDataSource.accountEnable.cancel"
            @on-ok="ok"
            @on-cancel="cancel"
            @on-visible-change="visibleChange"
            :loading="loading">
            <h4>{{uiDataSource.accountEnable.content}}&nbsp;&nbsp;{{enableAccountObj.auditorName}}</h4>
        </Modal>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import accountManageApi from '../../../services/api/accountManage.service'
export default {
    data () {
        return {
            MyisShowAccountEnable: this.isShowAccountEnable,
            uiDataSource:{
                accountEnable:{}, //页面显示
            },
            loading: true,
        }
    },
    props:['isShowAccountEnable','enableAccountObj'],
    computed: {
        ...mapState({
            language: state => state.module.language,
        })
    },
    watch: {
        language: function () {
            this.changeLanguage()
        },
        isShowAccountEnable(val){
            this.MyisShowAccountEnable = val
        }
    },
    methods: {
        //切换语言
        changeLanguage() {
            this.$i18n.locale = this.language
            this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.accountManage
        },
        changeLoading() { 
            this.loading = false;
            this.$nextTick(() => {
              this.loading = true;
            });
        },
        ok () {
            accountManageApi.enableAuditor({auditorId: this.enableAccountObj.auditorId}).then(res => {
                this.$Notice.success({title: this.uiDataSource.accountEnable.success})
                this.$emit('closeAccountEnable',true)
                this.changeLoading();
            })
        },
        cancel () {
            this.$emit('closeAccountEnable',false)
        },
        visibleChange (visible) {
            if(!visible){
                this.$emit('closeAccountEnable',false)
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
    #accountenablemodal>.ivu-modal-wrap{
        .ivu-modal{
            width: 400px!important;
            .ivu-modal-body{
                font-size: 14px;
                .accountmanage-form-style{
                    .form-item-w-s{
                        .ivu-form-item-label{
                            width: 20px;
                        }
                        .ivu-form-item-content{
                            margin-left: 20px;
                        }
                    }
                }
            }
        }
    }
</style>