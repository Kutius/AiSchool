<template>
	<div id="application">
		<div class="tou">
			<div class="kuang">
				<input type="text" class="inp" placeholder="请输入检索词" />
				<button
					type="button"
					class=" glyphicon glyphicon-search   btn btn-primary  btn-lg "
					id="butt"
				></button>
			</div>
		</div>
		<div class="da">
			<div class="daohanlan ">
				<div class="yi">
					<ul class="yiul">
						<li class="frt">
							<h4>部门分类：</h4>
						</li>
						<li class="yili">
							<a href="#">学生处</a>
						</li>
						<li class="yili">
							<a href="#">保卫处</a>
						</li>
						<li class="yili">
							<a href="#">教务处</a>
						</li>
						<li class="yili">
							<a href="#">财务处</a>
						</li>
						<li class="yili">
							<a href="#">组织部</a>
						</li>
						<li class="yili">
							<a href="#">宣传部</a>
						</li>
						<li class="yili">
							<a href="#">QA流程</a>
						</li>
						<li class="yili">
							<a href="#">国资处</a>
						</li>
						<li class="yili">
							<a href="#">研究生院</a>
						</li>
						<li class="las">
							<button type="button" class="btn btn-primary btn-sm">全部</button>
						</li>
					</ul>
				</div>
				<div class="er">
					<ul class="erul">
						<li>
							<h4>服务类型：</h4>
						</li>
						<li class="erli"><a href="#">疫情平台</a></li>
						<li class="erli"><a href="#">教学整改</a></li>
						<li class="erli"><a href="#">迎新填表</a></li>
						<li class="erli"><a href="#">教职工入职填报</a></li>
						<li class="erli"><a href="#">服务清单</a></li>
						<li class="erli">
							<button type="button" class="btn btn-primary btn-sm">全部</button>
						</li>
					</ul>
				</div>
				<div class="san">
					<ul class="sanul">
						<li>
							<h4>服务方式：</h4>
						</li>
						<li class="sanli"><a href="#">自助服务</a></li>
						<li class="sanli"><a href="#">申请服务</a></li>
						<li class="sanli">
							<button type="button" class="btn btn-primary btn-sm">全部</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="neiron">
				<div class="ye">
					<div class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img
									class="media-object tupian"
									src="../assets/images/22.png"
									alt=""
								/>
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading   biao">
								<el-link @click="isVisible = true">学生省份信息变更申请</el-link>
							</h4>
							<p class="yep">财务处</p>
							<ul class="yeul">
								<li><a href="#">服务介绍</a></li>
								<li><a href="#">服务类型</a></li>
								<li><a href="#">服务资讯</a></li>
								<li><a href="#">联系方式</a></li>
								<li><a href="#">办理流程</a></li>
								<li><a href="#">事件进度</a></li>
							</ul>
						</div>
						<hr />
						<div class="dibu">
							<ul class="dibuul">
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/2two.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li>
									<p>3.5评分</p>
								</li>
								<li>
									<p>4500人访问</p>
								</li>
								<li>
									<p>200点赞</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ye">
					<div class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img
									class="media-object tupian"
									src="../assets/images/24.png"
									alt=""
								/>
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading   biao">
								<el-link @click="isVisible_2 = true">学生社团活动立项审批</el-link>
							</h4>
							<p class="yep">教务处</p>
							<ul class="yeul">
								<li><a href="#">服务介绍</a></li>
								<li><a href="#">服务类型</a></li>
								<li><a href="#">服务资讯</a></li>
								<li><a href="#">联系方式</a></li>
								<li><a href="#">办理流程</a></li>
								<li><a href="#">事件进度</a></li>
							</ul>
						</div>
						<hr />
						<div class="dibu">
							<ul class="dibuul">
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li>
									<p>4评分</p>
								</li>
								<li>
									<p>6000人访问</p>
								</li>
								<li>
									<p>400点赞</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ye">
					<div class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img
									class="media-object tupian"
									src="../assets/images/23.png"
									alt=""
								/>
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading   biao">
								<el-link @click="isVisible_3 = true">学生参加出国项目申请</el-link>
							</h4>
							<p class="yep">OA流程</p>

							<ul class="yeul">
								<li><a href="#">服务介绍</a></li>
								<li><a href="#">服务类型</a></li>
								<li><a href="#">服务资讯</a></li>
								<li><a href="#">联系方式</a></li>
								<li><a href="#">办理流程</a></li>
								<li><a href="#">事件进度</a></li>
							</ul>
						</div>
						<hr />
						<div class="dibu">
							<ul class="dibuul">
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li>
									<p>3评分</p>
								</li>
								<li>
									<p>1500人访问</p>
								</li>
								<li>
									<p>20点赞</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ye">
					<div class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img
									class="media-object tupian"
									src="../assets/images/25.png"
									alt=""
								/>
							</a>
						</div>
						<div class="media-body">
							<el-link>学生休学复学申请</el-link>
							<p class="yep">学生处</p>
							<ul class="yeul">
								<li><a href="#">服务介绍</a></li>
								<li><a href="#">服务类型</a></li>
								<li><a href="#">服务资讯</a></li>
								<li><a href="#">联系方式</a></li>
								<li><a href="#">办理流程</a></li>
								<li><a href="#">事件进度</a></li>
							</ul>
						</div>
						<hr />
						<div class="dibu">
							<ul class="dibuul">
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/2two.png" alt="" /></li>
								<li>
									<p>4.5评分</p>
								</li>
								<li>
									<p>500人访问</p>
								</li>
								<li>
									<p>400点赞</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ye">
					<div class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img
									class="media-object tupian"
									src="../assets/images/26.png"
									alt=""
								/>
							</a>
						</div>
						<div class="media-body">
							<el-link>学生证补发申请</el-link>
							<p class="yep">保卫处</p>
							<ul class="yeul">
								<li><a href="#">服务介绍</a></li>
								<li><a href="#">服务类型</a></li>
								<li><a href="#">服务资讯</a></li>
								<li><a href="#">联系方式</a></li>
								<li><a href="#">办理流程</a></li>
								<li><a href="#">事件进度</a></li>
							</ul>
						</div>
						<hr />
						<div class="dibu">
							<ul class="dibuul">
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li>
									<p>2评分</p>
								</li>
								<li>
									<p>1800人访问</p>
								</li>
								<li>
									<p>0点赞</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ye">
					<div class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img
									class="media-object tupian"
									src="../assets/images/27.png"
									alt=""
								/>
							</a>
						</div>
						<div class="media-body">
							<el-link>疫情期间学生请假申请</el-link>
							<p class="yep">组织部</p>
							<ul class="yeul">
								<li><a href="#">服务介绍</a></li>
								<li><a href="#">服务类型</a></li>
								<li><a href="#">服务资讯</a></li>
								<li><a href="#">联系方式</a></li>
								<li><a href="#">办理流程</a></li>
								<li><a href="#">事件进度</a></li>
							</ul>
						</div>
						<hr />
						<div class="dibu">
							<ul class="dibuul">
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li>
									<p>5评分</p>
								</li>
								<li>
									<p>7500人访问</p>
								</li>
								<li>
									<p>5000点赞</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ye ">
					<div class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img
									class="media-object tupian"
									src="../assets/images/28.png"
									alt=""
								/>
							</a>
						</div>
						<div class="media-body">
							<el-link>疫情期间学生返校申请</el-link>
							<p class="yep">组织部</p>
							<ul class="yeul">
								<li><a href="#">服务介绍</a></li>
								<li><a href="#">服务类型</a></li>
								<li><a href="#">服务资讯</a></li>
								<li><a href="#">联系方式</a></li>
								<li><a href="#">办理流程</a></li>
								<li><a href="#">事件进度</a></li>
							</ul>
						</div>
						<hr />
						<div class="dibu">
							<ul class="dibuul">
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/2two.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li>
									<p>3.5评分</p>
								</li>
								<li>
									<p>20000人访问</p>
								</li>
								<li>
									<p>2000点赞</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ye ">
					<div class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img
									class="media-object tupian"
									src="../assets/images/29.png"
									alt=""
								/>
							</a>
						</div>
						<div class="media-body">
							<el-link>智慧校园IT运维投诉服务</el-link>
							<p class="yep">宣传部</p>
							<ul class="yeul">
								<li><a href="#">服务介绍</a></li>
								<li><a href="#">服务类型</a></li>
								<li><a href="#">服务资讯</a></li>
								<li><a href="#">联系方式</a></li>
								<li><a href="#">办理流程</a></li>
								<li><a href="#">事件进度</a></li>
							</ul>
						</div>
						<hr />
						<div class="dibu">
							<ul class="dibuul">
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/2two.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li>
									<p>3.5评分</p>
								</li>
								<li>
									<p>500人访问</p>
								</li>
								<li>
									<p>0点赞</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ye ">
					<div class="media">
						<div class="media-left media-middle">
							<a href="#">
								<img
									class="media-object tupian"
									src="../assets/images/30.png"
									alt=""
								/>
							</a>
						</div>
						<div class="media-body">
							<el-link>学生第二课堂活动申请</el-link>
							<p class="yep">保卫处</p>
							<ul class="yeul">
								<li><a href="#">服务介绍</a></li>
								<li><a href="#">服务类型</a></li>
								<li><a href="#">服务资讯</a></li>
								<li><a href="#">联系方式</a></li>
								<li><a href="#">办理流程</a></li>
								<li><a href="#">事件进度</a></li>
							</ul>
						</div>
						<hr />
						<div class="dibu">
							<ul class="dibuul">
								<li><img src="../assets/images/one1.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li><img src="../assets/images/three.png" alt="" /></li>
								<li>
									<p>1评分</p>
								</li>
								<li>
									<p>200人访问</p>
								</li>
								<li>
									<p>0点赞</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="jieshu">
				<div class="jleft">
					<p>共10页</p>
				</div>
				<div class="jright">
					<nav aria-label="Page navigation">
						<ul class="pagination">
							<li>
								<a href="#" aria-label="Previous">
									<span aria-hidden="true">&laquo;</span>
								</a>
							</li>
							<li><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">....</a></li>
							<li><a href="#">10</a></li>
							<li>
								<a href="#" aria-label="Next">
									<span aria-hidden="true">&raquo;</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>

		<!-- 模态框 -->
		<el-dialog title="学生省份信息变更申请" :visible.sync="isVisible" width="70%">
			<stu-info></stu-info>
			<span slot="footer" class="dialog-footer">
				<el-button @click="isVisible = false">取 消</el-button>
				<el-button type="primary" @click="isVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<el-dialog title="学生社团活动立项审批" :visible.sync="isVisible_2" width="70%">
			<stu-acti></stu-acti>
			<span slot="footer" class="dialog-footer">
				<el-button @click="isVisible_2 = false">取 消</el-button>
				<el-button type="primary" @click="isVisible_2 = false">确 定</el-button>
			</span>
		</el-dialog>
		<el-dialog title="学生参加出国项目申请" :visible.sync="isVisible_3" width="70%">
			<stu-abrd></stu-abrd>
			<span slot="footer" class="dialog-footer">
				<el-button @click="isVisible_3 = false">取 消</el-button>
				<el-button type="primary" @click="isVisible_3 = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
