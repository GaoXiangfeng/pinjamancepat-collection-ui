<!-- 手动分案弹窗组件 -->
<template>
    <div>
        <modal 
            id="orderAssign" 
            width="770"
            v-model="isShow" 
            :title="data.orderAssignModalText.title" 
            @on-visible-change="visibleChange" 
            :mask-closable="isMaskClosable">
            <Form :label-width="80">
                <div v-for="(items,index) in assignList" :key="index" :value="index">
                    <!-- 公司 -->
                    <FormItem :label="data.orderAssignModalText.companyName" class="form-item-s-w" >
                        <Select 
                            v-model="companyName[index]" 
                            style="width:120px"
                            filterable 
                            clearable 
                            :placeholder="data.orderAssignModalText.placeholder"
                            @on-change="changeCompany(index)">
                            <Option 
                                v-for="item in items" 
                                :value="item.companyName" 
                                :key="item.companyName">{{ item.companyName }}</Option>
                        </Select> 
                        
                    </FormItem>
                    <!-- 账户 -->
                    <FormItem :label="data.orderAssignModalText.accountPeriod" class="form-item-l-w">
                        <Select 
                            v-model="auditor[index]" 
                            multiple 
                            style="width:350px"
                            filterable 
                            clearable 
                            :placeholder="data.orderAssignModalText.placeholder">
                            <Option 
                                v-for="item in auditors[index]" 
                                :value="item.id" 
                                :key="item.id">{{ item.name }}</Option>
                        </Select> 
                        <span v-if="index==assignList.length-1" @click="addOne">
                            <Icon type="plus" class="icon-style plus"></Icon>
                        </span>
                        <span v-if="index==assignList.length-1 && index!=0" @click="deleteOne">
                            <Icon type="minus"  class="icon-style minus"></Icon>
                        </span>
                    </FormItem>
                </div>
            </Form>
            <!-- 操作 -->
            <div slot="footer">
                <Button type="primary" size="small"  @click="confirm" :disabled="isDisabled">{{data.orderAssignModalText.confirm}}</Button>
                <Button type="primary" size="small"  @click="cancel">{{data.orderAssignModalText.cancel}}</Button>
            </div>
        </modal>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import handAssignApi from '../../../services/api/assignManage.service'
