<template>
    <div id="target">
        <div class="detailVal">
            <!-- 贷款次数、逾期天数、是否放款失败 、渠道-->
            <div class="loan-time">
                <span class="total" > {{repeatOrderInfo.channel}}</span>
                <span class="period" > {{repeatOrderInfo.accountPeriod}}</span>
                <span class="belong" > {{repeatOrderInfo.auditorName}}</span>
                <span class="company" > {{repeatOrderInfo.companyName}}</span>
            </div>
            <Button  @click="goBack" size="small" class="back-bt" type="primary">
                             {{data.userTitle.goBack}}
            </Button>
            <Tabs type="card"  @on-click="clickTab" :value="value">
                <TabPane :label="parentItem.label" v-show="parentItem.tab"
                         v-for="(parentItem,parentIndex) in data.detailCardData"
                         :key='`parent${parentIndex}`' :name="`${parentIndex}`">
                    <!--订单信息-->
                    <div v-show="parentIndex === 0">
                        <pinjaTable :title="data.orderTitle.orderInfo" :tableInfor="data.userOrderInfo"></pinjaTable>
                        <pinjaTable :title="data.orderTitle.bankInfo" :tableInfor="data.userBankInfo"
                                    :isSuccess="isSuccess"></pinjaTable>
                        <pinjaTable :title="data.orderTitle.repayBankInfo" :tableInfor="repayAccountInfo"
                                    :isHaveData="isHavePayHistory" :noDataText="data.nonePay"></pinjaTable>
                        <Card class="detail-card">
                            <p slot="title" class="title-label">{{data.orderTitle.reviewInfo}}</p>
                            <Table
                                :columns="columnAuditInfo"
                                :data="auditInfoData"
                                :no-data-text="data.tableNoText"
                            ></Table>
                        </Card>

                    </div>
                    <!--用户信息-->
                    <div v-show="parentIndex === 1">
                        <!--用户信息-->
                        <Card class="detail-card">
                            <p slot="title" class="title-label">{{data.userTitle.userInfo}}</p>
                            <div class="user-info">
                                <Row>
                                        <Col :span="index==0||index==7||index==12||index==13||index==14?24:12"
                                            v-for="(item,index) in data.userInfo" :key="`user${index}`" class="user-col">
                                        <p class="info-label"
                                        :class="{'address':index==0||index==7||index==12||index==13||index==14}"
                                        v-if="item.label">{{item.label}}:</p>
                                        <p v-if="index != 0" class="info-value"><Strong>{{item.value}}</Strong></p>
                                        <a v-if="index == 0" target="_blank" style="margin-left:20px;font-weight: 600;" @click="getCallUrl('',item.value)">{{item.value}}</a>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        <!--认证照片-->
                        <Card class="detail-card">
                            <p slot="title" class="title-label">{{data.userTitle.photo}}</p>
                            <h4 class="phone-audit">{{data.userTitle.lastPhoto}}</h4>
                            <Table :columns="userPhotoColumns1" :data="userPhotoData1"
                                   :no-data-text="data.tableNoText"></Table>
                            <h4 class="phone-audit">{{data.userTitle.recentPhoto}}</h4>
                            <Table :columns="userPhotoColumns2" :data="userPhotoData2"
                                   :no-data-text="data.tableNoText"></Table>
                        </Card>
                        <Card class="detail-card">
                            <Tabs value="name1">
                                <!--紧急联系人-->
                                <TabPane :label="data.userTitle.emergencyContact" name="name1">
                                    <Card class="detail-card">
                                        <p slot="title" class="title-label">{{data.userTitle.emergencyContact}}</p>
                                        <Table :columns="EmergencyContactColumns" :data="EmergencyContactInfo"
                                            :no-data-text="data.tableNoText"></Table>
                                    </Card>
                                </TabPane>
                                <TabPane :label="data.userTitle.callBook" name="name2" v-if="repeatOrderInfo.channelId != 13">
                                    <!--本地通讯录-->
                                    <Card class="detail-card">
                                        <p slot="title" class="title-label">{{data.userTitle.callBook}}</p>
                                        <Table :columns="UserNameColumns" :data="UserNamePhoneInfo"
                                            :no-data-text="data.tableNoText" @on-sort-change="localAddressBookSortChange"></Table>
                                            <div style="text-align:right;margin:20px 10px 220px 40px;">
                                            <Page :total="totalItemsLocalAddressBook" :current="localAddressBookForm.pageNum"
                                                :page-size="localAddressBookForm.pageSize" @on-page-size-change="changeSizeLocalAddressBook"
                                                @on-change="changePageLocalAddressBook" size="small" show-total show-elevator show-sizer></Page>
                                        </div>
                                    </Card>
                                </TabPane>
                                <!--通话记录-->
                                <TabPane :label="data.userTitle.callRecord" name="name3" v-if="repeatOrderInfo.channelId != 13">
                                    <!--通话记录-->
                                    <Card class="detail-card">
                                        <p slot="title" class="title-label">{{data.userTitle.callRecord}}</p>
                                        <Table :columns="UserCallRecordColumns" :data="UserCallRecordInfo"
                                            :no-data-text="data.tableNoText" ></Table>
                                    </Card>
                                </TabPane>
                                <TabPane :label="data.userTitle.message" name="name4" v-if="repeatOrderInfo.channelId != 13">
                                   <!--本地短信-->
                                    <Card class="detail-card">
                                        <p slot="title" class="title-label">{{data.userTitle.message}}</p>
                                        <div class="sort">
                                            <Button class="translate" @click="translateFn(UserNativeMessageInfo)" type="primary" v-if="language=='cn'"> translate</Button>
                                        </div>
                                        <Table :columns="UserMessageColumns" :data="UserNativeMessageInfo"
                                            :no-data-text="data.tableNoText" ></Table>
                                    </Card>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </div>
                    <!--还款记录-->
                    <div v-show="parentIndex === 2">
                        <pinjaTable :title="data.userTitle.repayStatus" :tableInfor="data.repayInfo"></pinjaTable>
                        <Card class="detail-card">
                            <p slot="title" class="title-label">{{parentItem.label}}
                                <!-- 减免申请 只有催收列表进来展示collectionStatus为true，从还款列表进来详情不显示词按钮-->
                                <Button v-if="collectionStatus" type="primary" :disabled="isApplySuccess" @click="cutApplication" class="cut-btn">{{data.userTitle.cutApplication}}</Button>
                            </p>
                            <Table :columns="repayColumns" :data="repayInformation"
                                   :no-data-text="data.tableNoText"></Table>
                            <div style="text-align:right;margin:20px 10px 220px 40px;">
                                <Page :total="repayRecordForm.totalItems" :current="repayRecordForm.pageNum"
                                      :page-size="repayRecordForm.pageSize" @on-page-size-change="changeSize4"
                                      @on-change="changePage4" size="small" show-total show-elevator show-sizer></Page>
                            </div>
                        </Card>
                    </div>
                    <!--催收记录-->
                    <div v-show="parentIndex === 3">
                        <Card class="detail-card">
                            <Tabs value="name1">
                                <!--催收记录-->
                                <TabPane :label="parentItem.label" name="name1">
                                    <Card class="detail-card">
                                        <!-- <p slot="title" class="title-label">{{parentItem.label}}</p> -->
                                        <div slot="title" style="text-align:right">
                                            <Button v-if="repeatOrderInfo.companyName == 'Qworks' || repeatOrderInfo.companyName == 'BSD' || repeatOrderInfo.companyName == '勤为'" type="primary"  @click="showSendCollectionMessageModal">{{data.userTitle.sendMessage}}</Button>
                                            <Button type="primary"  @click="addCollectionRecordSinglebtn">{{data.userTitle.operation}}</Button>
                                        </div>
                                        
                                        <Table :columns="collColumns" :data="collInformation"
                                            :no-data-text="data.tableNoText" @on-sort-change="collSortChange"></Table>
                                        <div style="text-align:right;margin:20px 10px 220px 40px;">
                                            <Page :total="collRecordForm.totalItems" :current="collRecordForm.pageNum"
                                                :page-size="collRecordForm.pageSize" @on-page-size-change="changeSize5"
                                                @on-change="changePage5" size="small" show-total show-elevator show-sizer></Page>
                                        </div>
                                    </Card>
                                </TabPane>
                                <!--话单记录-->
                                <TabPane :label="data.userTitle.billRecord" name="name2">
                                    <Card class="detail-card">
                                        <!-- <p slot="title" class="title-label">{{data.userTitle.billRecord}}</p> -->
                                        <Table :columns="callBillRecordColumns" :data="callBillInformation"
                                            :no-data-text="data.tableNoText" @on-sort-change="collSortChange"></Table>
                                        <div style="text-align:right;margin:20px 10px 220px 40px;">
                                            <Page :total="callBillRecordForm.totalItems" :current="callBillRecordForm.pageNum"
                                                :page-size="callBillRecordForm.pageSize" @on-page-size-change="changeSizeCallBill"
                                                @on-change="changePageCallBill" size="small" show-total show-elevator show-sizer></Page>
                                        </div>
                                    </Card>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </div>
                    <!--历史订单-->
                    <div v-show="parentIndex === 4">
                        <history-order-list ref="hisordlist"  v-if="parentIndex === 4"></history-order-list>
                    </div>
                </TabPane>
            </Tabs>
        </div>
        <!-- //催收操作 -->
        <Modal v-model="modalAdd" width="800">
            <p slot="header" style="text-align:center">
                <span>{{data.userTitle.collRecordAdd}} {{callBillRecordOperationOrder.id}}</span>
            </p>
            <div style="height:200px">
                <Row>
                    <Col :span="23" class="auditAgree">
                        <div class="detail-card">
                            <div class="user-input-search">
                                <span style="display:inline-block;minWidth:80px" class="user-input-label">{{data.userTitle.status}}:</span>
                                <Select v-model="data.collectionForm.status" class="user-input" placement="bottom">
                                    <Option :value="item.key" v-for="item in data.actionText" :key="`action${item.key}`">{{item.value}}</Option>
                                </Select>
                                <span  style="display:inline-block;minWidth:80px" class="user-input-label"
                                    v-if="data.collectionForm.status == '5'">{{data.userTitle.expectRepayTime}}:</span>
                                <DatePicker v-model="data.collectionForm.expectRepayTime" type="datetime" style="width:200px;"
                                            placement="bottom"
                                            @on-change="timeClear" :options="timeLimit"
                                            v-if="data.collectionForm.status == '5'"></DatePicker>
                                <br>
                                <!--客户标签-->
                                <div style="margin-top:5px">
                                    <span  style="display:inline-block;minWidth:80px" class="user-input-label">{{data.userTitle.customerLabel}}:</span>
                                    <Select clearable  v-model="data.collectionForm.label" class="user-input" placement="bottom" :placeholder="data.userTitle.select">
                                        <Option :value="item.key" v-for="item in data.customerLabelList" :key="`feed${item.key}`">{{item.value}}</Option>
                                    </Select>
                                    <!--反馈-->
                                    <span  style="display:inline-block;minWidth:80px" class="user-input-label">{{data.userTitle.feedback}}:</span>
                                    <Select v-model="data.collectionForm.feedback" style="width:300px" placement="bottom" :placeholder="data.userTitle.select">
                                        <Option :value="item.key" v-for="item in data.feedbackList" :key="`feed${item.key}`">{{item.value}}</Option>
                                    </Select>
                                </div>
                                <br>
                                <span class="user-input-label">{{data.userTitle.remark}}:</span>
                                <Input v-model="data.collectionForm.msg" class="mark"  type="textarea"
                                    :autosize="{minRows: 3,maxRows: 5}"></Input>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div slot="footer" style="text-align:center">
                <Button style="width: 100px" type="primary" size="large" class="submit-bt" @click="submit()">
                    {{data.userTitle.submit}}
                </Button>
            </div>
        </Modal>
        <!-- 用户图片展示 -->
        <Modal v-model="modal1" width="1000">
            <p slot="header" style="text-align:center">
                <Icon type="information-circled"></Icon>
                <span>{{data.userPhotoTitle[showIndex]}}</span>
            </p>
            <!-- 第一组图片 -->
            <div style="text-align:center;" v-if="last">
                <img v-if="showIndex == 0" :src="userPhotoData1[0] && userPhotoData1[0].idCardImage"
                     class="modal-photo">
                <img v-if="showIndex == 1" :src="userPhotoData1[0].handIdCardImage" class="modal-photo">
                <img v-if="showIndex == 2" :src="userPhotoData1[0].salaryImage" class="modal-photo">
                <img v-if="showIndex == 3" :src="userPhotoData1[0].bankImage" class="modal-photo">
                <img v-if="showIndex == 4" :src="userPhotoData1[0].workImage" class="modal-photo">
            </div>
            <!-- 第二组图片 -->
            <div style="text-align:center;" v-else>
                <img v-if="showIndex == 0" :src="userPhotoData2[0].idCardImage" class="modal-photo">
                <img v-if="showIndex == 1" :src="userPhotoData2[0].handIdCardImage" class="modal-photo">
                <img v-if="showIndex == 2" :src="userPhotoData2[0].salaryImage" class="modal-photo">
                <img v-if="showIndex == 3" :src="userPhotoData2[0].bankImage" class="modal-photo">
                <img v-if="showIndex == 4" :src="userPhotoData2[0].workImage" class="modal-photo">
            </div>
            <div slot="footer">
                <Button type="primary" @click="confirm1">{{data.userTitle.confirm}}</Button>
            </div>
        </Modal>
        <!-- 是否提交催收操作弹框 -->
        <Modal v-model="modal2" width="500">
            <h3 style="text-align: center">{{data.userTitle.title}}</h3>
            <div slot="footer">
                <Button type="primary" @click="confirm2" :loading="loading">
                    <span v-if="!loading">{{data.userTitle.confirm}}</span>
                    <span v-else>{{data.userTitle.loading}}...</span>
                </Button>
                <Button type="primary" @click="cancel">{{data.userTitle.cancel}}</Button>
            </div>
        </Modal>
        <!-- 催收减免弹窗 -->
        <Modal v-model="modal3" width="500" :title="data.userTitle.cutApplication">
            <Form :label-width="180" ref="cutForm" :model="cutForm" :rules="ruleValidate" >
                <FormItem :label="data.userTitle.toRepay">
                    <span>{{toRepay}}</span>
                </FormItem>
                <FormItem :label="data.userTitle.maxDeduction">
                    <span>{{maxDeduction}}</span>
                </FormItem>
                <FormItem :label="data.userTitle.deductionAmount" prop="deductionAmount">
                    <Input v-model="cutForm.deductionAmount" :placeholder="'0-'+ maxDeduction"></Input>
                </FormItem>
                <FormItem :label="data.userTitle.msg">
                    <Input v-model="cutForm.msg" :maxlength="200" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="primary" @click="submitApplication('cutForm')">{{data.userTitle.submit}}</Button>
            </div>
        </Modal>
        <!-- 是否发送催收短信 -->
        <Modal v-model="modalForSendCollectionMessage" width="300">
            <h3 style="text-align: center">{{data.userTitle.sendMessageModal}}</h3>
            <div slot="footer">
                <Button type="primary" @click="sendCollectionMessage" :loading="loadingForSendCollectionMessage">
                    {{data.userTitle.confirm}}
                </Button>
                <Button type="primary" @click="modalForSendCollectionMessage = false">{{data.userTitle.cancel}}</Button>
            </div>
        </Modal>
        <a ref="target" href="" target="_blank"></a>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import detailListApi from '../../services/api/detailList.service'
    import localStorage from '../../services/localStorage.service'
    import moment from 'moment'
    import noImgSrc from '../../assets/default.png'
    import pdfSrc from '../../assets/pdf.jpeg'
    import pinjaTable from '../../components/pinja-table.vue'
    import historyOrderList from './historyOrder/historyOrderList.vue'
    
    export default {
        data () {
            return {
                totalItemsLocalAddressBook: 0,
                localAddressBookForm:{//本地通讯录分页
                    orderId: '',
                    sort: 'DESC',
                    sortBy: 'count',
                    pageNum: 1,
                    pageSize: 20,
                },
                cutForm: {//催收减免表单
                    deductionAmount: '', 
                    msg: ''
                },
                ruleValidate: {//减免校验
                    deductionAmount: [
                        {required: true, message: 'The deduction amount cannot be empty', trigger: 'blur'},
                        {type: 'regexp', pattern: /^[0-9]+[.0-9]*$/, validator: this.validator, trigger: 'blur'},
                    ]
                },
                toRepay: '',//催收减免-待还金额
                maxDeduction: 2000,//催收减免-减免上限
                isApplySuccess: true,//申请减免按钮是否可点击、默认不可点击
                collectionStatus: true,//是否可催收
                channelId: 0,
                repeatOrderInfo: { //标签信息
                    channelId: 0,//渠道id
                    channel: '',//渠道
                    accountPeriod: 'M0',//账期
                    auditorName: 'None-Attribution',//归属
                    companyName: 'Qworks'//所属公司
                },//用户标签
                value: '0',//默认是订单详情
                isShow: false,//控制审核
                loading: false,//催收操作提交过程中loading显示
                modal1: false,//控制用户图片展示关闭
                modal2: false,//控制是否提交催收操作弹框
                modal3: false,//控制催收减免弹窗是否展示
                modalAdd: false,//话单记录添加操作
                showIndex: 0,//用来获取图片1对应的文案
                last: true, //控制是第一组照片还是第二组照片
                data: { //国际化显示的时候所有替换数据
                    detailCardData: [],//tab标签
                    orderTitle: {}, //订单信息-标题
                    userOrderInfo: [],//订单信息
                    userBankInfo: [],//放款银行账号
                    userPayInfo: [],//还款银行账号信息
                    loanTypeText: {},//贷款状态
                    loanDay: '',//借款天数
                    rate: '',//利率
                    rateTypeText: {},//计息方式
                    nameValid: {},//放款银行账号-姓名规则校验
                    nonePay: '',//还款银行账号信息-为找到记录
                    userTitle: {},//用户信息-四个标题-后端返回数据的文案
                    userInfo: [],//用户信息
                    tableNoText: '无数据',//table无数据的展示
                    userPhotoTitle: {},//用户信息-认证照片
                    emergencyContactTitle: {}, //用户信息-紧急联系人-表头
                    isPlatformUser: {},//用户信息-平台用户
                    userCallBookTitle: {},//用户信息-本地通讯录-表头
                    userMessageTitle: {},//用户信息-本地短信-表头
                    userCallRecordTitle: {},//用户信息-本地通话记录-表头
                    genderText: {},//性别
                    occupationText: {},//职业
                    educationText: {},//学历
                    relationText: {},//关系 
                    purposeText: {},//借款目的
                    repayInfo: [],//还款记录-还款状态
                    repayInfoTitle: {},//还款记录信息表头
                    repayTypeText: {},//后台返回是信息还款状态
                    repayText: {},//还款方式
                    isCutText: {},//是否减免还款
                    collectionRecordTitle: {},//催收记表头
                    callBillRecordTitle: {},//话单记录表头
                    collectionStatus: {},//催收状态
                    collectionForm: {}, //最后的提交表单
                    actionText: [],//拒绝、通过
                    feedbackList: [],//反馈情况
                    customerLabelList: [],//用户标签
                    hangupReasonList: [], //挂机原因
                    columnAuditInfoTitle: {},
                    auditLevel: {},
                    auditResult: {},
                },
                repayAccountInfo: [],//还款银行账号信息
                isSuccess: 0, //是否绑卡成功 0 未校验  1 校验中 2 校验通过 3 校验不通过
                isHavePayHistory: false, //是否有还款账号
                auditInfoData: [],
                columnAuditInfo: [
                    {
                        title: "审核时间",
                        key: "auditTime",
                        render: (h, params) => {
                            return h("div", this.timeFormat(params.row.auditTime));
                        }
                    },
                    {
                        title: "审核阶段",
                        key: "level",
                        render: (h, params) => {
                            return h("div", this.data.auditLevel[params.row.level]);
                        }
                    },
                    {
                        title: "审核结果",
                        key: "action",
                        render: (h, params) => {
                            return h("div", this.data.auditResult[params.row.action]);
                        }
                    },
                    {
                        title: "审核人员",
                        key: "auditor"
                    },
                    {
                        title: "审核意见",
                        key: "remark"
                    }
                ],
                userPhotoColumns1: [//第一组图片column
                    {
                        title: '正面照片',
                        key: 'idCardImage',
                        className: 'demo-table-hover-column',
                        render: (h, params)=> {
                            return h('Img', {
                                attrs: {
                                    src: params.row && params.row.idCardImage || ''
                                },
                                on: {
                                    click: () => {
                                        this.modal1 = true
                                        this.showIndex = 0
                                        this.last = true
                                    }
                                }
                            })
                        }
                    }, {
                        title: '手持照片',
                        key: 'handIdCardImage',
                        className: 'demo-table-hover-column',
                        render: (h, params) => {
                            return h('Img', {
                                attrs: {
                                    src: params.row && params.row.handIdCardImage || ''
                                },
                                on: {
                                    click: () => {
                                        this.modal1 = true
                                        this.showIndex = 1
                                        this.last = true
                                    }

                                }
                            })
                        }
                    },{
                        title: '工资照片',
                        key: 'salaryImage ',
                        className: 'demo-table-hover-column',
                        render: (h, params) => {
                            // 分三种情况
                            //1、有工资字段，包括图片或者pdf两种情况
                            //2、没有工资字段  显示默认图片
                            var src = ''
                            var isPdf = false
                            if(params.row.salaryImage  != undefined){
                                if(params.row.salaryImage .includes('pdf')){
                                    src = pdfSrc
                                    isPdf = true
                                }else{
                                    src = params.row.salaryImage 
                                }
                            }else{
                                src = noImgSrc
                            }
                            return h('Img', {
                                attrs: {
                                    src: src
                                },
                                on: {
                                    click: () => {
                                        if(!isPdf){
                                            if (!params.row.salaryImage ) return
                                            this.modal1 = true
                                            this.showIndex = 2
                                            this.last = true
                                        }else{
                                            this.$showPDF(params.row.salaryImage )
                                        }
                                    }

                                }
                            })
                        }
                    },  {
                        title: '银行流水',
                        key: 'bankImage',
                        className: 'demo-table-hover-column',
                        render: (h, params) => {
                            // 分三种情况
                            //1、有工资字段，包括图片或者pdf两种情况
                            //2、没有工资字段  显示默认图片
                            var src = ''
                            var isPdf = false
                            if(params.row.bankImage != undefined){
                                if(params.row.bankImage.includes('pdf')){
                                    src = pdfSrc
                                    isPdf = true
                                }else{
                                    src = params.row.bankImage
                                }
                            }else{
                                src = noImgSrc
                            }
                            return h('Img', {
                                attrs: {
                                    src: src
                                },
                                on: {
                                    click: () => {
                                        if(!isPdf){
                                            if (!params.row.bankImage) return
                                            this.modal1 = true
                                            this.showIndex = 3
                                            this.last = true
                                        }else{
                                            this.$showPDF(params.row.bankImage)
                                        }
                                    }

                                }
                            })
                        }
                    }, {
                        title: '证件照片',
                        key: 'workImage',
                        className: 'demo-table-hover-column',
                        render: (h, params) => {
                            return h('Img', {
                                attrs: {
                                    src: params.row && params.row.workImage || noImgSrc
                                },
                                on: {
                                    click: () => {
                                        if (!params.row.workImage) return
                                        this.modal1 = true
                                        this.showIndex = 4
                                        this.last = true
                                    }

                                }
                            })
                        }
                    },
                ],
                userPhotoColumns2: [//第二组图片column
                    {
                        title: '正面照片',
                        key: 'idCardImage',
                        className: 'demo-table-hover-column',
                        render: (h, params) => {
                            return h('Img', {
                                attrs: {
                                    src: params.row && params.row.idCardImage || ''
                                },
                                on: {
                                    click: () => {
                                        this.modal1 = true
                                        this.showIndex = 0
                                        this.last = false
                                    }

                                }
                            })
                        }
                    }, {
                        title: '手持照片',
                        key: 'handIdCardImage',
                        className: 'demo-table-hover-column',
                        render: (h, params) => {
                            return h('Img', {
                                attrs: {
                                    src: params.row && params.row.handIdCardImage || ''
                                },
                                on: {
                                    click: () => {
                                        this.modal1 = true
                                        this.showIndex = 1
                                        this.last = false
                                    }

                                }
                            })
                        }
                    },{
                        title: '工资照片',
                        key: 'salaryImage ',
                        className: 'demo-table-hover-column',
                        render: (h, params) => {
                            // 分三种情况
                            //1、有工资字段，包括图片或者pdf两种情况
                            //2、没有工资字段  显示默认图片
                            var src = ''
                            var isPdf = false
                            if(params.row.salaryImage  != undefined){
                                if(params.row.salaryImage .includes('pdf')){
                                    src = pdfSrc
                                    isPdf = true
                                }else{
                                    src = params.row.salaryImage 
                                }
                            }else{
                                src = noImgSrc
                            }
                            return h('Img', {
                                attrs: {
                                    src: src
                                },
                                on: {
                                    click: () => {
                                        if(!isPdf){
                                            if (!params.row.salaryImage ) return
                                            this.modal1 = true
                                            this.showIndex = 2
                                            this.last = false
                                        }else{
                                           this.$showPDF(params.row.salaryImage )
                                        }   
                                    }

                                }
                            })
                        }
                    },{
                        title: '银行流水',
                        key: 'bankImage',
                        className: 'demo-table-hover-column',
                        render: (h, params) => {
                            // 分三种情况
                            //1、有工资字段，包括图片或者pdf两种情况
                            //2、没有工资字段  显示默认图片
                            var src = ''
                            var isPdf = false
                            if(params.row.bankImage != undefined){
                                if(params.row.bankImage.includes('pdf')){
                                    src = pdfSrc
                                    isPdf = true
                                }else{
                                    src = params.row.bankImage
                                }
                            }else{
                                src = noImgSrc
                            }
                            return h('Img', {
                                attrs: {
                                    src: src
                                },
                                on: {
                                    click: () => {
                                        if(!isPdf){
                                            if (!params.row.bankImage) return
                                            this.modal1 = true
                                            this.showIndex = 3
                                            this.last = false
                                        }else{
                                           this.$showPDF(params.row.bankImage)
                                        }   
                                    }

                                }
                            })
                        }
                    }, {
                        title: '证件照片',
                        key: 'workImage',
                        className: 'demo-table-hover-column',
                        render: (h, params) => {
                            return h('Img', {
                                attrs: {
                                    src: params.row && params.row.workImage || noImgSrc
                                },
                                on: {
                                    click: () => {
                                        if (!params.row.workImage) return
                                        this.modal1 = true
                                        this.showIndex = 4
                                        this.last = false
                                    }

                                }
                            })
                        }
                    },
                ],
                userPhotoData1: [],//第一组图片信息
                userPhotoData2: [],//第二组图片信息
                EmergencyContactColumns: [//紧急联系人表头
                    {
                        title: '姓名',
                        key: 'name',
                        width: 140,
                    },{
                        title: '性别',
                        key: 'gender',
                        width: 140,
                        render: (h, params) => {
                           return h('span', this.data.genderText[params.row.gender])
                        }
                    },{
                        title: '关系',
                        key: 'relation',
                        width: 140,
                        render: (h, params) => {
                           return h('span', this.data.relationText[params.row.relation])
                        }
                    },{
                        title: '电话',
                        key: 'phoneNo',
                        render: (h, params) => {
                            return h('a',{
                                on: {
                                    click: (e) => {
                                        this.getCallUrl(e,params.row.phoneNo)
                                    }
                                }
                            },params.row.phoneNo)
                        }
                    },{
                        title: '用户联系次数',
                        key: 'count',
                        width: 140,
                    },{
                        title: '总呼叫次数',
                        key: 'totalCallCount',
                        width: 140,
                    },{
                        title: '今日呼叫次数',
                        key: 'todayCallCount',
                        width: 140,
                    },{
                        title: '',
                        key: '',
                        render: (h, params) => {
                            if (Number(params.row.ecStatus) === 0) {
                                return h('span', {style: this.infoStyle}, this.data.userTitle.uncall)
                            } else if (Number(params.row.ecStatus) === 1){
                                return h('span', {style: this.greenStyle}, this.data.userTitle.yes)
                            }else if (Number(params.row.ecStatus) === 2){
                                return h('span', {style: this.greenStyle}, this.data.userTitle.no)
                            }
                        }
                    }
                ],
                EmergencyContactInfo: [], //紧急联系人
                UserNameColumns: [//通讯录表头
                    {
                        title: '姓名',
                        key: 'name',
                    }, {
                        title: '电话',
                        key: 'phone',
                        render: (h, params) => {
                            return h('a',{
                                on: {
                                    click: (e) => {
                                        this.getCallUrl(e,params.row.phone)
                                    }
                                }
                            },params.row.phone)
                        }
                    }, {
                        title: '用户联系次数',
                        key: 'count',
                        sortable: 'true'
                    }, {
                        title: '总呼叫次数',
                        key: 'totalCallCount',
                    }, {
                        title: '今日呼叫次数',
                        key: 'todayCallCount',
                    },{
                        title: '是否平台用户',
                        key: 'platformUser',
                        width: 140,
                        render: (h, params) => {
                            if (Boolean(params.row.platformUser)) {
                                return h('span', this.data.isPlatformUser[0])
                            } else {
                                return h('span', this.data.isPlatformUser[1])
                            }
                           
                        }
                    },{
                        title: '',
                        key: '',
                        render: (h, params) => {
                            if (Number(params.row.ecStatus) === 0) {
                                return h('span', {style: this.infoStyle}, this.data.userTitle.uncall)
                            } else if (Number(params.row.ecStatus) === 1){
                                return h('span', {style: this.greenStyle}, this.data.userTitle.yes)
                            }else if (Number(params.row.ecStatus) === 2){
                                return h('span', {style: this.greenStyle}, this.data.userTitle.no)
                            }
                        }
                    }
                ],
                UserNamePhoneInfo: [],//通讯录信息
                userNameForm: {//通讯录分页信息
                    orderId: 0,
                },
                userNameSort: {
                    phone: false,
                    count: false
                },
                userMessageForm: {//短信分页
                    orderId: 0,
                },
                UserMessageColumns: [//短信表头
                    {
                        title: '姓名',
                        key: 'name',
                        width: 240
                    },{
                        title: '电话',
                        key: 'phoneNo',
                        width: 140,
                        render: (h, params) => {
                            return h('a',{
                                on: {
                                    click: (e) => {
                                        this.getCallUrl(e,params.row.phone)
                                    }
                                }
                            },params.row.phone)
                        }
                    }, {
                        title: '收发时间',
                        key: 'sendOrAcceptTime',
                        width: 140,
                        render: (h, params) => {
                            return h('div', this.timeFormat(params.row.sendOrAcceptTime))
                        }
                    },  {
                        title: '已读',
                        key: 'messageRead',
                        width: 100,
                        render: (h, params) => {
                            return h('span', Number(params.row.messageRead) === 1 ? this.data.userTitle.haveRead : this.data.userTitle.unread)
                        }
                    }, {
                        title: '短信类型',
                        key: 'messageType',
                        width: 80,
                        render: (h, params) => {
                            if (Number(params.row.messageType) === 1) {
                                return h('span', {style: this.infoStyle}, this.data.userTitle.receive)
                            } else {
                                return h('span', {style: this.greenStyle}, this.data.userTitle.send)
                            }
                        }
                    }, {
                        title: '短信内容',
                        key: 'content',
                    }
                ],
                UserNativeMessageInfo: [],//短信data
                messageSort: false,
                callRecordsForm: { // 通话记录
                    orderId: 0,
                },
                UserCallRecordColumns: [//通话记录Columns
                    {
                        title: '姓名',
                        key: 'name',
                    }, {
                        title: '电话',
                        key: 'phoneNo',
                        width: 150,
                        render: (h, params) => {
                            return h('a',{
                                on: {
                                    click: (e) => {
                                        this.getCallUrl(e,params.row.phone)
                                    }
                                }
                            },params.row.phone)
                        }
                    }, {
                        title: '通话时长',
                        key: 'duration',
                        render: (h, params) => {
                            return h('div', this.secondToDate(params.row.duration))
                        }
                    },{
                        title: '通话时间',
                        key: 'callTime',
                        width: 180,
                        render: (h, params) => {
                            return h('div', this.timeFormat(params.row.callTime))
                        }

                    }, {
                        title: '通话状态',
                        key: 'callType',
                        render: (h, params) => {
                            switch (params.row.callType) {
                                case 1:
                                    return h('span', {style: this.infoStyle}, this.data.userTitle.in)
                                    break
                                case 2:
                                    return h('span', {style: this.greenStyle}, this.data.userTitle.out)
                                    break
                                case 3:
                                    return h('span', {style: this.redStyle}, this.data.userTitle.no)
                                    break
                                default:
                                    return h('span', {style: this.warningStyle}, this.data.userTitle.unknown)
                                    break
                            }
                        }

                    }
                ],
                UserCallRecordInfo: [],//通话记录信息
                callRecordSort: {
                    callTime: false,
                    duration: false,
                },
                repayRecordForm: {//还款记录
                    totalItems: 0,
                    pageNum: 1,
                    pageSize: 20,
                    sort: 'DESC',
                    sortBy: 'receivedTime',
                },
                repayColumns: [//还款记录表头
                    {
                        title: '还款时间',
                        key: 'repayTime',
                        width: 180,
                        render: (h, params) => {
                            return h('div', this.timeFormat(params.row.repayTime))
                        }
                    }, {
                        title: '还款金额',
                        key: 'repayAmount',
                    }, {
                        title: '还款类型',
                        key: 'repayType',
                        render: (h, params) => {
                            return h('span', this.data.repayTypeText[params.row.repayType])
                        }

                    }, {
                        title: '还款方式',
                        key: 'repayWay',
                        render: (h, params) => {
                            return h('span', this.data.repayText[params.row.repayWay])
                        }
                    }, {
                        title: '是否催收减免还款',
                        key: 'deductionFlag',
                        width: 180,
                        render: (h, params) => {
                            return h('span', this.data.isCutText[params.row.deductionFlag])
                        }
                    }, {
                        title: '操作人',
                        key: 'operator',
                    }
                ],
                repayInformation: [],//还款记录信息
                collRecordForm: {//催收记录分页信息
                    totalItems: 0,
                    pageNum: 1,
                    pageSize: 20,
                    sort: 'DESC',
                    sortBy: 'ctime'
                },
                callBillRecordForm: {//话单记录分页信息
                    totalItems: 0,
                    pageNum: 1,
                    pageSize: 20,
                    sort: 'DESC',
                    sortBy: 'id'
                },
                modalForSendCollectionMessage: false,
                loadingForSendCollectionMessage: false,
                collColumns: [//催收记录表头
                    {
                        title: '催收时间',
                        key: 'ctime',
                        width: 140,
                        sortType: 'desc',
                        sortable: 'custom',
                        render: (h, params) => {
                            return h('div', params.row.ctime)
                        }
                    }, {
                        title: '催收人',
                        key: 'auditorName',
                    }, {
                        title: '电话',
                        key: 'phoneNo',
                        render: (h, params) => {
                            return h('a',{
                                on: {
                                    click: (e) => {
                                        this.getCallUrl(e,params.row.phoneNo)
                                    }
                                }
                            },params.row.phoneNo)
                        }
                    }, {
                        title: '话单ID',
                        key: 'recordId',
                    }, {
                        title: '催收状态',
                        key: 'status',
                        width: 110,
                        render: (h, params) => {
                            return h('span', this.data.collectionStatus[params.row.status])
                        }

                    }, {
                        title: '预计还款时间',
                        key: 'expectRepayTime',
                        width: 180,
                        sortType: 'desc',
                        sortable: 'custom',
                        render: (h, params) => {
                            return h('div', params.row.expectRepayTime)
                        }
                    }, {
                        title: '客户标签',
                        key: 'label',
                        render: (h, params) => {
                            let val = {}
                            this.data.customerLabelList.forEach(i => {
                                if(i.key == params.row.label){
                                    val = i
                                }
                            })
                            return h('span', val.value)
                        }
                    } ,{
                        title: '反馈',
                        key: 'feedback',
                        render: (h, params) => {
                            let val = {}
                            this.data.feedbackList.forEach(i => {
                                if(i.key == params.row.feedback){
                                    val = i
                                }
                            })
                            return h('span', val.value)
                        }
                    } ,{
                        title: '备注',
                        key: 'msg',
                    }
                ],
                callBillRecordColumns: [//话单记录
                    {
                        title: '话单id',
                        key: 'id',
                    },{
                        title: '呼叫号码',
                        key: 'phone',
                        render: (h, params) => {
                            return h('a',{
                                on: {
                                    click: (e) => {
                                        this.getCallUrl(e,params.row.phone)
                                    }
                                }
                            },params.row.phone)
                        }
                    },{
                        title: '通话时间',
                        key: 'startTime',
                        width: 180,
                        render: (h, params) => {
                            return h('div', this.timeFormat(params.row.startTime))
                        }
                    },{
                        title: '通话时长',
                        key: 'duration',
                        render: (h, params) => {
                            return h('div', this.secondToDate(params.row.duration))
                        }
                    },{
                        title: '挂机原因',
                        key: 'status',
                        render: (h, params) => {
                            let val = ''
                            this.data.hangupReasonList.forEach(item => {
                                if(item.key == params.row.status){
                                    val = item.value
                                }
                            })
                            return h('div',val)
                        }
                    },{
                        title: '录音地址',
                        key: 'recordUrl',
                        render: (h, params) => {
                            return h('a',{
                                on: {
                                    click: (e) => {
                                        this.recordUrl(e,params.row.recordUrl)
                                    }
                                }
                            },params.row.recordUrl)
                        }
                    },{
                        title: '催收人',
                        key: 'auditorName',
                    },{
                        title: '操作',
                        key: '',
                        render: (h, params) => {
                            let defineDisabled = params.row.collectionRecordId != ''
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small',
                                        disabled: defineDisabled
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.addCollectionRecord(params.row)
                                        }
                                    }
                                }, this.data.userTitle.operation),
                            ]);
                        }
                    },
                ],
                collInformation: [],//催收记录信息
                callBillInformation: [],//话单记录信息
                callBillRecordOperationOrder: {},//要操作的订单
                collRecordSort: {
                    ctime: false,
                    expectRepayTime: false,
                },
                //颜色、样式
                redStyle: { //红色
                    color: '#ff4b58',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#ff4b58',
                    padding: '1px',
                },
                greenStyle: { //绿色
                    color: '#2ed272',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#2ed272',
                    padding: '1px'
                },
                warningStyle: { //黄色
                    color: '#ecc23d',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#ecc23d',
                    padding: '1px',
                    borderRadius: '5px'
                },
                infoStyle: { //蓝色
                    color: '#2d8cf0',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#2d8cf0',
                    padding: '1px'
                },
                //订单id
                orderId: '', //用于查询订单详情
                //薪水对应的文案
                salaryText: {
                    0: '0-2Juta',//0-2Juta
                    1: '2-4 Juta',//2-4 Juta
                    2: '4-6 Juta',//4-6 Juta
                    3: '6-8 Juta',//6-8 Juta
                    4: '8-10 Juta',//8-10 Juta
                    5: '>10 Juta',//>10 Juta
                },
                repayTime: '',//应还款时间
                timeLimit: {},//日期限制

            }
        },
        components: {
            pinjaTable,
            historyOrderList,
        },
        methods: {
            handleClick(phone){
                
            },
            //获取外呼链接
            getCallUrl(e,phone){
                detailListApi.getCallUrl({orderId: this.orderId,phoneNo: phone}).then(res => {
                    let target = this.$refs.target
                    target.setAttribute('href', res)
                    target.click()
                })
            },
            //录音地址
            recordUrl(e,recordUrl){
                let target = this.$refs.target
                target.setAttribute('href', recordUrl)
                target.click()
            },

            //利率精度矫正
            multiply(arg1, arg2) { 
                var m = 0, s1 = arg1.toString(), s2 = arg2.toString(); 
                try{
                    m +=s1.split(".")[1].length
                } catch(e){} 
                try{
                    m+=s2.split(".")[1].length
                } catch(e){}  
                return Number(s1.replace(".","")) * Number(s2.replace(".","")) / Math.pow(10,m) 
            },
            //时间格式化
            timeFormat(time){
                return moment(time).format('YYYY-MM-DD HH:mm:ss')
            },
            //返回订单列表
            goBack(){
                //localStorage.set('currentPath', 'collectionList')
                this.modal2 = false
                this.modalAdd = false
                
                // let path = this.collectionStatus? '/home/collectionList': '/home/repayList'
                // this.$router.push({path: path, query: {isSearch: true}})
            },
            clickTab(name) {
                this.value = name
                //第一次切换调接口，再次切换不调接口
                switch (name) {
                    case '0': //订单信息
                        if (this.data.userOrderInfo[0].value === '') this.getDetailInformation() //重新获取数据订单详情
                        break
                    case '1': //用户信息
                        if (this.data.userInfo[0].value === '') this.userDetailFn()  //用户信息
                        if (this.EmergencyContactInfo.length === 0) this.linkmanList() //紧急联系人
                        if(this.repeatOrderInfo.channelId != 13){
                            if (this.UserNativeMessageInfo.length === 0) this.userNamePhoneList(1) //通讯录列表
                            if (this.UserNativeMessageInfo.length === 0) this.userMessageList() //短信列表
                            if (this.UserCallRecordInfo.length === 0) this.userCallRecordList() //通话记录列表
                        }
                        
                        break
                    case '2':
                        if (this.data.repayInfo[0].value === '') this.repayRecord()//还款状态
                        //判断是否可减免申请
                        this.checkDeduction()
                        if (this.repayInformation.length === 0) this.repayRecordList()//还款记录
                        break
                    case '3':
                        if (this.collInformation.length === 0) this.collRecordList()//催收记录
                        if(this.callBillInformation.length === 0) this.callBillList() //话单记录
                        break
                    case '4':
                        this.$refs.hisordlist[0].searchData(1)
                        break
                }
                //回到顶部
                target.scrollIntoView();
            },
            // 表头翻译、函数提取
            changeTableTitleFn (column, title) {
                column.forEach( (item, index) => {
                    item.title = title[index]
                })
            },
            //切换语言
            changeLanguage(){
                this.$i18n.locale = this.language
                let tabsArr = this.$i18n.messages[this.$i18n.locale].message.detailList
                this.$nextTick(() => {
                    this.data = tabsArr
                    //切换语言修改表头,将表头信息组成数组
                    var titleArr = [
                        {
                            coloumn:  this.userPhotoColumns1, //第一组图片
                            title: this.data.userPhotoTitle 
                        },
                        {
                            coloumn:  this.userPhotoColumns2, //第二组图片
                            title: this.data.userPhotoTitle 
                        },
                        {
                            coloumn:  this.EmergencyContactColumns, //通讯录列表表头
                            title: this.data.emergencyContactTitle 
                        },
                        {
                            coloumn:  this.UserNameColumns, //通讯录列表表头
                            title: this.data.userCallBookTitle 
                        },
                        {
                            coloumn:  this.UserMessageColumns, //短信列表
                            title: this.data.userMessageTitle 
                        },
                        {
                            coloumn:  this.UserCallRecordColumns, //通话记录列表
                            title: this.data.userCallRecordTitle 
                        },
                        {
                            coloumn:  this.repayColumns, //还款记录列表
                            title: this.data.repayInfoTitle 
                        },
                        {
                            coloumn:  this.collColumns, //催收记录列表
                            title: this.data.collectionRecordTitle 
                        },
                        {
                            coloumn:  this.callBillRecordColumns, //话单记录列表
                            title: this.data.callBillRecordTitle 
                        },
                        {
                            coloumn: this.columnAuditInfo, //审核记录列表
                            title: this.data.columnAuditInfoTitle
                        }
                    ]
                    for(let item of titleArr) {
                        this.changeTableTitleFn(item.coloumn, item.title)
                    }

                    if (this.value === '1') {
                        this.userMessageList()
                    }
                    this.clickTab(this.value)
                })
                this.data.actionText = [] //操作列表
                this.data.feedbackList = [] //反馈列表
                this.data.customerLabelList = [] //用户标签
                this.data.collectionForm = {} //操作提交表单
                setTimeout(() => {
                    this.data.collectionForm = tabsArr.collectionForm
                    this.data.actionText = tabsArr.actionText
                    this.data.feedbackList = tabsArr.feedbackList
                    this.data.customerLabelList = tabsArr.customerLabelList
                }, 100)


            },
            //copyFn
            copyFn(param){
                return JSON.parse(JSON.stringify(param))
            },

            //秒转化成 时分秒
            secondToDate(time) {
                let h, m, s, result
                h = Math.floor(time / 3600);
                m = Math.floor((time / 60 % 60));
                s = Math.floor((time % 60));
                if (time < 60) {
                    result = `${s} ${this.data.userTitle.s}`
                } else if (time >= 60 && time < 3600) {
                    result = `${m + this.data.userTitle.m} ${s} ${this.data.userTitle.s}`
                } else {
                    result = `${h} ${this.data.userTitle.h} ${m + this.data.userTitle.m} ${s} ${this.data.userTitle.s}`
                }
                return result
            },
            //用户信息
            userDetailFn(){
                detailListApi.userDetail({orderId: this.orderId}).then(res => {
                    this.data.userInfo.forEach(item => {

                        if (item.key === 'gender') { //性别
                            res[item.key] = this.data.genderText[res[item.key]]
                        }
                        if (item.key === 'occupation') { //职业
                            res[item.key] = this.data.occupationText[res[item.key]]
                        }

                        if (item.key === 'salary') { //薪水
                            res[item.key] = this.salaryText[res[item.key]]
                        }

                        if (item.key === 'education') { //学历
                            res[item.key] = this.data.educationText[res[item.key]]
                        }
                        if (item.key === 'purpose') { //借款目的
                            res[item.key] = this.data.purposeText[res[item.key]]
                        }


                        item.value = res[item.key] || ''
                    })
                    //联系人信息
                    if (res.contacts !== undefined) {
                        this.data.contactText[0].value = res.contacts[0] && res.contacts[0].name || ''
                        this.data.contactText[1].value = res.contacts[1] && res.contacts[1].name || ''
                        this.data.contactText[2].value = res.contacts[0] && this.data.relationText[res.contacts[0].relation] || ''
                        this.data.contactText[3].value = res.contacts[1] && this.data.relationText[res.contacts[1].relation] || ''
                        this.data.contactText[4].value = res.contacts[0] && res.contacts[0].phoneNo || ''
                        this.data.contactText[5].value = res.contacts[1] && res.contacts[1].phoneNo || ''
                    }else{
                        this.data.contactText = []
                    }
                    

                    //照片信息
                    this.userPhotoData1 = JSON.stringify(res.oldImages) === '{}' ? [] : [res.oldImages]
                    this.userPhotoData2 = JSON.stringify(res.newImages) === '{}' ? [] : [res.newImages]

                })
            },
            //紧急联系人
            linkmanList(){
                detailListApi.getLinkmanList({orderId: this.orderId}).then(res => {
                    this.EmergencyContactInfo = res || []
                })
            },
            
            //通讯录
            userNamePhoneList(pageNo){
                let param = this.copyFn(this.localAddressBookForm)
                param.pageNum = pageNo
                param.orderId = this.orderId
                console.log(param)

                detailListApi.callBooksList(param).then(res => {
                    //table
                    this.UserNameColumns.forEach((item, i) => {
                        item.title = this.data.userCallBookTitle[i]
                    })
                    this.UserNamePhoneInfo = res.callbooks || []
                    this.totalItemsLocalAddressBook = res.basePageResponse.totalNum
                })
            },
            //本地通讯录
            changeSizeLocalAddressBook(size){
                this.localAddressBookForm.pageSize = size
                this.userNamePhoneList(1)
            },
            changePageLocalAddressBook(pageNo){
                this.localAddressBookForm.pageNum = pageNo
                this.userNamePhoneList(pageNo)
            },
            localAddressBookSortChange(){
                this.localAddressBookForm.sortBy = column.key || 'count' //默认申请时间倒序排列
                if(column.order === 'normal') column.order = 'desc'
                this.localAddressBookForm.sort = column.order && column.order.toUpperCase() || 'DESC'
                this.userNamePhoneList(1)
            },
            //翻译短信服务
            translateFn(UserNativeMessageInfo) {
                if(this.UserMessageColumns[this.UserMessageColumns.length-1].key!=='contentCh'){
                    this.UserNativeMessageInfo = []
                    this.UserMessageColumns.push({
                        title: '短信翻译',
                        key: 'contentCh',
                        width: 200
                    })
                    if (UserNativeMessageInfo.length > 0) {
                        this.UserMessageColumns.forEach((item, i) => {
                            item.title = this.data.userMessageTitle[i]
                        })
                        let transformData = ''
                        let transformArr = []
                        UserNativeMessageInfo.forEach((item, i) => {
                            item.contentCh = ''
                            if (i !== UserNativeMessageInfo.length - 1) transformData += `${item.content}[^]`
                            else transformData += item.content
                        })
                        let param = {
                            text: transformData,
                            from: 'in',
                            to: 'cn'
                        }
                        detailListApi.transition(param).then(res => {
                            let result = ''
                            if (res && res.data.length > 0) {
                                for (let key of res.data) {
                                    result += key
                                }
                            }
                            transformArr = result.split('[^]')
                            UserNativeMessageInfo.forEach((item, i) => {
                                item.contentCh = transformArr[i]
                            })
                            this.UserNativeMessageInfo = UserNativeMessageInfo
                        })     
                    }
                }else{
                    return
                }
            },
            //本地短信列表
            userMessageList(){
                detailListApi.messagesList({orderId: this.orderId}).then(res => {
                    //table
                    let UserNativeMessageInfo = res || []
                    this.UserNativeMessageInfo = UserNativeMessageInfo
                    if(this.UserMessageColumns[this.UserMessageColumns.length-1].key == 'contentCh'){
                        this.UserMessageColumns.pop()
                    }
                })
            },
            //通话记录列表
            userCallRecordList(){
                detailListApi.callRecordsList({orderId: this.orderId}).then(res => {
                    //table
                    this.UserCallRecordColumns.forEach((item, i) => {
                        item.title = this.data.userCallRecordTitle[i]
                    })
                    this.UserCallRecordInfo = res || []
                })
            },
            
            //改变页码-本地短信列表
            changePage2 (page) {
                this.userMessageForm.pageNum = page
                this.userMessageList()
            },
            //改变每页显示数量-本地短信列表
            changeSize2 (size) {
                this.userMessageForm.pageSize = size
                this.userMessageList()
            },
            //改变页码-通话记录列表
            changePage3 (page) {
                this.callRecordsForm.pageNum = page
                this.userCallRecordList()
            },
            //改变每页显示数量-通话记录列表
            changeSize3 (size) {
                this.callRecordsForm.pageSize = size
                this.userCallRecordList()
            },
            //改变页码-还款记录
            changePage4 (page) {
                this.repayRecordForm.pageNum = page
                this.repayRecordList()
            },
            //改变每页显示数量-还款记录
            changeSize4 (size) {
                this.repayRecordForm.pageSize = size
                this.repayRecordList()
            },
            //改变页码-催收记录
            changePage5 (page) {
                this.collRecordForm.pageNum = page
                this.collRecordList()
            },
            //改变每页显示数量-催收记录
            changeSize5 (size) {
                this.collRecordForm.pageSize = size
                this.collRecordList()
            },
            //改变页码-话单记录
            changePageCallBill (page) {
                this.callBillRecordForm.pageNum = page
                this.callBillList()
            },
            //改变每页显示数量-话单记录
            changeSizeCallBill (size) {
                this.callBillRecordForm.pageSize = size
                this.callBillList()
            },

            //订单信息
            getDetailInformation(){
                let vm = this
                detailListApi.ordersDetail({orderId: this.orderId}).then(res => {
                    //订单信息
                    this.data.userOrderInfo.forEach(item => {
                        //借款状态国际化
                        if (item.key === 'orderStatus') { //贷款状态
                            res.orderDetail[item.key] = this.data.loanTypeText[res.orderDetail[item.key]]
                        }

                        if (item.key === 'days') { //借款天数
                            res.orderDetail[item.key] = `${res.orderDetail[item.key]}${this.data.loanDay}`
                        }

                        if (item.key === 'rate') { //利率
                            res.orderDetail[item.key] = `${this.data.rate} ${this.multiply(res.orderDetail[item.key] , 100)}%`
                        }

                        if (item.key === 'rateType') { //计息方式
                            res.orderDetail[item.key] = this.data.rateTypeText[res.orderDetail[item.key]]
                        }

                        if (item.key === 'orderTime') { //申请时间
                            res.orderDetail[item.key] = this.timeFormat(res.orderDetail[item.key])
                        }

                        item.value = res.orderDetail[item.key]
                    })
                    //放款银行账号
                    this.data.userBankInfo.forEach(item => {
                        if (item.key === 'authStatus') { //姓名校验
                            this.isSuccess = res.payAccountInfo[item.key]
                            item.color = this.data.colorText[this.isSuccess]
                            res.payAccountInfo[item.key] = this.data.nameValid[res.payAccountInfo[item.key]]
                        }
                        item.value = res.payAccountInfo[item.key]
                    })
                    //还款银行账号信息
                    if (res.repayAccountInfo.length > 0) {
                        this.isHavePayHistory = true
                        this.repayAccountInfo = []
                        let repayAccountInfo = res.repayAccountInfo
                        let arr = []
                        repayAccountInfo.forEach(item => {
                            let obj1 = {
                                label: this.data.userPayInfo[0].label,
                                value: item.repayAccount
                            }
                            let obj2 = {
                                label: this.data.userPayInfo[1].label,
                                value: item.repayBankCode
                            }
                            arr = arr.concat(obj1).concat(obj2)
                        })
                        this.repayAccountInfo = arr
                    } else {
                        this.isHavePayHistory = false
                    }
                    //用户标签
                    this.repeatOrderInfo.channelId = res.channelId
                    this.repeatOrderInfo.channel = res.repeatOrderInfo.channel
                    this.repeatOrderInfo.auditorName = res.auditorName
                    this.repeatOrderInfo.accountPeriod = res.accountPeriod
                    this.repeatOrderInfo.companyName = res.companyName
                    localStorage.set('channelId', res.channelId)//记录channelID
                    this.channelId = res.channelId
                    //是否可催收
                    this.collectionStatus = res.collectionStatus === '1'
                })
            },

            //还款记录
            repayRecord(){
                detailListApi.repayRecord({orderId: this.orderId}).then(res => {
                    this.data.repayInfo.forEach(item => {
                        item.value = res[item.key]
                    })
                })
            },

            //还款列表
            repayRecordList(){
                let param = this.copyFn(this.repayRecordForm)
                param.orderId = this.orderId
                delete param.totalItems
                detailListApi.repayRecordList({content: JSON.stringify(param)}).then(res => {
                    this.repayInformation = res.repayRecordList || []
                    this.repayRecordForm.totalItems = Number(res.pageDTO.totalNum) || 0
                })
            },

            //催收列表
            collRecordList(){
                let param = this.copyFn(this.collRecordForm)
                param.orderId = this.orderId
                delete param.totalItems
                detailListApi.collectionRecord({content: JSON.stringify(param)}).then(res => {
                    console.log(res)
                    this.collInformation = res.collectionRecordDetails || []
                    this.collRecordForm.totalItems = Number(res.basePageResponse.totalNum) || 0

                })
            },
            collSortChange(column){ //催收记录列表排序
                this.collRecordForm.sortBy = column.key || 'ctime' //默认申请时间倒序排列
                if(column.order === 'normal') column.order = 'asc'
                this.collRecordForm.sort = column.order && column.order.toUpperCase() || 'DESC'
                this.collRecordList()
            },
            //话单记录
            callBillList(){
                let param = this.copyFn(this.callBillRecordForm)
                param.orderId = this.orderId
                delete param.totalItems
                detailListApi.callBillList({content: JSON.stringify(param)}).then(res => {
                    this.callBillInformation = res.list || []
                    this.callBillRecordForm.totalItems = Number(res.basePageResponse.totalNum) || 0

                })
            },
            //添加催收记录
            addCollectionRecord(param){
                this.callBillRecordOperationOrder = param
                this.modalAdd = true
            },
            //发送催收短信--二次弹窗确认
            showSendCollectionMessageModal(){
                this.modalForSendCollectionMessage = true
                this.loadingForSendCollectionMessage = false
            },
            //发送催收短信
            sendCollectionMessage(){
                this.loadingForSendCollectionMessage = true
                detailListApi.sendSms({orderId: this.orderId}).then(res=>{
                    if(res && res.result){
                        this.$Notice.success({title: 'Successed'})
                    }else{
                        this.$Notice.error({desc: this.data.userTitle.sendMessageTip})
                    }
                    this.modalForSendCollectionMessage = false
                    this.loadingForSendCollectionMessage = false
                })
            },
            //添加催收记录--催收记录中单独按钮
            addCollectionRecordSinglebtn(){
                this.callBillRecordOperationOrder.id = ''
                this.modalAdd = true
            },

            //提交审核
            submit(){
                if (this.data.collectionForm.status === '5' && this.data.collectionForm.expectRepayTime === '') {
                    this.$Notice.error({desc: this.data.userTitle.isNeed})
                    return
                }
                if (this.data.collectionForm.status !== '5') {
                    this.data.collectionForm.expectRepayTime = ''
                }
                if (this.data.collectionForm.feedback === ''){
                    this.$Notice.error({desc:this.data.userTitle.isFeedBck})
                    return
                }
                this.modal2 = true
            },
            confirm1(){
                this.modal1 = false
            },
            confirm2(){
                this.loading = true
                let param = this.copyFn(this.data.collectionForm)
                param.recordId = this.callBillRecordOperationOrder.id
                if (param.expectRepayTime) param.expectRepayTime = this.timeFormat(this.data.collectionForm.expectRepayTime)
                if (this.data.collectionForm.msg === '') param.msg = 'no remark'
                detailListApi.saveOperate({content: JSON.stringify(param),orderId: this.orderId}).then(res => {
                    this.loading = false
                    this.collRecordList()
                    this.callBillList()
                    this.goBack()
                })
            },
            //取消
            cancel(){
                this.modal2 = false
                this.loading = false
            },
            //判断是否可减免
            checkDeduction() {
                detailListApi.checkDeduction({orderId: this.orderId}).then( res => {
                    this.isApplySuccess = !res.result
                })
            },
            //点击减免申请
            cutApplication() {
                this.modal3 = true
                //每次打开弹窗清空表单数据
                this.cutForm.deductionAmount = ''
                this.cutForm.msg = ''
                detailListApi.preDeduction({orderId: this.orderId}).then( res => {
                    this.toRepay = res.toRepay || ''
                    this.maxDeduction = res.maxDeduction || ''
                })
            },
            //减免审批 金额校验
            validator (rule, value, callback) {
                if (!rule.pattern.test(Number(value))) {
                    return callback(new Error(this.data.userTitle.numberInfo));//数字校验
                } else if(value < 0 || value > this.maxDeduction) {
                    return callback(new Error(this.data.userTitle.cutError))//范围限制
                } else if(value.split('.')[1] && value.split('.')[1].length > 2){
                    return callback(new Error(this.data.userTitle.lengthError))//小数位数限制
                }else {
                    callback();
                }
            },
            //提交减免申请
            submitApplication(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        //申请接口
                        let  params = JSON.parse(JSON.stringify(this.cutForm))
                        params.orderId = this.orderId
                        params.msg = params.msg.replace(/\r/ig, "").replace(/\n/ig, " ")
                        detailListApi.applyDeduction(params).then( res => {
                            if(res.result){
                                this.$Notice.success({title: 'Success!'})
                                //关闭弹窗 清空数据
                                this.modal3 = false
                                this.cutForm = {
                                    deductionAmount: '', 
                                    msg: ''
                                }
                            }else{
                                this.$Notice.error({title: 'Operation error!'})
                            }
                            //不管提交是否成功后，检测减免申请按钮是否可点击
                            this.checkDeduction()
                        })    
                    } else {
                        this.$Message.error('Fail!');
                    }
                })  
            },
            timeClear(time){
                if (time === []) {
                    time = ''
                }
                this.data.collectionForm.expectRepayTime = time
            },
            // 审核信息
             getAuditRecordForOrderInfo() {
                detailListApi.findAuditTicketRecords({ orderId: this.orderId }).then(res => {
                    this.auditInfoData = res;
                });
            },

        },
        computed: {
            ...mapState({
                language: state => state.module.language,
            })
        },
        watch: {
            language() {
                this.changeLanguage()
            },
            channelId(val){
                this.$refs.hisordlist[0].channelId = val
            }
        },
        created(){
            let query = this.$route.query
            this.repayTime = query.repayTime
        },
        mounted(){
            let user = localStorage.get('user')
            this.orderId = window.decodeURIComponent(window.atob(this.$route.params.orderNo)) || ''
            this.$store.commit('CHANGE_FORTH_BREAD', this.orderId)
            this.changeLanguage()
            //this.getDetailInformation()//首次进来获取订单信息
            let vm = this
            //应还款日
            !function () {
                vm.timeLimit.disabledDate = function (date) {
                    return date && (date.valueOf() < Date.now() - 86400000)
                }
            }()
            this.getAuditRecordForOrderInfo()
        },
        destroyed(){
            this.$store.commit('CHANGE_FORTH_BREAD', '')
        }
    }
