<template>
	<div class="BDbgImg">
		<div class="topTitle">
			<div class="titleWord">{{loginConfig.deviceName}}电单车充电</div>
		</div>
		<div class="BDCon">
			<div class="conTop">
				<div class="conTopB1">
					<div class="image-border image-border1"></div>
					<div class="image-border image-border2"></div>
					<div class="image-border image-border3"></div>
					<div class="image-border image-border4"></div>
					<div class="word1">车棚数(个)</div>
					<div class="word2">{{motoNum}}</div>
				</div>
				<div class="conTopB2">
					<div class="image-border image-border1"></div>
					<div class="image-border image-border2"></div>
					<div class="image-border image-border3"></div>
					<div class="image-border image-border4"></div>
					<div class="word1">端口数</div>
					<div class="wordBox">
						<div class="smollBox">
							<div class="word4">{{motoGun}}</div>
							<div class="word3">总数</div>
						</div>
						<div class="smollBox">
							<div class="word4">{{motozhanGun}}</div>
							<div class="word3">占用</div>
						</div>
						<div class="smollBox1">
							<el-progress type="circle" :percentage="parseFloat(baifenbi)" v-if="!isNaN(parseInt(baifenbi))" :stroke-width="10"
							 :width="60" color="#1ca6ab"></el-progress>
							<div class="word3">占用率</div>
						</div>
					</div>
				</div>
				<div class="conTopB2">
					<div class="image-border image-border1"></div>
					<div class="image-border image-border2"></div>
					<div class="image-border image-border3"></div>
					<div class="image-border image-border4"></div>
					<div class="word1">设备数</div>
					<div class="wordBox">
						<div class="smollBox">
							<div class="word4">{{motoChargers}}</div>
							<div class="word3">总数</div>
						</div>
						<div class="smollBox">
							<div class="word4">{{motoChargersOn}}</div>
							<div class="word3">在线</div>
						</div>
						<div class="smollBox1">
							<el-progress type="circle" :percentage="parseFloat(baifenbi1)" v-if="!isNaN(parseInt(baifenbi1))" :stroke-width="10"
							 :width="60" color="#1ca6ab"></el-progress>
							<div class="word3">占用率</div>
						</div>
					</div>
				</div>
			</div>
			<div class="conConBox">
				<div class="conBot1">
					<div class="conTopB3">
						<div class="image-border image-border1"></div>
						<div class="image-border image-border2"></div>
						<div class="image-border image-border3"></div>
						<div class="image-border image-border4"></div>
						<div class="conTitle">
							<span style="font-size: 14px;color: #00CDFF;margin-left: 10px;">运营商TOP6</span>
						</div>
						<div class="jindutiaoBox">
							<div class="jindutiaoBox1" v-for="item in shopList">
								<img src="../../assets/images/jiangpai1.png" style="width: 18px;height: 22px;">
								<div style="color: white;width: 40px;text-align: center;">{{item.username}}</div>
								<div class="jindu">
									<el-progress :stroke-width="15" :percentage="xxx(item.payment_service_13_amount)" :show-text="false"></el-progress>
								</div>
								<div class="jinduWord">{{item.payment_service_13_amount}}<span style="font-size: 12px;color: white;margin-left: 10px;">元</span></div>
							</div>
						</div>
					</div>
					<div class="conTopB4">
						<div class="image-border image-border1"></div>
						<div class="image-border image-border2"></div>
						<div class="image-border image-border3"></div>
						<div class="image-border image-border4"></div>
						<div class="conTitle">
							<span style="font-size: 14px;color: #00CDFF;margin-left: 10px;">订单数据</span>
						</div>
						<div class="conBox4">
							<div class="threeBoxs">
								<div class="threeBoxsW">
									<div class="jinduWord1">{{motoshouru}}<span style="font-size: 16px;color: white;margin-left: 10px;">元</span></div>
									<div style="font-size: 16px;color: white;">收入</div>
								</div>
								<div class="threeBoxsW">
									<div class="jinduWord1">{{motodingdan}}<span style="font-size: 16px;color: white;margin-left: 10px;">个</span></div>
									<div style="font-size: 16px;color: white;">订单数</div>
								</div>
								<div class="threeBoxsW">
									<div class="jinduWord1">{{chongdianfeiyong}}<span style="font-size: 16px;color: white;margin-left: 10px;">元</span></div>
									<div style="font-size: 16px;color: white;">充电费用</div>
								</div>
							</div>
							<div class="barImg">
								<div class="bar1" id="myEcharts1">

								</div>
								<div class="bar2" id="myEcharts2">

								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="conzhong">
					<div class="earthMap">
						<div class="earth"></div>
						<div class="map1"></div>
						<div class="map2"></div>
						<div class="chart" id="myEcharts"></div>
					</div>
					<div class="conBotBox">
						<div class="conTopB5">
							<div class="image-border image-border1"></div>
							<div class="image-border image-border2"></div>
							<div class="image-border image-border3"></div>
							<div class="image-border image-border4"></div>
							<div class="conTitle">
								<span style="font-size: 14px;color: #00CDFF;margin-left: 10px;">分润</span>
							</div>
							<div class="payBox">
								<div class="payWordBox">
									<div class="payB">
										<div class="payWordBox1">
											<img src="../../assets/images/amount.png" style="width: 20px;height: 20px;">
											<span style="font-size: 16px;color:#00cdff ;">总金额</span>
										</div>
										<span style="text-align: center;font-size: 16px;color:#00cdff ;">￥0</span>
									</div>
									<div class="payB">
										<div class="payWordBox1">
											<img src="../../assets/images/fencheng.png" style="width: 20px;height: 20px;">
											<span style="font-size: 16px;color:#00cdff ;">分成金额</span>
										</div>
										<span style="text-align: center;font-size: 16px;color:#00cdff ;">￥0</span>
									</div>
								</div>
								<div style="display: flex;flex-direction: row;justify-content: center;">
									<el-progress type="circle" :percentage="0" :stroke-width="15" :width="80" color="#fe3b4d"></el-progress>
								</div>
							</div>
						</div>
						<div class="conTopB5">
							<div class="image-border image-border1"></div>
							<div class="image-border image-border2"></div>
							<div class="image-border image-border3"></div>
							<div class="image-border image-border4"></div>
							<div class="conTitle">
								<span style="font-size: 14px;color: #00CDFF;margin-left: 10px;">结算</span>
							</div>
							<div class="payBox">
								<div class="payWordBox">
									<div class="payB">
										<div class="payWordBox1">
											<img src="../../assets/images/amount.png" style="width: 20px;height: 20px;">
											<span style="font-size: 16px;color:#00cdff ;">提现金额</span>
										</div>
										<span style="text-align: center;font-size: 16px;color:#00cdff ;">￥0</span>
									</div>
									<div class="payB">
										<div class="payWordBox1">
											<img src="../../assets/images/tixiansuccess.png" style="width: 20px;height: 20px;">
											<span style="font-size: 16px;color:#00cdff ;">提现成功</span>
										</div>
										<span style="text-align: center;font-size: 16px;color:#00cdff ;">￥0</span>
									</div>
								</div>
								<div style="display: flex;flex-direction: row;justify-content: center;">
									<el-progress type="circle" :percentage="0" :stroke-width="15" :width="80" color="#005fd9"></el-progress>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="conBot1">
					<div class="conTopB3">
						<div class="image-border image-border1"></div>
						<div class="image-border image-border2"></div>
						<div class="image-border image-border3"></div>
						<div class="image-border image-border4"></div>
						<div class="conTitle">
							<span style="font-size: 14px;color: #00CDFF;margin-left: 10px;">站点TOP6</span>
						</div>
						<div class="jindutiaoBox">
							<div class="jindutiaoBox1" v-for="item in stationList">
								<img src="../../assets/images/jiangpai1.png" style="width: 18px;height: 22px;">
								<span style="color: white; overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{item.name}}</span>
								<div class="jindu">
									<el-progress :show-text="false" :stroke-width="15" :percentage="compute(item.payment_service_13_amount)"></el-progress>
								</div>
								<div class="jinduWord">{{item.payment_service_13_amount}}<span style="font-size: 12px;color: white;margin-left: 10px;">元</span></div>
							</div>
						</div>
					</div>
					<div class="conTopB4">
						<div class="image-border image-border1"></div>
						<div class="image-border image-border2"></div>
						<div class="image-border image-border3"></div>
						<div class="image-border image-border4"></div>
						<div class="conTitle">
							<span style="font-size: 14px;color: #00CDFF;margin-left: 10px;">实时告警</span>
						</div>
						<div class="lastBox">
							<div class="lastTop">
								<div class="lastImg">
									<div class="image-borderx image-border5"></div>
									<div class="image-borderx image-border6"></div>
									<div class="image-borderx image-border7"></div>
									<div class="image-borderx image-border8"></div>
									<img src="../../assets/images/Ygaojing.png" style="width: 18px;height: 16px;">
									<span style="color: white;">预警数</span>
									<span style="color: yellow;">0</span>
								</div>
								<div class="lastImg">
									<div class="image-borderx image-border5"></div>
									<div class="image-borderx image-border6"></div>
									<div class="image-borderx image-border7"></div>
									<div class="image-borderx image-border8"></div>
									<img src="../../assets/images/Rgaojing.png" style="width: 18px;height: 16px;">
									<span style="color: white;">告警数</span>
									<span style="color: red;">0</span>
								</div>
							</div>
							<div class="lastBot">
								<div style="background-color: #00aeff;width: 100%;display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
									<div class="yvjingBox1"></div>
									<div class="yvjingBox">日期</div>
									<div class="yvjingBox">时间</div>
									<div class="yvjingBox">事件</div>
								</div>
								<div class="gaojingBox" v-for="item in 2">
									<div class="gaojing1">
										<!-- <img src="../../assets/images/Rgaojing.png" style="width: 18px;height: 16px;"> -->
									</div>
									<div class="gaojing">20201021</div>
									<div class="gaojing">10:29:30</div>
									<div class="gaojing2">计费成功</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		loginConfig
	} from "../../config.js";
	import 'echarts/map/js/china.js';
	export default {
		data() {
			return {
				loginConfig,
				yunyingList: [{
						id: 1,
						name: '张三',
						num: 28139,
						poite: 90
					},
					{
						id: 2,
						name: '张三',
						num: 18139,
						poite: 70
					},
					{
						id: 3,
						name: '张三',
						num: 45139,
						poite: 60
					},
					{
						id: 4,
						name: '张四',
						num: 58139,
						poite: 50
					},
					{
						id: 5,
						name: '张五',
						num: 28139,
						poite: 30
					},
					{
						id: 6,
						name: '张三',
						num: 28139,
						poite: 20
					}
				],
				motoNum: '',
				motozhanGun: '',
				motoGun: '',
				motoChargersOn: '',
				motoChargers: '',
				shopList: [],
				shopMax: '',
				stationList: [],
				stationMax: '',
				motoshouru:'',
				motodingdan:'',
				chongdianfeiyong:'',
				tuikuan:'',
				alipay:'',
				wechat:'',
				qianbao:'',
			};
		},
		created() {
			this.token = localStorage.getItem('token')
			this.getMotoMes()
			this.getShop()
			this.getStation()
			this.$nextTick(() => {
				this.drawChart();
				this.drawChart2();
			});

		},
		computed: {
			baifenbi() {
				return ((this.motozhanGun / this.motoGun) * 100).toFixed(1)
			},
			baifenbi1() {
				return ((this.motoChargersOn / this.motoChargers) * 100).toFixed(1)
			},
		},
		methods: {
			//电单车实时
			xxx(a) {
				return parseFloat(Math.round(a / this.shopMax * 100))
			},
			compute(compute) {
				return parseFloat(Math.round(compute / this.stationMax * 100))
			},
			getMotoMes() {
				let toKen = this.token.replace(/\"/g, "")
				this.$axios.get("admin/api/report/91225BB2E2C3440C843F53DB6D86887D?token=" + toKen)
					.then(res => {
						if (res.status == 200) {
							console.log(res.data.data)
							this.motoNum = res.data.data[0].station_type_2_count
							this.motoGun = res.data.data[0].charger_type_4_gun
							this.motozhanGun = res.data.data[0].charger_type_4_gun_busy
							this.motoChargers = res.data.data[0].charger_type_4_count
							this.motoChargersOn = res.data.data[0].charger_type_4_count_online
							this.motoshouru = res.data.data[0].payment_service_13_pay//收入是支付金额
							this.motodingdan = res.data.data[0].payment_service_13_count
							this.chongdianfeiyong = res.data.data[0].payment_service_13_amount
							this.tuikuan = res.data.data[0].refund_service_13_state_1_count
							this.qianbao = res.data.data[0].payment_service_13_gateway_usepay_pay
							this.wechat = res.data.data[0].payment_service_13_gateway_wechat_pay
							this.alipay = res.data.data[0].payment_service_13_gateway_alipay_pay
							this.drawChart1();
							this.drawChart2();
						}
					})
			},
			getShop() {
				let toKen = this.token.replace(/\"/g, "")
				this.$axios.get("admin/api/report/C2C647A9B5D241638E7FE4033C5A6999?token=" + toKen +
						"&page=1&row=6&order=payment_service_13_amount&sort=desc")
					.then(res => {
						if (res.status == 200) {
							console.log(res.data.data)
							this.shopList = res.data.data
							this.shopMax = res.data.data[0].payment_service_13_amount
						}
					})
			},

			getStation() {
				let toKen = this.token.replace(/\"/g, "")
				this.$axios.get("admin/api/report/BEDDD2BEF0364BA483794B9BA60D82F6?token=" + toKen +
						"&page=1&row=6&order=payment_service_13_amount&sort=desc")
					.then(res => {
						if (res.status == 200) {
							console.log(res.data.data)
							this.stationList = res.data.data
							this.stationMax = res.data.data[0].payment_service_13_amount
						}
					})
			},
			drawChart1() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts1"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item'
					},
					color: ['#ff7200', '#ffdc7d'],
					series: [{

						type: 'pie',
						radius: ['40%', '65%'],
						avoidLabelOverlap: false,
						itemStyle: {
							normal: {
								label: {
									show: true,
									formatter: " {d}% \n {b} "
								}
							}
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '15',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							lineStyle: {
								color: '#238ae1'
							}
						},
						data: [{
								value: this.tuikuan,
								name: '退款金额'
							},
							{
								value: this.motoshouru,
								name: '总金额'
							},

						]
					}]
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
						trigger: 'item'
					},
					color: ['#ff7200', '#00cc57', '#238ae1', '#9931fe'],
					legend: {
						orient: 'vertical',
						y: 'center',
						x: 'right',
						icon: 'circle', //图例形状 circle圆形
						textStyle: { //图例文字的样式
							color: ['#ff7200', '#00cc57', '#238ae1'],
							fontSize: 12
						},
						data: ['微信', '支付宝', '钱包']
					},
					series: [{
						type: 'pie',
						radius: ['40%', '65%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '12',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							lineStyle: {
								color: '#238ae1'
							}
						},
						data: [{
								value: this.wechat,
								name: '微信'
							},
							{
								value: this.alipay,
								name: '支付宝'
							},
							{
								value: this.qianbao,
								name: '钱包'
							},
							
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts"));
				// 指定图表的配置项和数据
				var geoCoordMap = {
					'上海': [121.4648, 31.2891],
					'东莞': [113.8953, 22.901],
					'东营': [118.7073, 37.5513],
					'中山': [113.4229, 22.478],
					'临汾': [111.4783, 36.1615],
					'临沂': [118.3118, 35.2936],
					'丹东': [124.541, 40.4242],
					'丽水': [119.5642, 28.1854],
					'乌鲁木齐': [87.9236, 43.5883],
					'佛山': [112.8955, 23.1097],
					'保定': [115.0488, 39.0948],
					'兰州': [103.5901, 36.3043],
					'包头': [110.3467, 41.4899],
					'北京': [116.4551, 40.2539],
					'北海': [109.314, 21.6211],
					'南京': [118.8062, 31.9208],
					'南宁': [108.479, 23.1152],
					'南昌': [116.0046, 28.6633],
					'南通': [121.1023, 32.1625],
					'厦门': [118.1689, 24.6478],
					'台州': [121.1353, 28.6688],
					'合肥': [117.29, 32.0581],
					'呼和浩特': [111.4124, 40.4901],
					'咸阳': [108.4131, 34.8706],
					'哈尔滨': [127.9688, 45.368],
					'唐山': [118.4766, 39.6826],
					'嘉兴': [120.9155, 30.6354],
					'大同': [113.7854, 39.8035],
					'大连': [122.2229, 39.4409],
					'天津': [117.4219, 39.4189],
					'太原': [112.3352, 37.9413],
					'威海': [121.9482, 37.1393],
					'宁波': [121.5967, 29.6466],
					'宝鸡': [107.1826, 34.3433],
					'宿迁': [118.5535, 33.7775],
					'常州': [119.4543, 31.5582],
					'广州': [113.5107, 23.2196],
					'廊坊': [116.521, 39.0509],
					'延安': [109.1052, 36.4252],
					'张家口': [115.1477, 40.8527],
					'徐州': [117.5208, 34.3268],
					'德州': [116.6858, 37.2107],
					'惠州': [114.6204, 23.1647],
					'成都': [103.9526, 30.7617],
					'扬州': [119.4653, 32.8162],
					'承德': [117.5757, 41.4075],
					'拉萨': [91.1865, 30.1465],
					'无锡': [120.3442, 31.5527],
					'日照': [119.2786, 35.5023],
					'昆明': [102.9199, 25.4663],
					'杭州': [119.5313, 29.8773],
					'枣庄': [117.323, 34.8926],
					'柳州': [109.3799, 24.9774],
					'株洲': [113.5327, 27.0319],
					'武汉': [114.3896, 30.6628],
					'汕头': [117.1692, 23.3405],
					'江门': [112.6318, 22.1484],
					'沈阳': [123.1238, 42.1216],
					'沧州': [116.8286, 38.2104],
					'河源': [114.917, 23.9722],
					'泉州': [118.3228, 25.1147],
					'泰安': [117.0264, 36.0516],
					'泰州': [120.0586, 32.5525],
					'济南': [117.1582, 36.8701],
					'济宁': [116.8286, 35.3375],
					'海口': [110.3893, 19.8516],
					'淄博': [118.0371, 36.6064],
					'淮安': [118.927, 33.4039],
					'深圳': [114.5435, 22.5439],
					'清远': [112.9175, 24.3292],
					'温州': [120.498, 27.8119],
					'渭南': [109.7864, 35.0299],
					'湖州': [119.8608, 30.7782],
					'湘潭': [112.5439, 27.7075],
					'滨州': [117.8174, 37.4963],
					'潍坊': [119.0918, 36.524],
					'烟台': [120.7397, 37.5128],
					'玉溪': [101.9312, 23.8898],
					'珠海': [113.7305, 22.1155],
					'盐城': [120.2234, 33.5577],
					'盘锦': [121.9482, 41.0449],
					'石家庄': [114.4995, 38.1006],
					'福州': [119.4543, 25.9222],
					'秦皇岛': [119.2126, 40.0232],
					'绍兴': [120.564, 29.7565],
					'聊城': [115.9167, 36.4032],
					'肇庆': [112.1265, 23.5822],
					'舟山': [122.2559, 30.2234],
					'苏州': [120.6519, 31.3989],
					'莱芜': [117.6526, 36.2714],
					'菏泽': [115.6201, 35.2057],
					'营口': [122.4316, 40.4297],
					'葫芦岛': [120.1575, 40.578],
					'衡水': [115.8838, 37.7161],
					'衢州': [118.6853, 28.8666],
					'西宁': [101.4038, 36.8207],
					'西安': [109.1162, 34.2004],
					'贵阳': [106.6992, 26.7682],
					'连云港': [119.1248, 34.552],
					'邢台': [114.8071, 37.2821],
					'邯郸': [114.4775, 36.535],
					'郑州': [113.4668, 34.6234],
					'鄂尔多斯': [108.9734, 39.2487],
					'重庆': [107.7539, 30.1904],
					'金华': [120.0037, 29.1028],
					'铜川': [109.0393, 35.1947],
					'银川': [106.3586, 38.1775],
					'镇江': [119.4763, 31.9702],
					'长春': [125.8154, 44.2584],
					'长沙': [113.0823, 28.2568],
					'长治': [112.8625, 36.4746],
					'阳泉': [113.4778, 38.0951],
					'青岛': [120.4651, 36.3373],
					'韶关': [113.7964, 24.7028]
				};

				var XAData = [
					[{
						name: '杭州'
					}, {
						name: '西安',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '上海',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '广州',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '西宁',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '成都',
						value: 100
					}]
				];

				var XNData = [
					[{
						name: '杭州'
					}, {
						name: '杭州',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '石家庄',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '呼和浩特',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '北京',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '包头',
						value: 100
					}]
				];

				var YCData = [
					[{
						name: '杭州'
					}, {
						name: '葫芦岛',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '拉萨',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '哈尔滨',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '青岛',
						value: 100
					}],
					[{
						name: '杭州'
					}, {
						name: '成都',
						value: 100
					}],
				];

				var planePath =
					'path://M1020.7 711c-8.9-43.7-35.6-81.7-73.6-105v-20.2c1.3-0.6 3-0.8 4.9-0.8 11.1 0 31.2 8.2 43.5 13.8 2.2 1 4.6 1.5 7 1.5 4.4 0 8.8-1.7 12-5 6.1-6.1 6.1-16.7 0.7-23.3-44.3-53.4-187.8-70.5-187.8-70.5l-98.1-260.7c-1-2.6 1-5.4 3.7-5.4h71.3c17.7 0 32-14.3 32-32v-46.9c0-17.7-14.3-32-32-32h-99.6c-9.5 0-18.4 4.2-24.5 11.4l-42.6 50.7c-9 10.8-21.4 18.3-35.1 21.3l-72.7 16.2c-10.1 2.3-16 12.8-12.7 22.6 2.4 7.1 9.1 11.7 16.4 11.7 0.9 0 1.7-0.1 2.6-0.2l46.6-7.1c34.1-5.2 66.2 17.6 72.5 51.6 15.8 85.1 34.5 229.5 34.5 229.5-44.6 26.9-80.4 109.1-80.4 109.1H502.1c-32.8-27-43.3-78.7-46.7-111.1-1.7-16.3-15.4-28.8-31.8-28.8H73.5c-15.3 0-28.5 10.8-31.4 25.8-5.4 27.7-18.5 59.9-28.6 82.4-6.3 14-1.9 30.6 10.7 39.3 10.6 7.4 21.3 17.2 29.5 25.4C35.9 761.6 92 846.6 179 864.4c10.8 2.2 21.7 3.3 32.4 3.3 61.2 0 118.4-35.1 145.4-92.2h348.7c15.6 76.2 82.6 128.6 157.4 128.6 10.7 0 21.5-1.1 32.4-3.3C982.4 883 1038.5 798 1020.7 711z';
				//var planePath = 'arrow';

				var convertData = function(data) {

					var res = [];
					for (var i = 0; i < data.length; i++) {

						var dataItem = data[i];

						var fromCoord = geoCoordMap[dataItem[0].name];
						var toCoord = geoCoordMap[dataItem[1].name];
						if (fromCoord && toCoord) {
							res.push({
								fromName: dataItem[0].name,
								toName: dataItem[1].name,
								coords: [fromCoord, toCoord],
								value: dataItem[1].value
							});
						}
					}
					return res;

				};

				var color = ['#a6c84c', '#ffa022', '#46bee9']; //航线的颜色
				var series = [];
				[
					['西安', XAData],
					['西宁', XNData],
					['银川', YCData]
				].forEach(function(item, i) {
					series.push({
						name: item[0] + ' Top3',
						type: 'lines',
						zlevel: 1,
						effect: {
							show: true,
							period: 6,
							trailLength: 0.7,
							color: 'red', //arrow箭头的颜色
							symbolSize: 3
						},
						lineStyle: {
							normal: {
								color: color[i],
								width: 0,
								curveness: 0.2
							}
						},
						data: convertData(item[1])
					}, {
						name: item[0] + ' Top3',
						type: 'lines',
						zlevel: 2,
						symbol: ['none', 'arrow'],
						symbolSize: 10,
						effect: {
							show: true,
							period: 6,
							trailLength: 0,
							symbol: planePath,
							symbolSize: 15
						},
						lineStyle: {
							normal: {
								color: color[i],
								width: 1,
								opacity: 0.6,
								curveness: 0.2
							}
						},
						data: convertData(item[1])
					}, {
						name: item[0] + ' Top3',
						type: 'effectScatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						rippleEffect: {
							brushType: 'stroke'
						},
						label: {
							normal: {
								show: true,
								position: 'right',
								formatter: '{b}'
							}
						},
						symbolSize: function(val) {
							return val[2] / 8;
						},
						itemStyle: {
							normal: {
								color: color[i],
							},
							emphasis: {
								areaColor: '#2B91B7'
							}
						},
						data: item[1].map(function(dataItem) {
							return {
								name: dataItem[1].name,
								value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
							};
						})
					});
				});
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: function(params, ticket, callback) {
							if (params.seriesType == "effectScatter") {
								return "线路：" + params.data.name + "" + params.data.value[2];
							} else if (params.seriesType == "lines") {
								return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
							} else {
								return params.name;
							}
						}
					},
					//图例
					// legend: {
					//     orient: 'vertical',
					//     top: 'bottom',
					//     left: 'right',
					//     data:['西安 Top3', '西宁 Top3', '银川 Top3'],
					//     textStyle: {
					//         color: '#fff'
					//     },
					//     selectedMode: 'multiple'
					// },
					geo: {
						map: 'china',
						label: {
							emphasis: {
								show: true,
								color: '#fff'
							}
						},
						zoom: 1.2,
						roam: true,
						itemStyle: {
							normal: {
								areaColor: '#208DC9',
								borderColor: '#195BB9',
								borderWidth: 1,
							},
							emphasis: {
								areaColor: '#00186E'
							}
						}
					},
					series: series
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
		}
	};
</script>

<style>
	.BDbgImg {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background: url(../../assets/images/BDbg.png) no-repeat;
		background-size: 100% 100%;
	}

	.gaojingBox {
		width: 100%;
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		margin: 10px 0px 10px 0px;
	}

	.gaojing1 {
		width: 10%;
		height: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.gaojing {
		width: 30%;
		text-align: center;
		height: 30px;
		line-height: 30px;
		color: white;
	}

	.gaojing2 {
		width: 30%;
		text-align: center;
		height: 30px;
		line-height: 30px;
		color: #00eaff;
	}

	.yvjingBox {
		width: 30%;
		height: 30px;
		text-align: center;
		line-height: 30px;
		color: white;
	}

	.yvjingBox1 {
		width: 10%;
		height: 30px;
	}

	.lastBot {
		width: 80%;
		height: 250px;
		margin: 0 auto;
		margin-top: 20px;
	}

	.td1 {
		width: 33.333%;
		height: 30px;
		text-align: center;
		line-height: 30px;
		color: white;
	}

	.td1 {
		width: 25%%;
		height: 30px;
		text-align: center;
		line-height: 30px;
		color: white;
	}

	.lastTop {
		width: 85%;
		margin: 0 auto;
		height: 30px;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.lastImg {
		width: 40%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		position: relative;
		border: solid 1px #00BBFF;
	}

	.payB {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.threeBoxs {
		width: 35%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.payBox {
		width: 80%;
		height: 80%;
		margin: 0 auto;
	}

	.payWordBox {
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.payWordBox1 {
		display: flex;
		width: 80%;
		height: 50%;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin: 0 auto;
	}

	.conBotBox {
		display: flex;
		width: 100%;
		height: 180px;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 70px;
	}

	.threeBoxsW {
		width: 100%;
		height: 25%;
		border-radius: 20px;
		border: solid 1px #00bbff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.conBox4 {
		position: relative;
		top: 20px;
		display: flex;
		flex-direction: row;
		width: 95%;
		height: 300px;
		margin: 0 auto;
		justify-content: space-between;
	}

	.jinduWord {
		font-size: 16px;
		color: white;
		width: 70px;
		text-align: center;
	}

	.jinduWord1 {
		font-size: 20px;
		color: white;
	}

	.smollBox {
		display: flex;
		flex-direction: column;
		width: 30%;
		align-items: center;
		justify-content: space-around;
	}

	.earth {
		width: 350px;
		height: 350px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: url(../../assets/images/earth.png);
		background-size: 100% 100%;
		opacity: 0.4;
	}

	.el-progress-bar__inner {
		background-image: linear-gradient(90deg,
			#3fffea 0%,
			#007eff 100%),
			linear-gradient(#000000,
			#000000) !important;
	}

	.el-progress-bar__outer {
		background-color: rgba(255, 255, 255, 0) !important;
	}

	.earthMap {
		width: 100%;
		height: 400px;
		position: relative;
	}

	.map1 {
		width: 420px;
		height: 420px;
		position: absolute;
		top: 2%;
		left: 19%;
		transform: translate(-50%, -50%);
		background: url(../../assets/images/lbx.png) no-repeat center;
		background-size: 100% 100%;
		animation: zhuan 15s linear infinite;
	}

	.map2 {
		width: 390px;
		height: 390px;
		position: absolute;
		top: 6%;
		left: 22%;
		transform: translate(-50%, -50%);
		background: url(../../assets/images/jt.png) no-repeat center;
		background-size: 100% 100%;
		animation: zhuan1 10s linear infinite;
	}

	@keyframes zhuan {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes zhuan1 {
		0% {
			transform: rotate(360deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}

	.chart {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 450px;
	}

	.jindu {
		width: 60%;
	}

	.jindutiaoBox {
		width: 90%;
		height: 190px;
		margin: 0 auto;
		margin-top: 10px;
	}

	.barImg {
		width: 55%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.bar1 {
		width: 100%;
		height: 60%;
	}

	.bar2 {
		width: 100%;
		height: 35%;
	}

	.jindutiaoBox1 {
		width: 100%;
		height: 30px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.conBot1 {
		width: 30%;
		height: 650px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.conzhong {
		display: flex;
		width: 687px;
		flex-direction: column;

	}

	.smollBox1 {
		display: flex;
		flex-direction: column;
		width: 40%;
		align-items: center;
		justify-content: space-around;
	}

	.conTitle {
		background: url(../../assets/images/conTitle.png) no-repeat;
		background-size: 100% 100%;
		width: 30%;
		margin-left: 10px;
		margin-top: 10px;
	}

	.wordBox {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.word3 {
		font-size: 16px;
		color: white;
		text-align: center;
	}

	.word4 {
		font-size: 36px;
		color: white;
		text-align: center;
		line-height: 40px;
	}

	.word2 {
		font-size: 36px;
		color: white;
		text-align: center;
		line-height: 70px;
	}

	.word1 {
		font-size: 18px;
		color: #0C9FFF;
		margin-left: 15px;
	}

	.image-border {
		position: absolute;
		width: 20px;
		height: 20px;
	}

	.image-borderx {
		position: absolute;
		width: 5px;
		height: 5px;
	}

	.image-border1 {
		top: 0;
		left: 0;
		border-left: 3px solid #00aeff;
		border-top: 3px solid #00aeff;
	}

	.conConBox {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.image-border2 {
		top: 0;
		right: -2px;
		border-right: 3px solid #00aeff;
		border-top: 3px solid #00aeff;
	}

	.image-border3 {
		bottom: 0;
		left: 0;
		border-bottom: 3px solid #00aeff;
		border-left: 3px solid #00aeff;
	}

	.image-border4 {
		bottom: 0;
		right: -2px;
		border-right: 3px solid #00aeff;
		border-bottom: 3px solid #00aeff;
	}

	.image-border5 {
		top: 0;
		left: 0;
		border-left: 2px solid #00aeff;
		border-top: 2px solid #00aeff;
	}

	.image-border6 {
		top: 0;
		right: -2px;
		border-right: 2px solid #00aeff;
		border-top: 2px solid #00aeff;
	}

	.image-border7 {
		bottom: 0;
		left: 0;
		border-bottom: 2px solid #00aeff;
		border-left: 2px solid #00aeff;
	}

	.image-border8 {
		bottom: 0;
		right: -2px;
		border-right: 2px solid #00aeff;
		border-bottom: 2px solid #00aeff;
	}

	.conTopB1 {
		border: 1px solid rgb(44, 131, 221);
		width: 330px;
		height: 120px;
		box-sizing: border-box;
		padding: 5px;
		position: relative;
		background-color: rgba(17, 56, 93, 0.5);
	}

	.conTopB2 {
		border: 1px solid rgb(44, 131, 221);
		width: 720px;
		height: 120px;
		box-sizing: border-box;
		padding: 5px;
		position: relative;
		background-color: rgba(17, 56, 93, 0.5);
	}

	.conTopB3 {
		border: 1px solid rgb(44, 131, 221);
		width: 100%;
		height: 250px;
		box-sizing: border-box;
		padding: 5px;
		position: relative;
		background-color: rgba(17, 56, 93, 0.5);
	}

	.conTopB5 {
		border: 1px solid rgb(44, 131, 221);
		width: 48%;
		height: 180px;
		box-sizing: border-box;
		padding: 5px;
		position: relative;
		background-color: rgba(17, 56, 93, 0.5);
	}

	.conTopB4 {
		border: 1px solid rgb(44, 131, 221);
		width: 100%;
		height: 380px;
		box-sizing: border-box;
		padding: 5px;
		position: relative;
		background-color: rgba(17, 56, 93, 0.5);
	}

	.other-image {
		width: 100%;
		height: 100%;
	}

	.other-people-title {
		position: absolute;
		background: rgb(21, 90, 154);
		height: 52px;
		opacity: 0.5;
		font-size: 14px;
		line-height: 52px;
		top: 25px;
		left: 25px;
	}

	.conTop {
		width: 100%;
		height: 120px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.topTitle {
		width: 100%;
		height: 40px;
		background: url(../../assets/images/BDtitle.png) no-repeat center;
		background-size: 80% 100%;
		margin-top: 20px;
	}

	.titleWord {
		font-size: 45px;
		color: #00EAFF;
		text-align: center;
		margin-top: -25px;
	}

	.BDCon {
		display: flex;
		flex-direction: column;
		height: 800px;
		width: 95%;
		margin: 0 auto;
		justify-content: space-between;
	}
</style>
