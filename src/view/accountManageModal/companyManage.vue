<!-- 公司管理 -->
<template>
    <div class="company-box">
		<div class="action">
			<Button type="primary" @click="addCompany" size="small">{{data.textInformation.add}}</Button>
		</div>
		<!-- table -->
		<div class="table">
			<Table :columns="columns" :data="companyData" border 
			 :no-data-text="data.textInformation.noData"></Table>
		</div>
		<!-- ====================================modal弹窗======================================= -->
		<!-- 是否确认禁用 -->
		<Modal v-model="modal1" width="400" :title="data.textInformation.confirm">
			<h3 style="text-align: center">{{confirmDisableText}}</h3>
			<div slot="footer">
                <Button type="primary" size="small"  @click="isConfirmDisableOrAble" :loading="disableloading">{{data.textInformation.confirm}}</Button>
            </div>
		</Modal>
		<!-- 某账期无其他公司，请先配置 -->
		<Modal v-model="modal2" width="400" :title="data.textInformation.confirm">
			<h3 style="text-align: center">{{noCompanyText}}</h3>
			<div slot="footer">
                <Button type="primary" size="small" @click="confirm">{{data.textInformation.confirm}}</Button>
                <!-- <Button type="primary" @click="cancel">{{data.textInformation.cancel}}</Button> -->
			</div>
		</Modal>
		<!-- 是否确认启用 -->
		<Modal v-model="modal3" width="400" :title="data.textInformation.confirm" >
			<h3 style="text-align: center">{{confirmAbleText}}</h3>
			<div slot="footer">
                <Button type="primary" size="small"  @click="isConfirmDisableOrAble" :loading="enableloading">{{data.textInformation.confirm}}</Button>
            </div>
		</Modal>
		<!-- 添加公司 -->
		<Modal v-model="modal4" width="400" :title="data.textInformation.addCompany">
			 <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="130">
                <FormItem :label="data.textInformation.companyName" prop="companyName">
                    <Input  v-model="formValidate.companyName" ></Input>
                </FormItem>
            </Form>
			<div slot="footer">
                <Button type="primary" size="small"  @click="submit('formValidate')" >{{data.textInformation.submit}}</Button>
            </div>
		</Modal>
		<!-- 确认添加 -->
		<Modal v-model="modal5" width="400" :title="data.textInformation.confirm">
			<h3 style="text-align: center">{{data.textInformation.isConfirmAddCompany}}</h3>
			<div slot="footer">
                <Button type="primary" size="small"  @click="confirmAddCompany" :loading="addloading">{{data.textInformation.confirm}}</Button>
                <Button type="primary" size="small"  @click="cancel">{{data.textInformation.cancel}}</Button>
			</div>
		</Modal>
    </div>
</template>

