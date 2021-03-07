<template>
	<div class="oneCard-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">用户数据</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="kanbanCon">
			<div class="kanbanConTab">
				<div v-for="item in tabList" style="cursor:pointer;">
					<div class="kanbanConTabW" :class="{ chooseB:item.id == isBg }" @click="changeBg(item.id),chooseYM(item.id)">
						{{item.name}}
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 1">
				<div class="kanbanConTop" v-for="item in numlist">
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">用户总数</div>
						<div class="kanbanConTopW2">{{item.users_count}}</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">用户钱包余额总数</div>
						<div>
							<span class="kanbanConTopW3">{{item.users_amount}}</span>
							<span class="kanbanConTopW4">元</span>
						</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">手机用户数</div>
						<div class="kanbanConTopW2">{{item.users_type_1_count}}</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">微信用户数</div>
						<div class="kanbanConTopW2">{{item.users_type_2_count}}</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">认证用户数</div>
						<div class="kanbanConTopW2">{{item.users_audit_count}}</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">用户积分</div>
						<div class="kanbanConTopW2">{{item.users_score}}</div>
					</div>
				</div>
				<div class="kanbanBotCon">
					<div class="kanbanBotConL">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div><span style="margin-left: 5px;font-size: 16px;">用户数量占比情况</span>
						</div>
						<div class="jindutiaoBox">
							<div class="jindu1">
								<div class="jindu1W">手机用户数占比</div>
								<div class="tiao">
									<el-progress :percentage="parseFloat(baifenbi)" :stroke-width="15" v-if="!isNaN(parseInt(baifenbi))"></el-progress>
								</div>
							</div>
							<div class="jindu2">
								<div class="jindu1W">微信用户数占比</div>
								<div class="tiao">
									<el-progress :percentage="parseFloat(baifenbi2)" :stroke-width="15" v-if="!isNaN(parseInt(baifenbi2))"></el-progress>
								</div>
							</div>
							<div class="jindu3">
								<div class="jindu1W">认证用户数占比</div>
								<div class="tiao">
									<el-progress :percentage="parseFloat(baifenbi3)" :stroke-width="15" v-if="!isNaN(parseInt(baifenbi3))"></el-progress>
								</div>
							</div>
						</div>
					</div>
					<div class="kanbanBotConR">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">用户实名认证情况</span>
						</div>
						<div class="kanbanConRImg" id="myEcharts">
						</div>
					</div>
				</div>
				<div class="kanbanBotBot">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">用户数量增长曲线</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id),getDateMes(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2 dateSel">
								<template>
									<div class="block" v-show="isBg2 == 1 || isBg2 == 2">
										<!-- 	<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyyMMdd" @change="chooseDate">
											</el-date-picker> -->
										<el-date-picker v-model="value1" type="date" placeholder="开始日期" value-format="yyyyMMdd" @change="chooseDate1">
										</el-date-picker>
										至
										<el-date-picker v-model="value2" type="date" placeholder="结束日期" value-format="yyyyMMdd" @change="chooseDate2">
										</el-date-picker>
									</div>
									<div class="block" v-show="isBg2 == 3">
										<el-date-picker v-model="value1" type="month" placeholder="开始月份" value-format="yyyyMM" @change="chooseDate1">
										</el-date-picker>
										至
										<el-date-picker v-model="value2" type="month" placeholder="结束月份" value-format="yyyyMM" @change="chooseDate2">
										</el-date-picker>
									</div>
								</template>
							</div>
							<div>
								<el-button type="primary" icon="el-icon-search" @click="searchBot()">查询</el-button>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts1">
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 2">
				<div class="kanbanConTop2" v-for="item in oneList">
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">储值卡数</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW2">{{item.cards_count}}</span>
								</div>
								<div class="bluebox">数量</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">储值卡余额</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">{{item.cards_amount}}</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="orangebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">离线卡数量</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">{{item.cards_type_3_count}}</div>
								<div class="bluebox">数量</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">网络卡数量</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">{{item.cards_type_2_count}}</div>
								<div class="bluebox">数量</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">鉴权卡数量</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">{{item.cards_type_1_count}}</div>
								<div class="bluebox">数量</div>
							</div>
							<!-- <div class="wordBox">
								<div>
									<span class="kanbanConTopW3">1323</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div> -->
						</div>
					</div>
				</div>
				<div class="kanbanBotCon">
					<div class="kanbanBotConL1">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div><span style="margin-left: 5px;font-size: 16px;">一卡通各种类占比情况</span>
						</div>
						<div class="jindutiaoBox2" id="myEcharts5">

						</div>
					</div>
					<div class="kanbanBotConR1">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">一卡通各种余额占比情况</span>
						</div>
						<div class="kanbanConRImg1" id="myEcharts6">
						</div>
					</div>
				</div>
				<div class="kanbanBotBot">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">一卡通各种卡数量增长曲线</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id),getDateMes1(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2 dateSel">
								<template>
									<div class="block" v-show="isBg2 == 1 || isBg2 == 2">
										<!-- 	<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyyMMdd" @change="chooseDate">
											</el-date-picker> -->
										<el-date-picker v-model="value1" type="date" placeholder="开始日期" value-format="yyyyMMdd" @change="chooseDate1">
										</el-date-picker>
										至
										<el-date-picker v-model="value2" type="date" placeholder="结束日期" value-format="yyyyMMdd" @change="chooseDate2">
										</el-date-picker>
									</div>
									<div class="block" v-show="isBg2 == 3">
										<el-date-picker v-model="value1" type="month" placeholder="开始月份" value-format="yyyyMM" @change="chooseDate1">
										</el-date-picker>
										至
										<el-date-picker v-model="value2" type="month" placeholder="结束月份" value-format="yyyyMM" @change="chooseDate2">
										</el-date-picker>
									</div>
								</template>
							</div>
							<div>
								<el-button type="primary" icon="el-icon-search" @click="searchBot4()">查询</el-button>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts4">
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 3">
				<div class="kanbanConTop1">
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">总量</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">0</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">0</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">消费</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">0</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">0</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">过期</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">0</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">0</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
				</div>
				<div class="kanbanBotBot1">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">用户实名认证情况</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2">
								<template>
									<div class="block">
										<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
										 end-placeholder="结束日期">
										</el-date-picker>
									</div>
								</template>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts2">
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 4">
				<div class="kanbanConTop1">
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">总量</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">0</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">0</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
					<div class="kanbanConTopWord1">
						<div class="kanbanConTopW1">消费</div>
						<div class="kanbanConTopWBox">
							<div class="wordBox">
								<div class="kanbanConTopW2">0</div>
								<div class="bluebox">总数</div>
							</div>
							<div class="wordBox">
								<div>
									<span class="kanbanConTopW3">0</span>
									<span class="kanbanConTopW4">元</span>
								</div>
								<div class="bluebox">余额</div>
							</div>
						</div>
					</div>
				</div>
				<div class="kanbanBotBot1">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">套餐总数、余额增长曲线</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2">
								<template>
									<div class="block">
										<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
										 end-placeholder="结束日期">
										</el-date-picker>
									</div>
								</template>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts3">
					</div>
				</div>
			</div>
			<div class="kanbanConBox" v-show="flag == 6">
				<div class="kanbanConTop2">
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">无感支付总数</div>
						<div class="kanbanConTopW2">0</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">钱包</div>
						<div class="kanbanConTopW2">0</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">微信</div>
						<div class="kanbanConTopW2">0</div>
					</div>
					<div class="kanbanConTopWord">
						<div class="kanbanConTopW1">支付宝</div>
						<div class="kanbanConTopW2">0</div>
					</div>
				</div>
				<div class="kanbanBotCon">
					<div class="kanbanBotConL6">
						<div class="kanbanBotConLTitle">
							<div class="blue"></div><span style="margin-left: 5px;font-size: 16px;">无感支付各种类占比情况</span>
						</div>
						<div class="jindutiaoBox6">
							<div id="myEcharts7"></div>
							<div id="myEcharts8"></div>
							<div id="myEcharts9"></div>
						</div>
					</div>
				</div>
				<div class="kanbanBotBot">
					<div class="zhexianTitle">
						<div class="kanbanBotBotLTitle">
							<div class="blue"></div>
							<span style="margin-left: 5px;font-size: 16px;">优惠券数量、余额增长曲线</span>
						</div>
						<div class="kanbanBotBotRTitle">
							<div class="chooseData1">
								<div v-for="item in date">
									<div :class="{ chooseBg:item.id == isBg2 }" @click="changeBg2(item.id)">
										{{item.name}}
									</div>
								</div>
							</div>
							<div class="chooseData2">
								<template>
									<div class="block">
										<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
										 end-placeholder="结束日期">
										</el-date-picker>
									</div>
								</template>
							</div>
						</div>
					</div>
					<div class="zhexianBox" id="myEcharts10">
					</div>
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
				numlist: [],
				wechat: '',
				all: '',
				phone: '',
				renzheng: '',
				huan: [],
				zhifubo: [],
				weixin: [],
				shouji: [],
				czkNum: [],
				jqkNum: [],
				lxkNum: [],
				wlkNum: [],
				oneDt: [],
				zhexian4: [],
				value1: '',
				value2: '',
				chuzhiAmount: '',
				tabList: [{
						name: '用户数',
						id: 1
					},
					{
						name: '一卡通',
						id: 2
					},
					{
						name: '优惠券',
						id: 3
					},
					{
						name: '套餐',
						id: 4
					},
					{
						name: '无感支付',
						id: 6
					}
				],
				isBg: 1,
				isBg2: 1,
				jian: '',
				flag: 1,
				value1: '',
				oneList: [],
				xzhou: [],
				yzhou: [],
				date: [{
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
				],
			}
		},
		created() {
			this.token = localStorage.getItem('token')
			this.getAll()
			this.fristMes()
		},
		mounted() {

		},
		computed: {
			baifenbi() {
				return ((this.phone / this.all) * 100).toFixed(1)
			},
			baifenbi2() {
				return ((this.wechat / this.all) * 100).toFixed(1)
			},
			baifenbi3() {
				return ((this.renzheng / this.all) * 100).toFixed(1)
			},
		},
		methods: {
			changeBg(id) {
				this.isBg = id;
				this.flag = id;
				if (id == 1) {
					this.$nextTick(() => {
						this.drawChart();
						this.drawChart1();
					});
				} else if (id == 3) {
					this.$nextTick(() => {
						this.drawChart2();
					});
				} else if (id == 4) {
					this.$nextTick(() => {
						this.drawChart3();
					});
				} else if (id == 2) {
					this.$nextTick(() => {
						this.drawChart4();
						this.drawChart5();
						this.drawChart6();
					});
				} else if (id == 6) {
					this.$nextTick(() => {
						this.drawChart7();
						this.drawChart8();
						this.drawChart9();
						this.drawChart10();
					});
				}
			},
			chooseDate1() {
				console.log(this.value1)

			},
			chooseDate2() {
				console.log(this.value2)
			},
			changeBg2(id) {
				this.isBg2 = id;
			},
			chooseYM(id) {
				let toKen = this.token.replace(/\"/g, "")
				if (id == 2) {
					this.$axios.get("admin/api/report/DE24EADC179A4D2BA5799A4916C61878?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=1")
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.oneList = res.data.data
								this.lixianNum = res.data.data[0].cards_type_3_count
								this.wangluokaNum = res.data.data[0].cards_type_2_count
								this.jianquankaNum = res.data.data[0].cards_type_1_count
								this.chuzhiAmount = res.data.data[0].cards_amount
								console.log(this.jianquankaNum)
							}
							this.drawChart5();
							this.drawChart6();
						})
					this.oneDt = []
					this.jqkNum = []
					this.lxkNum = []
					this.czkNum = []
					this.wlkNum = []
					this.$echarts.init(document.getElementById("myEcharts4")).dispose();
					this.$axios.get("admin/api/report/6B52A176C758419699BC8E2113094232?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=7&from=" + this.value1 + "&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian4 = res.data.data
								for (let i in this.zhexian4) {
									this.oneDt.push(this.zhexian4[i].dt)
									this.jqkNum.push(this.zhexian4[i].cards_type_1_count)
									this.lxkNum.push(this.zhexian4[i].cards_type_3_count)
									this.czkNum.push(this.zhexian4[i].cards_count)
									this.wlkNum.push(this.zhexian4[i].cards_type_2_count)
								}
							}
							this.drawChart4();
						})
				}
			},
			getAll() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				// console.log(toKen)
				this.$axios.get("admin/api/report/A292EEA6A47A475FB715361163148202?token=" + toKen)
					.then(res => {
						console.log(res.data.data)
						if (res.status == 200) {
							this.numlist = res.data.data
							this.all = res.data.data[0].users_count
							this.wechat = res.data.data[0].users_type_2_count
							this.renzheng = res.data.data[0].users_audit_count
							this.phone = res.data.data[0].users_type_1_count
							this.jian = this.all - this.renzheng
							console.log(this.jian)
							this.drawChart();
						}
					})
			},
			searchBot4() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				if (this.isBg2 == 1) {
					this.oneDt = []
					this.jqkNum = []
					this.lxkNum = []
					this.czkNum = []
					this.wlkNum = []
					this.$echarts.init(document.getElementById("myEcharts4")).dispose();
					this.$axios.get("admin/api/report/6B52A176C758419699BC8E2113094232?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=7&from=" + this.value1 + "&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian4 = res.data.data
								for (let i in this.zhexian4) {
									this.oneDt.push(this.zhexian4[i].dt)
									this.jqkNum.push(this.zhexian4[i].cards_type_1_count)
									this.lxkNum.push(this.zhexian4[i].cards_type_3_count)
									this.czkNum.push(this.zhexian4[i].cards_count)
									this.wlkNum.push(this.zhexian4[i].cards_type_2_count)
								}
							}
							this.drawChart4();
						})
				} else if (this.isBg2 == 2) {
					this.oneDt = []
					this.jqkNum = []
					this.lxkNum = []
					this.czkNum = []
					this.wlkNum = []
					this.$echarts.init(document.getElementById("myEcharts4")).dispose();
					this.$axios.get("admin/api/report/0686D43D0CFE4EB8955BAB813B663FAD?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=30&from=" + this.value1 + "&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian4 = res.data.data
								for (let i in this.zhexian4) {
									this.oneDt.push(this.zhexian4[i].dt)
									this.jqkNum.push(this.zhexian4[i].cards_type_1_count)
									this.lxkNum.push(this.zhexian4[i].cards_type_3_count)
									this.czkNum.push(this.zhexian4[i].cards_count)
									this.wlkNum.push(this.zhexian4[i].cards_type_2_count)
								}
							}
							this.drawChart4();
						})
				} else if (this.isBg2 == 3) {
					this.oneDt = []
					this.jqkNum = []
					this.lxkNum = []
					this.czkNum = []
					this.wlkNum = []
					this.$echarts.init(document.getElementById("myEcharts4")).dispose();
					this.$axios.get("admin/api/report/74AD058E9AB04435AD2AD77F1F02846B?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=12&from=" + this.value1 + "&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian4 = res.data.data
								for (let i in this.zhexian4) {
									this.oneDt.push(this.zhexian4[i].dt)
									this.jqkNum.push(this.zhexian4[i].cards_type_1_count)
									this.lxkNum.push(this.zhexian4[i].cards_type_3_count)
									this.czkNum.push(this.zhexian4[i].cards_count)
									this.wlkNum.push(this.zhexian4[i].cards_type_2_count)
								}
							}
							this.drawChart4();
						})
				}
			},

			searchBot() {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				if (this.isBg2 == 1) {
					this.xzhou = []
					this.shouji = []
					this.weixin = []
					this.zhifubo = []
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/C66DF2CDB1224F1ABFCE23D2412A6BA5?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=7&from=" + this.value1 + "&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexianList = res.data.data
								for (let i in this.zhexianList) {
									this.xzhou.push(this.zhexianList[i].dt)
									this.shouji.push(this.zhexianList[i].users_type_1_count)
									this.weixin.push(this.zhexianList[i].users_type_2_count)
									this.zhifubo.push(this.zhexianList[i].users_type_3_count)
								}
							}
							this.drawChart1();
						})
				} else if (this.isBg2 == 2) {
					this.xzhou = []
					this.shouji = []
					this.weixin = []
					this.zhifubo = []
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/C66DF2CDB1224F1ABFCE23D2412A6BA5?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=30&from=" + this.value1 + "&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexianList = res.data.data
								for (let i in this.zhexianList) {
									this.xzhou.push(this.zhexianList[i].dt)
									this.shouji.push(this.zhexianList[i].users_type_1_count)
									this.weixin.push(this.zhexianList[i].users_type_2_count)
									this.zhifubo.push(this.zhexianList[i].users_type_3_count)
								}
							}
							this.drawChart1();
						})
				} else if (this.isBg2 == 3) {
					this.xzhou = []
					this.shouji = []
					this.weixin = []
					this.zhifubo = []
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/CA2D285CB59A4E9B8DCDC529762D7DE1?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=12&from=" + this.value1 + "&to=" + this.value2)
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexianList = res.data.data
								for (let i in this.zhexianList) {
									this.xzhou.push(this.zhexianList[i].dt)
									this.shouji.push(this.zhexianList[i].users_type_1_count)
									this.weixin.push(this.zhexianList[i].users_type_2_count)
									this.zhifubo.push(this.zhexianList[i].users_type_3_count)
								}
							}
							this.drawChart1();
						})
				}
			},
			fristMes() {
				let toKen = this.token.replace(/\"/g, "")
				this.$axios.get("admin/api/report/C66DF2CDB1224F1ABFCE23D2412A6BA5?token=" + toKen +
						"&order=dt&sort=asc&page=1&row=7")
					.then(res => {
						console.log(res.data.data)
						if (res.status == 200) {
							this.zhexianList = res.data.data
							for (let i in this.zhexianList) {
								this.xzhou.push(this.zhexianList[i].dt)
								this.shouji.push(this.zhexianList[i].users_type_1_count)
								this.weixin.push(this.zhexianList[i].users_type_2_count)
								this.zhifubo.push(this.zhexianList[i].users_type_3_count)
							}
						}
						this.drawChart1();
					})
			},
			getDateMes1(id) {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				console.log(id)
				if (id == 1) {
					this.oneDt = []
					this.jqkNum = []
					this.lxkNum = []
					this.czkNum = []
					this.wlkNum = []
					this.value1 = ''
					this.value2 = ''
					// this.$echarts.init(document.getElementById("myEcharts4")).dispose();
					this.$axios.get("admin/api/report/6B52A176C758419699BC8E2113094232?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=7")
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian4 = res.data.data
								for (let i in this.zhexian4) {
									this.oneDt.push(this.zhexian4[i].dt)
									this.jqkNum.push(this.zhexian4[i].cards_type_1_count)
									this.lxkNum.push(this.zhexian4[i].cards_type_3_count)
									this.czkNum.push(this.zhexian4[i].cards_count)
									this.wlkNum.push(this.zhexian4[i].cards_type_2_count)
								}
							}
							this.drawChart4();
						})
				} else if (id == 2) {
					this.oneDt = []
					this.jqkNum = []
					this.lxkNum = []
					this.czkNum = []
					this.wlkNum = []
					this.value1 = ''
					this.value2 = ''
					this.$echarts.init(document.getElementById("myEcharts4")).dispose();
					this.$axios.get("admin/api/report/0686D43D0CFE4EB8955BAB813B663FAD?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=30")
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian4 = res.data.data
								for (let i in this.zhexian4) {
									this.oneDt.push(this.zhexian4[i].dt)
									this.jqkNum.push(this.zhexian4[i].cards_type_1_count)
									this.lxkNum.push(this.zhexian4[i].cards_type_3_count)
									this.czkNum.push(this.zhexian4[i].cards_count)
									this.wlkNum.push(this.zhexian4[i].cards_type_2_count)
								}
							}
							this.drawChart4();
						})
				} else if (id == 3) {
					this.oneDt = []
					this.jqkNum = []
					this.lxkNum = []
					this.czkNum = []
					this.wlkNum = []
					this.value1 = ''
					this.value2 = ''
					this.$echarts.init(document.getElementById("myEcharts4")).dispose();
					this.$axios.get("admin/api/report/74AD058E9AB04435AD2AD77F1F02846B?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=12")
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexian4 = res.data.data
								for (let i in this.zhexian4) {
									this.oneDt.push(this.zhexian4[i].dt)
									this.jqkNum.push(this.zhexian4[i].cards_type_1_count)
									this.lxkNum.push(this.zhexian4[i].cards_type_3_count)
									this.czkNum.push(this.zhexian4[i].cards_count)
									this.wlkNum.push(this.zhexian4[i].cards_type_2_count)
								}
							}
							this.drawChart4();
						})
				}
			},
			getDateMes(id) {
				//token去掉引号
				let toKen = this.token.replace(/\"/g, "")
				console.log(id)
				if (id == 1) {
					this.xzhou = []
					this.shouji = []
					this.weixin = []
					this.zhifubo = []
					this.value1 = ''
					this.value2 = ''
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/C66DF2CDB1224F1ABFCE23D2412A6BA5?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=7")
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexianList = res.data.data
								for (let i in this.zhexianList) {
									this.xzhou.push(this.zhexianList[i].dt)
									this.shouji.push(this.zhexianList[i].users_type_1_count)
									this.weixin.push(this.zhexianList[i].users_type_2_count)
									this.zhifubo.push(this.zhexianList[i].users_type_3_count)
								}
							}
							this.drawChart1();
						})
				} else if (id == 2) {
					this.xzhou = []
					this.shouji = []
					this.weixin = []
					this.zhifubo = []
					this.value1 = ''
					this.value2 = ''
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/C66DF2CDB1224F1ABFCE23D2412A6BA5?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=30")
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexianList = res.data.data
								for (let i in this.zhexianList) {
									this.xzhou.push(this.zhexianList[i].dt)
									this.shouji.push(this.zhexianList[i].users_type_1_count)
									this.weixin.push(this.zhexianList[i].users_type_2_count)
									this.zhifubo.push(this.zhexianList[i].users_type_3_count)
								}
							}
							this.drawChart1();
						})
				} else if (id == 3) {
					this.xzhou = []
					this.shouji = []
					this.weixin = []
					this.zhifubo = []
					this.value1 = ''
					this.value2 = ''
					this.$echarts.init(document.getElementById("myEcharts1")).dispose();
					this.$axios.get("admin/api/report/CA2D285CB59A4E9B8DCDC529762D7DE1?token=" + toKen +
							"&order=dt&sort=asc&page=1&row=12")
						.then(res => {
							console.log(res.data.data)
							if (res.status == 200) {
								this.zhexianList = res.data.data
								for (let i in this.zhexianList) {
									this.xzhou.push(this.zhexianList[i].dt)
									this.shouji.push(this.zhexianList[i].users_type_1_count)
									this.weixin.push(this.zhexianList[i].users_type_2_count)
									this.zhifubo.push(this.zhexianList[i].users_type_3_count)
								}
							}
							this.drawChart1();
						})
				}
			},
			drawChart1() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts1"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1'],
					grid: {

					},
					legend: {
						data: ['手机用户', '微信用户', '支付宝用户'],
						orient: 'horizontal', //垂直显示
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						itemGap: 100, //图例间隔
						textStyle: {
							fontSize: 16
						},
					},
					xAxis: {
						data: this.xzhou,
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数',
					},
					series: [{
							name: '手机用户',
							type: 'line',
							data: this.shouji,
							smooth: true,
							symbol: 'circle',
							symbolSize: 10,
							lineStyle: {
								color: '#ff7200',
								width: 4,
								type: 'solid'
							},
						},
						{
							name: '微信用户',
							type: 'line',
							data: this.weixin,
							smooth: true,
							symbol: 'circle',
							symbolSize: 10,
							lineStyle: {
								color: '#00cc57',
								width: 4,
								type: 'solid'
							},
						},
						{
							name: '支付宝用户',
							type: 'line',
							data: this.zhifubo,
							smooth: true,
							symbol: 'circle',
							symbolSize: 10,
							lineStyle: {
								color: '#238ae1',
								width: 4,
								type: 'solid'
							},
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
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1'],
					grid: {

					},
					legend: {
						data: ['手机用户', '微信用户', '支付宝用户'],
						orient: 'horizontal', //垂直显示
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						itemGap: 100, //图例间隔
						textStyle: { //图例文字的样式
							color: '#fff',
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
						data: ['2020-10-1', '2020-9-7', '2020-7-5', '2020-9-7', '2020-9-13'],
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数'
					},
					series: [{
							name: '手机用户',
							type: 'line',
							data: 0,
							smooth: true,
						},
						{
							name: '微信用户',
							type: 'line',
							data: 0,
							smooth: true,
						},
						{
							name: '支付宝用户',
							type: 'line',
							data: 0,
							smooth: true,
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
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1'],
					grid: {

					},
					legend: {
						data: ['鉴权卡数量', '网络卡数量', '离线卡数量'],
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
						data: this.oneDt,
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数'
					},
					series: [{
							name: '鉴权卡数量',
							type: 'line',
							data: this.jqkNum,
							smooth: true,
						},
						{
							name: '网络卡数量',
							type: 'line',
							data: this.wlkNum,
							smooth: true,
						},
						{
							name: '离线卡数量',
							type: 'line',
							data: this.lxkNum,
							smooth: true,
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
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1'],
					grid: {

					},
					legend: {
						data: ['手机用户', '微信用户', '支付宝用户'],
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
						data: ['2020-10-1', '2020-9-7', '2020-7-5', '2020-9-7', '2020-9-13'],
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数'
					},
					series: [{
							name: '手机用户',
							type: 'line',
							data: 0,
							smooth: true,
						},
						{
							name: '微信用户',
							type: 'line',
							data: 0,
							smooth: true,
						},
						{
							name: '支付宝用户',
							type: 'line',
							data: 0,
							smooth: true,
						}
					]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'horizontal',
						data: ['未实名用户', '已实名用户'],
						y: 'bottom', //延Y轴居中
						x: 'center', //居右显示
						itemGap: 120, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#0000FF', '#f7f752'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '16',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: this.jian,
								name: '未实名用户'
							},
							{
								value: this.renzheng,
								name: '已实名用户'
							}
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart5() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts5"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						data: ['鉴权卡总数', '网络卡总数', '离线卡总数'],
						y: 'center',
						x: 'right', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#79f390', '#63bdf4', '#f46465'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '16',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: this.jianquankaNum,
								name: '鉴权卡总数'
							},
							{
								value: this.wangluokaNum,
								name: '网络卡总数'
							},
							{
								value: this.lixianNum,
								name: '离线卡总数'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart6() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts6"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						data: ['鉴权卡余额', '储值卡余额', '离线卡余额'],
						y: 'center',
						x: 'right', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#ff0f00', '#fe9e02', '#f7f752'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '16',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 0,
								name: '鉴权卡余额'
							},
							{
								value: this.chuzhiAmount,
								name: '储值卡余额'
							},
							{
								value: 0,
								name: '离线卡余额'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart7() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts7"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'horizontal',
						data: ['总数', '钱包'],
						y: 'bottom',
						x: 'center', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#4654f9', '#f74850'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '16',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 0,
								name: '总数'
							},
							{
								value: 0,
								name: '钱包'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart8() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts8"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'horizontal',
						data: ['总数', '支付宝'],
						y: 'bottom',
						x: 'center', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#4654f9', '#2cdcf4'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '16',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 0,
								name: '总数'
							},
							{
								value: 0,
								name: '支付宝'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart9() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts9"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'horizontal',
						data: ['总数', '微信'],
						y: 'bottom',
						x: 'center', //居右显示
						itemGap: 50, //图例间隔
						icon: 'circle', //图例形状 circle圆形
					},
					color: ['#4654f9', '#4af46e'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '16',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 0,
								name: '总数'
							},
							{
								value: 0,
								name: '微信'
							},
						]
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawChart10() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myEcharts10"));
				// 指定图表的配置项和数据
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					color: ['#ff7200', '#00cc57', '#238ae1', 'purple'],
					grid: {

					},
					legend: {
						data: ['无感支付总数', '钱包支付', '微信支付', '支付宝支付'],
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
						data: ['2020-10-1', '2020-9-7', '2020-7-5', '2020-9-7', '2020-9-13'],
						fontSize: 18,
					},
					yAxis: {
						type: 'value',
						name: '单位:人数'
					},
					series: [{
							name: '无感支付总数',
							type: 'line',
							data: 0,
							smooth: true,
						},
						{
							name: '钱包支付',
							type: 'line',
							data: 0,
							smooth: true,
						},
						{
							name: '微信支付',
							type: 'line',
							data: 0,
							smooth: true,
						},
						{
							name: '支付宝支付',
							type: 'line',
							data: 0,
							smooth: true,
						}
					]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
		}
	}
</script>

<style scoped="scoped">
	.zhexianBox {
		width: 100%;
		height: 90%;
	}


	.oneCard-right {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	.block>>>.el-range__icon {
		line-height: 25px;
	}

	.block>>>.el-range-separator {
		line-height: 25px;
	}

	.kanbanConTopWBox {
		display: flex;
		flex-direction: row;
		width: 80%;
		justify-content: center;
		height: 70px;

	}

	.kanbanConTopW1 {
		font-size: 16px;
	}

	.dateSel>>>.el-date-editor.el-input {
		width: 150px;
	}

	.dateSel>>>.el-input__icon {
		line-height: 0px;
	}

	.dateSel>>>.el-input__inner {
		height: 34px;
		border: none;
		text-align: center;
	}

	.bluebox {
		width: 50px;
		height: 20px;
		border-radius: 10px;
		background-color: #1e69fe;
		text-align: center;
		color: white;
	}

	.orangebox {
		width: 50px;
		height: 20px;
		border-radius: 10px;
		background-color: orange;
		text-align: center;
		color: white;
	}

	.tiao>>>.el-progress-bar {
		width: 98%;
	}

	.wordBox {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 70px;
	}



	.chooseData2 {
		width: 43%;
		height: 30px;
		border: solid 1px #0000FF;
		border-radius: 10px;
		overflow: hidden;
	}

	.zhexianTitle {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 30px;
	}

	.kanbanBotBotRTitle {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
	}

	.kanbanBotBotRTitle>>>.el-button--primary {
		color: #FFF;
		background-color: #0000FF;
		border-color: #0000FF;
		height: 35px;
	}

	.chooseData1 {
		display: flex;
		flex-direction: row;
		width: 40%;
		border: solid 1px #0000FF;
		border-radius: 10px;
		cursor: pointer;
	}

	.chooseData1 div {
		display: flex;
		flex: 4;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}

	.kanbanBotBot {
		width: 100%;
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.kanbanBotBot1 {
		width: 100%;
		height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.kanbanBotConLTitle {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.kanbanBotBotLTitle {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 50%;
	}

	.kanbanConRImg {
		width: 80%;
		margin: 0 auto;
		height: 210px;
	}

	.kanbanConRImg1 {
		width: 100%;
		margin: 0 auto;
		height: 210px;
	}

	.jindu1 {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 30px;
		align-items: center;
	}

	.jindu2 {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 30px;
		align-items: center;
	}

	.jindu3 {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 30px;
		align-items: center;
	}

	.jindutiaoBox>>>.el-progress-bar__outer {
		background-color: #7c8196;
	}

	.jindu1>>>.el-progress-bar__inner {
		background-color: #f7f752;
	}

	.jindu2>>>.el-progress-bar__inner {
		background-color: #79fc73;
	}

	.jindu3>>>.el-progress-bar__inner {
		background-color: #587af7;
	}

	.jindutiaoBox>>>.el-progress__text {
		margin-left: 15px;
		color: #000000;
	}

	.blue {
		width: 5px;
		height: 15px;
		background-color: #0000FF;
	}

	.tiao {
		width: 72%;

	}

	.jindu1W {
		width: 20%;
		font-size: 12px;
	}

	.kanbanBotConR {
		display: flex;
		flex: 1;
		height: 250px;
		flex-direction: column;
	}

	.kanbanBotConR1 {
		display: flex;
		width: 30%;
		height: 250px;
		flex-direction: column;
		margin-right: 325px;
		justify-content: space-between;
	}

	.jindutiaoBox {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 150px;
		justify-content: space-between;
		bottom: 30px;
		position: relative;
	}

	.jindutiaoBox2 {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 210px;
		justify-content: space-between;
	}

	.jindutiaoBox6 {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 210px;
		justify-content: space-between;
	}

	.jindutiaoBox6 div {
		display: flex;
		flex: 4;
		height: 100%;
	}

	.kanbanBotConL {
		display: flex;
		width: 55%;
		height: 250px;
		flex-direction: column;
		justify-content: space-between;
	}

	.kanbanBotConL1 {
		display: flex;
		width: 30%;
		height: 250px;
		flex-direction: column;
		justify-content: space-between;
	}

	.kanbanBotConL6 {
		display: flex;
		width: 100%;
		height: 250px;
		flex-direction: column;
		justify-content: space-between;
	}


	.kanbanBotCon {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 250px;
		justify-content: space-between;
	}

	.kanbanConTopWord {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 30%;

	}

	.kanbanConTopWord1 {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100px;
		width: 30%;

	}

	.kanbanConTop {
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		width: 92%;
		height: 100px;
		justify-content: space-between;
		align-items: center;
	}

	.kanbanConTop1 {
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		width: 85%;
		height: 120px;
		justify-content: space-between;
		align-items: center;
	}

	.kanbanConTop2 {
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		width: 92%;
		height: 120px;
		justify-content: space-between;
		align-items: center;
	}

	.kanbanConTopW4 {
		font-size: 12px;
		color: orange;
	}

	.kanbanConTopW2 {
		font-size: 36px;
		color: #0000FF;
		font-weight: 700;
	}

	.kanbanConTopW3 {
		font-size: 36px;
		color: orange;
		font-weight: 700;
	}

	.chooseB {
		width: 100%;
		border-bottom: solid 2px #0000FF;
		color: #0000FF;
	}

	.chooseBg {
		width: 100%;
		height: 30px;
		background-color: #2754fb;
		color: white;
	}

	.kanbanCon {
		width: 95%;
		margin: 0 auto;
		height: 700px;
		display: flex;
		flex-direction: column;
	}

	.kanbanConTabW {
		font-size: 15px;
	}

	.UserAssets-right-top {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 20px auto;
		margin-top: 40px;
	}

	.kanbanConTab {
		display: flex;
		flex-direction: row;
		width: 500px;
		height: 30px;
		justify-content: space-between;
	}

	.user-left {
		width: 50%;
	}

	.users-right {
		width: 50%;
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
