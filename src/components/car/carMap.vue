<template>
	<div class="oneCard-right" id="container">
		<div class="UserAssets-right-top">
			<div class="user-left">
				<span class="user-word">汽车充电全景图</span>
			</div>
			<div class="users-right">
				<myhead></myhead>
			</div>
		</div>
		<div class="mapConbox">
			<div class="input_right">
				<img src="../../assets/images/search.png" class="sear-img" />
				<input type="text" class="mapInput" placeholder="查找关键词">
			</div>
		</div>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
			<span>这是一段信息</span>
		</el-dialog>
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
				chargers: [],
				lnglat: '',
				dialogVisible: false,
				lng:'',//经度
				lat:'',//纬度
				getID:'',//点击坐标点获取到的id
			}
		},
		mounted() {
			this.getMap()
		},
		created() {

		},
		methods: {
			getMap() {
				this.$axios.get(`/map/gd/chargers/1,2`).then(res => {
					this.chargers = res.data.chargers;

					var map = new AMap.Map("container", {
						zoom: 4,
						center: [102.342785, 35.312316]
					});
					var style = [];

					style[1] = {
						url: require("../../assets/images/ACS.png"),
						anchor: new AMap.Pixel(6, 6),
						size: new AMap.Size(35, 40)
					};
					style[2] = {
						url: require("../../assets/images/DCicon.png"),
						anchor: new AMap.Pixel(6, 6),
						size: new AMap.Size(35, 40)
					};
					// console.log(style);
					// console.log(this.chargers);
					var mass = new AMap.MassMarks(this.chargers, {
						opacity: 0.8,
						zIndex: 111,
						cursor: "pointer",
						style: style
					});

					var marker = new AMap.Marker({
						content: " ",
						map: map
					});
					
					let _this = this;
					//点击标记点，弹窗
					mass.on("click", function(e) {
						_this.lnglat = e.lnglat
						_this.lng = e.data.lnglat[0]
						_this.lat = e.data.lnglat[1]
						_this.dialogVisible = true
					}),

					mass.on("mouseover", function(e) {
						marker.setPosition(e.data.lnglat);
						marker.setLabel({
							content: e.data.name
						});
					});
					mass.setMap(map);
				});
			}
		},
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
		width: 100%;

	}

	.input_right {
		width: 350px !important;
		display: flex;
		flex-direction: row;
		align-items: center;
		border: solid 1px #0000FF;
		border-radius: 10px;
		background-color: white;
	}

	.mapInput {
		width: 300px;
		height: 30px;
		border: none;
		margin-left: 20px;
	}

	.sear-img {
		width: 15px;
		height: 15px;
		margin-left: 10px;
	}

	.mapConbox {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		height: 35px;
		position: relative;
		z-index: 99;
	}


	.UserAssets-right-top {
		display: flex;
		flex-direction: row;
		width: 95%;
		margin: 20px auto;
		margin-top: 40px;
	}

	.user-left {
		width: 50%;
		position: relative;
		z-index: 99;
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
		position: relative;
		z-index: 99;
	}

	.user-right span {
		color: #8a9199;
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