</script>
<style lang="less">
    .detailVal {
        margin-right: 10px;
        position: relative;
        height: auto;
        padding-top: 13px;
        .loan-time {
            position: fixed;
            top: 54px;
            left: 50%;
            span {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                padding: 0 5px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
                font-weight: 800;
                text-align: center;
                color: #fff;
                position: relative;
                cursor: pointer;
            }
            .total {
            background: #31cc00;
            }
            .period{
                background: #2b85e4;
            }
            .belong{
                background: #f90;
            }
            .company{
                background: #d242f6;
            }
        }
        .back-bt{
            position: fixed;
            top: 55px;
            right: 18px;
        }
        .hit-rules {
            margin-bottom: 20px;
            .none {
                border: 1px solid #ddd;
                color: #ddd;
                padding: 5px;
                border-radius: 5px;
                margin: 0 10px;
            }
            .disk {
                border: 1px solid #fed9db;
                color: #ff4b58;
                padding: 5px;
                border-radius: 5px;
                margin: 0 10px;
            }
            .danger {
                border: 1px solid #f6efb9;
                color: #ecc23d;
                padding: 5px;
                border-radius: 5px;
            }
            .rules-content {
                p {
                    line-height: 30px;
                    margin-left: 20px;
                    font-size: 14px;
                }
            }
        }
        .detail-card {
            /*font-size: 16px;*/
            padding:20px;
            margin-bottom: 10px;
            .ivu-table th, td {
                /*font-size: 14px;*/
            }
            .title-label {
                /*font-size: 18px;*/
                padding-right: 15px;
                height: 35px;
                .cut-btn{
                    float: right;
                }
            }
            .user-info {
                padding-left: 15px;
                .user-col {
                    margin-bottom: 20px;
                    display: inline-block;
                    height: 30px;

                    .info-label {
                        text-align: right;
                        width: 36%;
                        display: inline-block;
                        white-space: nowrap;
                    }
                    .address {
                        width: 18%;
                    }
                    .info-value {
                        text-align: left;
                        width: auto;
                        margin-left: 20px;
                        display: inline-block;
                        white-space: nowrap;
                        .isOk {
                            border: 1px solid #2ed272;
                            border-radius: 5px;
                            color: #2ed272;
                            padding: 5px;
                        }
                        .isError {
                            border: 1px solid #ff4b58;
                            border-radius: 5px;
                            color: #ff4b58;
                            padding: 5px;
                        }
                        .isInfor {
                            border: 1px solid #2d8cf0;
                            border-radius: 5px;
                            color: #2d8cf0;
                            padding: 5px;
                        }
                        .isWarning {
                            border: 1px solid #ecc23d;
                            border-radius: 5px;
                            color: #ecc23d;
                            padding: 5px;
                        }
                    }
                }

            }
            .sort {
                height: 30px;
                margin-bottom: 10px;
                .translate{
                    height: 30px;
                    position: absolute;
                    right:60px;
                }
            }
            .phone-audit {
                margin: 20px 0;
                font-weight: bold;
            }
        }
        .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-nav-container{
            position: fixed;
            top:90px;
            z-index: 100;
            width: 90%;
            background:#f8f8f9;
        }
        .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{
            margin-right: 0;
        }
    }
    .auditAgree {
        .user-input-search {
            .user-input-label {
                display: inline-block;
                vertical-align: middle;
            }
            .user-input {
                width: 200px;
                margin-right: 5px;
            }
            .mark{
                width:70%;
                margin-top:5px
            }
            .ivu-btn{
                width:150px!important;
            }
            .submit-bt{
                width:150px!important;
                margin-left:10px
            }
        }
    }
    .show{
        position: fixed;
        right:0;
        bottom: 60px;
        height: 180px;
        border: 1px solid #ddd;
        border-radius: 3px;
        width: 20px;
        margin-left:20px;
        background: #2d8cf0;
        line-height: 180px;
        text-align: center;
    }
    .isShowColor{
        background: #fff;
        border: 0;
        z-index: -1;
    }

    .ivu-table td.demo-table-hover-column .ivu-table-cell img {
        width: 200px;
        height: 200px;
        text-align: center;
        padding: 5px;
    }

    .modal-photo {
        width: 900px;
        height: auto;
    }

    .ivu-table-cell {
        padding: 10px
    }


</style>
