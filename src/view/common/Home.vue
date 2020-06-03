<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
        <Row type="flex" class="layout-container">
            <i-col :span="spanLeft" class="layout-menu-left ivu-col-span-4">
                <div class="layout-logo-left">
                    <!-- 项目名字 -->
                    <h3>{{homePage.collection}}</h3>
                </div>
                <!-- nav -->
                <Menu :active-name="activeName" theme="dark" width="auto" :open-names="[7]" accordion
                      class="ivu-menu-dark"
                      @on-select="select">
                    <MenuItem v-if="!menu.children"  v-for="(menu,index) in page" :name="index + '-0'" :key="index">
                        <Icon v-if="page[index].path=='collectionList'" type="ios-navigate" :size="iconSize"></Icon>
                        <Icon v-if="page[index].path=='repayList'" type="social-yen" :size="iconSize"></Icon>
                        <Icon v-if="page[index].path=='appliForReduc'" type="card" :size="iconSize"></Icon>
                        <Icon v-if="page[index].path=='remissionApproval'" type="social-buffer" :size="iconSize"></Icon>
                        <Icon v-if="page[index].path=='companyManage'" type="social-windows" :size="iconSize"></Icon>
                        <Icon v-if="page[index].path=='assignManage'" type="ios-toggle" :size="iconSize"></Icon>
                        <Icon v-if="page[index].path=='staffScheduling'" type="person" :size="iconSize"></Icon>
                        <span class="layout-text">{{page[index].name}}</span>
                    </MenuItem>
                    <Submenu v-if="menu.children" v-for="(menu, index) in page" :name="index" :key="menu.name">
                        <template slot="title">
                            <Icon v-if="page[index].path=='performanceAppraisal'" type="stats-bars" :size="iconSize"></Icon>
                            <span class="layout-text">{{menu.name}}</span>
                        </template>
                        <Menu-item v-bind:name="index+'-'+index2" v-for="(child, index2) in menu.children"
                                   :key="child.name">
                            {{child.name}}
                        </Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <!-- content -->
            <i-col :span="spanRight" class="layout-menu-right">
                <div class="layout-header">
                    <!-- 收缩切换 -->
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                    <!-- 国际化切换 -->
                    <Select v-model="language" size="small" @on-change="changeLanguage" class="language">
                        <Option value="cn">中文</Option>
                        <Option value="en">English</Option>
                        <Option value="indo">Bahasa Indonesia</Option>
                    </Select>
                    <!-- 重置密码、用户、退出 -->
                    <div class="layout-ceiling-main">
                        <span class="reset" @click="openModal">{{homePage.resetPass}}</span>
                        <span>{{userName}}</span>
                        <Button @click="logout" size="small" type="primary">{{homePage.signOut}}</Button>
                    </div>
                </div>
                <!-- 面包屑展示区域 -->
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <!--一级面包屑-->
                        <Breadcrumb-item>{{homePage.firstBread}}</Breadcrumb-item>
                        <!--二级面包屑-->
                        <Breadcrumb-item>{{secBread}}</Breadcrumb-item>
                        <!--三级面包屑-->
                        <Breadcrumb-item v-if="thirdBread">{{thirdBread}}</Breadcrumb-item>
                        <!--四级面包屑-->
                        <Breadcrumb-item v-if="forthBread">{{forthBread}}</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <!-- 主要内容展示区域 -->
                <div class="layout-content">
                    <transition name="router-fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
                <!-- footer -->
                <div class="layout-copy">2014-2019 &copy; QuantGroup</div>
                <div class="demo-spin-container">
                    <Spin size="large"  fix v-if="spinShow"></Spin>
                </div>
            </i-col>
        </Row>
        <!-- 重置密码弹窗 -->
        <Modal v-model="isReset" width="400" :title="homePage.resetPass">
            <Form :label-width="100">
                <Form-item :label="homePage.newPassWord">
                    <Input type="password" v-model="newPassword"></Input>
                </Form-item>
                <Form-item :label="homePage.confirmPassWord">
                    <Input type="password" v-model="confirmPassword"></Input>
                </Form-item>
                <Form-item>
                 <span>{{homePage.passPattern}}</span>
                </Form-item>
            </Form>
            <div slot="footer">
                <Button type="primary" @click="resetPassWordFn">{{homePage.confirm}}</Button>
                <Button type="primary" @click="cancel">{{homePage.cancel}}</Button>
            </div>
        </Modal>
        <!--三天未跟踪案件进行提醒-->
        <Modal :value="isMoreThenThreeDays" width="400" :closable="true" :mask-closable="false"> 
            <p style="min-height:30px;"></p>
            <p>{{homePage.selectThanThreeTip}}</p>
            <div slot="footer" style="text-align:center">
                <Button shape="circle" style="height:50px;" type="primary" @click="handleCloseMoreThenThreeDays">OK</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import router from '../../router/index'
    import config from '../../config'
    import localStorage from '../../services/localStorage.service'
    import userApi from '../../services/api/user.service'
    import Bus from '../../services/bus.service'
    import store from '../../store/index'
    import page from '../../config/nav.config'
    import { mapState } from 'vuex'
    import collectionListApi from '../../services/api/collectionList.service'
    const pageCn = page.menuCn
    const pageEn = page.menuEn
    const pageIndo = page.menuIndo
    const LoginUrl = `${config.LoginUrl}`
    const getAndSet = function (name) {
        return {
            // getter
            get: function () {
                return this.$store.state.module[name];
            },
            // setter
            set: function (newValue) {
                this.$store.state.module[name] = newValue;
            }
        }
    }


    export default {
        data () {
            return {
                user: {},
                spanLeft: 4,
                spanRight: 20,
                activeName: '0-0',
                openNames: ['0'],
                page: pageCn,
                homePage: {},
                userName: '',
                isReset: false,
                newPassword: '',
                confirmPassword: '',
                //面包屑相关
                currentSelect: '',
                currentName: '',//当前选中项的名字
                currentParentName: '',//当前选中项父项的名字

                promisedRepayment:'',//承诺还款的时间戳
            }
        },

        computed: {
            ...mapState({
                spinShow: state => state.module.spinShow,
                secBread: state => state.module.secBread,
                thirdBread: state => state.module.thirdBread,
                forthBread: state => state.module.forthBread,
                isMoreThenThreeDays: state => state.module.isMoreThenThreeDays,
            }),
            iconSize () {
                return this.spanLeft === 4 ? 14 : 24;
            },
            language: getAndSet('language'),
            currentPath: getAndSet('currentPath'),//当前选中项的路径
        },
        watch: {},
        methods: {
            breadFn (name) {
                name += ''
                this.currentSelect = this.page[name.split('-')[0]]
                this.currentPath = this.currentSelect.children && this.currentSelect.children[name.split('-')[1]].path || this.currentSelect.path
                this.currentName = this.currentSelect.children && this.currentSelect.children[name.split('-')[1]].name || this.currentSelect.name
                this.currentParentName = this.currentSelect.children && this.currentSelect.name || this.homePage.home
                this.$set(this, 'currentName', this.currentName)
                localStorage.set('currentName', this.currentName)
                localStorage.set('currentPath', this.currentPath)
                this.$store.commit('CHANGE_CURRENT_PATH', this.currentPath)

                //变更面包屑
                if(this.currentSelect.children){
                    this.$store.commit('CHANGE_SEC_BREAD', this.currentParentName)
                    this.$store.commit('CHANGE_THIRD_BREAD', this.currentName)
                }else{
                    this.$store.commit('CHANGE_SEC_BREAD', this.currentName)
                    this.$store.commit('CHANGE_THIRD_BREAD', null)
                }
                // if(this.activeName == '7-0' || this.activeName == '7-1'){
                    
                // }
            },

            select (name) {
                this.activeName = name
                localStorage.set('activeName', this.activeName)
                this.breadFn(name)
                this.$router.push({
                    path: `/home/${this.currentPath}`
                })
            },
            toggleClick () {
                if (this.spanLeft === 4) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            },
            //退出登录
            logout(){
                userApi.logout().then(res => {
                    localStorage.set('user', '')
                    localStorage.set('token', '')
                    window.location.href = LoginUrl
                })

            },
            openModal() {
                this.isReset = !this.isReset
                this.newPassword = ''
                this.confirmPassword = ''
            },
            //重置密码
            resetPassWordFn() {
                //由数字和字母组成，并且要同时含有数字和字母，且长度要在8位以上。
                var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/
                if (!reg.test(this.newPassword) || !reg.test(this.confirmPassword)) {
                    this.$Notice.error({title: this.homePage.passError})
                    return
                }
                //校验两次密码是否一致
                if(this.newPassword !== this.confirmPassword){
                    this.$Notice.error({title: this.homePage.isSame})
                    return
                }
                userApi.resetPassWord({newPassword: this.newPassword}).then(res => {
                    this.$Notice.success({title: this.homePage.resetSuccess})
                    this.newPassword = ''
                    this.confirmPassword = ''
                    //跳转到登录页
                    window.location.href = LoginUrl
                })
            },
            cancel() {
                this.openModal()
            },
            //切换语言
            changeLanguage(){
                this.$i18n.locale = this.language
                //为了在登录页面刷新页面的时候也能读到 退出登录前的语言
                localStorage.set('language', this.language)
                let message = this.$i18n.messages[this.$i18n.locale].message
                this.homePage = message.home.homePage
                let messagePage = message.nav.nav
                switch (this.$i18n.locale) {
                    case 'cn':
                        this.page = pageCn
                        break
                    case 'en':
                        this.page = pageEn
                        break
                    case 'indo':
                        this.page = pageIndo
                        break
                }
                //经过权限限制的nav
                let nav = []
                for (let i in messagePage) {
                    for (let k in this.page) {
                        if (messagePage[i].name === this.page[k].name) {
                            nav.push(this.page[k])
                        }
                    }
                }
                this.page = nav
                //将语言类型 存入store
                this.$store.commit('CHANGE_LANGUAGE', this.language)
                localStorage.set('language', this.language)
            },
            //获取是否有三天未跟踪的案件
            greaterThanThreeOrder(){
                collectionListApi.greaterThanThreeOrder().then(res => {
                    if(res.result){ //返回为true 有三天未跟踪的数据
                        this.$store.commit('MORE_THAN_THREEDAYS', true)
                    }else{
                        this.$store.commit('MORE_THAN_THREEDAYS', false)
                    }
                })
            },
            //定时任务
            timeTask(){
                this.greaterThanThreeOrder()
                setInterval(()=>{
                    this.greaterThanThreeOrder()
                },7200000);
            },
            handleCloseMoreThenThreeDays(){
                this.$store.commit('MORE_THAN_THREEDAYS', false)
            },
            // 提示承诺还款
            time(){
                setInterval(()=>{
                    var myDate=new Date();
                    var hour=myDate.getHours(); //获取系统时，
                    var minute=myDate.getMinutes(); //分
                    var second=myDate.getSeconds(); //秒
                    this.promisedRepayment = Number(hour*3600) + Number(minute*60) + Number(second)

                    // 印尼时间 11:00，14:00，17:00，这三个时间点请求后台  相当于我们的12 15 18
                    if(this.promisedRepayment == 43200 || this.promisedRepayment == 54000 || this.promisedRepayment == 64800){
                        collectionListApi.getPromiseRepayOrderInToday().then(res=>{
                            console.log(res)
                            if(res !=''&& res != null){
                                this.$Notice.open({
                                    title: '',
                                    desc: 'Customer yang janji bayar hari ini, prioritaskan untuk di ingatkan.',
                                    duration: 10
                                });
                            }
                             
                        })   
                    }
                },1000)
            }
        },
        created() {
            this.language = localStorage.get('language')
            this.changeLanguage()
           
            //this.activeName = localStorage.get('activeName') || '0-0'
        },
        mounted () {
            Bus.$on('commonShowLoading', () => (this.showLoading = true))
            Bus.$on('commonHideLoading', () => (this.showLoading = false))
            this.userName = localStorage.get('user') && localStorage.get('user').userName || ''
            
            this.activeName = localStorage.get('activeName') || '0-0'
            this.breadFn(this.activeName)
            this.user = localStorage.get('user')
            if(this.user.role == 2){
                this.timeTask()
                this.time()
            }
        },
        activated(){}
    }

