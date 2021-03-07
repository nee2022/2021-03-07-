import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false

//此处配置浏览器标题名称
document.title = 'OAKBOSS'

export const loginConfig={
	//首页和登录页标题
    systemName:'OAKBOSS物联网平台',
	//左侧导航栏logo图片
    imgs:require("./assets/images/OAKBOSS.png"),
	//login登录页背景图片
    systemImgs:require("./assets/images/index-1.png"),
    //设备监控简称
    deviceName:'OAKBOSS',
	//控制导航页大模块显示隐藏 true为显示,false为隐藏
	//1平台管理     2智慧充电      3智慧停车		4智慧用电      5智慧出行      6智慧城市
	divShow1:true,divShow2:true,divShow3:true,divShow4:true,divShow5:true,divShow6:true,
	
	//配置备案号名称
	deployName:'浙ICP备11032897号-2'
}
	//接口路径
axios.defaults.baseURL = 'http://www.api.sqjtjt.com'

