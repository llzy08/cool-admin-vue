<!--
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-20 15:46:46
 * @LastEditTime: 2021-05-24 14:30:33
-->
<template>
	<div class="page-my-info">
		<div class="title">基本信息</div>

		<el-form size="small" label-width="100px" :model="form" :disabled="saving">

			<el-form-item label="等级">
				  <el-input :value="form.level" disabled></el-input>
			</el-form-item>

			<el-form-item label="剩余有效期">
				  <el-input :value="(form.effective || 0) + '天'" disabled></el-input>
			</el-form-item>

			<el-form-item label="执行时间">
				<el-time-picker
					is-range
					v-model="form.range"
					range-separator="至"
					start-placeholder="开始时间"
					end-placeholder="结束时间"
					placeholder="选择时间范围"
					format="HH:mm">
				</el-time-picker>
			</el-form-item>

			<el-form-item label="">
				<el-button type="primary" @click="save" :disabled="saving">保存修改</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			form: {},
			saving: false,
			value1: [new Date(2016, 9, 10, 0, 0), new Date(2016, 9, 10, 0, 0)],
		};
	},

	computed: {
		...mapGetters(["userInfo"])
	},

	mounted() {
		this.form = this.userInfo;
	},

	methods: {
		save() {
			this.saving = true;

			const { range } = this.form;

			this.$service.common
				.userUpdate({
					range
				})
				.then(() => {
					this.$message.success("修改成功");
					this.$store.dispatch("userInfo");
				})
				.catch(err => {
					this.$message.error(err);
				})
				.done(() => {
					this.saving = false;
				});
		}
	}
};
</script>

<style lang="scss">
.page-my-info {
	background-color: #fff;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;

	.el-form {
		width: 400px;
		max-width: 100%;
	}

	.title {
		color: #000;
		margin-bottom: 30px;
		font-size: 15px;
	}
}
</style>
