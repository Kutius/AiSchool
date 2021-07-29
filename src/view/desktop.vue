<template>
	<div id="desktop">
		<div class="container">
			<div class="row">
				<div
					id="carousel-id"
					class="carousel slide"
					style="margin: 10px;"
					data-ride="carousel"
				>
					<ol class="carousel-indicators">
						<li data-target="#carousel-id" data-slide-to="0" class="active"></li>
						<li data-target="#carousel-id" data-slide-to="1"></li>
						<li data-target="#carousel-id" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="item active">
							<img src="../assets/img/l1.png" alt="" />
						</div>
						<div class="item">
							<img src="../assets/img/l2.png" alt="" />
						</div>
						<div class="item">
							<img src="../assets/img/l3.png" alt="" />
						</div>

						<a class="left carousel-control" href="#carousel-id" data-slide="prev"
							><span class="glyphicon glyphicon-chevron-left"></span
						></a>
						<a class="right carousel-control" href="#carousel-id" data-slide="next"
							><span class="glyphicon glyphicon-chevron-right"></span
						></a>
					</div>
				</div>
			</div>
		</div>

		<div class="container" style="margin-top: 30px;">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-8">
					<ul class="nav nav-tabs">
						<li class="active"><a href="#name1" data-toggle="tab">推荐应用</a></li>
						<li><a href="#name2" data-toggle="tab">最近使用</a></li>
						<li><a href="#name3" data-toggle="tab">我的收藏</a></li>
					</ul>
					<div class="tab-content" id="asd">
						<div class="tab-pane fade in active" id="name1">
							<div class="row">
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t1.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">教育教学</h4>
											<a href="#" @click="detailVisible_1 = true">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t2.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">智能排课</h4>
											<a href="#" @click="detailVisible_2 = true">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t3.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">教师评价</h4>
											<a href="#" @click="detailVisible_3 = true">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t4.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">教师档案</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t5.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">在线考试</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t6.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">问卷调查</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t7.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">请假管理</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t8.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">学生考勤</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t9.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">课程表</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t10.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">班级周刊</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t11.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">成绩管理</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t12.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">学业报告</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t13.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">研究学习</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t14.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">综合实践</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box1">
										<div class="media-left media-top">
											<img
												src="../assets/img/t15.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">任务协作</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="name2">
							<div class="row">
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/z1.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">校本选课</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/z2.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">家校互联</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/t9.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">课程表</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/z3.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">教学云盘</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/t5.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">在线考试</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/z4.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">招生管理</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/t14.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">综合实践</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/t8.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">学生考勤</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/z5.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">投票管理</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box2">
										<div class="media-left media-top">
											<img
												src="../assets/img/t10.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">班级周刊</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="name3">
							<div class="row">
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box3">
										<div class="media-left media-top">
											<img
												src="../assets/img/z6.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">微官网</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box3">
										<div class="media-left media-top">
											<img
												src="../assets/img/z7.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">设备保修</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box3">
										<div class="media-left media-top">
											<img
												src="../assets/img/t3.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">教师评价</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box3">
										<div class="media-left media-top">
											<img
												src="../assets/img/z8.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">会议管理</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box3">
										<div class="media-left media-top">
											<img
												src="../assets/img/t5.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">在线考试</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box3">
										<div class="media-left media-top">
											<img
												src="../assets/img/z9.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">公文管理</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4">
									<div class="media" id="box3">
										<div class="media-left media-top">
											<img
												src="../assets/img/t7.png"
												class="media-object"
												style="width:60px"
											/>
										</div>
										<div class="media-body">
											<h4 class="media-heading" id="wd">请假管理</h4>
											<a href="#">
												<p id="sd">>>查看详情</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xs-12 col-sm-12 col-md-4">
					<table class="table">
						<caption>
							<b style="color: rgb(131, 33, 243);">日程表</b>
						</caption>
						<thead>
							<tr>
								<th>时间</th>
								<th>事件</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr v-if="showTODO[0]">
								<td>2021/6/20/10:00</td>
								<td>班级会议</td>
								<td>
									<a class="del" href="#" @click="deleteTODO(0)"
										><span class="glyphicon glyphicon-trash"></span
									></a>
								</td>
							</tr>
							<tr v-if="showTODO[1]">
								<td>2021/6/24/14:30</td>
								<td>上机实验</td>
								<td>
									<a class="del" href="#" @click="deleteTODO(1)"
										><span class="glyphicon glyphicon-trash"></span
									></a>
								</td>
							</tr>
							<tr v-if="showTODO[2]">
								<td>2021/6/28/08:30</td>
								<td>阶段测试</td>
								<td>
									<a class="del" href="#" @click="deleteTODO(2)"
										><span class="glyphicon glyphicon-trash"></span
									></a>
								</td>
							</tr>
							<tr v-if="showTODO[3]">
								<td>2021/6/28/15:00</td>
								<td>完成任务一</td>
								<td>
									<a class="del" href="#" @click="deleteTODO(3)"
										><span class="glyphicon glyphicon-trash"></span
									></a>
								</td>
							</tr>
						</tbody>
					</table>
					<div style="margin-top: 40px;">
						<div><b style="color: rgb(131, 33, 243);">通知公告</b></div>
						<ul class="nav nav-pills nav-stacked">
							<li style="background-color: rgb(232, 236, 169);">
								<a href="#">
									<p style="color: royalblue;">
										关于召开2021年第一批人才引进统一评议会的通知
									</p>
									<i style="font-size: 5px;"
										>未读&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/6/10</i
									>
									<span class="badge pull-right">1</span>
								</a>
							</li>
							<li style="background-color: rgb(209, 189, 231);">
								<a href="#">
									<p style="color: royalblue;">
										关于2021年中国大学人才评议结果的公示
									</p>
									<i style="font-size: 5px;"
										>未读&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/6/18</i
									>
									<span class="badge pull-right">1</span>
								</a>
							</li>
							<li style="background-color: rgb(238, 187, 207);">
								<a href="#">
									<p style="color: royalblue;">疫情期间学生离校申请名单</p>
									<i style="font-size: 5px;"
										>已读&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/6/22</i
									>
								</a>
							</li>
							<li style="background-color: rgb(212, 238, 187);">
								<a href="#">
									<p style="color: royalblue;">
										关于2020届毕业年级学生返校后教学工作安排的通知
									</p>
									<i style="font-size: 5px;"
										>已读&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/6/25</i
									>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<el-dialog title="教育教学" :visible.sync="detailVisible_1" width="40%">
			<div class="detailBox">
				<span>现在是</span>
				<span>{{ this.date.getFullYear() }}年</span>
				<span>{{ this.date.getMonth() + 1 }}月</span>
				<span>{{ this.date.getDate() }}日</span>
				&nbsp;
				<span>{{ this.weekArr[this.date.getDay()] }}</span>
				<br /><br />
				<el-button type="primary" round>智慧交大</el-button>
				<el-button type="success" round>选课系统</el-button>
				<el-button type="info" round>教务系统</el-button>
				<br />
				<span id="tips">
					{{ this.date.getDay() &lt; 5 ? '工作日要好好学习！' : '今天是周末，好好休息一下吧~' }}
				</span>
			</div>
		</el-dialog>
		<el-dialog title="智能排课" :visible.sync="detailVisible_2">
			<div class="detailBox_2">
				<el-table :data="courseData" style="width: 100%">
					<el-table-column type="expand">
						<template slot-scope="props">
							<el-form label-position="left" inline class="courseExpand">
								<el-form-item label="课程名称">
									<span>{{ props.row.course }}</span>
								</el-form-item>
								<el-form-item label="日期">
									<span>{{ props.row.day }}</span>
								</el-form-item>
								<el-form-item label="教师">
									<span>{{ props.row.teacher }}</span>
								</el-form-item>
								<el-form-item label="时间">
									<span>{{ props.row.time }}</span>
								</el-form-item>
								<el-form-item label="教室">
									<span>{{ props.row.classroom }}</span>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column label="课程" prop="course"> </el-table-column>
					<el-table-column label="时间" prop="day"> </el-table-column>
					<el-table-column label="地点" prop="posi"> </el-table-column>
				</el-table>
			</div>
		</el-dialog>
		<el-dialog title="教育评价" :visible.sync="detailVisible_3" width="50%">
			<div class="detailBox_3">
				<span>{{ this.courseData[0].teacher }}</span>
				<div class="spaceBox"></div>
				<el-rate v-model="teacherRate[0]" allow-half="true" show-text> </el-rate>
				<el-divider></el-divider>
				<span>{{ this.courseData[1].teacher }}</span>
				<div class="spaceBox"></div>
				<el-rate v-model="teacherRate[1]" allow-half="true" show-text> </el-rate>
				<el-divider></el-divider>
				<span>{{ this.courseData[2].teacher }}</span>
				<div class="spaceBox"></div>
				<el-rate v-model="teacherRate[2]" allow-half="true" show-text> </el-rate>
				<el-divider></el-divider>
				<span>{{ this.courseData[3].teacher }}</span>
				<div class="spaceBox"></div>
				<el-rate v-model="teacherRate[3]" allow-half="true" show-text> </el-rate>
				<el-divider></el-divider>
			</div>
		</el-dialog>
	</div>
