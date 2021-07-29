<template>
	<div class="bk">
		<div class="demo-image" style="margin-top: 15px;">
			<el-image style="width: 100%;height:200px;" :src="bgUrl" :fit="cover"></el-image>
		</div>

		<div id="body">
			<div class="tab">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="我的待办" name="first">
						<div>
							<el-row>
								<el-col :span="8">
									<el-select
										v-model="value"
										placeholder="全部"
										style="width: 120px;"
									>
										<el-option
											v-for="item in options"
											:key="item.value"
											:label="item.label"
											:value="item.value"
										>
										</el-option>
									</el-select>
								</el-col>
								<el-col :span="16" style="text-align: right;">
									<div>
										<el-input
											v-model="input1"
											placeholder="请输入流程名称"
											style="width: 220px;"
										></el-input>
										<el-input
											v-model="input2"
											placeholder="请输入发起人名称"
											style="width: 220px;margin-left: 20px;"
										></el-input>
										<el-button
											type="primary"
											icon="el-icon-search"
											round
											style="margin-left: 20px;"
											@click="exhibition"
											>搜索
										</el-button>
									</div>
								</el-col>
							</el-row>

							<div class="main">
								<!-- <el-button
									type="primary"
									style="margin-top: 20px;margin-left: 15px;"
									>办理
								</el-button>
								<el-button type="warning">办理记录</el-button> -->

								<form action="" method="POST" name="myform">
									<template>
										<el-table :data="tableData">
											<el-table-column
												prop="class"
												label="班级号"
												align="center"
												v-if="show"
											>
											</el-table-column>
											<el-table-column
												prop="title"
												label="标题"
												align="center"
												v-if="show"
											>
											</el-table-column>
											<el-table-column
												prop="classification"
												label="分类流程"
												align="center"
												v-if="show"
											>
											</el-table-column>
											<el-table-column
												prop="people"
												label="发起人"
												align="center"
												v-if="show"
											>
											</el-table-column>
											<el-table-column label="操作" align="center" v-if="show">
												<template slot-scope="scope">
													<el-button
														@click="update(scope.$index)"
														type="text"
														size="small"
													>
														修改
													</el-button>
													<el-dialog
														title="修改"
														:visible.sync="dialogFormVisible"
													>
														<el-form :model="form" ref="gForm">
															<el-form-item
																label="班级号"
																:label-width="formLabelWidth"
																prop="class"
															>
																<el-input
																	v-model="form.class"
																	autocomplete="off"
																></el-input>
															</el-form-item>
															<el-form-item
																label="标题"
																:label-width="formLabelWidth"
																prop="title"
															>
																<el-input
																	v-model="form.title"
																	autocomplete="off"
																></el-input>
															</el-form-item>
															<el-form-item
																label="分类流程"
																:label-width="formLabelWidth"
																prop="classification"
															>
																<el-input
																	v-model="form.classification"
																	autocomplete="off"
																></el-input>
															</el-form-item>
															<el-form-item
																label="发起人"
																:label-width="formLabelWidth"
																prop="people"
															>
																<el-input
																	v-model="form.people"
																	autocomplete="off"
																></el-input>
															</el-form-item>
														</el-form>
														<div slot="footer" class="dialog-footer">
															<el-button @click="Close"
																>取 消</el-button
															>
															<el-button
																type="primary"
																@click="goodsUp()"
																slot="reference"
															>
																确 定
															</el-button>
														</div>
													</el-dialog>
													<el-popconfirm
														title="确定删除吗？"
														@confirm="del(scope.$index)"
													>
														<el-button
															type="text"
															size="small"
															slot="reference"
															>删除
														</el-button>
													</el-popconfirm>
												</template>
											</el-table-column>
										</el-table>
									</template>
								</form>
								<div class="block pageNum" style="float: right;">
									<el-pagination
										:current-page="currentPage4"
										layout="total, prev, pager, next, jumper"
										:total="tableData.length"
									>
									</el-pagination>
								</div>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "approval",
	data() {
		return {
			tableData: [
				{
					class: "01001",
					title: "工作过程中遇到常见问题如何解决",
					classification: "工作交接",
					people: "管理员",
				},
				{
					class: "01002",
					title: "工作过程中遇到常见问题如何解决",
					classification: "工作交接",
					people: "管理员",
				},
				{
					class: "01003",
					title: "工作过程中遇到常见问题如何解决",
					classification: "工作交接",
					people: "管理员",
				},
				{
					class: "01004",
					title: "工作过程中遇到常见问题如何解决",
					classification: "工作交接",
					people: "管理员",
				},
				{
					class: "01005",
					title: "工作过程中遇到常见问题如何解决",
					classification: "工作交接",
					people: "管理员",
				},
				{
					class: "01006",
					title: "工作过程中遇到常见问题如何解决",
					classification: "工作交接",
					people: "管理员",
				},
				{
					class: "01007",
					title: "工作过程中遇到常见问题如何解决",
					classification: "工作交接",
					people: "管理员",
				},
			],
			show:false,
			form: { class: "", title: "", classification: "", people: "" },
			idx: "",
			dialogFormVisible: false,
			formLabelWidth: "120px",
			input1: "",
			input2: "",
			bgUrl: require("../assets/title.png"),
			activeName: "first",
			options: [
				{
					value: "选项1",
					label: "待办",
				},
				{
					value: "选项2",
					label: "事项",
				},
				{
					value: "选项3",
					label: "流程",
				},
				{
					value: "选项4",
					label: "增加",
				},
				{
					value: "选项5",
					label: "删除",
				},
			],
			value: "",
		};
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
		del(index) {
			this.tableData.splice(index, 1);
			this.$message({
				message: "删除成功！",
				type: "success",
			});
		},
		update(index) {
			this.dialogFormVisible = true;
			this.idx = index;
			this.form.class = this.tableData[index].class;
			this.form.title = this.tableData[index].title;
			this.form.classification = this.tableData[index].classification;
			this.form.people = this.tableData[index].people;
		},
		Close() {
			this.dialogFormVisible = false;
		},
		handlebriefCol(){
			this.show=false;

		},
		exhibition(){
			this.show=true;

		},
		goodsUp() {
			this.tableData[this.idx].class = this.form.class;
			this.tableData[this.idx].title = this.form.title;
			this.tableData[this.idx].classification = this.form.classification;
			this.tableData[this.idx].people = this.form.people;
			this.dialogFormVisible = false;
			this.$message({
				message: "修改成功！",
				type: "success",
			});
		},
	},
};
</script>

<style scoped>
.bk {
	background-color: rgb(243, 246, 255);
	width: 100%;
}
#body {
	width: 1170px;
	margin: 0 auto;
}
.tab {
	margin-top: 15px;
}
.main {
	background-color: white;
	width: 100%;
	margin-top: 20px;
}
.pageNum {
	margin-top: 20px;
	margin-bottom: 20px;
}
</style>
