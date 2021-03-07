<template>
  <div class="road-right">
    <div class="UserAssets-right-top">
      <div class="user-left">
        <span class="user-word">道路停车</span>
      </div>
      <div class="users-right">
        <myhead></myhead>
      </div>
    </div>
    <div class="wulianBot">
      <div class="wulianBotBox">
        <div class="wulianBotBoxT">
          <div class="T_blue"></div>
          <span class="T_span">资源</span>
        </div>
        <div class="roadBot">
          <div class="firstBox">
            <div class="firstBoxTop">道路总量</div>
            <div class="firstBoxBot">
              {{ resourceAndRecord.station_type_3_count }}
            </div>
          </div>
          <div class="rightBox">
            <div class="otherBoxs1">
              <div style="color: white;">泊位数</div>
              <div class="otherBoxsBot">
                <div class="otherBoxsBotBox">
                  <div class="otherNum">0</div>
                  <div class="otherWord">空闲</div>
                </div>
                <div class="otherBoxsBotBox">
                  <div class="otherNum">0</div>
                  <div class="otherWord">占用</div>
                </div>
                <div class="otherBoxsBotBox">
                  <el-progress
                    type="circle"
                    :percentage="0"
                    :stroke-width="10"
                    :width="60"
                    :format="
                      () => {
                        return 0;
                      }
                    "
                  ></el-progress>
                  <div class="otherWord">占用率</div>
                </div>
              </div>
            </div>
            <div class="otherBoxs2">
              <div style="color: white;">地磁</div>
              <div class="otherBoxsBot">
                <div class="otherBoxsBotBox">
                  <div class="otherNum">
                    {{ resourceAndRecord.charger_type_7_count_online }}
                  </div>
                  <div class="otherWord">在线</div>
                </div>
                <div class="otherBoxsBotBox">
                  <div class="otherNum">
                    {{ resourceAndRecord.charger_type_7_count }}
                  </div>
                  <div class="otherWord">总数</div>
                </div>
              </div>
            </div>
            <div class="otherBoxs3">
              <div style="color: white;">视频桩</div>
              <div class="otherBoxsBot">
                <div class="otherBoxsBotBox">
                  <div class="otherNum">
                    {{
                      resourceAndRecord.charger_type_10_count_online +
                        resourceAndRecord.charger_type_11_count_online
                    }}
                  </div>
                  <div class="otherWord">在线</div>
                </div>
                <div class="otherBoxsBotBox">
                  <div class="otherNum">
                    {{
                      resourceAndRecord.charger_type_10_count +
                        resourceAndRecord.charger_type_11_count
                    }}
                  </div>
                  <div class="otherWord">总数</div>
                </div>
              </div>
            </div>
            <div class="otherBoxs4">
              <div style="color: white;">巡检车</div>
              <div class="otherBoxsBot">
                <div class="otherBoxsBotBox">
                  <div class="otherNum">
                    {{ resourceAndRecord.charger_type_18_count_online }}
                  </div>
                  <div class="otherWord">在线</div>
                </div>
                <div class="otherBoxsBotBox">
                  <div class="otherNum">
                    {{ resourceAndRecord.charger_type_18_count }}
                  </div>
                  <div class="otherWord">总数</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wulianBotBox">
        <div class="wulianBotBoxT">
          <div class="T_blue"></div>
          <span class="T_span">订单</span>
        </div>
        <div class="ziyuanBox">
          <div class="boxBoxs">
            <div class="boxWord">订单数</div>
            <div class="boxNum">{{ resourceAndRecord.pdr_count }}</div>
          </div>
          <div class="boxBoxs">
            <div class="boxWord">停车费</div>
            <div class="boxNum1">{{ resourceAndRecord.pdr_amount }}</div>
          </div>
          <div class="boxBoxs">
            <div class="boxWord">已缴</div>
            <div class="boxNum1">{{ resourceAndRecord.pdr_paid }}</div>
          </div>
          <div class="boxBoxs">
            <div class="boxWord">欠费</div>
            <div class="boxNum1">{{ resourceAndRecord.pdr_debts }}</div>
          </div>
          <div class="boxBoxs">
            <div class="boxWord">退款</div>
            <div class="boxNum1">{{ resourceAndRecord.pdr_refund }}</div>
          </div>
          <div class="boxBoxs">
            <div class="boxWord">优惠</div>
            <div class="boxNum1">0</div>
          </div>
        </div>
      </div>
      <div class="wulianBotBox1">
        <div class="roadTopBox">
          <div
            style="display: flex;flex-direction: row;align-items: center;height: 50px;"
          >
            <div class="T_blue"></div>
            <span class="T_span">停车数据曲线</span>
          </div>
          <div class="dateR">
            <div class="dateBox3">
              <div
                class="blueBoxs"
                v-for="item in chart1ChangeInfo.dateArray"
                :class="{ BGactive: item.id == isActive }"
                @click="
                  changeBg({
                    id: item.id,
                    code: item.code,
                    currentArray: item.currentArray
                  })
                "
              >
                {{ item.itemName }}
              </div>
            </div>
            <div class="dateSel">
              <template>
                <div class="block" v-show="isBg == 1">
                  <el-date-picker
                    v-model="value3"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyyMMdd"
                    @change="chooseDate"
                  >
                  </el-date-picker>
                </div>
                <div class="block" v-show="isBg == 2">
                  <el-date-picker
                    v-model="value3"
                    type="monthrange"
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份"
                    value-format="yyyyMM"
                    @change="chooseDate"
                  >
                  </el-date-picker>
                </div>
                <div class="block" v-show="isBg == 3">
                  <el-date-picker
                    v-model="value1"
                    type="year"
                    placeholder="开始年份"
                    value-format="yyyy"
                    @change="chooseDate1"
                  >
                  </el-date-picker>
                  至
                  <el-date-picker
                    v-model="value2"
                    type="year"
                    placeholder="结束年份"
                    value-format="yyyy"
                    @change="chooseDate2"
                  >
                  </el-date-picker>
                </div>
              </template>
            </div>
            <div>
              <el-button
                type="primary"
                icon="el-icon-search"
                @click="searchData()"
                >查询</el-button
              >
            </div>
          </div>
        </div>
        <div class="charstBox1" id="myEcharts1"></div>
      </div>
      <div class="wulianBotBox1">
        <div class="roadTopBox">
          <div
            style="display: flex;flex-direction: row;align-items: center;height: 50px;"
          >
            <div class="T_blue"></div>
            <span class="T_span">道路站点排名</span>
          </div>
          <div class="dateR2">
            <div class="dateBox">
              <div
                class="blueBoxs"
                v-for="item in chart2ChangeInfo.dateArray"
                :class="{ BGactive: item.id == isActive1 }"
                @click="
                  changeBg1({
                    id: item.id,
                    code: item.code,
                    current: item.current
                  })
                "
              >
                {{ item.itemName }}
              </div>
            </div>
            <div class="dateBox1">
              <div
                class="blueBoxs1"
                v-for="item in chart2ChangeInfo.typeArray"
                :class="{ BGactive: item.id == isActive2 }"
                @click="changeBg2(item.id, item.order)"
              >
                {{ item.itemName }}
              </div>
            </div>
          </div>
        </div>
        <div class="charstBox1" id="myEcharts2"></div>
      </div>
      <div class="wulianBotBox1">
        <div class="roadTopBox">
          <div
            style="display: flex;flex-direction: row;align-items: center;height: 50px;"
          >
            <div class="T_blue"></div>
            <span class="T_span">运营商排名</span>
          </div>
          <div class="dateR2">
            <div class="dateBox">
              <div
                class="blueBoxs"
                v-for="item in chart3ChangeInfo.dateArray"
                :class="{ BGactive: item.id == isActive3 }"
                @click="
                  changeBg3({
                    id: item.id,
                    code: item.code,
                    current: item.current
                  })
                "
              >
                {{ item.itemName }}
              </div>
            </div>
            <div class="dateBox1">
              <div
                class="blueBoxs1"
                v-for="item in chart3ChangeInfo.typeArray"
                :class="{ BGactive: item.id == isActive4 }"
                @click="changeBg4(item.id, item.order)"
              >
                {{ item.itemName }}
              </div>
            </div>
          </div>
        </div>
        <div class="charstBox1" id="myEcharts3"></div>
      </div>

      <div class="wulianBotBox1">
        <div class="roadTopBox">
          <div
            style="display: flex;flex-direction: row;align-items: center;height: 50px;"
          >
            <div class="T_blue"></div>
            <span class="T_span">收费员绩效排名</span>
          </div>
          <div class="dateR2">
            <div class="dateBox">
              <div
                class="blueBoxs"
                v-for="item in chart4ChangeInfo.dateArray"
                :class="{ BGactive: item.id == isActive5 }"
                @click="
                  changeBg5({
                    id: item.id,
                    code: item.code,
                    current: item.current
                  })
                "
              >
                {{ item.itemName }}
              </div>
            </div>
            <div class="dateBox1">
              <div
                class="blueBoxs1"
                v-for="item in chart4ChangeInfo.typeArray"
                :class="{ BGactive: item.id == isActive6 }"
                @click="changeBg6(item.id, item.order)"
              >
                {{ item.itemName }}
              </div>
            </div>
          </div>
        </div>
        <div class="charstBox1" id="myEcharts4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import myhead from "../../components/myhead.vue";
