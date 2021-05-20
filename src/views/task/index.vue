<template>
	<div class="system-user">
		<div class="pane">
			<!-- 组织架构 -->
			<div class="dept">
				<el-menu
				 default-active="2"
				 class="el-menu-vertical-demo"
				 @open="handleOpen"
				 @close="handleClose"
				>
					<el-menu-item
					 v-for="(item,index) in 4"
					 :index="item"
					 :key="index"
					>
						<i class="el-icon-menu"></i>
						<span slot="title">站点 {{index}}</span>
					</el-menu-item>

				</el-menu>
			</div>

			<!-- 成员列表 -->
			<div class="user">
				<div class="container">
					<cl-crud
					 ref="crud"
					 @load="onLoad"
					>
						<el-row type="flex">
							<cl-refresh-btn></cl-refresh-btn>
							<cl-add-btn></cl-add-btn>
							<!-- <cl-multi-delete-btn></cl-multi-delete-btn> -->

							<cl-flex1></cl-flex1>
							<cl-search-key></cl-search-key>
						</el-row>

						<el-row>
							<cl-table
							 ref="table"
							 :columns="columns"
							></cl-table>
						</el-row>

						<el-row type="flex">
							<cl-flex1></cl-flex1>
							<cl-pagination></cl-pagination>
						</el-row>

						<cl-upsert
						 ref="upsert"
						 v-bind="upsert"
						></cl-upsert>
					</cl-crud>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			columns: [
				{
					label: "站点",
					prop: "website",
					align: "center"
				},
				{
					label: "监控地址",
					prop: "taskUrl",
					align: "center"
				},
				{
					label: "SKU",
					prop: "name",
					align: "center"
				},
				{
					label: "任务类型",
					prop: "account",
					align: "center"
				},
				{
					label: "数量",
					prop: "password",
					align: "center"
				},
				{
					type: "op",
					align: "center"
				}
			],
			upsert: {
				props: {
					width: "800px"
				},
				items: [
					{
						prop: "website",
						label: "站点",
						span: 24,
						component: {
							name: "el-input",
							attrs: {
								placeholder: "请输入站点"
							}
						},
						rules: {
							required: true,
							message: "站点不能为空"
						}
					},
					{
						prop: "name",
						label: "昵称",
						span: 24,
						component: {
							name: "el-input",
							attrs: {
								placeholder: "请输入昵称名称"
							}
						}
					},
					{
						prop: "account",
						label: "账号",
						span: 24,
						component: {
							name: "el-input",
							attrs: {
								placeholder: "请输入账号信息"
							}
						},
						rules: {
							required: true,
							message: "账号不能为空"
						}
					},
					{
						prop: "password",
						label: "密码",
						span: 24,
						component: {
							name: "el-input",
							attrs: {
								placeholder: "请输入账号密码"
							}
						},
						rules: {
							required: true,
							message: "密码不能为空"
						}
					},
					{
						prop: "IP",
						label: "常用IP",
						span: 24,
						component: {
							name: "el-input",
							attrs: {
								placeholder: "请输入该账号常用的IP"
							}
						}
					}
				]
			}
		};
	},

	methods: {
		onLoad({ ctx, app }) {
			ctx.service(this.$service.lzy.account).done();
			app.refresh();
		}
	}
};
</script>

<style lang="scss" scoped>
.system-user {
	.pane {
		display: flex;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.dept {
		height: 100%;
		width: 206px;
		max-width: calc(100% - 50px);
		background-color: #fff;
		transition: width 0.3s;
		margin-right: 10px;
		flex-shrink: 0;

		&._collapse {
			margin-right: 0;
			width: 0;
		}
	}

	.user {
		width: calc(100% - 216px);
		flex: 1;
	}

	.dept,
	.user {
		overflow: hidden;
		.container {
			height: 100%;
		}
	}

	@media only screen and (max-width: 768px) {
		.dept {
			width: calc(100% - 100px);
		}
	}
}
</style>
