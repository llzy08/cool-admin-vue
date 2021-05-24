/*
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-20 12:15:36
 * @LastEditTime: 2021-05-20 12:29:18
 */
import { BaseService, Service, Permission } from "cl-admin";

@Service("lzy/account")
class SysAccount extends BaseService {
	@Permission("clear")
	clear() {
		return this.request({
			url: "/clear",
			method: "POST"
		});
	}

	@Permission("getKeep")
	getKeep() {
		return this.request({
			url: "/getKeep"
		});
	}

	@Permission("setKeep")
	setKeep(value) {
		return this.request({
			url: "/setKeep",
			method: "POST",
			data: {
				value
			}
		});
	}
}

export default SysAccount;
