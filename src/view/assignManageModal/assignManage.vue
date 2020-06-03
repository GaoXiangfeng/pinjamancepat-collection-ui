<!-- 公司管理 -->
<template>
  <Tabs class="assignManage" @on-click="clickTab" :value="value">
    <TabPane :label="data.tabs[0]" name="name1">
      <!-- table -->
      <div class="table">
        <Table stripe :columns="columns" :data="assignData" border></Table>
      </div>
    </TabPane>
    <TabPane :label="data.tabs[1]" name="name2">
      <hand-assign-list ref="handassignlist"></hand-assign-list>
    </TabPane>
    <!-- <TabPane label="标签三" name="name3">标签三的内容</TabPane> -->
  </Tabs>
</template>

<script>
import { mapState } from "vuex";
import assignManageApi from "../../services/api/assignManage.service";
import handAssignList from "./handAssign/handAssignList";
export default {
  data() {
    return {
      showtest: true,
      isMaskClosable: false,
      value: 0, //默认激活第一项
      assignData: [],
      columns: [
        {
          title: "账期",
          key: "period",
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              {
                style: {
                  fontSize: "14px",
                  fontWeight: "bold"
                }
              },
              params.row.period
            );
          }
        },
        {
          title: "公司+账期",
          key: "companies",
          align: "left",
          width: 800,
          render: (h, params) => {
            let arr = [];
            for (let i in params.row.companies) {
              arr.push(
                h(
                  "li",
                  {
                    style: {
                      display: "flex",
                      lineHeight: "20px"
                    }
                  },
                  [
                    h(
                      "p",
                      {
                        style: {
                          paddingBottom: "10px",
                          paddingTop: "10px",
                          color: "#19be6b",
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginRight: "10px",
                          borderRightWidth: "1px",
                          borderRightColor: "#ddd",
                          borderRightStyle: "solid",
                          width: "100px"
                        }
                      },
                      params.row.companies[i]
                    ),
                    h(
                      "p",
                      {
                        style: {
                          paddingBottom: "10px",
                          paddingTop: "10px",
                          color: "#2d8cf0",
                          fontSize: "14px",
                          fontWeight: "bold",
                          flex: 1
                        }
                      },
                      params.row.auditors[i]
                    )
                  ]
                )
              );
              if (
                params.row.companies.length > 1 &&
                i != params.row.companies.length - 1
              ) {
                arr.push(
                  h("hr", {
                    style: {
                      marginLeft: "-20px",
                      marginRight: "-20px"
                    }
                  })
                );
              }
            }
            return h("ul", arr);
          }
        }
      ],
      data: {
        tabs: {},
        tableTitle: []
      },
      liStyleObj: {
        paddingBottom: "10px",
        paddingTop: "10px",
        height: "40px",
        overflowY: "scroll"
      },
      isUnnormalSelected: false //是否选中的非常规
    };
  },

  components: {
    handAssignList
  },

  computed: {
    ...mapState({
      language: state => state.module.language
    })
  },

  methods: {
    changeLanguage() {
      this.$i18n.locale = this.language;
      this.data = this.$i18n.messages[this.$i18n.locale].message.assignManage;
      setTimeout(() => {
        //table
        this.columns.forEach((item, j) => {
          item.title = this.data.tableTitle[j]; //表头翻译
        });
      }, 100);
    },
    //获取列表数据
    getAssignData() {
      //添加loading页
      this.$store.commit("CHANGE_SPIN_SHOW", true);
      assignManageApi.getAssignDataFn().then(res => {
        this.assignData = res;
        this.$store.commit("CHANGE_SPIN_SHOW", false);
      });
    },
    //切换标签
    clickTab(value) {
      this.value = value;
      switch (value) {
        case "name1": //常规分案
          if (this.assignData.length === 0) this.getAssignData();
          break;
        case "name2": //非常规分案
          if (!this.isUnnormalSelected) {
            this.$refs.handassignlist.initData();
            this.isUnnormalSelected = true;
          }
      }
    }
  },
  watch: {
    language: function() {
      this.changeLanguage();
    }
  },
  created() {
    this.changeLanguage();
  },

  mounted() {
    this.getAssignData();
  }
};
</script>
<style lang='less' scoped>
.assignManage {
  .table {
    margin-top: 10px;
  }
}
</style>
