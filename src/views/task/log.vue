<!--
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-19 15:35:00
 * @LastEditTime: 2021-05-20 15:41:46
-->
<template>

	<cl-crud
	 ref="crud"
	 @load="onLoad"
	>
		<el-row type="flex">
			<cl-refresh-btn></cl-refresh-btn>
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
					align: "center"
				},
				{
					label: "监控地址",
					prop: "name",
					align: "center"
				},
				{
					label: "SKU",
					prop: "sku",
					align: "center"
				},
				{
					label: "使用的账号",
					prop: "account",
					align: "center"
				},
				{
					label: "执行数量",
					prop: "password",
					align: "center"
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
			ctx.service(this.$service.lzy.account).done();
			app.refresh();
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
