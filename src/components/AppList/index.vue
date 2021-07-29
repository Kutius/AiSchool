<template>
	<div id="appBox">
		<el-card
			shadow="hover"
			:body-style="{ padding: '30px 20px' }"
			v-for="(app, index) in appData"
			:key="index"
		>
			<div class="appInfo">
				<div>
					<el-image
						:src="app.imgUrl"
						fit="contain"
						:lazy="true"
						class="appImg"
					></el-image>
				</div>
				<div class="appText">
					<el-link href="#">
						<p class="p1">{{ app.title }}</p>
					</el-link>
					<p class="p2">{{ app.category }}</p>
				</div>
				<div class="iconBox">
					<i
						:class="
							app.isMarked ? 'el-icon-star-on markApp' : 'el-icon-star-off markApp'
						"
						@click="mark(index)"
					></i>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	name: "AppList",
	data() {
		return {
			appData: [
				{
					imgUrl: require("@/assets/sign.png"),
					title: "考勤签到",
					category: "日常服务",
					isMarked: false,
				},
				{
					imgUrl: require("@/assets/leave.png"),
					title: "学生请销假",
					category: "日常服务",
					isMarked: false,
				},
				{
					imgUrl: require("@/assets/return.png"),
					title: "离返校管理",
					category: "日常服务",
					isMarked: false,
				},
				{
					imgUrl: require("@/assets/information.png"),
					title: "学生信息采集",
					category: "日常服务",
					isMarked: false,
				},
				{
					imgUrl: require("@/assets/stuprove.png"),
					title: "在校生证明",
					category: "日常服务",
					isMarked: false,
				},
			],
		};
	},
	methods: {
		mark(index) {
			let mark = !this.appData[index].isMarked;
			this.$set(this.appData[index], "isMarked", mark);
			if (mark == true) {
				this.$message({
					message: "收藏成功!",
					type: "success",
				});
			} else {
				this.$message({
					message: "取消收藏!",
					type: "success",
				});
			}
		},
	},
};
</script>
<style scoped>
#appBox >>> .el-card {
	background-color: inherit;
	margin-top: 14px;
	background-color: white;
}
.el-card:hover {
	background-color: white;
}
.appInfo {
	display: flex;
	flex-direction: row;
}
.appImg {
	width: 40px;
	height: 40px;
}
.appText {
	margin-left: 20px;
}
.appText .p1 {
	margin-top: -6px;
	margin-bottom: 0;
	font-weight: 500;
	font-size: 16px;
}
.appText .p2 {
	margin-top: 6px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	color: #909399;
}
.iconBox {
	position: absolute;
	right: 20px;
}
.markApp:hover {
	color: #409eff;
}
</style>
