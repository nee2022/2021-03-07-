<template>
  <div class="tem-right" id="container">
    <div class="tem-right-top">
      <div class="top-left">
        <div class="top-left-word">充电站全景图</div>
      </div>
      <div>
        <myhead></myhead>
      </div>
    </div>
    <div class="right-con">
      <el-input
        class="in"
        prefix-icon="el-icon-search"
        v-model="searchInfo"
        placeholder="请输入内容"
      ></el-input>
    </div>
    <div class="quans" v-show="flag"></div>
    <div class="qq" v-show="flag">
      <div class="spans">
        <span>基本信息</span>
        <div class="zzz">
          <img src="../../assets/images/electricity.png" alt="" />
          <img src="../../assets/images/signal.png" alt="" />
          <img src="../../assets/images/delete22.png" alt="" />
          <img
            @click="close"
            class="shangtu"
            src="../../assets/images/chacha.png"
            alt=""
          />
        </div>
      </div>
      <div class="zong" v-show="select == 1">
        <div class="zong_left">
          <div class="input">
            <span>名称</span>
            <el-input
              placeholder="无"
              v-model="basicInfo.name"
              :disabled="true"
            >
            </el-input>
          </div>
          <div class="input">
            <span>类型</span>
            <el-input
              placeholder="无"
              v-model="basicInfo.type"
              :disabled="true"
            >
            </el-input>
          </div>
          <div class="input">
            <span>机号</span>
            <el-input placeholder="无" v-model="basicInfo.mac" :disabled="true">
            </el-input>
          </div>
          <div class="input">
            <span>端口数</span>
            <el-input placeholder="无" v-model="basicInfo.gun" :disabled="true">
            </el-input>
          </div>
          <div class="input">
            <span>站点</span>
            <el-input
              placeholder="无"
              v-model="basicInfo.station"
              :disabled="true"
            >
            </el-input>
          </div>
          <div class="input">
            <span>地址</span>
            <el-input
              placeholder="无"
              v-model="basicInfo.address"
              :disabled="true"
            >
            </el-input>
          </div>
        </div>
        <div class="zong_right">
          <div class="but">
            <el-button @click="deviceOffline">设备离线</el-button>
            <el-button
              @click="restartDevice"
              type="primary"
              style="background: #2971ff"
              >重启设备</el-button
            >
          </div>
          <div>
            <div class="jw">
              经纬度（
              <span> {{ basicInfo.longitude }}</span>
              <span> {{ basicInfo.latitude }}</span
              >）
              <img
                src="../../assets/images/compileg.png"
                alt=""
                v-on:click="xxx"
              />
            </div>
          </div>
          <div id="containes"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myhead from "../../components/myhead";
