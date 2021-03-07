<template>
	<div class="road-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">汽车充电</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="wulianBot">
			<div class="wulianBotBox" v-for="item in nowList">
				<div class="wulianBotBoxT">
					<div class="T_blue"></div>
					<span class="T_span">资源</span>
				</div>
				<div class="roadBot">
					<div class="firstBox">
						<div class="firstBoxTop">充电站数量</div>
						<div class="firstBoxBot">{{item.station_type_1_count}}</div>
					</div>
					<div class="rightBox">
						<div class="otherBoxs1">
							<div style="color: white;">直流桩数量</div>
							<div class="otherBoxsBot">
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.charger_type_1_count}}</div>
									<div class="otherWord">数量</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.charger_type_1_count_online}}</div>
									<div class="otherWord">在线</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.charger_type_1_gun}}</div>
									<div class="otherWord">端口</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.charger_type_1_gun_busy}}</div>
									<div class="otherWord">占用</div>
								</div>
							</div>
						</div>
						<div class="otherBoxs2">
							<div style="color: white;">交流桩数量</div>
							<div class="otherBoxsBot">
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.charger_type_2_count}}</div>
									<div class="otherWord">数量</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.charger_type_2_count_online}}</div>
									<div class="otherWord">在线</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.charger_type_2_gun}}</div>
									<div class="otherWord">端口</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.charger_type_2_gun_busy}}</div>
									<div class="otherWord">占用</div>
								</div>

							</div>
						</div>
						<div class="otherBoxs3">
							<div style="color: white;">汽车快慢充数量</div>
							<div class="otherBoxsBot">
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.payment_service_11_count}}</div>
									<div class="otherWord">快充</div>
								</div>
								<div class="otherBoxsBotBox">
									<div class="otherNum">{{item.payment_service_12_count}}</div>
									<div class="otherWord">慢充</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wulianBotBox" v-for="item in nowList">
				<div class="wulianBotBoxT">
					<div class="T_blue"></div>
					<span class="T_span">订单</span>
				</div>
				<div class="ziyuanBox">
					<div class="boxBoxs">
						<div class="boxWord">汽车快充金额</div>
						<div class="boxNum1">{{item.payment_service_11_amount}}</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">汽车快充支付金额</div>
						<div class="boxNum1">{{item.payment_service_11_pay}}</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">汽车慢充金额</div>
						<div class="boxNum1">{{item.payment_service_12_amount}}</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">汽车慢充支付金额</div>
						<div class="boxNum1">{{item.payment_service_12_pay}}</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">汽车快充退款金额</div>
						<div class="boxNum1">{{item.payment_service_11_redund}}</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">汽车慢充退款金额</div>
						<div class="boxNum1">{{item.payment_service_12_redund}}</div>
					</div>
				</div>
			</div>
			<div class="wulianBotBox1">
				<div class="roadTopBox">
					<div style="display: flex;flex-direction: row;align-items: center;height: 50px;">
						<div class="T_blue"></div>
						<span class="T_span">订单金额曲线</span>
					</div>
					<div class="dateR">
						<div class="dateBox3">
							<div class="blueBoxs" v-for="item in dateList" :class="{ BGactive:item.id == isActive }" @click="changeBg(item.id),otherTime(item.id)">{{item.name}}</div>
						</div>
						<div class="dateSel">
							<template>
								<div class="block" v-show="isActive == 1">
									<el-date-picker v-model="value3" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
									 value-format="yyyyMMdd" @change="chooseDate">
									</el-date-picker>
									<!-- <el-date-picker v-model="value1" type="date" placeholder="开始日期" value-format="yyyyMMdd" @change="chooseDate1">
									</el-date-picker>
									至
									<el-date-picker v-model="value2" type="date" placeholder="结束日期" value-format="yyyyMMdd" @change="chooseDate2">
									</el-date-picker> -->
								</div>
								<div class="block" v-show="isActive == 2">
									<el-date-picker v-model="value3" type="monthrange" range-separator="至" start-placeholder="开始月份"
									 end-placeholder="结束月份" value-format="yyyyMM" @change="chooseDate">
									</el-date-picker>
								</div>
								<div class="block" v-show="isActive == 3">
									<el-date-picker v-model="value1" type="year" placeholder="开始年份" value-format="yyyy" @change="chooseDate1">
									</el-date-picker>
									至
									<el-date-picker v-model="value2" type="year" placeholder="结束年份" value-format="yyyy" @change="chooseDate2">
									</el-date-picker>
								</div>
							</template>
						</div>
						<div>
							<el-button type="primary" icon="el-icon-search" @click="searchData()">查询</el-button>
						</div>
					</div>
				</div>
				<div class="charstBox1" id="myEcharts1">
				</div>
			</div>
			<div class="wulianBotBox1">
				<div class="roadTopBox">
					<div style="display: flex;flex-direction: row;align-items: center;height: 50px;">
						<div class="T_blue"></div>
						<span class="T_span">站点排名</span>
					</div>
					<div class="dateR2">
						<div class="dateBox">
							<div class="blueBoxs" v-for="item in day" :class="{ BGactive:item.id == isActive1 }" @click="changeBg1(item.id),chooseD(item.id)">{{item.name}}</div>
						</div>
					</div>
				</div>
				<div class="charstBox1" id="myEcharts2">
				</div>
			</div>
			<div class="wulianBotBox1">
				<div class="roadTopBox">
					<div style="display: flex;flex-direction: row;align-items: center;height: 50px;">
						<div class="T_blue"></div>
						<span class="T_span">运营商排名</span>
					</div>
					<div class="dateR2">
						<div class="dateBox">
							<div class="blueBoxs" v-for="item in day" :class="{ BGactive:item.id == isActive3 }" @click="changeBg3(item.id),chooseD2(item.id)">{{item.name}}</div>
						</div>
					</div>
				</div>
				<div class="charstBox1" id="myEcharts3">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import myhead from '../../components/myhead.vue'
	export default {
		components: {
			myhead
		},
		data() {
			return {
				total: 1000,
				pagenum: 1,
				pagesize: 10,
				nowList: [],
				isActive: 1,
				isActive1: 1,
				isActive2: 1,
				isActive3: 1,
				isActive4: 1,
				isActive5: 1,
				isActive6: 1,
				isActive7: 1,
				isActive8: 1,
				const: '',
				constArr: [],
				zhandianArr: [],
				isBg: 1,
				isBg2: 1,
				manchong: [],
				yunying:[],
				yyName:[],
				yymanchong:[],
				value1: '',
				value2: '',
				value3: '',
				xzhou: [],
				zhandian: [],
				zhandianName: [],
				systemTime: '',
				shouList: [{
						name: '收入',
						id: 1
					},
					{
						name: '取证率',
						id: 2
					}
				],
				day: [{
						name: '今日',
						id: 1
					},
					{
						name: '本月',
						id: 2
					},
					{
						name: '今年',
						id: 3
					}
				],
				dateList: [{
						name: '近一周',
						id: 1
					},
					{
						name: '近一月',
						id: 2
					},
					{
						name: '近一年',
						id: 3
					}
				]
			}
		},
		created() {
			this.token = localStorage.getItem('token');
			let date = new Date
			let getYear = date.getFullYear()
			let getMonth = (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)
			let getDate = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()
			//截取时间
			let tiemr = getYear + '' + getMonth + getDate
			let monthyear = getYear + '' + getMonth
			let systemYear = getYear
			//定义时间
			this.systemTime = tiemr
			this.systemMonth = monthyear
			this.systemYear = systemYear

			this.frist()
			// this.$nextTick(() => {
			// 	this.drawChart2();
			// 	this.drawChart3();
			// });
		},
		methods: {
			frist() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// 实时数据
				this.$axios.get("admin/api/report/403CC4248DCF478F9708BA4C4410AA80?token=" + toKen)
					.then(res => {
						if (res.status == 200) {
							this.nowList = res.data.data
						}
					})
				//第一个折线图数据
				this.$axios.get("admin/api/report/EE252E4650B842798077F99DE5475039?token=" + toKen + "&page=1&row=7")
					.then(res => {
						if (res.status == 200) {
							this.zhexian = res.data.data
							for (let i in this.zhexian) {
								//汽车快充金额+慢充
								this.const = this.zhexian[i].payment_service_11_amount + this.zhexian[i].payment_service_12_amount
								this.constArr.push(this.const)
								this.xzhou.push(this.zhexian[i].dt)
							}
							this.drawChart1()
						}
					})
				//第二个，柱状图数据，汽车站点日报
				this.$axios.get("admin/api/report/EBF5CC3387DA41F198A05C03C2D3ABEB?token=" + toKen +
						"&page=1&row=10&order=payment_service_12_count&sort=desc&from=" + this.systemTime + "&to=" + this.systemTime)
					.then(res => {
						console.log(res.data.data)
						if (res.status == 200) {
							this.zhandian = res.data.data
							console.log(this.zhandian)
							for (let i in this.zhandian) {
								//汽车快充金额
								this.manchong.push(this.zhandian[i].payment_service_12_count)
								this.zhandianName.push(this.zhandian[i].name)
							}
							console.log(this.manchong)
							if(this.zhandian != ''){
								this.drawChart2()
							}
						}
					})
					//第三个柱状图 运营商
					this.$axios.get("admin/api/report/4844243E83074EFB9D7B232364065589?token=" + toKen +
							"&page=1&row=10&order=payment_service_12_count&sort=desc&from=" + this.systemTime + "&to=" + this.systemTime)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.yunying = res.data.data
								console.log(this.yunying)
								for (let i in this.yunying) {
									//汽车快充金额
									this.yymanchong.push(this.yunying[i].payment_service_12_count)
									this.yyName.push(this.yunying[i].usename)
								}
								console.log(this.yymanchong)
								if(this.yunying != ''){
									this.drawChart3()
								}
							}
						})
			},
			
			chooseD2(id){
				this.yymanchong = []
				this.yyName = []
				if (id == 1) {
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/EBF5CC3387DA41F198A05C03C2D3ABEB?token=" + toKen +
							"&page=1&row=10&order=payment_service_12_count&sort=desc&from=" + this.systemTime + "&to=" + this.systemTime)
						.then(res => {
							if (res.status == 200) {
								this.yunying = res.data.data
								for (let i in this.yunying) {
									//汽车快充金额
									this.yymanchong.push(this.yunying[i].payment_service_12_count)
									this.yyName.push(this.yunying[i].name)
								}
								console.log(this.manchong)
								this.drawChart3()
							}
						})
				}else if(id == 2){
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/EBF5CC3387DA41F198A05C03C2D3ABEB?token=" + toKen +
							"&page=1&row=10&order=payment_service_12_count&sort=desc&from=" + this.systemMonth + "&to=" + this.systemMonth)
						.then(res => {
							if (res.status == 200) {
								this.yunying = res.data.data
								for (let i in this.yunying) {
									//汽车快充金额
									this.yymanchong.push(this.yunying[i].payment_service_12_count)
									this.yyName.push(this.yunying[i].name)
								}
								console.log(this.manchong)
								this.drawChart3()
							}
						})
				}else if(id == 3){
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/EBF5CC3387DA41F198A05C03C2D3ABEB?token=" + toKen +
							"&page=1&row=10&order=payment_service_12_count&sort=desc&from=" + this.systemYear + "&to=" + this.systemYear)
						.then(res => {
							if (res.status == 200) {
								this.yunying = res.data.data
								for (let i in this.yunying) {
									//汽车快充金额
									this.yymanchong.push(this.yunying[i].payment_service_12_count)
									this.yyName.push(this.yunying[i].name)
								}
								console.log(this.manchong)
								this.drawChart3()
							}
						})
				}
			},
			chooseD(id) {
				this.manchong = []
				this.zhandianName = []
				if (id == 1) {
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/EBF5CC3387DA41F198A05C03C2D3ABEB?token=" + toKen +
							"&page=1&row=10&order=payment_service_12_count&sort=desc&from=" + this.systemTime + "&to=" + this.systemTime)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhandian = res.data.data
								console.log(this.zhandian)
								for (let i in this.zhandian) {
									//汽车快充金额
									this.manchong.push(this.zhandian[i].payment_service_12_count)
									this.zhandianName.push(this.zhandian[i].name)
								}
								console.log(this.manchong)
								this.drawChart2()
							}
						})
				}else if(id == 2){
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/17CA41FB8FAC49C8B973BE9AC3CA366D?token=" + toKen +
							"&page=1&row=10&order=payment_service_12_count&sort=desc&from=" + this.systemMonth + "&to=" + this.systemMonth)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhandian = res.data.data
								console.log(this.zhandian)
								for (let i in this.zhandian) {
									//汽车快充金额
									this.manchong.push(this.zhandian[i].payment_service_12_count)
									this.zhandianName.push(this.zhandian[i].name)
								}
								console.log(this.manchong)
								this.drawChart2()
							}
						})
				}else if(id == 3){
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/54BE9E41573D4EC9BE11709C6A5ECDA1?token=" + toKen +
							"&page=1&row=10&order=payment_service_12_count&sort=desc&from=" + this.systemYear + "&to=" + this.systemYear)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhandian = res.data.data
								console.log(this.zhandian)
								for (let i in this.zhandian) {
									//汽车快充金额
									this.manchong.push(this.zhandian[i].payment_service_12_count)
									this.zhandianName.push(this.zhandian[i].name)
								}
								console.log(this.manchong)
								this.drawChart2()
							}
						})
				}
			},

			otherTime(id) {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				if (id == 1) {
					this.xzhou = []
					this.constArr = []
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/EE252E4650B842798077F99DE5475039?token=" + toKen + "&page=1&row=7") //进一周 日报 7天
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									//汽车快充金额+慢充
									this.const = this.zhexian[i].payment_service_11_amount + this.zhexian[i].payment_service_12_amount
									this.constArr.push(this.const)
									this.xzhou.push(this.zhexian[i].dt)
								}
								console.log(this.xzhou)
								this.drawChart1()
							}
						})
				} else if (id == 2) {
					this.xzhou = []
					this.constArr = []
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/EE252E4650B842798077F99DE5475039?token=" + toKen + "&page=1&row=30") //进一月 日报 30天
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_11_amount + this.zhexian[i].payment_service_12_amount
									this.constArr.push(this.const)
									this.xzhou.push(this.zhexian[i].dt)
								}
								console.log(this.constArr)
								this.drawChart1()
							}
						})
				} else if (id == 3) {
					this.xzhou = []
					this.constArr = []
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/AB5E1BDE13F145919918CDB802505128?token=" + toKen + "&page=1&row=12") //近一年 月报 12月
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_11_amount + this.zhexian[i].payment_service_12_amount
									this.constArr.push(this.const)
									this.xzhou.push(this.zhexian[i].dt)
								}
								console.log(this.constArr)
								this.drawChart1()
							}
						})
				}
			},

			searchData() {
				let toKen = this.token.replace(/\"/g, "")
				if (this.isActive == 1) {
					this.xzhou = []
					this.constArr = []
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/EE252E4650B842798077F99DE5475039?token=" + toKen + "&from=" + this.value1 +
							"&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_11_amount + this.zhexian[i].payment_service_12_amount
									this.constArr.push(this.const)
									this.xzhou.push(this.zhexian[i].dt)
								}
								console.log(this.constArr)
								this.drawChart1()
							}
						})
				} else if (this.isActive == 2) {
					this.xzhou = []
					this.constArr = []
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/AB5E1BDE13F145919918CDB802505128?token=" + toKen + "&from=" + this.value1 +
							"&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_11_amount + this.zhexian[i].payment_service_12_amount
									this.constArr.push(this.const)
									this.xzhou.push(this.zhexian[i].dt)
								}
								console.log(this.constArr)
								this.drawChart1()
							}
						})
				} else if (this.isActive == 3) {
					this.xzhou = []
					this.constArr = []
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/26ECF579E3D84203A9DB0F8D726AF892?token=" + toKen + "&from=" + this.value1 +
							"&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_11_amount + this.zhexian[i].payment_service_12_amount
									this.constArr.push(this.const)
									this.xzhou.push(this.zhexian[i].dt)
								}
								console.log(this.constArr)
								this.drawChart1()
							}
						})
				}
			},

			changeBg(id) {
				this.isActive = id;
			},
			changeBg1(id) {
				this.isActive1 = id;
			},
			changeBg2(id) {
				this.isActive2 = id;
			},
			changeBg3(id) {
				this.isActive3 = id;
			},
			changeBg4(id) {
				this.isActive4 = id;
			},
			changeBg5(id) {
				this.isActive5 = id;
			},
			changeBg6(id) {
				this.isActive3 = id;
			},
			changeBg7(id) {
				this.isActive4 = id;
			},
			changeBg8(id) {
				this.isActive5 = id;
			},
			chooseDate1() {
				console.log(this.value1)
			},
			chooseDate() {
				console.log(this.value3)
				this.value1 = this.value3[0]
				this.value2 = this.value3[1]
				console.log(this.value1)
				console.log(this.value2)
			},
			chooseDate2() {
				console.log(this.value2)
			},
			drawChart1() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts1"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					color: ['#ff7200'],
					grid: {

					},
					legend: {
						data: ['订单金额'],
						orient: 'horizontal', //垂直显示
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						itemGap: 100, //图例间隔
						textStyle: {
							fontSize: 16
						},
						// show: true,
						// borderWidth: 2,
						// shadowColor: 'rgba(0, 0, 0, 0.5)',
						// shadowBlur: 5,
						// borderRadius: 10,
						// padding: [20, 10],

					},
					xAxis: {
						data: this.xzhou,
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:金额'
					},
					series: [{
						name: '订单金额',
						type: 'line',
						data: this.constArr,
						smooth: true,
					}, ]
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
						type: 'category',
						data: this.zhandianName,
						axisLabel: {
							show: true,
							textStyle: {
								fontSize: 16
							}
						}
					},
					yAxis: {
						type: 'value',
						name: '单位:元',
						axisLabel: {
							show: true,
							textStyle: {
								fontSize: 16
							}
						}
					},
					series: [{
						data: this.manchong,
						type: 'bar',
						barWidth: '60',
						itemStyle: {
							normal: {
								color: new this.$echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[{
											offset: 1,
											color: '#9929ea'
										},
										{
											offset: 0,
											color: '#5808fb'
										}
									]
								)
							},
						},
						label: { //label要加入normal才可生效,label即为x轴对应Y轴的值
							normal: {
								show: true,
								color: '#5808fb', //设置渐变时候控制不到颜色，只能通过全局textStyle来控制
								position: 'top'
							}
						},

					}]
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
						type: 'category',
						data:this.yyName,
						axisLabel: {
							show: true,
							textStyle: {
								fontSize: 16
							}
						}
					},
					yAxis: {
						type: 'value',
						name: '单位:元',
						axisLabel: {
							show: true,
							textStyle: {
								fontSize: 16
							}
						}
					},
					series: [{
						data: this.yymanchong,
						type: 'bar',
						barWidth: '60',
						itemStyle: {
							normal: {
								color: new this.$echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[{
											offset: 1,
											color: '#0bbafb'
										},
										{
											offset: 0,
											color: '#4285ec'
										}
									]
								)
							},
						},
						label: { //label要加入normal才可生效,label即为x轴对应Y轴的值
							normal: {
								show: true,
								color: '#4285ec', //设置渐变时候控制不到颜色，只能通过全局textStyle来控制
								position: 'top'
							}
						},

					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
		},
	}