</script>
<style scoped lang="less">
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        .layout-container {
            height: 100%;
            .layout-menu-left {
                position: relative;
                background: #1c2438;
                overflow: scroll;
                height: auto;
                .layout-logo-left {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    z-index: 10000;
                    height: 50px;
                    background: #5b6270;
                    border-radius: 3px;
                    font-size: 16px;
                    line-height: 50px;
                    color: white;
                    text-align: center;
                    vertical-align: middle;
                    overflow: hidden;
                }
                
            }
            .layout-menu-right {
                //position: relative;
                display: flex;
                flex-direction: column;
                height: 100%;
                overflow: auto;
                .layout-header {
                    height: 45px;
                    line-height: 45px;
                    background: #fff;
                    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
                    .layout-ceiling-main {
                        float: right;
                        margin-right: 15px;
                        .reset{
                            cursor: pointer;
                            color: #2d8cf0;
                            margin-right: 5px;
                        }
                    }
                    .layout-ceiling-main a {
                        color: #9ba7b5;
                    }
                    .language {
                        width: 150px;
                        display: inline-block;
                        margin-right: 10px;
                    }
                }
                .layout-breadcrumb {
                    height: 30px;
                    padding: 10px 15px 0;
                }
                .layout-content {
                    flex: 1;
                    height: 500px;
                    margin: 15px;
                    overflow: auto;
                    background: #fff;
                    border-radius: 4px;
                }
                .layout-copy {
                    text-align: center;
                    padding: 10px 0 20px;
                    color: #9ea7b4;
                }
            }
        }
    }


    .layout-content-main {
        padding: 10px;
    }

    .ivu-spin-fix{
        opacity: .8;
    }

    .ivu-menu-dark {
        background: #1c2438;
        margin-top: 50px;
    }

    .layout-hide-text .layout-text {
        display: none;
    }

    .ivu-col {
        transition: width .2s ease-in-out;
    }

    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity .3s;
    }

    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }

    .welcome-style {
        display: inline-block;
        width: 60%;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    }

</style>
