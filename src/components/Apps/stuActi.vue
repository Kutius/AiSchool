<template>
	<div class="one">
		<div class="two">
			<h1>学生社团活动立项审批表</h1>
			<div id="f">
				<table
					align="center"
					border="3"
					bordercolor="#bdbdbd"
					cellpadding="0"
					cellspacing="0"
					style="margin: 0px auto; width: 753px; border-collapse: collapse; height: 646px;"
				>
					<tbody>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 36px; text-align: center;">
								<span style="font-size:16px;">姓名</span>
							</td>
							<td style="width: 124px; height: 36px; text-align: center;">
								<span style="font-size:16px;">
									<input
										name="姓名"
										style="width: 100%; line-height: 20px;"
										type="text"
								/></span>
							</td>
							<td style="width: 106px; height: 36px; text-align: center;">
								<span style="font-size:16px;">学号</span>
							</td>
							<td style="width: 148px; height: 36px; text-align: center;">
								<span style="font-size:16px;">
									<input
										name="学号"
										style="width: 100%; line-height: 20px;"
										type="text"
								/></span>
							</td>
							<td style="width: 104px; height: 36px; text-align: center;">
								<span style="font-size:16px;">联系方式</span>
							</td>
							<td style="width: 125px; height: 36px; text-align: center;">
								<span style="font-size:16px;">
									<input
										name="联系电话"
										style="width: 100%; line-height: 20px; height: 34px;"
										type="text"
									/>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 35px; text-align: center;">
								<span style="font-size:16px;">所在学院</span>
							</td>
							<td
								colspan="3"
								rowspan="1"
								style="width: 378px; height: 35px; text-align: center;"
							>
								<input
									name="所在学院"
									style="width: 100%; line-height: 20px;"
									type="text"
								/>
							</td>
							<td style="width: 104px; height: 35px; text-align: center;">
								<span style="font-size:16px;">申请时间</span>
							</td>
							<td style="width: 125px; height: 35px; text-align: center;">
								<span style="font-size:16px;">
									<input
										name="申请时间"
										style="width: 100%; line-height: 20px;"
										type="text"
									/>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 35px; text-align: center;">
								<span style="font-size:16px;">活动名称</span>
							</td>
							<td colspan="5" rowspan="1" style="width: 607px; height: 35px;">
								<input
									name="活动名称"
									style="width: 100%; line-height: 20px; height: 34px;"
									type="text"
								/>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 35px; text-align: center;">
								<span style="font-size:16px;">活动主办单位</span>
							</td>
							<td colspan="5" style="width: 607px; height: 35px;">
								<span style="font-size:16px;">
									<input
										name="活动主办单位"
										style="width: 100%; line-height: 20px; height: 34px;"
										type="text"
									/>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 34px; text-align: center;">
								<span style="font-size:16px;">活动时间</span>
							</td>
							<td colspan="2" style="width: 230px; height: 34px; text-align: center;">
								<span style="font-size:16px;">
									<input
										name="开始时间"
										style="width: 100%; height: 32px;"
										type="text"
									/>
								</span>
							</td>
							<td style="width: 148px; height: 34px; text-align: center;">
								<span style="font-size:16px;">至</span>
							</td>
							<td colspan="2" style="width: 229px; height: 34px; text-align: center;">
								<span style="font-size:16px;">
									<input
										name="结束时间"
										style="width: 100%; height: 32px;"
										type="text"
									/>
								</span>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 34px; text-align: center;">
								<span style="font-size:16px;">证明材料</span>
							</td>
							<td colspan="5" rowspan="1" style="width: 607px; height: 34px;">
								<div
									btnname="上传附件"
									name="上传附件"
									style="OVERFLOW: auto;background-color:#E1C697;"
								>
									<label style="position: relative;">
										<input
											type="button"
											style="margin-right: 5px;"
											value="上传附件"/><input
											type="file"
											style="font-size: 26px; opacity: 0; position: absolute; left: 0px; top: 0px; width: 100px;"
											multiple="multiple"
											position="relative"
									/></label>
								</div>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 34px; text-align: center;">
								<span style="font-size:16px;"
									>指导教师<span style="color:#FF0000;">*</span>
								</span>
							</td>
							<td
								colspan="2"
								rowspan="1"
								style="width: 230px; height: 34px; text-align: center;"
							>
								<select name="二级部门" style="height: 32px;" type="list">
									<option value="请选择">请选择</option>
									<option value="校领导(100000)">校领导(100000)</option>
									<option value="原任校领导(100006)">原任校领导(100006)</option>
								</select>
							</td>
							<td
								colspan="2"
								rowspan="1"
								style="width: 252px; height: 34px; text-align: center;"
							></td>
						</tr>

						<tr style="height: 34px;">
							<td style="width: 143px; height: 35px; text-align: center;">
								<span style="font-size:16px;">指导教师电话</span>
							</td>
							<td colspan="2" style="width: 230px; height: 35px;">
								<input
									name="指导老师电话"
									style="width: 100%; line-height: 20px; height: 34px;"
									type="text"
								/>
							</td>
							<td style="width: 148px; height: 35px; text-align: center;">
								<span style="font-size:16px;"
									>业务指导单位<span style="color:#FF0000;">*</span>
								</span>
							</td>
							<td
								colspan="2"
								rowspan="1"
								style="width: 229px; height: 35px; text-align: center;"
							>
								<select name="二级部门" style="height: 32px;" type="list">
									<option value="请选择">请选择</option>
									<option value="校领导(100000)">校领导(100000)</option>
									<option value="原任校领导(100006)">原任校领导(100006)</option>
								</select>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 75px; text-align: center;">
								<span style="font-size:16px;">经费预算（元）</span>
							</td>
							<td rowspan="1" style="width: 124px; height: 75px; text-align: center;">
								<textarea name="经费预算" rows="3" style="width: 100%;"></textarea>
							</td>
							<td rowspan="1" style="width: 106px; height: 75px; text-align: center;">
								<span style="font-size:16px;">预算明细</span>
							</td>
							<td
								colspan="3"
								rowspan="1"
								style="width: 377px; height: 75px; text-align: center;"
							>
								<textarea name="预算明细" rows="3" style="width: 100%;"></textarea>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 75px; text-align: center;">
								<span style="font-size:16px;">指导教师审核</span>
							</td>
							<td
								colspan="5"
								rowspan="1"
								style="width: 607px; height: 75px; text-align: center;"
							>
								<textarea
									name="指导老师审核"
									rows="3"
									style="width: 100%;"
									disabled="true"
								></textarea>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 75px; text-align: center;">
								<span style="font-size:16px;">业务指导单位审核</span>
							</td>
							<td
								colspan="5"
								rowspan="1"
								style="width: 607px; height: 75px; text-align: center;"
							>
								<textarea
									name="业务指导单位审核"
									rows="3"
									style="width: 100%;"
									disabled="true"
								></textarea>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td style="width: 143px; height: 75px; text-align: center;">
								<span style="font-size:16px;"
									>党委学工部<br />
									及校团委审核</span
								>
							</td>
							<td
								colspan="5"
								rowspan="1"
								style="width: 607px; height: 75px; text-align: center;"
							>
								<textarea
									name="学工部及校团委审核"
									rows="3"
									style="width: 100%;"
									disabled="true"
								></textarea>
							</td>
						</tr>
						<tr style="height: 34px;">
							<td
								colspan="6"
								rowspan="2"
								style="width: 750px; height: 65px; overflow-wrap: break-word; word-break: break-all;"
							>
								<p
									style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri, sans-serif;"
								>
									<span style="font-family:微软雅黑;">
										<span style="font-size:16px;">
											<strong>注意事项：</strong>
										</span>
									</span>
									<br />
									<span
										style="font-size: 16px; font-family: 微软雅黑; text-indent: 20pt; background-color: transparent;"
										>&nbsp; &nbsp;
										1.证明材料为学生社团活动策划（附资金立项表）；
									</span>
									<br />
									<span
										style="font-size: 16px; font-family: 微软雅黑; text-indent: 20pt; background-color: transparent;"
										>&nbsp; &nbsp;
										2.暂无业务指导单位的学生社团，应尽快明确业务指导单位，可先提交校团委进行审核。
									</span>
								</p>
							</td>
						</tr>
						<tr id="tr_GElFfE5w"></tr>
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
	name: "stuActi",
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
