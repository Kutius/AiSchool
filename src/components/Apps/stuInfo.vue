<template>
	<div id="app1">
		<div class="one">
			<div class="two">
				<h1>学生省份信息变更申请表</h1>
				<div id="f">
					<table
						align="center"
						border="1"
						bordercolor="#bdbdbd"
						cellpadding="0"
						cellspacing="0"
						height="514"
						style="margin: 0px auto; border-collapse: collapse; height: 444px;"
						width="816"
					>
						<tbody>
							<tr style="height: 34px;">
								<td style="width: 123px; height: 9px; text-align: center;">
									<span style="font-size:18px;">申请时间</span>
								</td>
								<td style="width: 160px; height: 9px; text-align: center;">
									<input
										name="申请时间"
										style="width: 90%; line-height: 20px;"
										type="text"
									/>
								</td>

								<td style="width: 105px; height: 9px; text-align: center;">
									<span style="font-size:18px;">经办人学号</span>
								</td>
								<td style="width: 165px; height: 9px;">
									<input
										name="经办人学号"
										style="width: 90%; line-height: 20px;"
										type="text"
									/>
								</td>

								<td style="width: 107px; height: 9px; text-align: center;">
									<span style="font-size:18px;">经办人姓名</span>
								</td>
								<td style="width: 157px; height: 9px;">
									<input
										name="经办人姓名"
										style="width: 90%; line-height: 20px;"
										type="text"
									/>
								</td>
							</tr>
							<tr style="height: 34px;">
								<td style="width: 123px; height: 20px; text-align: center;">
									<span style="font-size:18px;">所在学院</span>
								</td>
								<td colspan="3" rowspan="1" style="width: 429px; height: 20px;">
									<input
										name="所在学院"
										style="width: 90%; line-height: 20px;"
										type="text"
									/>
								</td>

								<td style="width: 107px; height: 20px; text-align: center;">
									<span style="font-size:18px;">联系方式</span>
								</td>
								<td style="width: 157px; height: 20px;">
									<input
										name="联系方式"
										style="width: 90%; line-height: 20px;"
										type="text"
									/>
								</td>
							</tr>
							<tr style="height: 34px;">
								<td style="width: 123px; height: 14px; text-align: center;">
									<span style="font-size:18px;">变更内容</span>
								</td>
								<td colspan="5" rowspan="1" style="width: 694px; height: 14px;">
									<textarea
										name="变更内容"
										rows="3"
										style="width: 98%; height: 91px;"
										widgetonlyread="false"
									>
									</textarea>
								</td>
							</tr>
							<tr style="height: 34px;">
								<td style="width: 123px; height: 1px; text-align: center;">
									<span style="font-size:18px;">证明材料</span>
								</td>
								<td colspan="5" style="width: 694px; height: 1px;">
									<div
										btnname="上传附件"
										name="上传附件"
										style="OVERFLOW: auto;background-color:#E1C697;"
									>
										<label style="position: relative;">
											<input
												type="button"
												style="margin-right: 5px;"
												value="上传附件"/>
											<input
												type="file"
												style="font-size: 26px; opacity: 0; position: absolute; left: 0px; top: 0px; width: 100px;"
												multiple="multiple"
												position="relative"
										/></label>
									</div>
									<div></div>
								</td>
							</tr>
							<tr style="height: 34px;">
								<td style="width: 123px; height: 34px; text-align: center;">
									<span style="font-size:18px;">教务处教务科审批</span>
								</td>
								<td colspan="5" rowspan="1" style="width: 693px; height: 34px;">
									<textarea
										name="教务处教务科审批"
										rows="3"
										style="width: 98%;"
										disabled="true"
									></textarea>
								</td>
							</tr>
							<tr style="height: 34px;">
								<td style="width: 123px; height: 34px; text-align: center;">
									<span style="font-size:18px;">计财处财务管理科审批</span>
								</td>
								<td colspan="5" rowspan="1" style="width: 693px; height: 34px;">
									<textarea
										name="计财处财务管理科审批"
										rows="3"
										style="width: 98%;"
										disabled="true"
									></textarea>
								</td>
							</tr>
							<tr style="height: 34px;">
								<td style="width: 123px; height: 34px; text-align: center;">
									<span style="font-size:18px;">计财处学生收费岗办结</span>
								</td>
								<td colspan="5" rowspan="1" style="width: 693px; height: 34px;">
									<textarea
										name="计财处学生收费岗办结"
										rows="3"
										style="width: 98%;"
										disabled="true"
									></textarea>
								</td>
							</tr>
							<tr style="height: 34px;">
								<td style="width: 123px; height: 34px; text-align: center;">
									<span style="font-size:18px;">备注</span>
								</td>
								<td colspan="5" style="width: 693px; height: 34px;">
									<span style="font-size:18px;">变更内容为身份证号或姓名</span>
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
	</div>
</template>

<script>
export default {
	name: "stuInfo",
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
.di p,.di div{
    display: inline-block;
}

</style>