export default {
  components: {
    myhead
  },
  data() {
    return {
      searchInfo: "",
      maplist: [],
      flag: false,
      basicInfo: {
        name: "",
        type: "",
        mac: "",
        gun: "",
        station: "",
        address: "",
        enabled: "",
        online: "",
        longitude: "",
        latitude: ""
      },
      select: 1,
      token: JSON.parse(localStorage.getItem("token"))
    };
  },
  created() {},
  methods: {
    restartDevice() {},
    xxx() {},
    deviceOffline() {},
    close() {
      this.flag = false;
    },
    gaode() {
      this.$axios.get(`/map/gd/chargers/3,4,19`).then(res => {
        this.maplist = res.data.chargers;
        // console.log("this.maplist");
        // console.log(this.maplist);
        //图片样式
        //图片样式
        var style = [];
        style[3] = {
          url: require("../../assets/images/mapIcon/Motorbikes.png"),
          anchor: new AMap.Pixel(4, 4),
          size: new AMap.Size(30, 37)
        };
        style[4] = {
          url: require("../../assets/images/mapIcon/Motorbikes.png"),
          anchor: new AMap.Pixel(6, 6),
          size: new AMap.Size(30, 37)
        };
        style[19] = {
          url: require("../../assets/images/mapIcon/Motorbikes.png"),
          anchor: new AMap.Pixel(6, 6),
          size: new AMap.Size(30, 37)
        };
        //创建mark
        var mass = new AMap.MassMarks(this.maplist, {
          opacity: 0.8,
          zIndex: 111,
          cursor: "pointer",
          style: style
        });

        let _this = this;
        var marker = new AMap.Marker({
          content: " ",
          map: _this.map
        });
        mass.on("mouseover", e => {
          marker.setPosition(e.data.lnglat);
          marker.setLabel({
            content: e.data.name
          });
        });
        //点击mark弹窗
        mass.on("click", e => {
          let deviceInfoUrl = `/admin/api/charger/${e.data.id}/?token=${this.token}`;
          this.$axios.get(deviceInfoUrl).then(res => {
            console.log("res.data");
            console.log(res.data);
            // 返回数据为“设备不存在”的判断
            if (res.data.error === 1793) {
              alert("设备不存在");
              return;
            }
            // 设备存在时，弹出框显示设备信息
            this.flag = true;
            this.basicInfo.name = res.data.charger.name;
            this.basicInfo.mac = res.data.charger.mac;
            this.basicInfo.type = res.data.charger.type;
            this.basicInfo.gun = res.data.charger.gun;
            this.basicInfo.address = res.data.charger.address;
            this.basicInfo.station = res.data.charger.station;
            this.basicInfo.enabled = res.data.charger.enabled;
            this.basicInfo.online = res.data.charger.online;
            this.basicInfo.longitude = res.data.charger.longitude;
            this.basicInfo.latitude = res.data.charger.latitude;
          });
        });

        mass.setMap(_this.map);
        //判断
        function setStyle(multiIcon) {
          if (this.maplist.style == 1) {
            mass.setStyle(style);
          } else {
            mass.setStyle(style[2]);
          }
        }
      });
    }
  },

  mounted() {
    this.map = new AMap.Map("container", {
      zoom: 4,
      center: [102.342785, 35.312316],
      resizeEnable: true
    });
    this.gaode();
  }
};
</script>

<style scoped="scoped">
.immm {
  width: 32px;
  height: 22px;
}

.zzz {
  flex: 3;
  text-align: right;
}

.quans {
  width: 100%;
  height: 100%;
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 199;

  opacity: 0.7;
}

.el-radio.is-bordered {
  width: 110px;
  text-align: center;
  line-height: 40px;
  color: white;
}

.danxuan {
  width: 199px;
  height: 166px;
  background: #697787;
  opacity: 0.8;
  border-radius: 4px;
  position: absolute;
  top: 150px;
  right: 30px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: initial; */
  flex-direction: column;
}

.shangtu {
  cursor: pointer;
  width: 31px;
  height: 36px;
}

.carzhuang {
  position: relative;
  top: -78px;
  left: -440px;
  width: 169px;
  height: 169px;
}

.tucar {
  position: relative;
  top: -14%;
}

.tai {
  width: 112px;
  height: 37px;
  border: 1px solid #1e69fe;
  border-radius: 10px;
  text-align: center;
  line-height: 37px;
  cursor: pointer;
  margin-right: -76px;
  color: #1e69fe;
  font-size: 20px;
  font-weight: 500;
}

.you {
  justify-content: space-around;
  margin-left: 180px;
  display: flex;
  align-items: center;

  font-size: 27px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;
}

.foot_map img {
  width: 13px;
  height: 19px;
}

.foot_map div {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #656565;
}

.foot_map {
  align-items: center;
  display: flex;
}

#iess {
  width: 100%;
  height: 29%;
  margin-top: 10px;
  border-radius: 10px;
}

#ies {
  width: 100%;
  height: 29%;
  margin-top: 10px;
  border-radius: 10px;
}

.dds img {
  width: 19px;
  height: 18px;
  margin-left: 4px;
}

