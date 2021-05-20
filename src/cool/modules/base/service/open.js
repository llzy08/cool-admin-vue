/*
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-18 16:54:20
 * @LastEditTime: 2021-05-19 15:05:41
 */
import { BaseService, Service } from "cl-admin";

@Service("base/open")
class Open extends BaseService {
	/**
	 * 用户登录
	 *
	 * @param {*} { username, password, captchaId, verifyCode }
	 * @returns
	 * @memberof CommonService
	 */
	userLogin(loginId) {
		return this.request({
			url: "https://www.szsige.com/auth/connect/token",
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
		 	},
			neetQs: true,
			data: {
				client_id: "25EFDE0F7E244147A9218C4F508E6E13",
				client_secret: "sige.secret",
				grant_type: "client_credentials",
				scope: "device.api identity.api",
				loginId
			}
			
		});
	}

	/**
	 * 图片验证码 svg
	 *
	 * @param {*} { height, width }
	 * @returns
	 * @memberof CommonService
	 */
	captcha({ height, width }) {
		return this.request({
			url: "/captcha",
			params: {
				height,
				width
			}
		});
	}

	/**
	 * 刷新 token
	 * @param {string} token
	 */
	refreshToken(token) {
		return this.request({
			url: "/refreshToken",
			params: {
				refreshToken: token
			}
		});
	}
}

export default Open;
