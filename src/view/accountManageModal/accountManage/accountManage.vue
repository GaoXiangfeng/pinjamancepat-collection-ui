<!---->
<template>
    <div class="accountmanage">
        <div v-if="Number(isAdminExist) === 0 ? true : false" class="noManager">{{uiDataSource.searchResultTip[4]}}</div>
        <Form class="accountmanage-form-style" :label-width="100">
             <!--角色-->
            <FormItem :label="uiDataSource.searchCondition.role" class="form-item-w-s">
                <Select v-model="formAccountManage.role" filterable clearable :placeholder="uiDataSource.searchCondition.rolePlaceHolder"  placement="bottom">
                    <p ><Option v-for="role in uiDataSource.roleList" :key="role.id" :value="role.id">{{role.name}}</Option></p>
                </Select>
            </FormItem>
             <!--状态-->
            <FormItem :label="uiDataSource.searchCondition.state" class="form-item-w-s">
                <Select v-model="formAccountManage.status"  filterable  clearable :placeholder="uiDataSource.searchCondition.statePlaceHolder" placement="bottom">
                    <p ><Option v-for="status in uiDataSource.statusList" :key="status.id" :value="status.id">{{status.name}}</Option></p>
                </Select>
            </FormItem>
            <FormItem class="form-item-w">
                <Button @click="searchData(1)" type="primary" icon="ios-search" >{{uiDataSource.buttonTitle.search}}</Button>
                <Button @click="addAccount()" type="primary" icon="plus" :disabled="Number(this.companyStatus) === 1 ? true : false">{{uiDataSource.buttonTitle.add}}</Button>
                <Button @click="goBack()" type="primary" icon="android-arrow-back">{{uiDataSource.buttonTitle.back}}</Button>
            </FormItem>
        </Form>
        <!--查询结果列表-->
        <div>
            <Table :columns="searchResultColumnsHeader" :height="searchResultDataSource.length>0?405:''"
                :data="searchResultDataSource" border 
                :no-data-text="uiDataSource.searchResultTip[1]">
            </Table>
            <div style="text-align:center;margin:5px">
                <Page :total="Number(totalNum)" :current="formAccountManage.pageNum"  placement="top"
                        :page-size="formAccountManage.pageSize" @on-page-size-change="changeSize"
                        @on-change="changePage" size="small" show-total show-elevator show-sizer></Page>
            </div>
        </div>
        <!--添加账户组件-->
        <account-add 
            :isShowAccountAdd="isShowAccountAdd"
            :companyId="formAccountManage.companyId" 
            @closeAccountAdd="handleCloseAccountAdd">
        </account-add>
        <!--启用账户组件-->
        <account-enable 
            :isShowAccountEnable="isShowAccountEnable" 
            :enableAccountObj="enableAccountObj"
            @closeAccountEnable="handleCloseAccountEnable">
        </account-enable>
        <!--停用账户组件-->
        <account-disabled
            :isShowAccountDisabled="isShowAccountDisabled"
            :disabledAccountObj="disabledAccountObj"
            @closeAccountDisabled="handleCloseAccountDisabled">
        </account-disabled>
        <!--修改账户组件-->
        <account-modify 
            :isShowAccountModify="isShowAccountModify"
            :modifyAccountObj="modifyAccountObj"
            @closeAccountModify="handleCloseAccountModify">
        </account-modify>
        <!--设置管理员组件-->
        <account-set-manager
            :isShowAccountSetManager="isShowAccountSetManager"
            :setManagerAccountObj="setManagerAccountObj"
            @closeAccountSetManager="handleCloseAccountSetManager">
        </account-set-manager>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import accountManageApi from '../../../services/api/accountManage.service'