.dds {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ddd {
  font-size: 24px;
  font-weight: 400;
  color: #000000;
}

.sss {
  font-size: 20px;
  font-weight: 400;
  color: #909090;
}

.zhong_i_right {
  flex: 6;
}

.zhong_i_left {
  border-right: 1px #f4f4f4 solid;
  flex: 6;
}

.zhong_i {
  align-items: center;
  text-align: center;
  display: flex;
  height: 50%;
}

.zhong_ll {
  font-size: 33px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 63px;
  width: 198px;
  height: 63px;
  border: 1px white solid;
  background: #0b9066;
  text-align: center;
}

.zhong_li {
  width: 200px;
  height: 65px;
  border: 2px #0b9066 solid;
  border-radius: 5px;
}

.zhong_wai {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px#dededd solid;
  height: 50%;
  width: 95%;
  margin: 0 auto;
}

.lasa_right_zhong {
  width: 100%;
  height: 196px;
  background: #ffffff;
  box-shadow: 0px 1px 10px 0px rgba(9, 9, 9, 0.2);
  border-radius: 10px;
}

.lasa_right_top div {
  width: 112px;
  height: 37px;
  border: 1px solid #1e69fe;
  border-radius: 10px;
  text-align: center;
  line-height: 37px;
  cursor: pointer;
  margin-right: -76px;
  color: #1e69fe;
  font-size: 20px;
  font-weight: 500;
}

.lasa_right_top {
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 160px;
}

.lasa_right_top span {
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  line-height: 100px;
}

.lasa_left img {
  margin-left: 20px;
  width: 90%;
  border-radius: 10px;
}

.lasa_left {
  flex: 6;
}

.lasa_right {
  flex: 9;
}

.foot {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #76746f;
  line-height: 77px;
}

.jian {
  text-align: center;
  line-height: 55px;
  height: 67px;
  width: 100%;
  background: #b9cada;
  border: 6px white solid;
  box-sizing: border-box;
}

.fe_ee span:nth-child(2) {
  font-size: 34px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #e3ad3b;
  line-height: 143px;
  margin-bottom: -92px;
}

.yuan_2 {
  margin-bottom: -30px;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: red;
  border-radius: 50%;
  border: 3px #8e8e8e solid;
}

.fe_ee div:nth-child(2) {
  text-align: center;
}

.fe_ee {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fe > div {
  flex-direction: column;
  border-right: 6px white solid;
}

.fe {
  display: flex;
  background: #b9cada;
  height: 156px;
  width: 100%;
  box-sizing: border-box;
}

.fe div:nth-child(1) {
  border-left: 6px white solid;
  flex: 3;
}

.fe div:nth-child(2) {
  flex: 6;
}

.fe div:nth-child(3) {
  flex: 3;
}

.lass > div:nth-child(1) {
  font-size: 36px;
  font-weight: 400;
  color: #000000;
}

.lass > div:nth-child(2) {
  font-size: 20px;
  font-weight: 400;
  color: #656565;
}

.lass {
  flex-direction: column !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important;
}

.list_span {
  display: flex;
}

.list_span span {
  line-height: 54px;
  flex: 2;
  display: inline-block;
  width: 115px;
  text-align: center;
  height: 54px;
  border: 1px #d8d8d8 solid;
}

.list {
  width: 585px;
  height: 100%;
  background: #f8f8f8;
  box-shadow: 0px 1px 10px 0px rgba(9, 9, 9, 0.2);
  border-radius: 10px;
}

.yan {
  font-size: 20px;
  color: #000000;
  line-height: 32px;
}

.fen {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #8c8c8c;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
}

.li_l {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  line-height: 32px;
  height: 70%;
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
  align-items: center;
  border-bottom: 1px #f3f3f3 solid;
}

.yus {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;
}

.yu {
  display: inline-block;
  width: 17px;
  height: 17px;
  background: #ffffff;
  border: 4px solid #c1c9d3;
  border-radius: 50%;
}

.zhuangt_fight {
  margin-left: 40px;
  flex: 8;
}

.zhuangt_left {
  flex: 4;
}

.zhuangt {
  margin: 80px 0 0 30px;
  flex-direction: row;
  display: flex;
}

.li {
  width: 340px;
  height: 156px;
  background: #ffffff;
  border: 1px solid #8c96a5;
  border-radius: 10px;
}

.wai {
  align-items: center;
  margin: 78px 0 0px 30;
  display: flex;
  padding-top: 10px;
  width: 378px;
  height: 207px;
  background: #f6f7fa;
  border: 3px solid #8c96a5;
  border-radius: 10px;
  flex-direction: column;
}

.las {
  flex-direction: column !important;
}

.lazha {
  font-size: 20px;
  font-weight: 400;
  color: #333333;
  line-height: 27px;
  margin-left: 41px;
}

.bu2 {
  justify-content: center;
  display: flex;
}

.bu {
  background: red;
  width: 112px;
  height: 37px;
  background: #2971ff;
  border-radius: 10px;
  text-align: center;
  line-height: 37px;
  cursor: pointer;
}

.cuowu,
.cuowu2 {
  text-align: center;
}

.cuowu2 div:nth-child(2) {
  font-size: 24px;
  font-weight: 400;
  color: #656565;
  line-height: 100px;
}

.cuowu div:nth-child(3) {
  font-size: 18px;
  font-weight: 400;
  color: #656565;
}

.cuowu div:nth-child(2) {
  font-size: 24px;
  font-weight: 400;
  color: #ff0000;
  line-height: 100px;
}

.zhu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.zhuang {
  margin: 0px -14px 0 10px;
  display: flex;
  width: 80%;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.back {
  background: #1e69fe !important;
}

.wen {
  width: 78px;
  display: inline-block;
}

.imgss {
  width: 100%;
}

.xial {
  justify-content: space-between;

  display: flex;
}

.xia_i {
  justify-content: space-between;
  display: flex;
}

.xia {
  font-size: 18px;
  font-weight: 400;
  color: #919191;
  line-height: 27px;
  margin: 34px 30px 28px 26px;
}

.ding {
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  line-height: 27px;
  margin: 34px 0 28px 26px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #d2d5d9;
  width: 86%;
}

.dingdan {
  widows: 370px;
  height: 360px;
  background: #ffffff;
  border: 1px solid #e4e7eb;
  box-shadow: 0px 1px 10px 0px rgba(9, 9, 9, 0.2);
  border-radius: 4px;
}

/* .ding::after {
  content: "";
  width: 13px;
  height: 13px;
  background: white;
  position: absolute;
  right: 5.5%;
  top: 33%;
  z-index: 999;
  border-radius: 50px;
} */
.buttt {
  margin: 20px auto;
}

.buts {
  width: 110px !important;
  background: #2971ff;
}

.ya div:nth-of-type(2) {
  font-size: 16px;
  color: #808080;
}

.ya div:nth-of-type(1) {
  color: #000000;
  font-size: 20px;
}

.ya div {
  width: 100%;
  text-align: center;
}

.yaa {
  height: 70px;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 1px 10px 0px rgba(9, 9, 9, 0.2);
  border-radius: 10px;
}

.ya {
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dian_d {
  display: flex;
}

.jiner {
  font-size: 18px;
  font-weight: 400;
  color: #808080;
  display: flex;
  justify-content: space-evenly;
}

.yuan {
  font-size: 22px;
  color: #000000;
  line-height: 40px;
  display: flex;
  justify-content: space-evenly;
}

.wenzi {
  width: 244px;
  text-align: center;
  line-height: 63px;
}

.wenzi > span {
  font-size: 24px;
  color: #000000;
}

.chong_right {
  flex: 1;
}

.chong_zhong {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
}

.dian {
  display: flex;
  flex-direction: column;
}

.scrollbar >>> .el-scrollbar__bar.is-vertical > div {
  background: #1e69fe !important;
}

.scrollbar {
  margin: 0 auto;
  width: 173px;
}

.test-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.test-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(55, 53, 222, 0.3);
  background: #1e69fe !important;
}

.test-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(55, 53, 222, 0.3);
  border-radius: 10px;
  background: #1e69fe !important;
}

.chong_left {
  overflow-x: hidden;
  margin-left: 20px;
  padding-top: 10px;
  box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.06);
  height: 100%;
}

.quan img {
  /* margin-left: 11px; */
}

.quan {
  align-items: center;
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
  width: 123px;
  height: 35px;
  background: #d3dee6;
  border-radius: 10px;
  text-align: center;
  line-height: 35px;
  margin-left: 27px;
}

.blueWord {
  color: #2971ff !important;
  border-bottom: solid 1px #2971ff;
}

#containes {
  width: 100%;
  height: 61%;
  margin-top: 20px;
}

