<template>
	<div class="oneCard-right">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">排班管理</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="paibanBox">
			<div class="paibanTop">
				<div class="week" v-for="item in week" :class="{ BGactive:item.id == isActive }" @click="changeBg(item.id)">
					{{item.name}}
				</div>
			</div>
			<div class="paibanBot">
				<div class="paibanBotL">
					<div class="inpBox">
						<div class="inp">
							<div style="width: 90%;display: flex;flex-direction: row;justify-content: center;color:#0000FF ;align-items: center;">
								<input type="text" class="paiInp" placeholder="请输入道路名称 编号">
							</div>
							<div class="blueBot">
								<img src="../../assets/images/Paibansearch.png" />
							</div>
						</div>
					</div>
					<div class="inpBoxCon">
						<div class="inpConBox" v-for="item in stationList" :class="{ BGactive1:item.id == isActive1 }" @click="changeBg1(item.id),chooseStation(item.id)">
							<div style="font-size: 22px;">{{item.name}}</div>
						</div>
					</div>
					<div class="inpBoxBot">
						<div class="UserAssets-bottom">
							<div class="road-bottom-left" :data="stationList">
								<span style="font-size: 16px;">共{{stationTotal}}条信息</span>
							</div>
							<div class="road-bottom-right">
								<el-pagination background :current-page.sync.number="pagenum" @current-change="handleCurrentChange" :page-size="pagesize"
								 layout="prev, pager, next" :total="stationTotal" :pager-count='5'>
								</el-pagination>
							</div>
						</div>
					</div>
				</div>
				<div class="paibanBotR">
					<div style="display: flex;flex-direction: row;flex-wrap: wrap;height: 630px;width: 100%;" v-show="isActive == 1">
						<div class="smollBox" v-for="item in chargerList" v-show="chargerList != ''">
							<div style="font-size: 18px;">{{item.dev_id}}</div>
							<div class="gBox">
								<img src="../../assets/images/tanhao.png" style="width: 18px;height: 18px;" v-for="">
								<div v-for="obj in item.schedules['w1']" v-show="flag1 == true">
									<span class="Gword">{{obj.admin}}</span>
								</div>
							</div>
						</div>
						<div v-show="chargerList == undefined" style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;font-size: 18px;">
							暂无数据
						</div>
					</div>
					<div style="display: flex;flex-direction: row;flex-wrap: wrap;height: 630px;width: 100%;" v-show="isActive == 2">
						<div class="smollBox" v-for="item in chargerList" v-show="chargerList != ''">
							<div style="font-size: 18px;">{{item.dev_id}}</div>
							<div class="gBox">
								<img src="../../assets/images/tanhao.png" style="width: 18px;height: 18px;">
								<div v-for="obj in item.schedules['w2']">
									<span class="Gword">{{obj.admin}}</span>
								</div>
							</div>
						</div>
						<div v-show="chargerList == undefined" style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;font-size: 18px;">
							暂无数据
						</div>
					</div>
					<div style="display: flex;flex-direction: row;flex-wrap: wrap;height: 630px;width: 100%;" v-show="isActive == 3">
						<div class="smollBox" v-for="item in chargerList" v-show="chargerList != ''">
							<div style="font-size: 18px;">{{item.dev_id}}</div>
							<div class="gBox">
								<img src="../../assets/images/tanhao.png" style="width: 18px;height: 18px;">
								<div v-for="obj in item.schedules['w3']">
									<span class="Gword">{{obj.admin}}</span>
								</div>
							</div>
						</div>
						<div v-show="chargerList == undefined" style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;font-size: 18px;">
							暂无数据
						</div>
					</div>
					<div style="display: flex;flex-direction: row;flex-wrap: wrap;height: 630px;width: 100%;" v-show="isActive == 4">
						<div class="smollBox" v-for="item in chargerList" v-show="chargerList != ''">
							<div style="font-size: 18px;">{{item.dev_id}}</div>
							<div class="gBox">
								<img src="../../assets/images/tanhao.png" style="width: 18px;height: 18px;">
								<div v-for="obj in item.schedules['w4']">
									<span class="Gword">{{obj.admin}}</span>
								</div>
							</div>
						</div>
						<div v-show="chargerList == undefined" style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;font-size: 18px;">
							暂无数据
						</div>
					</div>
					<div style="display: flex;flex-direction: row;flex-wrap: wrap;height: 630px;width: 100%;" v-show="isActive == 5">
						<div class="smollBox" v-for="item in chargerList" v-show="chargerList != ''">
							<div style="font-size: 18px;">{{item.dev_id}}</div>
							<div class="gBox">
								<img src="../../assets/images/tanhao.png" style="width: 18px;height: 18px;">
								<div v-for="obj in item.schedules['w5']">
									<span class="Gword">{{obj.admin}}</span>
								</div>
							</div>
						</div>
						<div v-show="chargerList == undefined" style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;font-size: 18px;">
							暂无数据
						</div>
					</div>
					<div style="display: flex;flex-direction: row;flex-wrap: wrap;height: 630px;width: 100%;" v-show="isActive == 6">
						<div class="smollBox" v-for="item in chargerList" v-show="chargerList != ''">
							<div style="font-size: 18px;">{{item.dev_id}}</div>
							<div class="gBox">
								<img src="../../assets/images/tanhao.png" style="width: 18px;height: 18px;">
								<div v-for="obj in item.schedules['w6']">
									<span class="Gword">{{obj.admin}}</span>
								</div>
							</div>
						</div>
						<div v-show="chargerList == undefined" style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;font-size: 18px;">
							暂无数据
						</div>
					</div>
					<div style="display: flex;flex-direction: row;flex-wrap: wrap;height: 630px;width: 100%;" v-show="isActive == 7">
						<div class="smollBox" v-for="item in chargerList" v-show="chargerList != ''">
							<div style="font-size: 18px;">{{item.dev_id}}</div>
							<div class="gBox">
								<img src="../../assets/images/tanhao.png" style="width: 18px;height: 18px;">
								<div v-for="obj in item.schedules['w7']">
									<span class="Gword">{{obj.admin}}</span>
								</div>
							</div>
						</div>
						<div v-show="chargerList == undefined" style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;font-size: 18px;">
							暂无数据
						</div>
					</div>
					<div class="gBot">
						<div class="UserAssets-bottom">
							<div class="road-bottom-left" :data="chargerList">
								<span style="font-size: 16px;">共{{chargerTotal}}条信息</span>
							</div>
							<div class="road-bottom-right">
								<el-pagination background :current-page.sync.number="pagenum2" @current-change="handleCurrentChange2" :page-size="pagesize2"
								 layout="prev, pager, next" :total="chargerTotal" small :pager-count='5'>
								</el-pagination>
							</div>
						</div>
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
				option: '',
				username: '',
				isActive: true,
				dialogVisible: false,
				chargerTotal:0,
				stationTotal:0,
				stationList:[],
				chargerList:[],
				fristID:'',
				add: false,
				selected: 0, //下拉框
				pagenum: 1, //分页
				pagenum2: 1, //分页
				token: '', //token令牌
				pagesize: 5, //每次查询条数
				pagesize2: 30, //每次查询条数
				type: 0,
				input: '',
				isActive: 1,
				isActive1: 1,
				flag1:true,
				flag2:true,
				flag3:true,
				flag4:true,
				flag5:true,
				flag6:true,
				flag7:true,
				addList: [],
				week: [{
						id: 1,
						name: '星期一'
					}, {
						id: 2,
						name: '星期二'
					},
					{
						id: 3,
						name: '星期三'
					},
					{
						id: 4,
						name: '星期四'
					},
					{
						id: 5,
						name: '星期五'
					},
					{
						id: 6,
						name: '星期六'
					},
					{
						id: 7,
						name: '星期日'
					}
				]
			}
		},
		created() {
			this.token = localStorage.getItem('token')
			this.firstLeft()
		},
		methods: {
			changeBg(id) {
				this.isActive = id;
				console.log(id)
			},
			changeBg1(id) {
				this.isActive1 = id;
			},
			firstLeft(){
				let toKen = this.token.replace(/\"/g, "")
				this.$axios.get("admin/api/stations/3?token=" + toKen + "&page=" + this.pagenum + "&row=5")
					.then(res => {
						if(res.status == 200){
							this.stationList = res.data.stations
							this.stationTotal = res.data.total
							this.isActive1 = res.data.stations[0].id
							console.log(this.isActive1)
							this.fristCharger()
						}
					})
			},
			fristCharger(){
				let toKen = this.token.replace(/\"/g, "")
				this.$axios.get("admin/api/station/"+ this.isActive1+ "/chargers?token=" + toKen + "&page=" + this.pagenum2 + "&row=30&attach=schedule")
					.then(res => {
						if(res.status == 200){
							this.chargerList = res.data.chargers
							this.chargerTotal = res.data.total
						}
					})
			},
			chooseStation(id){
				let toKen = this.token.replace(/\"/g, "")
				this.$axios.get("admin/api/station/"+ id + "/chargers?token=" + toKen + "&page=" + this.pagenum2 + "&row=30&attach=schedule")
					.then(res => {
						if(res.status == 200){
							this.chargerList = res.data.chargers
							this.chargerTotal = res.data.total
							console.log(res.data)
							if(this.chargerList != undefined){
								console.log(this.chargerList[0].schedules['w1'].length)
								if(this.chargerList[0].schedules['w1'].length != 0){
									this.flag1 = false
									console.log(this.flag1)
								}
							}
						}
					})
			},
		
			//监听页码值改变
			handleCurrentChange(newPage) {
				//console.log(newPage)
				this.pagenum = newPage
				this.firstLeft()
			},
			handleCurrentChange2(newPage2) {
				//console.log(newPage)
				this.pagenum2 = newPage2
				this.fristCharger()
			},
	
		}
	}
</script>

<style scoped="scoped">
	.oneCard-right {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}
	
	.Gword{
		font-size: 16px;
		color: #7d7d7d;
	}
	
	.gBot{
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.inpBoxBot{
		margin-top: 20px;
	}

	.inpConBox {
		width: 100%;
		height: 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-bottom: solid 1px gainsboro;
	}
	
	
	.gBox{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 55%;
		align-items: center;
		
	}

	.el-table td {
		padding: 0 0;
	}

	.smollBox {
		width: 190px;
		height: 85px;
		background-color: #e5e5e5;
		box-shadow: 0px 0px 6px 0px rgba(50, 50, 50, 0.39);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10px 15px 5px 16px;
	}

	.blueBot {
		width: 10%;
		height: 40px;
		background-color: #1e69fe;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.inpBoxCon {
		height: 520px;
		width: 100%;
	}

	.inpBox {
		width: 100%;
		height: 80px;
		background-color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.inp {
		width: 90%;
		height: 40px;
		margin: 0 auto;
		border-radius: 10px;
		border: solid 2px #1e69fe;
		display: flex;
		flex-direction: row;
	}

	.paiInp {
		width: 80%;
		height: 90%;
		border: none;
	}

	.el-input__inner {
		height: 30px;
		border: none;
	}

	.paibanBotL {
		width: 30%;
		height: 100%;
		box-shadow: 0px 0px 16px 0px rgba(107, 130, 153, 0.15);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
	}

	.paibanBotR {
		width: 68%;
		height: 100%;
		box-shadow: 0px 0px 16px 0px rgba(107, 130, 153, 0.15);
		border-radius: 10px;
		flex-wrap: wrap;
		display: flex;
		flex-direction: row;
	}

	.week {
		width: 14.2%;
		height: 100px;
		background-color: white;
		line-height: 100px;
		text-align: center;
		font-size: 22px;
		color: #707070;
		box-sizing: border-box;
	}

	.BGactive {
		background-color: #bed3ff;
		border-bottom: solid 5px #1e69fe;
	}

	.BGactive1 {
		background-color: #bed3ff;
	}


	.paibanBox {
		width: 95%;
		height: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.paibanTop {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-radius: 5px;
		box-shadow: 0px 0px 16px 0px rgba(107, 130, 153, 0.15);
		overflow: hidden;
		cursor: pointer;
	}

	.paibanBot {
		width: 100%;
		height: 680px;
		box-shadow: 0px 0px 16px 0px rgba(107, 130, 153, 0.15);
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.tanchu {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.tanchu-text {
		width: 248px;
		height: 17px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #7b7b7b;
		margin-left: 5px;
	}

	.el-dialog {
		margin-top: 30vh !important;
	}

	.stateColor-red {
		color: red;
	}

	.stateColor-green {
		color: #2ec23c;
	}

	.active {
		background-color: white;
	}

	.operation {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 70px;
		margin: 0 auto;
	}

	.el-table__footer-wrapper,
	.el-table__header-wrapper {
		margin-top: 10px;
		background-color: #edf1f5;
	}

	.textWord {
		width: 390px;
		height: 30px;
		border: none;
	}

	/*  .is-opened>div::nth-child(1) {
	  background-color: white !important;
	} */

	.cell {
		text-align: center;
		font-size: 15px;
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.el-table .cell {
		line-height: 44px;
	}

	.UserAssets-bgcolor {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.UserAssets-right {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	/* 顶部按钮 */
	.el-button--primary {
		border-radius: 10px;
		height: 37px;
	}

	.el-button--success {
		border-radius: 10px;
		height: 37px;
	}

	.el-button--default {
		border-radius: 10px;
		padding: 10px 20px;
	}

	.addinput {
		border: 1px solid #1e69fe;
		border-radius: 10px;
	}

	.el-table {
		color: #908e8e;
	}

	.UserAssets-right-top {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 20px auto;
		margin-top: 40px;
	}


	.el-col-12 {
		width: 100%;
		text-align: center;
	}

	/* 字体 */
	.vive {
		font-size: 20px;
		color: white;
		text-align: center;
		display: flex;
		flex-direction: row;
		margin: 20px 55px;

	}

	.el-submenu__title {
		font-size: 20px;
		width: 100%;
	}

	/* 按钮字体 */
	.el-button {
		font-size: 16px;
		padding: 10px 20px;
	}


	.el-menu-item {
		font-size: 16px;
		color: #dbdbdb;
	}

	.menu-op {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-left: 8%;
	}

	.menu-op div {
		padding: 0px 15px;
		width: 40px;
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

	.el-button--primary {
		color: #FFF;
		background-color: #1e69fe;
		border-color: #1e69fe;
	}

	.el-button--success {
		color: #1e69fe;
		background-color: #fff;
		border-color: #1e69fe;
	}



	.user-left {
		width: 50%;
	}

	.users-right-w {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 150px;
		justify-content: space-between;
		float: right;
	}

	.users-right {
		width: 50%;
	}

	.user-right span {
		color: #8a9199;
	}

	.user-img {
		height: 40px;
		width: 40px;
		overflow: hidden;
		border-radius: 100%;

	}

	.el-menu-item.is-active {
		border-radius: 400px;
		background-color: white !important;
	}

	.el-menu-item.is-active:hover {
		background-color: #1e69fe;
	}

	.UserAssets-right-text {
		width: 650px;
		margin-left: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.select1 {
		width: 200px;
		height: 34px;
		border-radius: 10px;
		border: solid 1px #1e69fe;
		font-size: 16px;
		padding: 0 2%;
		margin: 0;
	}

	.textBox {
		width: 68%;
		height: 34px;
		border-radius: 10px;
		border: solid 1px #1e69fe;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.UserAssets-bottom {
		display: flex;
		flex-direction: row;
		width: 95%;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto !important;
	}

	.UserAssets-bottom-left {
		width: 50%;
	}

	.UserAssets-bottom-right {
		width: 50%;
		text-align: right;
	}

	.UserAssets-bottom-left span {
		width: 137px;
		height: 18px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		font-weight: 600;
		font-stretch: normal;
		line-height: 20px;
		letter-spacing: 0px;
		color: #333333;
	}

	.set {
		width: 40px;
	}

	.select1 option {
		text-align: center;
	}

	.sear-img {
		width: 15px;
		height: 15px;
		margin-left: 20px;
	}

	/* 第一行数据类型 */
	.el-table thead {
		color: black;
	}
</style>
