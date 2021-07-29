<template>
	<div id="content">
		<!-- 轮播图 -->
		<div class="block">
			<el-carousel trigger="click" height="350px">
				<el-carousel-item v-for="url in bannerList" :key="url">
					<el-image fit="cover" :src="url">
						<div slot="error" class="image-slot">
							<i class="el-icon-picture-outline"></i>
						</div>
					</el-image>
				</el-carousel-item>
			</el-carousel>
		</div>

		<el-row id="page">
			<!-- 新闻资讯&通知公告 -->
			<el-col :span="18">
				<el-tabs v-model="activeName" @tab-click="tabClick">
					<el-tab-pane name="first">
						<span slot="label">新闻资讯</span>
						<el-col :span="24" :offset="0">
							<NewsList></NewsList>
						</el-col>
					</el-tab-pane>
					<el-tab-pane name="second">
						<span slot="label">通知公告</span>
						<el-col :span="24" :offset="0">
							<NoticeBoard></NoticeBoard>
						</el-col>
					</el-tab-pane>
				</el-tabs>
			</el-col>
			<!-- 推荐应用 -->
			<el-col :span="5" :offset="1">
				<div>
					<p id="app-title">推荐应用</p>
				</div>
				<div>
					<el-col :span="24" :offset="0">
						<AppList></AppList>
					</el-col>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import NewsList from "../components/NewsList";
import NoticeBoard from "../components/NoticeBoard";
import AppList from "../components/AppList";

export default {
	name: "index",
	components: {
		NewsList,
		NoticeBoard,
		AppList,
	},
	data() {
		return {
			bannerList: [
				require("../assets/banner.jpg"),
				require("../assets/banner.jpg"),
				require("../assets/banner.jpg"),
				require("../assets/banner.jpg"),
			],
			activeName: "first",
		};
	},
	methods: {
		tabClick(tab) {
			console.log(tab);
		},
	},
};
</script>

<style scoped>
#content {
	width: 1170px;
	margin: 0 auto;
}
#page {
	margin-top: 40px;
}
.el-tabs__item.is-active {
	color: #409eff;
}
.el-tabs__item:hover {
	color: #409eff;
}
.el-tabs__item {
	color: rgb(205, 205, 205);
}
#app-title {
	font-size: 14px;
	font-weight: 500;
	padding-bottom: 5px;
	margin-bottom: 0;
	color: #409eff;
	border-bottom: 2px solid #409eff;
}
</style>