</script>

<style scoped="scoped">
	.road-right {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		height: 2150px;
	}

	.BGactive {
		background-color: #0000FF;
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

	.dateR>>>.el-button--primary {
		color: #FFF;
		background-color: #0000FF;
		border-color: #0000FF;
		height: 35px;
		width: 80px;
	}

	.dateSel>>>.el-input__inner {
		height: 35px;
		border: none;
		text-align: center;
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
		justify-content: center;
		align-items: center;
	}

	.dateBox {
		width: 55%;
		height: 30px;
		display: flex;
		flex-direction: row;
		border: solid 1px #0000FF;
		border-radius: 10px;
		cursor: pointer;
	}

	.dateBox3 {
		width: 420px;
		height: 30px;
		display: flex;
		flex-direction: row;
		border: solid 1px #0000FF;
		border-radius: 10px;
		cursor: pointer;
	}

	.dateBox1 {
		width: 40%;
		height: 30px;
		display: flex;
		flex-direction: row;
		border: solid 1px #0000FF;
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

	.jindut1>>>.el-progress-bar__inner {
		border-radius: 5px;
		background-color: ;
		background-image: linear-gradient(93deg,
			#4facfe 0%,
			#00f2fe 100%);
	}

	.jindut1>>>.el-progress-bar__outer {
		border-radius: 5px;
		background-color: #ddecfb;
	}

	.jindut2>>>.el-progress-bar__inner {
		border-radius: 5px;
		background-color: ;
		background-image: linear-gradient(93deg,
			#85f4bb 0%,
			#8cd9e8 100%);
	}

	.jindut2>>>.el-progress-bar__outer {
		border-radius: 5px;
		background-color: #ddecfb;
	}

	.jindut>>>.el-progress-bar__inner {
		border-radius: 5px;
		background-color: ;
		background-image: linear-gradient(88deg,
			#3fbbfe 0%,
			#a541ff 100%);
	}

	.jindut>>>.el-progress-bar__outer {
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
		color: #0000FF;
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
		background: url(../../assets/images/bowei.png) no-repeat;
		background-size: 100% 100%;
	}

	.otherBoxs2 {
		width: 30%;
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background: url(../../assets/images/diciB.png) no-repeat;
		background-size: 100% 100%;
	}

	.otherBoxs3 {
		width: 30%;
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
		color: #0000FF;
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
		background-color: #0000FF;
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
		color: #0000FF;
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
		background-color: #0000FF;
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