export default {
  components: {
    myhead
  },
  data() {
    return {
      resourceAndRecord: {},
      operationData: [],
      chart1ChangeInfo: {
        axiosParameter: {
          code: "",
          currentArray: []
        },
        dateArray: [
          {
            id: 1,
            itemName: "近一周",
            currentArray: [],
            code: "AC5FF95637CF4B4294A6B650535F5531"
          },
          {
            id: 2,
            itemName: "近六月",
            currentArray: [],
            code: "875C0991E0B6410589601DB6660634A4"
          },
          {
            id: 3,
            itemName: "近五年",
            currentArray: [],
            code: "158F0EA53B25482B9E26D9C29637F239"
          }
        ]
      },
      chart1Data: [],
      chart1DataTotal: 0,
      formattedChart1Data: [],
      decomposerFormattedChart1Data: {
        dtArray: [],
        pdr_amountArray: [],
        pdr_paidArray: [],
        pdr_countArray: []
      },
      chart2ChangeInfo: {
        axiosParameter: {
          code: "",
          order: "",
          current: ""
        },
        dateArray: [
          {
            id: 1,
            itemName: "今年",
            current: "",
            code: "B2C5FC2773A547978676B2759487B921"
          },
          {
            id: 2,
            itemName: "本月",
            current: "",
            code: "897E9584BBEE4094B76BDDD8005E29EC"
          },
          {
            id: 3,
            itemName: "今天",
            current: "",
            code: "2981C087C584411FA19D0902C0F6F6FF"
          }
        ],
        typeArray: [
          {
            id: 1,
            order: "pdr_paid",
            itemName: "实收"
          },
          {
            id: 2,
            order: "pdr_amount",
            itemName: "应收"
          }
        ]
      },
      chart2Data: [],
      chart3ChangeInfo: {
        axiosParameter: {
          code: "",
          order: "",
          current: ""
        },
        dateArray: [
          {
            id: 1,
            itemName: "今年",
            current: "",
            // code: "558FA4DDDFF445C3A3D263DB198D0DC4"
            code: "64E962C6356B4C08A14615551D0D4300"
          },
          {
            id: 2,
            itemName: "本月",
            current: "",
            // code: "A41A020D527542F69A4EF1D7FAA9E404"
            code: "8449BE849B0B455AA6E3230AEE9D4851"
          },
          {
            id: 3,
            itemName: "今天",
            current: "",
            // code: "91B6D649D2CA4710AF58F04C98C06ACC"
            code: "F4EC29FCD4804BD29C9A52E15C5835B3"
          }
        ],
        typeArray: [
          {
            id: 1,
            order: "pdr_paid",
            itemName: "实收"
          },
          {
            id: 2,
            order: "pdr_amount",
            itemName: "应收"
          }
        ]
      },
      chart3Data: [],
      chart4ChangeInfo: {
        axiosParameter: {
          code: "",
          order: "",
          current: ""
        },
        dateArray: [
          {
            id: 1,
            itemName: "今年",
            current: "",
            // code: "558FA4DDDFF445C3A3D263DB198D0DC4"
            code: "91E81EC66D324087860BCD30B747B420"
          },
          {
            id: 2,
            itemName: "本月",
            current: "",
            // code: "A41A020D527542F69A4EF1D7FAA9E404"
            code: "BEDFEA46D8A74AECB1665E287A75D029"
          },
          {
            id: 3,
            itemName: "今天",
            current: "",
            // code: "91B6D649D2CA4710AF58F04C98C06ACC"
            code: "0ADC1C7B022B4EE790CEF99236F5C9A9"
          }
        ],
        typeArray: [
          {
            id: 1,
            order: "payment_pay",
            itemName: "实收"
          },
          {
            id: 2,
            order: "payment_amount",
            itemName: "欠费"
          }
        ]
      },
      chart4Data: [],
      pagenum: 1,
      pagesize: 10,
      isActive: 1,
      isActive1: 1,
      isActive2: 1,
      isActive3: 1,
      isActive4: 1,
      isActive5: 1,
      isActive6: 1,
      isActive7: 1,
      isActive8: 1,
      isBg: 1,
      isBg2: 1,
      value1: "",
      value2: "",
      value3: ""
    };
  },
  created() {
    this.token = localStorage.getItem("token").replace(/\"/g, "");
    this.getResourceAndRecord();
  },
  mounted() {
    this.setCurrentDate();
    this.setChart1AxiosParameter({
      currentArray: this.chart1ChangeInfo.dateArray[0].currentArray,
      code: this.chart1ChangeInfo.dateArray[0].code
    });
    this.setChart2AxiosParameter({
      current: this.chart2ChangeInfo.dateArray[0].current,
      code: this.chart2ChangeInfo.dateArray[0].code,
      order: this.chart2ChangeInfo.typeArray[0].order
    });
    this.setChart3AxiosParameter({
      current: this.chart3ChangeInfo.dateArray[0].current,
      code: this.chart3ChangeInfo.dateArray[0].code,
      order: this.chart3ChangeInfo.typeArray[0].order
    });
    this.setChart4AxiosParameter({
      current: this.chart4ChangeInfo.dateArray[0].current,
      code: this.chart4ChangeInfo.dateArray[0].code,
      order: this.chart4ChangeInfo.typeArray[0].order
    });
    this.$nextTick(() => {
      this.getDataAndDrawChart1();
      this.getDataAndDrawChart2();
      this.getDataAndDrawChart3();
      this.getDataAndDrawChart4();
    });
  },
  methods: {
    getResourceAndRecord() {
      let url =
        "admin/api/report/FA201E10D5154499BA2C74FC0998F464" +
        "/?token=" +
        this.token +
        "&page=1&row=10";

      this.$axios.get(url).then(res => {
        if (res.status == 200) {
          this.resourceAndRecord = res.data.data[0];
        }
      });
    },
    setCurrentDate() {
      let currentArray = this.getPastDateArray({ type: "day", spanTime: "1" });
      let lastWeekArray = this.getPastDateArray({ type: "day", spanTime: "7" });
      let lastSixMonthArray = this.getPastDateArray({
        type: "month",
        spanTime: "6"
      });
      let lastFiveYearArray = this.getPastDateArray({
        type: "year",
        spanTime: "5"
      });
      this.chart1ChangeInfo.dateArray[0].currentArray = [
        lastWeekArray.join(""),
        currentArray.join("")
      ];
      this.chart1ChangeInfo.dateArray[1].currentArray = [
        lastSixMonthArray.join("").slice(0, 6),
        currentArray.join("").slice(0, 6)
      ];
      this.chart1ChangeInfo.dateArray[2].currentArray = [
        lastFiveYearArray.join("").slice(0, 4),
        currentArray.join("").slice(0, 4)
      ];

      this.chart2ChangeInfo.dateArray[0].current = currentArray
        .join("")
        .slice(0, 4);
      this.chart2ChangeInfo.dateArray[1].current = currentArray
        .join("")
        .slice(0, 6);
      this.chart2ChangeInfo.dateArray[2].current = currentArray.join("");

      this.chart3ChangeInfo.dateArray[0].current = currentArray
        .join("")
        .slice(0, 4);
      this.chart3ChangeInfo.dateArray[1].current = currentArray
        .join("")
        .slice(0, 6);
      this.chart3ChangeInfo.dateArray[2].current = currentArray.join("");
      this.chart4ChangeInfo.dateArray[0].current = currentArray
        .join("")
        .slice(0, 4);
      this.chart4ChangeInfo.dateArray[1].current = currentArray
        .join("")
        .slice(0, 6);
      this.chart4ChangeInfo.dateArray[2].current = currentArray.join("");
    },
    setChart1AxiosParameter({ currentArray, code }) {
      this.chart1ChangeInfo.axiosParameter.currentArray = currentArray;
      this.chart1ChangeInfo.axiosParameter.code = code;
    },
    setChart2AxiosParameter({ current, code, order }) {
      this.chart2ChangeInfo.axiosParameter.current = current;
      this.chart2ChangeInfo.axiosParameter.code = code;
      this.chart2ChangeInfo.axiosParameter.order = order;
    },
    setChart3AxiosParameter({ current, code, order }) {
      this.chart3ChangeInfo.axiosParameter.current = current;
      this.chart3ChangeInfo.axiosParameter.code = code;
      this.chart3ChangeInfo.axiosParameter.order = order;
    },
    setChart4AxiosParameter({ current, code, order }) {
      this.chart4ChangeInfo.axiosParameter.current = current;
      this.chart4ChangeInfo.axiosParameter.code = code;
      this.chart4ChangeInfo.axiosParameter.order = order;
    },
    getDataAndDrawChart1() {
      let { code, currentArray } = this.chart1ChangeInfo.axiosParameter;
      let url =
        "/admin/api/report/" +
        code +
        "/?token=" +
        this.token +
        "&order=dt" +
        "&from=" +
        +currentArray[0] +
        "&to=" +
        currentArray[1] +
        "&sort=asc";
      this.$axios.get(url).then(res => {
        if (res.status == 200) {
          this.chart1Data = res.data.data || 0;
          this.chart1DataTotal = res.data.total;
          this.formatterToCurveEchartData({
            data: this.chart1Data,
            currentArray: this.chart1ChangeInfo.axiosParameter.currentArray
          });

          this.drawChart1();
        }
      });
    },
    getDataAndDrawChart2() {
      let { code, order, current } = this.chart2ChangeInfo.axiosParameter;
      let url =
        "/admin/api/report/" +
        code +
        "/?token=" +
        this.token +
        "&page=1&row=10&order=" +
        order +
        "&from=" +
        current +
        "&to=" +
        current +
        "&sort=desc";
      this.$axios.get(url).then(res => {
        if (res.status == 200) {
          this.chart2Data = res.data.data;
          this.formatterToEchart2Data(
            this.chart2Data,
            this.chart2ChangeInfo.axiosParameter.order
          );

          this.drawChart2();
        }
      });
    },
    getDataAndDrawChart3() {
      let { code, order, current } = this.chart3ChangeInfo.axiosParameter;
      let url =
        "/admin/api/report/" +
        code +
        "/?token=" +
        this.token +
        "&page=1&row=10&order=" +
        order +
        "&from=" +
        current +
        "&to=" +
        current +
        "&sort=desc";
      this.$axios.get(url).then(res => {
        if (res.status == 200) {
          this.chart3Data = res.data.data;
          this.formatterToEchart3Data(
            this.chart3Data,
            this.chart3ChangeInfo.axiosParameter.order
          );

          this.drawChart3();
        }
      });
    },
    getDataAndDrawChart4() {
      let { code, order, current } = this.chart4ChangeInfo.axiosParameter;
      let url =
        "/admin/api/report/" +
        code +
        "/?token=" +
        this.token +
        "&page=1&row=10&order=" +
        order +
        "&from=" +
        current +
        "&to=" +
        current +
        "&sort=desc";
      this.$axios.get(url).then(res => {
        if (res.status == 200) {
          this.chart4Data = res.data.data;
          this.formatterToEchart4Data(
            this.chart4Data,
            this.chart4ChangeInfo.axiosParameter.order
          );

          this.drawChart4();
        }
      });
    },

    getPastDateArray({ type, spanTime }) {
      if (type === "day") {
        var dt = new Date().getTime() - 3600 * 1000 * 24 * (spanTime - 1);
        dt = new Date(dt).toLocaleDateString();
      } else if (type === "month") {
        var dt = new Date();
        dt.setMonth(dt.getMonth() - (spanTime - 1));
        dt = new Date(dt).toLocaleDateString();
      } else if (type === "year") {
        var dt = new Date();
        dt.setFullYear(dt.getFullYear() - (spanTime - 1));
        dt = new Date(dt).toLocaleDateString();
      }
      let dateArray = dt.split("/");
      if (dateArray[1].length === 1) {
        dateArray[1] = "0" + dateArray[1];
      }
      if (dateArray[2].length === 1) {
        dateArray[2] = "0" + dateArray[2];
      }

      return dateArray;
    },
    formatterToCurveEchartData({ currentArray }) {
      // 近一周时，生成的this.formattedChart1Data

      if (currentArray[0].length === 8) {
        for (let i = 0; i < 7; i++) {
          let arrItem = this.getPastDateArray({ type: "day", spanTime: i + 1 });
          // 初始化this.formattedChart1Data
          this.formattedChart1Data.push({
            dateArray: arrItem,
            dt: arrItem.join(""),
            pdr_count: 0,
            pdr_amount: 0,
            pdr_paid: 0
          });
        }
        //将this.chart1Data中的值传递给this.formattedChart1Data
        if (this.chart1DataTotal) {
          for (let i = 0; i < this.chart1Data.length; i++) {
            let id = this.chart1Data[i].dt;
            for (let j = 0; j < this.formattedChart1Data.length; j++) {
              if (this.formattedChart1Data[j].dt == id) {
                this.formattedChart1Data[j].pdr_count = this.chart1Data[
                  i
                ].pdr_count;
                this.formattedChart1Data[j].pdr_amount = this.chart1Data[
                  i
                ].pdr_amount;
                this.formattedChart1Data[j].pdr_paid = this.chart1Data[
                  i
                ].pdr_paid;
              }
            }
          }
        }
      }
      // 近六月时，生成的this.formattedChart1Data
      if (currentArray[0].length === 6) {
        for (let i = 0; i < 6; i++) {
          let arrItem = this.getPastDateArray({
            type: "month",
            spanTime: i + 1
          });
          //arrItem抛除日期
          arrItem.pop();
          // 初始化this.formattedChart1Data
          this.formattedChart1Data.push({
            dateArray: arrItem,
            dt: arrItem.join(""),
            pdr_count: 0,
            pdr_amount: 0,
            pdr_paid: 0
          });
        }
        //将this.chart1Data中的值传递给this.formattedChart1Data
        if (this.chart1DataTotal) {
          for (let i = 0; i < this.chart1Data.length; i++) {
            let id = this.chart1Data[i].dt;
            for (let j = 0; j < this.formattedChart1Data.length; j++) {
              if (this.formattedChart1Data[j].dt == id) {
                this.formattedChart1Data[j].pdr_count = this.chart1Data[
                  i
                ].pdr_count;
                this.formattedChart1Data[j].pdr_amount = this.chart1Data[
                  i
                ].pdr_amount;
                this.formattedChart1Data[j].pdr_paid = this.chart1Data[
                  i
                ].pdr_paid;
              }
            }
          }
        }
      }
      // 近五年时，生成的this.formattedChart1Data
      if (currentArray[0].length === 4) {
        for (let i = 0; i < 6; i++) {
          let arrItem = this.getPastDateArray({
            type: "year",
            spanTime: i + 1
          });
          // 初始化this.formattedChart1Data
          //arrItem抛除日期
          arrItem.pop();
          //arrItem抛除月份
          arrItem.pop();
          this.formattedChart1Data.push({
            dateArray: arrItem,
            dt: arrItem.join(""),
            pdr_count: 0,
            pdr_amount: 0,
            pdr_paid: 0
          });
        }
        //将this.chart1Data中的值传递给this.formattedChart1Data
        if (this.chart1DataTotal) {
          for (let i = 0; i < this.chart1Data.length; i++) {
            let id = this.chart1Data[i].dt;
            for (let j = 0; j < this.formattedChart1Data.length; j++) {
              if (this.formattedChart1Data[j].dt == id) {
                this.formattedChart1Data[j].pdr_count = this.chart1Data[
                  i
                ].pdr_count;
                this.formattedChart1Data[j].pdr_amount = this.chart1Data[
                  i
                ].pdr_amount;
                this.formattedChart1Data[j].pdr_paid = this.chart1Data[
                  i
                ].pdr_paid;
              }
            }
          }
        }
      }
      for (let i = 0; i < this.formattedChart1Data.length; i++) {
        this.decomposerFormattedChart1Data.dtArray.push(
          this.formattedChart1Data[i].dt
        );
        this.decomposerFormattedChart1Data.pdr_amountArray.push(
          this.formattedChart1Data[i].pdr_amount
        );
        this.decomposerFormattedChart1Data.pdr_paidArray.push(
          this.formattedChart1Data[i].pdr_paid
        );
        this.decomposerFormattedChart1Data.pdr_countArray.push(
          this.formattedChart1Data[i].pdr_count
        );
      }
      return this.formattedChart1Data;
    },
    formatterToEchart2Data(data, type) {
      if (data.length < this.pagesize) {
        let newArrayLength = this.pagesize - data.length;
        let newArray = [];
        for (let i = 0; i < newArrayLength; i++) {
          newArray.push({ name: "", pdr_paid: "", pdr_amount: "" });
        }

        data = data.concat(newArray);
      }
      if (type === "pdr_paid") {
        for (let i = 0; i < this.pagesize; i++) {
          data[i].pdrData = data[i].pdr_paid;
        }
      }
      if (type === "pdr_amount") {
        for (let i = 0; i < this.pagesize; i++) {
          data[i].pdrData = data[i].pdr_amount;
        }
      }
      this.chart2Data = data;
    },
    formatterToEchart3Data(data, type) {
      if (data.length < this.pagesize) {
        let newArrayLength = this.pagesize - data.length;
        let newArray = [];
        for (let i = 0; i < newArrayLength; i++) {
          newArray.push({ username: "", pdr_paid: "", pdr_amount: "" });
        }

        data = data.concat(newArray);
      }
      if (type === "pdr_paid") {
        for (let i = 0; i < this.pagesize; i++) {
          data[i].pdrData = data[i].pdr_paid;
        }
      }
      if (type === "pdr_amount") {
        for (let i = 0; i < this.pagesize; i++) {
          data[i].pdrData = data[i].pdr_amount;
        }
      }
      this.chart3Data = data;
    },
    formatterToEchart4Data(data, type) {
      if (data.length < this.pagesize) {
        let newArrayLength = this.pagesize - data.length;
        let newArray = [];
        for (let i = 0; i < newArrayLength; i++) {
          newArray.push({ username: "", payment_pay: "", payment_amount: "" });
        }
        data = data.concat(newArray);
      }
      if (type === "payment_pay") {
        for (let i = 0; i < this.pagesize; i++) {
          data[i].pdrData = data[i].payment_pay;
        }
      }
      if (type === "payment_amount") {
        for (let i = 0; i < this.pagesize; i++) {
          data[i].pdrData = data[i].payment_amount;
        }
      }
      this.chart4Data = data;
    },
    changeBg({ id, code, currentArray }) {
      this.isActive = id;
      this.formattedChart1Data = [];
      this.decomposerFormattedChart1Data = {
        dtArray: [],
        pdr_amountArray: [],
        pdr_paidArray: [],
        pdr_countArray: []
      };
      this.setChart1AxiosParameter({ code, currentArray });
      this.getDataAndDrawChart1();
    },
    changeBg1({ id, code, current }) {
      this.isActive1 = id;

      this.setChart2AxiosParameter({
        code,
        current,
        order: this.chart2ChangeInfo.axiosParameter.order
      });
      this.getDataAndDrawChart2();
    },
    changeBg2(id, order) {
      this.isActive2 = id;
      this.setChart2AxiosParameter({
        current: this.chart2ChangeInfo.axiosParameter.current,
        code: this.chart2ChangeInfo.axiosParameter.code,
        order
      });
      this.getDataAndDrawChart2();
    },
    changeBg3({ id, code, current }) {
      this.isActive3 = id;
      this.setChart3AxiosParameter({
        code,
        current,
        order: this.chart3ChangeInfo.axiosParameter.order
      });
      this.getDataAndDrawChart3();
    },
    changeBg4(id, order) {
      this.isActive4 = id;
      this.setChart3AxiosParameter({
        current: this.chart3ChangeInfo.axiosParameter.current,
        code: this.chart3ChangeInfo.axiosParameter.code,
        order
      });
      this.getDataAndDrawChart3();
    },
    changeBg5({ id, code, current }) {
      this.isActive5 = id;
      this.setChart4AxiosParameter({
        code,
        current,
        order: this.chart4ChangeInfo.axiosParameter.order
      });
      this.getDataAndDrawChart4();
    },
    changeBg6(id, order) {
      this.isActive6 = id;
      this.setChart4AxiosParameter({
        current: this.chart4ChangeInfo.axiosParameter.current,
        code: this.chart4ChangeInfo.axiosParameter.code,
        order
      });
      this.getDataAndDrawChart4();
    },
    chooseDate1() {},
    chooseDate() {
      this.value1 = this.value3[0];
      this.value2 = this.value3[1];
    },
    chooseDate2() {},
    drawChart1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts1"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis"
        },
        color: ["#ff7200", "#00cc57", "#238ae1"],
        grid: {},
        legend: {
          data: ["应收", "实收", "欠费"],
          orient: "horizontal", //垂直显示
          y: "bottom", //延Y轴居中
          x: "center", //居右显示
          itemGap: 100, //图例间隔
          textStyle: {
            fontSize: 16
          }
          // show: true,
          // borderWidth: 2,
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
          // shadowBlur: 5,
          // borderRadius: 10,
          // padding: [20, 10],
        },
        xAxis: {
          data: this.decomposerFormattedChart1Data.dtArray.reverse(),
          fontSize: 18
        },
        yAxis: {
          type: "value",
          name: "单位:金额"
        },
        series: [
          {
            name: "应收",
            type: "line",
            data: this.decomposerFormattedChart1Data.pdr_amountArray.reverse(),
            smooth: true
          },
          {
            name: "实收",
            type: "line",
            data: this.decomposerFormattedChart1Data.pdr_paidArray.reverse(),
            smooth: true
          },
          {
            name: "欠费",
            type: "line",
            data: this.decomposerFormattedChart1Data.pdr_countArray.reverse(),
            smooth: true
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts2"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: "category",
          data: [
            this.chart2Data[0].name,
            this.chart2Data[1].name,
            this.chart2Data[2].name,
            this.chart2Data[3].name,
            this.chart2Data[4].name,
            this.chart2Data[5].name,
            this.chart2Data[6].name,
            this.chart2Data[7].name,
            this.chart2Data[8].name,
            this.chart2Data[9].name
          ],
          axisLabel: {
            formatter: function(params) {
              var newParamsName = ""; // 最终拼接成的字符串
              var paramsNameNumber = params.length; // 实际标签的个数
              var provideNumber = 4; // 每行能显示的字的个数
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = ""; // 表示每一次截取的字符串
                  var start = p * provideNumber; // 开始截取的位置
                  var end = start + provideNumber; // 结束截取的位置
                  // 此处特殊处理最后一行的索引值
                  if (p == rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    // 每一次拼接字符串并换行
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr; // 最终拼成的字符串
                }
              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }
              //将最终的字符串返回
              return newParamsName;
            },

            show: true,
            textStyle: {
              fontSize: 16
            }
          }
        },
        yAxis: {
          type: "value",
          name: "单位:元",
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 16
            }
          }
        },
        series: [
          {
            data: [
              this.chart2Data[0].pdrData,
              this.chart2Data[1].pdrData,
              this.chart2Data[2].pdrData,
              this.chart2Data[3].pdrData,
              this.chart2Data[4].pdrData,
              this.chart2Data[5].pdrData,
              this.chart2Data[6].pdrData,
              this.chart2Data[7].pdrData,
              this.chart2Data[8].pdrData,
              this.chart2Data[9].pdrData
            ],
            type: "bar",
            barWidth: "60",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#9929ea"
                  },
                  {
                    offset: 0,
                    color: "#5808fb"
                  }
                ])
              }
            },
            label: {
              //label要加入normal才可生效,label即为x轴对应Y轴的值
              normal: {
                show: true,
                color: "#5808fb", //设置渐变时候控制不到颜色，只能通过全局textStyle来控制
                position: "top"
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts3"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: "category",
          data: [
            this.chart3Data[0].username,
            this.chart3Data[1].username,
            this.chart3Data[2].username,
            this.chart3Data[3].username,
            this.chart3Data[4].username,
            this.chart3Data[5].username,
            this.chart3Data[6].username,
            this.chart3Data[7].username,
            this.chart3Data[8].username,
            this.chart3Data[9].username
          ],
          axisLabel: {
            formatter: function(params) {
              var newParamsName = ""; // 最终拼接成的字符串
              var paramsNameNumber = params.length; // 实际标签的个数
              var provideNumber = 4; // 每行能显示的字的个数
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = ""; // 表示每一次截取的字符串
                  var start = p * provideNumber; // 开始截取的位置
                  var end = start + provideNumber; // 结束截取的位置
                  // 此处特殊处理最后一行的索引值
                  if (p == rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    // 每一次拼接字符串并换行
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr; // 最终拼成的字符串
                }
              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }
              //将最终的字符串返回
              return newParamsName;
            },

            show: true,
            textStyle: {
              fontSize: 16
            }
          }
        },
        yAxis: {
          type: "value",
          name: "单位:元",
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 16
            }
          }
        },
        series: [
          {
            data: [
              this.chart3Data[0].pdrData,
              this.chart3Data[1].pdrData,
              this.chart3Data[2].pdrData,
              this.chart3Data[3].pdrData,
              this.chart3Data[4].pdrData,
              this.chart3Data[5].pdrData,
              this.chart3Data[6].pdrData,
              this.chart3Data[7].pdrData,
              this.chart3Data[8].pdrData,
              this.chart3Data[9].pdrData
            ],
            type: "bar",
            barWidth: "60",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#9929ea"
                  },
                  {
                    offset: 0,
                    color: "#5808fb"
                  }
                ])
              }
            },
            label: {
              //label要加入normal才可生效,label即为x轴对应Y轴的值
              normal: {
                show: true,
                color: "#5808fb", //设置渐变时候控制不到颜色，只能通过全局textStyle来控制
                position: "top"
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart4() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myEcharts4"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          show: true
        },
        xAxis: {
          type: "category",
          data: [
            this.chart4Data[0].username,
            this.chart4Data[1].username,
            this.chart4Data[2].username,
            this.chart4Data[3].username,
            this.chart4Data[4].username,
            this.chart4Data[5].username,
            this.chart4Data[6].username,
            this.chart4Data[7].username,
            this.chart4Data[8].username,
            this.chart4Data[9].username
          ],
          axisLabel: {
            formatter: function(params) {
              var newParamsName = ""; // 最终拼接成的字符串
              var paramsNameNumber = params.length; // 实际标签的个数
              var provideNumber = 4; // 每行能显示的字的个数
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = ""; // 表示每一次截取的字符串
                  var start = p * provideNumber; // 开始截取的位置
                  var end = start + provideNumber; // 结束截取的位置
                  // 此处特殊处理最后一行的索引值
                  if (p == rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    // 每一次拼接字符串并换行
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr; // 最终拼成的字符串
                }
              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }
              //将最终的字符串返回
              return newParamsName;
            },

            show: true,
            textStyle: {
              fontSize: 16
            }
          }
        },
        yAxis: {
          type: "value",
          name: "单位:元",
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 16
            }
          }
        },
        series: [
          {
            data: [
              this.chart4Data[0].pdrData,
              this.chart4Data[1].pdrData,
              this.chart4Data[2].pdrData,
              this.chart4Data[3].pdrData,
              this.chart4Data[4].pdrData,
              this.chart4Data[5].pdrData,
              this.chart4Data[6].pdrData,
              this.chart4Data[7].pdrData,
              this.chart4Data[8].pdrData,
              this.chart4Data[9].pdrData
            ],
            type: "bar",
            barWidth: "60",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#9929ea"
                  },
                  {
                    offset: 0,
                    color: "#5808fb"
                  }
                ])
              }
            },
            label: {
              //label要加入normal才可生效,label即为x轴对应Y轴的值
              normal: {
                show: true,
                color: "#5808fb", //设置渐变时候控制不到颜色，只能通过全局textStyle来控制
                position: "top"
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped="scoped">
.road-right {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  height: 2650px;
}

.BGactive {
  background-color: #0000ff;
  color: white;
  border-radius: 10px;
}

.charstBox1 {
  width: 100%;
  height: 85%;
}

.block {
  width: 300px;
  border: solid 1px #1e69fe;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.dateR >>> .el-button--primary {
  color: #fff;
  background-color: #0000ff;
  border-color: #0000ff;
  height: 35px;
  width: 80px;
}

.dateSel >>> .el-input__inner {
  height: 35px;
  border: none;
  text-align: center;
}

.dateSel >>> .el-date-editor.el-input {
  width: 100px;
}

.blueBoxs {
  width: 33.333%;
  text-align: center;
  line-height: 30px;
}

.blueBoxs1 {
  width: 50%;
  text-align: center;
  line-height: 30px;
}

.dateR {
  width: 850px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.dateR2 {
  width: 550px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.dateBox {
  width: 55%;
  height: 30px;
  display: flex;
  flex-direction: row;
  border: solid 1px #0000ff;
  border-radius: 10px;
  cursor: pointer;
}

.dateBox3 {
  width: 420px;
  height: 30px;
  display: flex;
  flex-direction: row;
  border: solid 1px #0000ff;
  border-radius: 10px;
  cursor: pointer;
}

.dateBox1 {
  width: 40%;
  height: 30px;
  display: flex;
  flex-direction: row;
  border: solid 1px #0000ff;
  border-radius: 10px;
  cursor: pointer;
}

.jindut {
  flex: 1;
}

.jindut1 {
  flex: 1;
}

.jindut2 {
  flex: 1;
}

.jindut1 >>> .el-progress-bar__inner {
  border-radius: 5px;
  background-color: ;
  background-image: linear-gradient(93deg, #4facfe 0%, #00f2fe 100%);
}

.jindut1 >>> .el-progress-bar__outer {
  border-radius: 5px;
  background-color: #ddecfb;
}

.jindut2 >>> .el-progress-bar__inner {
  border-radius: 5px;
  background-color: ;
  background-image: linear-gradient(93deg, #85f4bb 0%, #8cd9e8 100%);
}

.jindut2 >>> .el-progress-bar__outer {
  border-radius: 5px;
  background-color: #ddecfb;
}

.jindut >>> .el-progress-bar__inner {
  border-radius: 5px;
  background-color: ;
  background-image: linear-gradient(88deg, #3fbbfe 0%, #a541ff 100%);
}

.jindut >>> .el-progress-bar__outer {
  border-radius: 5px;
  background-color: #ddecfb;
}

.tingchechangName {
  width: 12%;
  text-align: center;
}

.roadConBox {
  width: 100%;
  height: 370px;
  display: flex;
  flex-direction: column;
}

.jindutiaoBox {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.roadBotBox {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.boxNum {
  font-size: 30px;
  font-weight: 600;
  color: #0000ff;
}

.roadTopBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.boxNum1 {
  font-size: 30px;
  font-weight: 600;
  color: #f8701e;
}

.boxBoxs {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70px;
}

.ziyuanBox {
  width: 100%;
  height: 100%;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.boxBoxs {
  width: 15%;
}

.otherWord {
  height: 20px;
  width: 50px;
  color: white;
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
}

.otherBoxsBot {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.otherNum {
  color: white;
  font-size: 30px;
  font-weight: 600;
}

.otherBoxsBotBox {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45%;
  align-items: center;
  height: 75px;
}

.rightBox {
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
}

.otherBoxs1 {
  width: 30%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url(../../assets/images/boweix@2x.png) no-repeat;
  background-size: 100% 100%;
}

.otherBoxs2 {
  width: 22%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url(../../assets/images/diciB.png) no-repeat;
  background-size: 100% 100%;
}

.otherBoxs3 {
  width: 22%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url(../../assets/images/shexiang.png) no-repeat;
  background-size: 100% 100%;
}

.otherBoxs4 {
  width: 22%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url(../../assets/images/cheliang.png) no-repeat;
  background-size: 100% 100%;
}

.firstBoxTop {
  height: 30px;
  line-height: 30px;
  color: white;
}

.firstBoxBot {
  font-size: 40px;
  color: white;
  font-weight: 600;
}

.firstBox {
  width: 120px;
  height: 120px;
  background: url(../../assets/images/frist.png);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}

.roadBot {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.wulianBotBoxBot {
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: row;
}

.CwordBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50px;
  align-items: center;
  margin: 0 auto;
}

.CwordBox1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65px;
  align-items: center;
  margin: 0 auto;
}

.Cnum {
  font-size: 30px;
  color: #0000ff;
  font-weight: 600;
}

.quan {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.green {
  background-color: #35fb3e;
}

.gray {
  background-color: #a0a0a0;
}

.blue {
  background-color: #0000ff;
}

.orange {
  background-color: #f8701e;
}

.red {
  background-color: #fb0c28;
}

.purple {
  background-color: #ab24f8;
}

.CnumBox {
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-between;
}

.conCon {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.conRight {
  width: 30%;
  height: 100%;
}

.Ltitle {
  font-size: 14px;
  width: 60%;
  margin: 0 auto;
}

.Lnum {
  font-size: 50px;
  height: 140px;
  color: #0000ff;
  font-weight: 600;
}

.conLeft {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}

.wulianBotBoxT {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.T_span {
  font-size: 18px;
  margin-left: 5px;
}

.wulianBotBox {
  width: 100%;
  height: 200px;
}

.wulianBotBox1 {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
}

.T_blue {
  width: 5px;
  height: 15px;
  background-color: #0000ff;
}

.wulianBot {
  width: 95%;
  margin: 0 auto;
  height: 85%;
  display: flex;
  flex-direction: column;
}

.UserAssets-right-top {
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 20px auto;
  margin-top: 40px;
}

.user-left {
  flex: 1;
}

.users-right {
  width: 150px;
}

.user-word {
  width: 47px;
  height: 23px;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 1px;
  color: #000000;
}
</style>