//手动加载
import loadScript from "../util/loadExternalAssetMixin";
import stuInfo from "../components/Apps/stuInfo";
import stuActi from "../components/Apps/stuActi";
import stuAbrd from "../components/Apps/stuAbrd";

export default {
	name: "application",
	components: {
		stuInfo,
		stuActi,
		stuAbrd,
	},
	data() {
		return {
			isVisible: false,
			isVisible_2: false,
			isVisible_3: false,
		};
	},
	beforeMount() {
		loadScript("https://cdn.bootcss.com/jquery/3.4.1/jquery.slim.min.js", () => {
			loadScript("https://cdn.staticfile.org/twitter-bootstrap/3.4.1/js/bootstrap.min.js"); // 先加载jq后加载bootstrap
		});
	},
};
</script>

<style scoped>
#application {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 14px;
	line-height: 1.42857143;
	color: #333333;
	background-color: #fff;
}
a {
	text-decoration: none;
}

li {
	list-style-type: none;
}

.tou {
	height: 300px;
	background: url(../assets/images/1.png);
	background-size: 100% 300px;
	background-repeat: no-repeat;
}

.kuang {
	float: left;
	margin-top: 150px;
	margin-left: 480px;
}

.inp {
	width: 550px;
	height: 46px;
	font-size: 16px;
	border-radius: 5px;
}

