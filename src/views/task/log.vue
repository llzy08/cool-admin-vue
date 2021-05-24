<!--
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-19 15:35:00
 * @LastEditTime: 2021-05-24 14:44:56
-->
<template>

	<cl-crud
	 ref="crud"
	 @load="onLoad"
	>
		<el-row type="flex">
			<cl-refresh-btn></cl-refresh-btn>
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

	</cl-crud>

</template>

<script>
export default {
	components: {},
	data() {
		return {
			columns: [
				{
					type: "index",
					label: "#",
					align: "center",
					width: 60
				},
				// {
				// 	type: "selection",
				// 	align: "center",
				// 	width: 60
				// },
				{
					label: "站点",
					prop: "website",
					align: "center",
					width: 150
				},
				{
					label: "监控地址",
					prop: "taskUrl",
					align: "center"
				},
				{
					label: "SKU",
					prop: "sku",
					align: "center",
					width: 80
				},
				{
					label: "使用的账号",
					prop: "account",
					align: "center"
				},
				{
					label: "支付信息",
					prop: "pay",
					align: "center"
				},
				{
					label: "执行数量",
					prop: "num",
					align: "center",
					width: 80
				},
				{
					label: "执行时间",
					prop: "date",
					align: "center"
				}
			]
		};
	},
	methods: {
		onLoad({ ctx, app }) {
			ctx.service(this.$service.lzy.tasklog).done();
			app.refresh();
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