import accountAdd from './accountAdd'
import accountEnable from './accountEnable'
import accountDisabled from './accountDisabled'
import accountModify from './accountModify'
import accountSetManager from './accountSetManager'
export default {
    data () {
        return {
            isAdminExist: 1, //是否存在管理员
            companyStatus: 0, //公司状态，1位停用状态
            companyName: '', //公司状态，1位停用状态
            isShowNoManager: false, //是否显示存在管理员
            isShowAccountAdd: false, //是否显示添加账户组件
            isShowAccountEnable: false, //是否显示启用账户提示组件
            enableAccountObj:{}, //传递给启用账户组件的对象
            isShowAccountDisabled: false, //是否显示禁用账户弹出框组件
            disabledAccountObj:{}, //传递给禁用账户组件的对象
            isShowAccountModify: false, //是否显示账户修改组件
            modifyAccountObj:{}, //传递给修改账户的组件
            isShowAccountSetManager: false, //是否显示设置管理员组件
            setManagerAccountObj:{}, //传递给设置管理员的组件
            uiDataSource: { //页面显示
                roleList: [], //账期管理主页面人员列表
                statusList: [], //账期管理主页面状态列表
                searchCondition: {},//查询条件
                buttonTitle: [],//按钮显示
                searchResultColumnsHeader: [],//查询结果列表表头,
                searchResultTip: {}//查询结果列表显示数据
            },
            searchResultColumnsHeader: [
                {
                    title: '操作',
                    key: 'status',
                    align: 'center',
                    width: 210,
                    render: (h, params) => {
                        let companyEnable = (Number(this.companyStatus) === 1 || (Number(params.row.role) === 3) && Number(params.row.status) === 1)? true : false //公司状态
                        let buttonTitle = ''
                        let buttonType = ''
                        let _boolStatus = Number(params.row.status) === 1 //true为启用状态，false为停用状态
                        let _boolSetManagerEnable = !(_boolStatus && Number(params.row.role) !== 3)
                        if(_boolStatus){ //启用状态待禁用
                            buttonTitle = this.uiDataSource.buttonTitle.disable
                            buttonType = 'error'
                        }else{ //禁用状态待启用
                            buttonTitle = this.uiDataSource.buttonTitle.enable
                            buttonType = 'success'
                        }
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: buttonType,
                                    size: 'small',
                                    disabled: companyEnable,
                                },
                                style: {
                                    marginRight: '8px',
                                    marginTop: '3px',
                                },
                                on: {
                                    click: () => {
                                        this.enableAccountObj = params.row
                                        this.disabledAccountObj = params.row
                                        this.tableEnableSwitch(_boolStatus)
                                        if(_boolStatus){ //启用状态待禁用
                                            buttonTitle = this.uiDataSource.buttonTitle.disable
                                        }else{ //禁用状态待启用
                                            buttonTitle = this.uiDataSource.buttonTitle.enable
                                        }
                                    }
                                }
                            }, buttonTitle),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                    disabled: _boolSetManagerEnable,
                                },
                                style: {
                                    marginRight: '8px',
                                    marginTop: '3px',
                                },
                                on: {
                                    click: () => {
                                        this.modifyAccountObj = params.row
                                        this.tableModify()
                                    }
                                }
                            }, this.uiDataSource.buttonTitle.modify),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                    disabled: _boolSetManagerEnable,
                                },
                                style: {
                                    marginTop: '3px',
                                },
                                on: {
                                    click: () => {
                                        this.setManagerAccountObj = params.row
                                        this.tableSetManager()
                                    }
                                }
                            }, this.uiDataSource.buttonTitle.setManage)
                        ]);
                    }
                }, {
                    title: '账户',
                    key: 'auditorName',
                    align: 'center',
                    minWidth: 200,
                }, {
                    title: '角色',
                    key: 'role',
                    align: 'center',
                    minWidth: 200,
                    render: (h, params) => {
                        let _show = this.uiDataSource.roleList.find((r)=>r.id === Number(params.row.role)).name
                        return h('div', _show)
                    }
                }, 
                {
                    title: '账期',
                    key: 'accountPeriodName',
                    align: 'center',
                    minWidth: 200,
                },{
                    title: '状态',
                    key: 'status',
                    align: 'center',
                    minWidth: 200,
                    render: (h, params) => {
                        let _show = Number(params.row.status) === 1 ?  this.uiDataSource.statusList[0].name : this.uiDataSource.statusList[1].name
                        return h('div', _show)
                    }
                }, {
                    title: '最后维护时间',
                    key: 'latestUtime',
                    align: 'center',
                    minWidth: 100
                }
            ],
            searchResultDataSource: [],//查询结果列表
            searchResultTotalItems: 0, //查询结果总条数 
            formAccountManage: { //减免申请
                companyId: 0,
                role: '',
                status: '',
                sort: 'DESC',
                sortBy: 'utime',
                pageNum: 1,
                pageSize: 20,
            },
            totalNum: 0, //数据总量
            _isSearch: false //查询节流
        }
    },

    components: {
        accountAdd,
        accountEnable,
        accountDisabled,
        accountModify,
        accountSetManager,
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
    methods: {
        //切换语言
        changeLanguage() {
            this.$i18n.locale = this.language
            this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.accountManage
            
            setTimeout(() => {
                    //table
                this.searchResultColumnsHeader.forEach((item, j) => {
                    item.title = this.uiDataSource.searchResultColumnsHeader[j] //表头翻译
                })
            }, 100)
        },
        searchData(pageNo){ //查询数据
            if (!this._isSearch) {
                this.$store.dispatch('change_spin_show',true)
                this.formAccountManage.pageNum = pageNo
                let content = JSON.parse(JSON.stringify(this.formAccountManage))
                this._isSearch = true
                accountManageApi.getAccountsByCompany({content: JSON.stringify(content)}).then(res=>{
                    this._isSearch = false
                    //操作返回的数据
                    this.searchResultDataSource = res.companyAuditorDetails
                    this.isAdminExist = res.adminExist
                    this.totalNum = res.basePageResponse.totalNum
                    if(this.searchResultDataSource.length === 0){
                        this.$Notice.success({title: this.uiDataSource.searchResultTip[2]})
                    }
                    this.$store.dispatch('change_spin_show',false)
                })
            }
        },
        addAccount(){ //添加账户
            this.isShowAccountAdd = true
        },
        handleCloseAccountAdd(param){ //关闭添加账户
            this.isShowAccountAdd = false
            if(param) {
                this.searchData(1)
            }
        },
        tableEnableSwitch(param){ //列表--启用禁用账户开关
            if (param) { //启用状态待禁用
                this.isShowAccountDisabled = true
            } else { //禁用状态待启用
                this.isShowAccountEnable = true
            }
        },
        handleCloseAccountEnable(param){ //参数为选择了确认还是取消,true为确认,false为取消
            this.isShowAccountEnable = false
            if(param) { //如果点击了确认则更改按钮状态
                this.searchData(1)
            }
        },
        handleCloseAccountDisabled(param){ //参数为选择了确认还是取消,true为确认,false为取消
            this.isShowAccountDisabled = false
            if(param) { //如果点击了确认则更改按钮状态
                this.searchData(1)
            }
        },
        tableModify(){ //列表--修改
            this.isShowAccountModify = true
        },
        handleCloseAccountModify(param){
            this.isShowAccountModify = false
            if(param) { //如果点击了确认则更改按钮状态
                this.searchData(1)
            }
        },
        goBack(){ //列表--返回
            this.$router.push({
                path: `/home/companyManage`
            })
        },
        tableSetManager () { //列表--设置管理员
            this.isShowAccountSetManager = true
        },
        handleCloseAccountSetManager(param){
            this.isShowAccountSetManager = false
            if(param) {
                this.searchData(1)
            }
        },
        changePage (page) { //改变页码
            this.formAccountManage.pageNum = page
            this.searchData(page)
        },
        changeSize (size) { //改变每页显示数量
            this.formAccountManage.pageSize = size
            this.searchData(1)
        },
    },
    created() {
        this.changeLanguage()
    },
    mounted () {
        this.formAccountManage.companyId = window.decodeURIComponent(window.atob(this.$route.query.companyId)) || 0
        this.companyStatus = window.decodeURIComponent(window.atob(this.$route.query.status)) || 0
        this.companyName = window.decodeURIComponent(window.atob(this.$route.query.companyName)) || ''
        //三级面包屑
        this.$store.commit('CHANGE_THIRD_BREAD', this.companyName)
        this.searchData(1) 
    }
}

</script>
<style lang='less' scoped>
    .accountmanage {
        .noManager{
            position: absolute;
            top: 55px;
            left: 480px;
            font-size: 14px;
            font-weight: bold;
            color: red;
            z-index: 9;
        }
        padding-top: 5px;
        .accountmanage-form-style {
            .form-item-w-s {
                width: 260px;
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