.jw {
  width: 100%;
  background: #dde8ff;
  height: 42px;
  border: 1px dashed #2971ff;
  border-radius: 10px;

  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #000000;
  line-height: 42px;
  text-align: center;
  font-weight: 400;
  margin-top: 20px;
}

.but {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.zong {
  display: flex;
  flex-direction: row;
  margin-bottom: 61px;
  width: 94%;
}

.zong_left {
  flex: 1;
}

.zong_right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.input span {
  display: inline-block;
  width: 50px;
  text-align: center;
}

.input .el-input {
  margin-left: 10px;

  background: #eeeeee;
  border: 1px solid #7f7f7f;
}

.input {
  width: 100%;
  margin: 0px 30px 33px 31px;
}

.spans img {
  margin-right: 32px;
}

.spans span {
  margin-right: 32px;
  color: #ababab;
  cursor: pointer;
}

.spans {
  display: flex;
  border-bottom: 1px #f0f0f0 solid;
  padding-bottom: 10px;
  font-size: 24px;
  line-height: 32px;
  margin: 20px 0px 32px 31px;
}

.qq {
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  z-index: 999;
  transform: translate(-50%, -50%);
  width: 1134px;
  height: 540px;
}

.in >>> .el-input__icon {
  line-height: 31px !important;
  height: 0% !important;
}

.in >>> .el-input__inner {
  border: 1px #1e69fe solid !important;
}

.el-input {
  position: relative;
  z-index: 2;
  width: 350px;
}

#container {
  width: 100%;
}

