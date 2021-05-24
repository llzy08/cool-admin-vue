<template>
	<div class="system-user">
		<div class="pane">
			<!-- 组织架构 -->
				<div class="dept">
				<el-menu default-active="1">
					<el-menu-item index= "1">
						<i class="el-icon-location"></i>
						<span slot="title">www.coachoutlet.com</span>
					</el-menu-item>

				</el-menu>
			</div>
			<!-- 成员列表 -->
			<div class="user">

				<div class="container">
					
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
				// {
				// 	type: "selection",
				// 	align: "center",
				// 	width: 60
				// },
				{
					label: "站点",
					prop: "website",
					align: "center"
				},
				{
					label: "昵称",
					prop: "name",
					align: "center"
				},
				{
					label: "账号",
					prop: "account",
					align: "center"
				},
				{
					label: "密码",
					prop: "password",
					align: "center"
				},
				// {
				// 	label: "创建时间",
				// 	prop: "date",
				// 	align: "center"
				// },
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
		width: 256px;
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
		width: calc(100% - 266px);
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
