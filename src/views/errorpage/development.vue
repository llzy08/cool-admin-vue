<!--
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-19 17:44:00
 * @LastEditTime: 2021-05-20 15:10:15
-->
<template>
	<div class="error-page">
		<h1 class="code">{{ code }}</h1>
		<p class="desc">{{ desc }}</p>

		<p class="copyright">Copyright © cool-admin-pro 2020</p>
	</div>
</template>

<script>

export default {
	data() {
		return {
			code: '功能开发中',
			desc: '敬请期待'
		};
	},

};
</script>

<style lang="scss" scoped>
.error-page {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	overflow-y: auto;

	.code {
		font-size: 4em;
		font-weight: normal;
		color: #6c757d;
		font-family: "Segoe UI";
	}

	.desc {
		font-size: 2em;
		font-weight: 400;
		color: #34395e;
		margin-top: 30px;
	}

	.copyright {
		color: #6c757d;
		font-size: 14px;
		position: absolute;
		bottom: 0;
		left: 0;
		height: 50px;
		line-height: 50px;
		width: 100%;
		text-align: center;
	}
}
</style>
