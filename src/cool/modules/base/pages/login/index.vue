<template>
	<div class="page-login">
		<div class="box">
			<img
			 class="logo"
			 src="../../static/images/logo.png"
			 alt=""
			/>
			<!-- <p class="desc">小鲸系统</p> -->
			<div
			 id="qrcode"
			 ref="qrcode"
			></div>
		</div>
	</div>
</template>

<script>
import SnowflakeId from "snowflake-id";
import QRCode from "qrcodejs2"

export default {
	// components: { QRCode },
	data() {
		return {
			saving: false,
			loginId: null
		};
	},
	mounted() {
		this.onTimer1s()
	},
	methods: {
		async refalsh() {
			this.loginId = null;
		},
		async onTimer1s() {
			if (!this.loginId) {
				const id = new SnowflakeId();
				this.loginId = id.generate();
				let appKey = 'wx8235c68a98380f6c'
				let redirect_uri = 'http://weixin.szsige.com'
				let state = this.loginId
				let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appKey}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
				console.log(url)
				let qrcode = new QRCode("qrcode", {
					width: 256,
					height: 256,
					text: url,
					colorDark : "#2f3447",
   					colorLight : "#fff",
					render: "table",
					correctLevel : QRCode.CorrectLevel.L
				});
			}
			this.checkLogin();
		},
		
		async checkLogin() {
			this.saving = true;
			try {
				await this.$store.dispatch("userLogin", this.loginId);
				// await this.$store.dispatch("userInfo");
				await this.$store.dispatch("permMenu");
				return this.$router.push("/");
				// 登录
				
				// // 用户信息
				// await this.$store.dispatch("userInfo");
				// // 权限菜单
				
				// if (!first) {
				// 	this.$message.error("该账号没有权限");
				// } else {
				// 	this.$router.push("/");
				// }
			} catch (err) {
				// this.$message.error(err);
				// this.$refs.captcha.refresh();
			}
			this.saving = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.page-login {
	height: 100vh;
	width: 100vw;
	position: relative;
	background-color: #2f3447;

	.box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 500px;
		width: 500px;
		position: absolute;
		left: calc(50% - 250px);
		top: calc(50% - 250px);

		.logo {
			height: 50px;
			margin-bottom: 20px;
		}

		.desc {
			color: #ccc;
			font-size: 12px;
			margin-bottom: 60px;
			letter-spacing: 1px;
		}

		/deep/.el-form {
			width: 300px;
			border-radius: 3px;

			.el-form-item {
				margin-bottom: 20px;

				&__label {
					color: #ccc;
				}
			}

			.el-input {
				.el-input__inner {
					border: 0;
					border-bottom: 0.5px solid #999;
					border-radius: 0;
					padding: 0 5px;
					background-color: transparent;
					color: #ccc;
					transition: border-color 0.3s;
					position: relative;

					&:focus {
						border-color: #fff;
						color: #fff;
					}

					&:-webkit-autofill {
						-webkit-text-fill-color: #fff !important;
						-webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
						transition: background-color 50000s ease-in-out 0s;
					}
				}
			}

			.captcha {
				position: relative;

				.value {
					position: absolute;
					bottom: 1px;
					right: 0;
				}
			}
		}

		.submit-btn {
			margin-top: 40px;
			border-radius: 30px;
			padding: 10px 40px;
			color: #000;
		}
	}

	
}
</style>
