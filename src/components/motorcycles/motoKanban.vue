<template>
	<div class="oneCard-right" v-bind:class="{ oneCardrightchange: isActive101, 'text-danger': hasError }">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">电单车充电</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="wulianBot" v-for="item in dataofMotorcyclecharging" v-show="dataofMotorcyclecharging !=='' ">
			<div class="wulianBotBox" >
				<div class="wulianBotBoxT">
					<div class="T_blue"></div>
					<span class="T_span">资源</span>
				</div>
				<div class="roadBot" >
					<div class="firstBox">
						<div class="firstBoxTop">车棚数量</div>
						<div class="firstBoxBot">{{item.station_type_2_count}}</div>
					</div>
					<div class="rightBox">
						<div class="otherBoxs1">
							<div class="otherBoxsBot">
								<div  class="otherBoxsBotBox-02">
									<div class="otherBoxsBotBox"> 
										<div class="otherNum">{{item.charger_type_4_count}}</div>
									<div class="otherWord">电摩桩总数</div>
									</div>
								</div>
								<div class="otherBoxsBotBox-01">
									<div style="color: white;">电摩桩数量</div>
									<div class="otherNum-02">{{item.charger_type_4_count_online}}</div>
									<div class="otherWord">电摩慢充在线数量</div>
								</div>
								<div class="otherBoxsBotBox-1-1">
									<div class="contain-01">
										<el-progress type="circle" color="#20ef73"  :width="105" :show-text="false" :stroke-width="13" :percentage="percentage3()"></el-progress>
										<div class="otherNum-01">{{diyigebaifenbi}}%</div>
										<div class="otherWord-01">上线率</div>
									</div>
								</div>
							</div>
						</div>
						<div class="otherBoxs2">
							<div class="otherBoxsBot">
								<div  class="otherBoxsBotBox-02">
									<div class="otherBoxsBotBox"> 
										<div class="otherNum">{{item.charger_type_4_gun-item.charger_type_4_gun}}</div>
									<div class="otherWord">空闲</div>
									</div>
								</div>
								<div class="otherBoxsBotBox-01">
									<div style="color: white;">电摩桩接口</div>
									<div class="otherNum-033">{{item.charger_type_4_gun}}</div>
									<div class="otherWord">占用</div>
								</div>
								<div class="otherBoxsBotBox-1-1">
									<div class="contain-01">
										<el-progress type="circle" color="#20ef73" :width="105" :show-text="false" :stroke-width="15" :percentage="percentage4()"></el-progress>
										<div class="otherNum-01">{{shiyonglvgebaifenbi}}%</div>
										<div class="otherWord-01">使用率</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wulianBotBoxaaa">
				<div class="wulianBotBoxT">
					<div class="T_blue"></div>
					<span class="T_span">订单</span>
				</div>
				<div class="ziyuanBox">
					<div class="boxBoxs">
						<div class="boxWord">订单数</div>
						<div class="boxNum">{{item.payment_service_13_count}}</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">收入</div>
						<div class="boxNum1">{{item.payment_service_13_pay}}</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">退款数</div>
						<div class="boxNum1">{{item.refund_service_13_state_1_count}}</div>
					</div>
					<div class="boxBoxs">
						<div class="boxWord">退款金额</div>
						<div class="boxNum1">{{item.refund_service_13_state_1_redund}}</div>
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
			<div class="wulianBotBox1" v-show="isShow">
				<div class="roadTopBox">
					<div style="display: flex;flex-direction: row;align-items: center;height: 50px;">
						<div class="T_blue"></div>
						<span class="T_span">运营商排名</span>
					</div>
					<div class="dateR2">
						<div class="dateBox">
							<div class="blueBoxs" v-for="item in dayOFyunyingshang" :class="{ BGactive:item.id == isActive3 }" @click="changeBg3(item.id),chooseD2(item.id)">{{item.name}}</div>
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
				//
				selected: 0, //下拉框
				pagenum1: 1, //分页
				pagenum2: 1, //分页
				token: '', //token令牌
				//
				dataofMotorcyclecharging: [],
				ParkingRanking:[],
				RankingOfOperators:[],
				percentage:[],
				moneyList:[],
				//
				max:'',
				num:[],
				const:[],
				shuzu:[],
				testshuzu:[1,2,3,4],
				testshuzi:10,
				hahaa:[],
				max2:'',
				diyigebaifenbi:'',
                shiyonglvgebaifenbi:'',
                isActive101:false,
                hasError: false,
                isShow:true,
				//
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
                panduan:[],
                panduan_y:[],
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
                yunyingshangpanduan:[],
                yunyingshang_y:[],
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
                dayOFyunyingshang: [{
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
			};
		},
		created() {
			this.token = localStorage.getItem('token')
            //
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
            this.first()
		},
		methods: {
            delarr(){
                this.dayOFyunyingshang.splice(0 , 1)
                console.log(this.dayOFyunyingshang)
            },
            // yunyingshanghidefun(){
            //     // document.getElementsByClassName("oneCard-right").classname = "oneCard-right-change";
            //     var root=document.getElementsByClassName("root")[0];
	        //     root.style.
            //     console.log(155555)
            // },
            changeStyle(){
                document.getElementsByClassName("dateBoxzhandian").classname = "dateBoxforchange";
                
            },
			handleCurrentChange(newPage) {
				console.log(1)
			},
			//a接收值=>为调用这个函数是传入的值，这里与:percentage="percentage1(item.payment_service_13_pay)中的payment_service_13_pay对应
			percentage1(a) {
				return 100 * (a / this.max);
			},
			percentage2(b) {
				return 100 * (b / this.max2);
			},
			percentage3(fenzi,fenmu) {
				// return Math.round(item.charger_type_4_gun/item.charger_type_4_gun*100);
				return  this.diyigebaifenbi
			},
            percentage4(fenzi,fenmu) {
				// return Math.round(item.charger_type_4_gun/item.charger_type_4_gun*100);
				return  this.shiyonglvgebaifenbi
			},
		
			format(percentage) {
				return (percentage = "8934");
			},
			first() {
				let toKen = this.token.replace(/\"/g, "")
				console.log(toKen)
				this.$axios.get("/admin/api/report/91225BB2E2C3440C843F53DB6D86887D?token=" + toKen)//实时数据
					.then(res => {
						if(res.status == 200) {
							this.dataofMotorcyclecharging = res.data.data //接口里面的data下的data数据
							this.diyigebaifenbi = Math.round(res.data.data[0].charger_type_4_count_online/res.data.data[0].charger_type_4_count*100)
                            this.shiyonglvgebaifenbi = Math.round(res.data.data[0].charger_type_4_gun/res.data.data[0].charger_type_4_gun*100)
						}
						console.log(res.data.data[0].charger_type_4_count_online)
						console.log(res.data.data[0].charger_type_4_count)
						console.log(res.data.data)
						// console.log(res)
					})
                //第一个折线图数据
				this.$axios.get("admin/api/report/BDD2490598E542E8A8FAE302F25D189C?token=" + toKen + "&page=1&row=7")
					.then(res => {
						if (res.status == 200) {
							this.zhexian = res.data.data
							for (let i in this.zhexian) {
								//汽车快充金额+慢充
								this.const = this.zhexian[i].payment_service_13_pay
								this.constArr.push(this.const)
								this.xzhou.push(this.zhexian[i].dt)
							}
                            console.log(this.const)
                            this.drawChart1()
						}
					})
				//第二个，柱状图数据，汽车站点日报
				this.$axios.get("admin/api/report/D72839B90D7D40A98EE1EEB4E66DE71F?token=" + toKen +
						"&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemTime + "&to=" + this.systemTime)
					.then(res => {
						console.log(res.data.data)
						if (res.status == 200) {
							this.zhandian = res.data.data
							for (let i in this.zhandian) {
								//汽车快充金额
								this.panduan.push(this.zhandian[i].payment_service_13_pay)
                                this.panduan_y.push(this.zhandian[i].name)
							}
                            // console.log(this.panduan)
                            if (this.panduan.length !== 0){
                                this.manchong= this.panduan
                                this.zhandianName = this.panduan_y
                                this.isActive1 = 1
                                this.drawChart2()
                            }else{
                                this.day.splice(0,1)
                                let toKen = this.token.replace(/\"/g, "")
					            this.$axios.get("admin/api/report/1478065A2844423E8ACE2FFC395356CC?token=" + toKen +
							            "&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemMonth + "&to=" + this.systemMonth)
						            .then(res => {
                                    // console.log(res.data.data)
                                    if (res.status == 200) {
                                        this.zhandian = res.data.data
                                        for (let i in this.zhandian) {
                                            //汽车快充金额
                                            this.panduan.push(this.zhandian[i].payment_service_13_pay)
                                            this.panduan_y.push(this.zhandian[i].name)
                                        }
                                        // console.log(this.panduan)
                                        if (this.panduan.length !== 0){
                                            this.isActive1 = 2
                                            this.manchong= this.panduan
                                            this.zhandianName = this.panduan_y
                                            this.drawChart2()
                                        }else{
                                            this.isActive1 = 3
                                            let toKen = this.token.replace(/\"/g, "")
                                            this.$axios.get("admin/api/report/BEDDD2BEF0364BA483794B9BA60D82F6?token=" + toKen +
                                                    "&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemYear + "&to=" + this.systemYear)
                                                .then(res => {
                                                    // console.log(res.data.data)
                                                    if (res.status == 200) {
                                                        // this.zhandian = res.data.data
                                                        console.log(this.zhandian)
                                                        for (let i in this.zhandian) {
                                                            //汽车快充金额
                                                            this.manchong.push(this.zhandian[i].payment_service_13_pay)
                                                            this.zhandianName.push(this.zhandian[i].name)
                                                        }
                                                        // console.log(this.manchong)
                                                    this.drawChart2()
                                                    this.changeStyle()
                                                    }
                                                })
                                            this.day.splice(0,2)
                                        }
                                    }
                                })
                            } 
						}
					})
				//第三个柱状图 运营商
				this.$axios.get("admin/api/report/64F7ABE046A84880B8B2213CB03A9259?token=" + toKen +
							"&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemTime + "&to=" + this.systemTime)
					.then(res => {
						console.log(res.data.data)
						if (res.status == 200) {
							this.yunying = res.data.data
							console.log(this.yunying)
							for (let i in this.yunying) {
								//汽车快充金额
								// this.yymanchong.push(this.yunying[i].payment_service_13_pay)
								// this.yyName.push(this.yunying[i].fullname)
                                this.yunyingshangpanduan.push(this.yunying[i].payment_service_13_pay)
                                this.yunyingshang_y.push(this.yunying[i].fullname)
							}
                            console.log(this.yunyingshangpanduan)
                            if (this.yunyingshangpanduan.length !== 0){
                                this.yymanchong = this.yunyingshangpanduan
                                this.yyName = this.yunyingshang_y
                                this.isActive3 =1
                                this.drawChart3()
                            }else{
                                this.dayOFyunyingshang.splice(0 , 1)
                                let toKen = this.token.replace(/\"/g, "")
                                this.$axios.get("admin/api/report/5205FB66C9C643348FA5C97D1752C839?token=" + toKen +
                                        "&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemMonth + "&to=" + this.systemMonth)
                                    .then(res => {
                                        if (res.status == 200) {
                                            this.yunying = res.data.data
                                            console.log(this.yunying)
                                            for (let i in this.yunying) {
                                                //汽车快充金额
                                                this.yunyingshangpanduan.push(this.yunying[i].payment_service_13_pay)
                                                this.yunyingshang_y.push(this.yunying[i].name)
                                            }
                                            console.log(this.yunyingshangpanduan)
                                            if(this.yunyingshangpanduan.length !== 0){
                                                this.yymanchong = this.yunyingshangpanduan
                                                this.yyName = this.yunyingshang_y
                                                this.isActive3 =2
                                                this.drawChart3()
                                            }else{
                                                this.dayOFyunyingshang.splice(0 , 1)
                                                let toKen = this.token.replace(/\"/g, "")
                                                this.$axios.get("admin/api/report/C2C647A9B5D241638E7FE4033C5A6999?token=" + toKen +
                                                        "&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemYear + "&to=" + this.systemYear)
                                                    .then(res => {
                                                        if (res.status == 200) {
                                                            this.yunying = res.data.data
                                                            for (let i in this.yunying) {
                                                                //汽车快充金额
                                                                this.yunyingshangpanduan.push(this.yunying[i].payment_service_13_pay)
                                                                this.yunyingshang_y.push(this.yunying[i].name)
                                                            }
                                                            if(this.yunyingshangpanduan.length !== 0){
                                                                this.yymanchong = this.yunyingshangpanduan
                                                                this.yyName = this.yunyingshang_y
                                                                this.isActive3 =3
                                                                this.drawChart3()
                                                            }else{
                                                                this.isActive101 = true
                                                                this.isShow = false
                                                            }
                                                        }
                                                    })
                                            }
                                        }
                                    })
                            }
							
						}
					})
			},
            chooseD2(id){
				this.yymanchong = []
				this.yyName = []
				if (id == 1) {
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/64F7ABE046A84880B8B2213CB03A9259?token=" + toKen +
							"&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemTime + "&to=" + this.systemTime)
						.then(res => {
							if (res.status == 200) {
								this.yunying = res.data.data
								for (let i in this.yunying) {
									//汽车快充金额
									this.yymanchong.push(this.yunying[i].payment_service_13_pay)
									this.yyName.push(this.yunying[i].name)
								}
								// console.log(this.manchong)
								this.drawChart3()
							}
						})
				}else if(id == 2){
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/5205FB66C9C643348FA5C97D1752C839?token=" + toKen +
							"&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemMonth + "&to=" + this.systemMonth)
						.then(res => {
							if (res.status == 200) {
								this.yunying = res.data.data
								for (let i in this.yunying) {
									//汽车快充金额
									this.yymanchong.push(this.yunying[i].payment_service_13_pay)
									this.yyName.push(this.yunying[i].name)
								}
								// console.log(this.manchong)
								this.drawChart3()
							}
						})
				}else if(id == 3){
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/C2C647A9B5D241638E7FE4033C5A6999?token=" + toKen +
							"&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemYear + "&to=" + this.systemYear)
						.then(res => {
							if (res.status == 200) {
								this.yunying = res.data.data
								for (let i in this.yunying) {
									//汽车快充金额
									this.yymanchong.push(this.yunying[i].payment_service_13_pay)
									this.yyName.push(this.yunying[i].name)
								}
								// console.log(this.manchong)
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
					this.$axios.get("admin/api/report/D72839B90D7D40A98EE1EEB4E66DE71F?token=" + toKen +
							"&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemTime + "&to=" + this.systemTime)
						.then(res => {
							// console.log(res.data.data)
							if (res.status == 200) {
								this.zhandian = res.data.data
								// console.log(this.zhandian)
								for (let i in this.zhandian) {
									//汽车快充金额
									this.manchong.push(this.zhandian[i].payment_service_13_pay)
									this.zhandianName.push(this.zhandian[i].name)
								}
								// console.log(this.manchong)
								this.drawChart2()
							}
						})
				}else if(id == 2){
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/1478065A2844423E8ACE2FFC395356CC?token=" + toKen +
							"&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemMonth + "&to=" + this.systemMonth)
						.then(res => {
							// console.log(res.data.data)
							if (res.status == 200) {
								this.zhandian = res.data.data
								console.log(this.zhandian)
								for (let i in this.zhandian) {
									//汽车快充金额
									this.manchong.push(this.zhandian[i].payment_service_13_pay)
									this.zhandianName.push(this.zhandian[i].name)
								}
								// console.log(this.manchong)
								this.drawChart2()
							}
						})
				}else if(id == 3){
					let toKen = this.token.replace(/\"/g, "")
					this.$axios.get("admin/api/report/BEDDD2BEF0364BA483794B9BA60D82F6?token=" + toKen +
							"&page=1&row=10&order=payment_service_13_pay&sort=desc&from=" + this.systemYear + "&to=" + this.systemYear)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhandian = res.data.data
								console.log(this.zhandian)
								for (let i in this.zhandian) {
									//汽车快充金额
									this.manchong.push(this.zhandian[i].payment_service_13_pay)
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
					this.$axios.get("admin/api/report/BDD2490598E542E8A8FAE302F25D189C?token=" + toKen + "&page=1&row=7") //近一周 日报 7天
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									//汽车快充金额+慢充
									this.const = this.zhexian[i].payment_service_13_pay
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
					this.$axios.get("admin/api/report/0906FC695A394B5B8DE1E56DDFEC4F6B?token=" + toKen + "&page=1&row=30") //进一月 日报 30天
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_13_pay
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
					this.$axios.get("admin/api/report/F6C2F765EF4D4250AE23095D7ED3E8D2?token=" + toKen + "&page=1&row=12") //近一年 月报 12月
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_13_pay
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
					this.$axios.get("admin/api/report/BDD2490598E542E8A8FAE302F25D189C?token=" + toKen + "&from=" + this.value1 +
							"&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_13_pay
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
					this.$axios.get("admin/api/report/0906FC695A394B5B8DE1E56DDFEC4F6B?token=" + toKen + "&from=" + this.value1 +
							"&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_13_pay
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
					this.$axios.get("admin/api/report/F6C2F765EF4D4250AE23095D7ED3E8D2?token=" + toKen + "&from=" + this.value1 +
							"&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian = res.data.data
								console.log(this.zhexian)
								for (let i in this.zhexian) {
									this.const = this.zhexian[i].payment_service_13_pay
									this.constArr.push(this.const)
									this.xzhou.push(this.zhexian[i].dt)
								}
								console.log(this.constArr)
                                if (this.constArr !== 0){
                                    this.drawChart1()
                                }
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
                var t;
                    clearTimeout(t)
                    t = setTimeout(function (){
                        myChart.setOption(option);
                    }, 2000);
                //  myChart.setOption(option);
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
				var t;
                    clearTimeout(t)
                    t = setTimeout(function (){
                        myChart.setOption(option);
                    }, 2000);
                //  myChart.setOption(option);
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
				var t;
                    clearTimeout(t)
                    t = setTimeout(function (){
                        myChart.setOption(option);
                    }, 2000);
                //  myChart.setOption(option);
			},
		},
	}
</script>

<style scoped="scoped">
	.contain-01 {
		text-align: center;
		position: relative;
		height: 110px;
		display: flex;
    	flex-direction: column;
    	justify-content: center;
	}
	.oneCard-right {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		height: 2150px;
	}
    .oneCardrightchange {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		height: 1530px;
	}

	.jindut {
		flex: 1;
	}
	
	.jindut1{
		flex: 1;
	}
	
	.jindut2{
		flex: 1;
	}
	.otherBoxsBotBox-1-1 {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 45%;
		align-items: center;
		height: 120px;
	}
	.otherBoxsBotBox-1>>>.el-progress {
		position: absolute;
	}
	.jindut1>>>.el-progress-bar__inner {
		border-radius: 5px;
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
		margin: 10px 0 10px 0;
		display: flex;
		flex-direction: column;
	}

	.jindutiaoBox {
		width: 100%;
		/* height: 10%; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.roadBotBox {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		position: absolute;
		bottom: 10px;
		right: 0px;
	}
	.dateBox3 {
		width: 300px;
		height: 30px;
		display: flex;
		flex-direction: row;
		border: solid 1px #0000FF;
		border-radius: 10px;
		cursor: pointer;
	}
	.blueBoxs {
		width: 100px;
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
		width: 120px;
		color: white;
		border-radius: 10px;
		text-align: center;
		line-height: 20px;
	}
	.otherWord-01 {
		height: 20px;
		width: 120px;
		color: white;
		border-radius: 10px;
		text-align: center;
		line-height: 20px;
		position: absolute;
		top: 64%;
		left: 50%;
        transform: translate(-50%,-50%);
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
	.otherNum-01 {
		position: absolute;
		color: white;
		font-size: 25px;
		font-weight: 600;
		top: 41%;
		left: 50%;
        transform: translate(-50%,-50%);
	}
	.otherNum-02 {
		color: white;
		font-size: 34px;
		font-weight: 600;
	}
    .otherNum-033 {
		color: white;
		font-size: 32px;
		font-weight: 600;
	}

	.otherBoxsBotBox {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 45%;
		align-items: center;
		height: 84.7px;
	}
	.otherBoxsBotBox-01 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 45%;
		align-items: center;
		height: 120px;
	}
	.otherBoxsBotBox-02 {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 45%;
		align-items: flex-end;
		height: 120px;
	}
	.otherBoxsBotBox-1 {
		position: relative;
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
	.dateSel>>>.el-input__inner {
		height: 35px;
		border: none;
		text-align: center;
	}

	.dateSel>>>.el-date-editor.el-input {
		width: 100px;
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


	.otherBoxs1 {
		width: 48%;
		height: 120px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background: url(../../assets/images/motokanbanimg02.png) no-repeat;
		background-size:100% 100%;
	}
	
	.otherBoxs2 {
		width: 48%;
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background: url(../../assets/images/motokanbanimg03.png) no-repeat;
		background-size:100% 100%;
	}
	
	.otherBoxs3 {
		width: 22%;
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background: url(../../assets/images/shexiang.png) no-repeat;
		background-size:100% 100%;
	}
	
	.otherBoxs4 {
		width: 22%;
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background: url(../../assets/images/cheliang.png) no-repeat;
		background-size:100% 100%;
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
		width: 180px;
		height: 120px;
		background: url(../../assets/images/motokanbanimg01.png) no-repeat;
		/* background-image: linear-gradient(88deg,
			#09bafd 0%,
			#5943ec 100%); */
		
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		align-items: center;
		justify-content: center;
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
		height: 180px;
	}
	.wulianBotBoxaaa {
		width: 100%;
		height: 140px;
		margin-top: 20px;
	}

	.wulianBotBox1 {
		width: 100%;
		height: 55%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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
		justify-content: space-between;
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
		/* width: 55%; */
		height: 30px;
		display: flex;
		flex-direction: row;
		border: solid 1px #0000FF;
		border-radius: 10px;
		cursor: pointer;
	}
    .dateBoxzhandian {
		width: 55%;
		height: 30px;
		display: flex;
		flex-direction: row;
		border: solid 1px #0000FF;
		border-radius: 10px;
		cursor: pointer;
	}
    .dateBoxforchange {
		width: 20%;
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

	.otherBoxsBot {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.otherNum {
		color: white;
		font-size: 33px;
		font-weight: 600;
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
    .contain-01>>>.el-progress {
        color: rgb(32,239,115);
    }
</style>

