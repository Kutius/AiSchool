<template>
	<div class="wrap">
		<!-- 导航栏 -->
		<div class="header">
			<!-- 弃用logo -->
			<!-- <div id="logo">
				<a href="/index">
					<el-image :src="logoUrl" fit="scale-down" :lazy="true"></el-image>
				</a>
			</div> -->
			<div id="WebName">智慧校园</div>
			<div>
				<el-header>
					<el-menu
						:default-active="this.$route.path"
						class="el-menu-demo"
						mode="horizontal"
						router
						@select="handleSelect"
					>
						<el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
							<template slot="title">
								<span class="navTitle"> {{ item.navItem }}</span>
							</template>
						</el-menu-item>
					</el-menu>
				</el-header>
			</div>
		</div>
		<!-- 页面内容 -->
		<div class="main">
			<router-view></router-view>
		</div>
		<!-- 回到顶部 -->
		<el-backtop></el-backtop>
		<div class="footer">
			技术支持:郭其泽，黄佳纯，刘煌，魏子振，徐涛
		</div>
	</div>
</template>
<script>
export default {
	name: "Header",
	data() {
		return {
			navList: [
				{ name: "/index", navItem: "首页" },
				{ name: "/application", navItem: "应用大厅" },
				{ name: "/desktop", navItem: "个人桌面" },
				{ name: "/approval", navItem: "审批中心" },
			],
			logoUrl: require("../assets/logo.png"),
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
	},
};
</script>
<style scoped>
.wrap {
	height: 95vh;
	width: 100%;
}
/* 弃用logo */
/* #logo {
	width: 60px;
	height: 60px;
} */
#WebName {
	font-size: 22px;
	font-weight: 600;
	color: #409eff;
}
.main {
	/* height: 85vh; */
	/* background-color:blue; */
	/* position: absolute; */
	background-color: rgb(243, 246, 255);
}
.el-menu-demo {
	min-width: 60%;
}
.el-menu.el-menu--horizontal {
	border: none;
}
.header {
	position: fixed;
	top: 0;
	height: 50px;
	z-index: 999;
	width: 60%;
	padding: 0 20% 0 20%;
	/* border-bottom: 1px solid black; */
	background-color: #fff;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.main {
	margin-top: 60px;
}

.el-menu--horizontal > .el-menu-item {
	height: 50px;
}
.navTitle {
	font-weight: 500;
	font-size: 18px;
}
.footer {
	height: 5vh;
	/* background-color: aqua; */
	border-top: 1px solid rgb(209, 207, 207);
	margin: 0 auto;
	/* text-ali */
	text-align: center;
	line-height: 6vh;
}
</style>
