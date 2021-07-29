<template>
	<div class="one">
		<div class="two">
			<h1>学生参加出国项目申请表</h1>
			<div id="f">
				<table
					align="center"
					border="3"
					bordercolor="#bdbdbd"
					cellpadding="0"
					cellspacing="0"
					style="margin: 0px auto; width: 862px; height: 744px; border-collapse: collapse;"
				>
					<tbody>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 36px; text-align: center;">
								<span style="font-size: 16px;">申请人</span>
							</td>
							<td style="width: 148px; height: 36px; text-align: center;">
								<span style="font-size: 16px;">
									<input
										name="申请人"
										style="width: 100%; height: 34px; line-height: 20px;"
										type="text"
									/>
								</span>
							</td>
							<td style="width: 88px; height: 36px; text-align: center;">
								<span style="font-size: 16px;">学号</span>
							</td>
							<td style="width: 133px; height: 36px; text-align: center;">
								<span style="font-size: 16px;">
									<input
										name="学号"
										style="width: 100%; line-height: 20px;"
										type="text"
									/>
								</span>
							</td>
							<td style="width: 109px; height: 36px; text-align: center;">
								<span style="font-size: 16px;">性别</span>
							</td>
							<td style="width: 130px; height: 36px; text-align: center;">
								<span style="font-size: 16px;">
									<input
										name="性别"
										style="width: 100%; height: 34px; line-height: 20px;"
										type="text"
									/>
								</span>
							</td>
							<td
								colspan="1"
								rowspan="4"
								style="width: 110px; height: 141px; text-align: center;"
							>
								<img alt="" src="" />
								<img alt="" src="" style="width: 100px; height: 120px;" />
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">所在学院</span>
							</td>
							<td rowspan="1" style="width: 148px; height: 35px; text-align: center;">
								<input
									name="所在学院"
									style="width: 100%; height: 34px; line-height: 20px;"
									type="text"
								/>
							</td>
							<td rowspan="1" style="width: 88px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">专业班级</span>
							</td>
							<td rowspan="1" style="width: 133px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">
									<input
										name="专业班级"
										style="width: 100%; height: 34px; line-height: 20px;"
										type="text"
									/>
								</span>
							</td>
							<td style="width: 109px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">出生日期</span>
							</td>
							<td style="width: 130px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">
									<input
										name="出生日期"
										style="width: 100%; height: 34px; line-height: 20px;"
										type="text"
									/>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">本人电话</span>
							</td>
							<td style="width: 148px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">
									<input
										name="本人电话"
										style="width: 100%; height: 34px; line-height: 20px;"
										type="text"
									/>
								</span>
							</td>
							<td style="width: 88px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">常用邮箱</span>
							</td>
							<td style="width: 133px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">
									<input
										name="邮箱"
										style="width: 100%; height: 34px; line-height: 20px;"
										type="text"
									/>
								</span>
							</td>
							<td style="width: 109px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">申请时间</span>
							</td>
							<td style="width: 130px; height: 35px;">
								<span style="font-size: 16px;">
									<input
										name="申请时间"
										style="width: 100%; line-height: 20.01px;"
										type="text"
								/></span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">家庭地址</span>
							</td>
							<td
								colspan="3"
								rowspan="1"
								style="width: 368px; height: 35px; text-align: center;"
							>
								<input
									name="家庭地址"
									style="width: 100%; height: 34px; line-height: 20px;"
									type="text"
								/>
							</td>
							<td style="width: 109px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">家庭联系电话</span>
							</td>
							<td style="width: 130px; height: 35px;">
								<span style="font-size: 16px;">
									<input
										name="家庭电话"
										style="width: 100%; line-height: 20px;"
										type="text"
									/>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 34px; text-align: center;">
								<span style="font-size: 16px;">申请合作院校名称</span>
							</td>
							<td
								colspan="3"
								rowspan="1"
								style="width: 368px; height: 34px; text-align: center;"
							>
								<input
									name="合作院校名称"
									style="width: 100%; height: 34px; line-height: 20px;"
									type="text"
								/>
							</td>
							<td rowspan="1" style="width: 109px; height: 34px; text-align: center;">
								<span style="text-align: center; font-size: 16px;"
									>国外所学专业</span
								>
							</td>
							<td colspan="2" rowspan="1" style="width: 240px; height: 34px;">
								<input
									name="国外所学专业名称"
									style="width: 100%; height: 34px; line-height: 20px;"
									type="text"
								/>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">申报出国项目名称</span>
							</td>
							<td
								colspan="3"
								rowspan="1"
								style="width: 368px; height: 35px; text-align: center;"
							>
								<input
									name="项目名称"
									style="width: 100%; height: 34px; line-height: 20px;"
									type="text"
								/>
							</td>
							<td rowspan="1" style="width: 109px; height: 35px; text-align: center;">
								<span style="font-size: 16px;">申请人身份</span>
								<span
									style="color: rgb(255, 0, 0); font-size: 16px; text-align: center;"
									>*</span
								>
							</td>
							<td colspan="2" rowspan="1" style="width: 240px; height: 35px;">
								<div
									name="sflx"
									style="width: auto; height: auto; display: inline-block;"
									type="radio"
								>
									<div>
										<input name="sflx_group" type="radio" />
										<label>本专科生</label>
									</div>
									<div class="checkbox-horizontal" ischild="true">
										<input name="sflx_group" type="radio" />
										<label class="checkbox-label">研究生</label>
									</div>
								</div>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 34px; text-align: center;">
								<span style="font-size: 16px;"
									>选择辅导员<span style="color: rgb(255, 0, 0);">*</span></span
								>
							</td>
							<td colspan="2" style="width: 236px; height: 34px; text-align: center;">
								<select name="二级部门" style="height: 32px;" type="list">
									<option value="请选择">请选择</option>
									<option value="校领导(100000)">校领导(100000)</option>
									<option value="原任校领导(100006)">原任校领导(100006)</option>
								</select>
							</td>
							<td
								colspan="2"
								rowspan="1"
								style="width: 242px; height: 34px; text-align: center;"
							>
								<select name="三级部门" style="height: 32px;" type="list">
									<option value="请选择">请选择</option>
									<option value="校领导(100000)">校领导(100000)</option>
									<option value="学院领导(100100)">学院领导(100100)</option>
								</select>
							</td>

							<td
								colspan="2"
								rowspan="1"
								style="width: 240px; height: 34px; text-align: center;"
							>
								<select name="教职工" style="height: 32px;" type="list">
									<option value="请选择">请选择</option>
									<option value="潘宝琦(0001)">潘宝琦(0001)</option>
									<option value="王树森(0002)">王树森(0002)</option>
								</select>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 121px; text-align: center;">
								<span style="font-size: 16px;">本人在校学习情况</span>
							</td>
							<td
								colspan="6"
								style="width: 717px; height: 121px; text-align: center;"
							>
								<span style="font-size: 16px;">
									<textarea
										name="本人学习情况"
										rows="3"
										style="width: 100%; height: 120px;"
									></textarea>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 75px; text-align: center;">
								<span style="font-size: 16px;">辅导员审核</span>
							</td>
							<td colspan="6" style="width: 717px; height: 75px; text-align: center;">
								<span style="font-size: 16px;"
									><textarea
										name="辅导员审批"
										rows="3"
										style="width: 100%;"
										disabled="true"
									></textarea>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 75px; text-align: center;">
								<span style="font-size: 16px;"
									>学院党委<br />
									副书记审批</span
								>
							</td>
							<td colspan="6" style="width: 717px; height: 75px; text-align: center;">
								<span style="font-size: 16px;">
									<textarea
										name="学院党委副书记审批"
										rows="3"
										style="width: 100%;"
										disabled="true"
									></textarea>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 75px; text-align: center;">
								<span style="font-size: 16px;"
									>学院教学<br />
									副院长审批</span
								>
							</td>
							<td colspan="6" style="width: 717px; height: 75px; text-align: center;">
								<span style="font-size: 16px;">
									<textarea
										name="学院教学副院长审批"
										rows="3"
										style="width: 100%;"
										disabled="true"
									></textarea>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 75px; text-align: center;">
								<span style="font-size: 16px;"
									>国际合作交流处<br />
									合作办学专员审批</span
								>
							</td>
							<td colspan="6" style="width: 717px; height: 75px; text-align: center;">
								<span style="font-size: 16px;">
									<textarea
										name="国交处办事专员审批"
										rows="3"
										style="width: 100%;"
										disabled="true"
									></textarea
								></span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 142px; height: 76px; text-align: center;">
								<span style="font-size: 16px;">
									<span style="text-align: center;">国际合作交流处</span
									><br style="text-align: center;" />
									负责人审批</span
								>
							</td>
							<td colspan="6" style="width: 717px; height: 76px; text-align: center;">
								<textarea
									name="国交处负责人审批"
									rows="3"
									style="width: 100%;"
									disabled="true"
								>
								</textarea>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="di">
					<p>选择审批人：</p>
					<div>
						<select>
							<option value="0">全部</option>
							<option value="1">吴林峰</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "stuAbrd",
};
</script>

<style scoped>
h1 {
	text-align: center;
}
#f {
	margin-top: 40px;
}
.di {
	text-align: center;
}
.di p,
.di div {
	display: inline-block;
}
</style>