<script>
import  {mapState} from 'vuex'
import companyManageApi from  '../../services/api/companyManage.service'
export default {
	data () {
		return {
			modal1: false,//是否确认禁用
			disableloading: false, //禁用等待--禁用
			enableloading: false, //禁用等待--启用
			addloading: false, //禁用等待--添加公司
			modal2: false,//某账期无其他公司，请先配置
			modal3: false,//是否确认启用 
			modal4: false,//添加公司
			modal5: false,//确认添加
			confirmDisableText: '',
			noCompanyText: '',
			confirmAbleText: '',
			addCompanyText: '',
			confirmAddText: '',
			companyActivity: '0',//启用状态
			companyId: '',//公司Id
			formValidate: {
				companyName: '', //公司名称
			},
			ruleValidate: {
				companyName: [
					{required: true, message: '公司名称不能为空', trigger: 'blur' },
					{type: 'regexp', pattern: /^(?![0-9]+$)[a-z0-9A-Z]{1,20}$/, validator: this.validator,  trigger: 'blur'},
				],
			},//表单校验
			companyData: []	, //表格数据
			columns: [//表格列
				{
					title: '操作',
					key: 'action',
					width: 180,
					render: (h,params) => {
						let arr = [
							h('Button',{
								props: {
									size: 'small',
									type: 'primary'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										let status = window.btoa(window.encodeURIComponent(params.row.status))//加密
										let companyId = window.btoa(window.encodeURIComponent(params.row.companyId))//加密
										let companyName = window.btoa(window.encodeURIComponent(params.row.companyName))//加密
										this.$router.push({
											path: '/home/accountManage',
											query: {companyId: companyId, status: status,companyName: companyName}
										})
									}
								}
							}, this.data.textInformation.check),
						]
						if(params.row.companyName != 'Qworks'){	
							arr.push(h('Button',{
								props: {
									size: 'small',
									type: params.row.status == 0? 'error': 'success'
								},
								on: {
									click: () => {
										this.disableFn(params.row.status, params.row.companyName, params.row.companyId)
									}
								} 
							}, params.row.status == 0 ? 
							this.data.textInformation.disable: 
							this.data.textInformation.able),)
						}
						return h('div',arr)
					}
				},{
					title: '公司名称',
					key: 'companyName',
					width: 150
				},{
					title: '账期',
					key: 'accountPeriods'
				},{
					title: '账户数',
					key: 'auditorCounts'
				},{
					title: '状态',
					key: 'status',
					render: (h,params) => {
						return h('div', this.data.statusText[params.row.status])
					}
				},{
					title: '最后维护时间',
					width: 300,
					key: 'lastUtime'
				}
			],
			data: {
				textInformation: {},
				tableTitle: [],
				statusText: {}
			}
		}
	},

  	components: {},

  	computed: {
	  	...mapState({
		  	language: state => state.module.language
	  	})
  	},

  	methods: {
		changeLanguage(){
			this.$i18n.locale = this.language
			this.data = this.$i18n.messages[this.$i18n.locale].message.companyManage
			setTimeout(() => {
				//table
				this.columns.forEach((item, j) => {
					item.title = this.data.tableTitle[j] //表头翻译
				})
				//表单元素公司名称的校验提示文案替换
				this.ruleValidate.companyName[0].message = this.data.textInformation.companyMaxLength
			}, 100)
		},
		//获取公司列表
		getCompanyList() {
			this.$store.commit('CHANGE_SPIN_SHOW', true)
			companyManageApi.getCompanyDataFn().then( res => {
				this.companyData = res
				this.$store.commit('CHANGE_SPIN_SHOW', false)
			})
		},
		//启用/禁用-处理modal title信息
		disableFn(status, name, compnayId) {
			this.companyActivity = status == '0' ? 1 : 0
			this.companyId = compnayId
			if(status == '0'){//状态为正常，说明进行禁用操作
				this.modal1 = true
				this.confirmDisableText = `${this.data.textInformation.isConfirmDisable[0]} ${name} ${this.data.textInformation.isConfirmDisable[1]}`
			}else{ //状态为停用，启用操作
				this.modal3 = true
				this.confirmAbleText = `${this.data.textInformation.isConfirmAble[0]} ${name} ${this.data.textInformation.isConfirmAble[1]}`
			}
		},
		//是否确认禁用\启用
		isConfirmDisableOrAble() {
			// 调用接口-接口调用成功后
			let params = {
				companyId: this.companyId,
				companyActivity: this.companyActivity
			}
			if (Number(this.companyActivity) === 1) {
				this.disableloading = true
			} else {
				this.enableloading = true
			}
			companyManageApi.changeCompanyStatus(params).then(res => {
				if(!res.noticeMsg) {//校验通过-关闭弹窗modal1(禁用窗口)/modal3(启用窗口)
					if(this.companyActivity == 1) { //禁用成功
						//关闭modal1、提示禁用成功
						this.modal1 = false
						this.$Notice.success({title: this.data.textInformation.disableSuccess})
						this.disableloading = false
					}else{//启用成功
						//关闭modal3、提示启用成功
						this.modal3 = false
						this.$Notice.success({title: this.data.textInformation.ableSuccess})
						this.enableloading = false
					}
					this.getCompanyList() //刷新列表
				}else{//不通过，获取某个没有公司的账期-打开modal2
					let accountPeriods = res.noticeMsg
					this.modal2 = true
					this.noCompanyText = `${this.data.textInformation.noCompanyInfo[0]} ${accountPeriods} ${this.data.textInformation.noCompanyInfo[1]}` 
				}
			})
		},
		//确认去设置，关闭modal1、modal2
		confirm() {
			//将modal1、modal2 都关闭
			this.modal1 = false
			this.modal2 = false
		},
		//添加公司-操作
		addCompany(){
			//打开弹框modal4、并清空数据
			this.modal4 = true
			this.formValidate.companyName = ''
		},
		//表单验证
		validator(rule, value, callback) {
			value = value.replace(/\s+/g,"") //去掉所有空格
			if (!rule.pattern.test(value)) {
				//50英文字符校验
				return callback(new Error(this.data.textInformation.companyMaxLength));
			} else {
				callback();
			}
		},
		//添加公司-提交
		submit(name){
			this.$refs[name].validate((valid) => {
				if (valid) {
					//校验通过后，弹出二次确认框modal5
					this.modal5 = true
				} else {
					//校验失败提示
					this.$Message.error('Fail!');
				}
			})
		},
		//是否确认添加新公司
		confirmAddCompany(){
			this.addloading = true
			//调用添加接口 
			companyManageApi.addCompanyFn(this.formValidate).then( res => {
				//成功后弹框提示添加成功
				this.$Notice.success({title: 'Success!'})
				//关闭modal4、modal5、
				this.modal4 = false
				this.modal5 = false
				this.addloading = false
				//刷新列表
				this.getCompanyList()
			})
			
		},
		//取消
		cancel(){
			this.modal3 = false
			this.modal5 = false
		}
	},
    watch: {
		language: function () {
			this.changeLanguage()
		}
	},
	created(){
		this.changeLanguage()
	},

  mounted () {
	  //默认显示所有公司账户
	  this.getCompanyList()
  } 
}

</script>
<style lang='less' scoped>
.company-box{
	padding-top: 10px;
	.action{
		text-align: right;
		padding-right: 10px;
	}
	.table{
		margin-top: 10px;
	}
	.txt-center{
		text-align: center;
	}
}
</style>