.e {
  width: 10%;
}

.jibenInput {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  width: 370px;
}

.banInput {
  cursor: no-drop;
}

.blueBorder input:focus {
  border-style: solid;
  border-color: #1e69fe;
}

.left {
  margin: 20px 0 0 150px;
}

.kuang {
  width: 400px;
  height: 150px;
  border: 1px #ccc solid;
  resize: none;
  border-radius: 5px;
}

.inp > div:nth-child(1) {
  font-size: 20px;
  margin-right: 10px;
  width: 110px;
  text-align: center;
}

.inp {
  display: flex;
  margin: 23px 0 0 30px;
  align-items: center;
}

.zs {
  text-align: center;
}

.zi_1 {
  position: relative;
  top: 30%;
}

.zii {
  background: black;
  opacity: 0.8;
  display: block;
  border-radius: 30px;
}

.zi {
  height: 100%;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 300;
  width: 100%;
  color: #ffffff;
}

.tu > div:nth-child(1) {
  display: flex;
  align-items: center;
  text-align: center;
  width: 150px;
  height: 150px;
  margin-right: 74px;
  background: url("../../assets/images/road.png") no-repeat;
  background-size: 100%, 100%;
}

.tu > div:nth-child(2) {
  width: 150px;
  height: 150px;
  margin-right: 74px;
  background: url("../../assets/images/img_30.jpg") no-repeat;
  background-size: 100%, 100%;
}

.tu {
  margin: 43px 61px 0 30px;
  display: flex;
}

.jichu {
  display: flex;
  margin-top: 30px;
  align-items: center;

  font-size: 20px;
}

.jichu div {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 18px;
  background: #1e69fe;
}

.right-con-right {
  width: 100%;
  height: 100%;
}

.aa {
  margin-top: 41px !important;
}

.zhandian .el-button {
  padding: 0px !important;
}

.el-table td div {
  text-align: left;
}

.tem-right {
  /* height: 1217px !important; */
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

.leftBox-con {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.leftBox {
  display: flex;
  flex-direction: row;
}

.right-con-left {
  width: 30%;
  box-shadow: 10px 10px 15px #edf1f5;
}

.right-con {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.road-bottom-right {
  width: 70%;
  text-align: right;
}

.road-bottom-left {
  width: 30%;
}

.tem-right-top {
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 20px auto;
  margin-top: 36px;
  position: relative;
  z-index: 1;
}

.right-con-top {
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px 0 15px 0;
}

.top-left-word {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 1px;
  color: #000000;
}

.top-right {
  display: flex;
  width: 125px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.top-left {
  flex: 1;
  font-size: 24px;
  font-weight: 400;
  color: #000000;
}
</style>