#butt {
	position: relative;
	left: -8px;
	top: -1px;
}

.da {
	height: 1200px;
	background-color: #f3f6ff;
}

.daohanlan {
	float: left;
	height: 230px;
	width: 1094px;
	margin-top: 20px;
	margin-left: 200px;
	border-radius: 10px;
	background-color: white;
}

.daohanlan ul {
	float: left;
}

.daohanlan li {
	float: left;
}

.daohanlan a {
	font-size: 17px;
	color: black;
}

.daohanlan a:hover {
	color: skyblue;
}

.yi {
	float: left;
	margin-top: 20px;
}

.yili {
	margin-top: 20px;
	margin-left: 25px;
}

.yiul .frt {
	margin-top: 13px;
}

.yiul .las {
	margin-top: 17px;
	margin-left: 70px;
}

.san,
.er {
	float: left;
	margin-top: 10px;
}

.erli {
	margin-top: 8px;
	margin-left: 30px;
}

.sanli {
	margin-top: 8px;
	margin-left: 35px;
}

.neiron {
	float: left;
	height: 800px;
	width: 1094px;
	margin-top: 20px;
	margin-left: 200px;
	border-radius: 10px;
	background-color: #f3f6ff;
}

.neiron .ye {
	float: left;
	margin-left: 10px;
	margin-top: 10px;
	height: 250px;
	width: 354px;
	border-radius: 10px;
	background-color: white;
}

.tupian {
	height: 66px;
	width: 87px;
	border-radius: 5px;
	margin-left: 15px;
	margin-top: 40px;
}

.biao {
	margin-top: 30px;
}

.yeul {
	float: left;
}

.yeul li {
	float: left;
	margin-left: 7px;
	margin-top: 18px;
	background-color: #eaedf3;
}

.yep {
	color: grey;
	margin-top: 5px;
}

.yeul li a {
	color: black;
}

.yeul li a:hover {
	color: blue;
}

.dibuul {
	float: left;
	margin-left: -33px;
}

.dibuul li {
	float: left;
	margin-left: -2px;
}

.dibuul li p {
	margin-left: 19px;
	margin-top: 5px;
}

.jleft {
	float: left;
	margin-top: 20px;
	margin-left: 220px;
}

.jright {
	float: right;
	margin-right: 240px;
	margin-top: 5px;
}
.el-link {
	font-size: 18px;
}
</style>
<style src="../static/css/bootstrap.min.css" scoped></style>