</template>

<script>
//手动加载
import loadScript from "../util/loadExternalAssetMixin";

export default {
	name: "desktop",
	data() {
		return {
			detailVisible_1: false,
			detailVisible_2: false,
			detailVisible_3: false,
			showTODO: [true, true, true, true],
			date: new Date(),
			weekArr: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
			teacherRate: ["", "", "", ""],
			courseData: [
				{
					course: "高等数学A",
					day: "星期三",
					posi: "逸夫楼",
					teacher: "李敏",
					time: "8:00-10:00",
					classroom: "202",
				},
				{
					course: "大学物理",
					day: "星期三",
					posi: "逸夫楼",
					teacher: "柳二根",
					time: "14:00-116:00",
					classroom: "305",
				},
				{
					course: "C++程序设计",
					day: "星期四",
					posi: "经纬楼",
					teacher: "彭剑",
					time: "10:00-12:00",
					classroom: "412",
				},
				{
					course: "工程绘图",
					day: "星期五",
					posi: "逸夫楼",
					teacher: "刘菲",
					time: "8:00-10:00",
					classroom: "216",
				},
			],
		};
	},
	methods: {
		deleteTODO(i) {
			this.$set(this.showTODO, i, false);
		},
	},
	beforeMount() {
		loadScript("https://cdn.bootcss.com/jquery/3.4.1/jquery.slim.min.js", () => {
			loadScript("https://cdn.staticfile.org/twitter-bootstrap/3.4.1/js/bootstrap.min.js"); // 先加载jq后加载bootstrap
		});
	},
};
</script>

<style src="../static/css/index.css" scoped></style>
<style src="../static/css/bootstrap.min.css" scoped></style>