export default {
    data () {
        return {
           isDisabled: true,// 确认按钮是否可点击。true 不可点击
           isMaskClosable: false,//防止点击遮罩层关闭窗口
           isShow: false,//是否显示弹窗
           companyName: [],//公司绑定
           auditor: [
               [], //第一行，账户绑定，二维数组，每一行都是一维数组
           ],
           auditors: [],//每一行中选择不同公司，对应不同的账期，也是二维数组，每一行账期也是一维数组
           assignList: [
               [{
                   auditors: [
                       {
                           id: '',
                           name: ''
                       }
                   ],//默认一项，保证打开弹窗第一行显示
                   companyName: ''
               }]
           ], //添加一行/删除一行，用作遍历使用
           dataList:[],
           data: {
               orderAssignModalText: {}
           }
        }
    },
    props: {
        isShowOrderAssign: {//组件间控制状态的属性
            type: Boolean, 
            default: false
        },
        orderIds: {
            type: String,
            default: ''
        }
    },
    components: {},

    computed: {
        ...mapState({
            language: state => state.module.language
        }),
    },
    watch: {
        language: function () {
			this.changeLanguage()
		},
        isShowOrderAssign: function(val){ //父组件传值过来控制子组件的状态
            this.isShow = val
            //获取公司和账户,只有弹窗的时候调用
            this.$nextTick(()=>{
                if(this.isShow && this.orderIds !== '') this.getCompanyAndAuditors()
            })
        },
        companyName: function(){ //监听公司输入，判断确认按钮是否可点击
            this.isConfirmCanClickFn()
        },
        auditor: function(){ //监听账户更改，判断确认按钮是否可点击
            this.isConfirmCanClickFn()
        },
    },
    methods: {
        changeLanguage(){
			this.$i18n.locale = this.language
            this.data = this.$i18n.messages[this.$i18n.locale].message.handAssignList
        },
        //获取公司和账户信息
        getCompanyAndAuditors() {
            handAssignApi.getCompanyAndAuditors({orderIds: this.orderIds}).then( res => {
                this.dataList = res
                this.assignList.pop()
                this.assignList.push(res) //将默认第一行的值进行替换
            })
        },
        //切换公司
        changeCompany(index){
            this.dataList.forEach(item => {
                //如果删除公司，则账户也清空
                if(!this.companyName[index]) {
                    this.auditors[index] = undefined
                    return
                }
                if(item.companyName === this.companyName[index]){//不同公司的账户不同，根据公司名添加对应的账户名
                    this.auditors[index] = item.auditors
                    return
                }
            })
        },
        //添加一行
        addOne(){
            this.assignList.push(this.dataList) //遍历数组，增加一行
            this.companyName.push('') //绑定公司增加一项绑定，''类型
            this.auditor.push([]) //绑定账期增加一行绑定，[]类型
        },
        //删除一行
        deleteOne(){
            this.assignList.pop() //遍历数组，删除一行
            this.companyName.pop()//绑定公司删除一项绑定，''类型
            this.auditor.pop()//绑定账期删除一行绑定，[]类型
        },
        //校验确认按钮是否可点击
        isConfirmCanClickFn(){
            for(let i = 0; i< this.assignList.length; i++){
                //只要有一行的公司和账户是选择的状态，确认按钮就可以点击
                if(this.companyName[i]!==undefined && this.auditor[i].length !== 0){
                    this.isDisabled = false
                    return
                }
            }
            //遍历结束，说明没有一行是完整信息，确认按钮不可点击
            this.isDisabled = true
        },
        //校验公司是否重复
       isRepeat(arr){     
            var obj = {}; 
            for(var i in arr) { 
                //存在重复值
                if(obj[arr[i]])  return true; 
                obj[arr[i]] = true; 
            } 
            //不重复
            return false; 
        }, 
        //确认
        confirm(){
            //提交前做判断
            for(let i = 0; i< this.assignList.length; i++){
                //先判断公司
                if(this.companyName[i] === undefined){
                    this.$Notice.error({title: this.data.orderAssignModalText.companyUncomplate})
                    return
                }
                //再判断账户
                if(this.auditor[i].length === 0){
                    this.$Notice.error({title: this.data.orderAssignModalText.accountPeriodUncomplate})
                    return
                }
                //最后判断公司是否重复
                if(this.isRepeat(this.companyName)) {
                    this.$Notice.error({title: this.data.orderAssignModalText.companyRepeat})
                    return
                }
            }
            //通过后拼接账户id为字符串
            let auditorIds = '' //传给后端的账户ids
            this.auditor.forEach(element => {
                auditorIds += element.join(',') + ','
            })
            auditorIds = auditorIds.slice(0, -1)
            //校验通过后二次弹窗
            this.$Modal.confirm({
                content: `<h3>${this.data.orderAssignModalText.isConfrimAssignOrder}</h3>`,
                okText: this.data.orderAssignModalText.confirm,
                cancelText: this.data.orderAssignModalText.cancel,
                loading: true,
                onOk: () => { 
                    //调接口
                    let params = {
                        orderIds: this.orderIds,
                        auditorIds: auditorIds,
                    }
                    handAssignApi.handAssignFn(params).then( res => {
                        this.$Modal.remove();//关闭二次弹窗
                        this.$Notice.success({title: this.data.orderAssignModalText.assignSuccess})//分案成功提示
                        this.$emit('closeOrderAssign', true)//关闭一次弹窗,true表示告诉父组件刷新列表
                    })
                   
                }
            })
        },
        //取消
        cancel(){
            //保证关闭弹窗右上角的叉号，把子组件的关闭状态传给父组件，让父组件记住关闭状态，下次才能打开
            this.$emit('closeOrderAssign',false)
        },
        //初始化操作
        initFn() {
            //公司、账户绑定初始化
            this.companyName = []//公司绑定
            this.auditor = [
                [], //第一行，账户绑定，二维数组，每一行都是一维数组
            ],
            this.auditors = []//每一行中选择不同公司，对应不同的账期，也是二维数组，每一行账期也是一维数组
            this.assignList =[
                [{
                    auditors: [
                        {
                            id: '',
                            name: ''
                        }
                    ],//默认一项，保证打开弹窗第一行显示
                    companyName: ''
                }]
            ] //添加一行/删除一行，用作遍历使用
        },
        //状态切换
        visibleChange(status){
            if(!status){//保证关闭弹窗右上角的叉号，把子组件的关闭状态传给父组件，让父组件记住关闭状态，下次才能打开
                this.$emit('closeOrderAssign',false)
            }else{
                //打开弹窗 保证每次选项是空,初始化操作
                this.initFn()
            }
        }
    },
    created(){
		this.changeLanguage()
	},
    mounted () {}
}

</script>
<style lang='less' scoped>
 #orderAssign{
    .ivu-modal-body{
        .form-item-s-w.ivu-form-item{
            width: 200px;
            display: inline-block;
        }
        .form-item-l-w{
            width: 520px;
            display: inline-block;
        }
        .icon-style{
            font-size: 20px;
            margin-left: 20px;
            vertical-align: middle;
            cursor: pointer;
        }
        .plus{
            color: green;
        }
        .minus{
            color: red;
        }
    }
    
 }
</style>