<!--
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-19 15:35:00
 * @LastEditTime: 2021-05-19 16:09:15
-->
<template>
	<cl-scrollbar>
		<div class="home">
			<el-row :gutter="15">
				<el-col :lg="6" :md="12" :xs="24">
					<div class="card"></div>
				</el-col>
				<el-col :lg="6" :md="12" :xs="24">
					<div class="card"></div>
				</el-col>
				<el-col :lg="6" :md="12" :xs="24">
					<div class="card"></div>
				</el-col>
				<el-col :lg="6" :md="12" :xs="24">
					<div class="card"></div>
				</el-col>
			</el-row>
		</div>
	</cl-scrollbar>
</template>

<script>
export default {
	components: {}
};
</script>

<style lang="scss" scoped>
.home {
	/deep/.card {
		background-color: #fff;
		border-radius: 5px;
		margin-bottom: 15px;
		font-size: 12px;
		letter-spacing: 0.5px;

		&__header {
			display: flex;
			align-items: center;
			height: 50px;
			padding: 0 20px;

			.label {
				font-size: 12px;
			}

			.value {
				font-size: 18px;
				font-weight: bold;
				margin-left: 10px;
			}
		}

		&__container {
			padding: 0 20px;
			height: 50px;
		}

		&__footer {
			display: flex;
			align-items: center;
			height: 50px;
			border-top: 1px solid #f7f7f7;
			font-size: 12px;
			margin: 0 5px;
			padding: 0 15px;
			box-sizing: border-box;

			.label {
				margin-right: 10px;
			}

			.value {
				font-size: 13px;
			}
		}
	}
}
</style>
