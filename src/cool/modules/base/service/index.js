/*
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-18 16:54:20
 * @LastEditTime: 2021-05-24 10:39:02
 */
import Common from "./common";
import Open from "./open";
import SysUser from "./system/user";
import SysMenu from "./system/menu";
import SysRole from "./system/role";
import SysDept from "./system/dept";
import SysParam from "./system/param";
import lzyAccount from "./lzy/account";
import lzyTask from "./lzy/task";
import lzyTaskLog from "./lzy/tasklog";
import SysLog from "./system/log";
import PluginInfo from "./plugin/info";

export default {
	common: new Common(),
	open: new Open(),
	system: {
		user: new SysUser(),
		menu: new SysMenu(),
		role: new SysRole(),
		dept: new SysDept(),
		param: new SysParam(),
		log: new SysLog()
	},
	lzy : {
		account: new lzyAccount(),
		task: new lzyTask(),
		tasklog: new lzyTaskLog()
	},
	plugin: {
		info: new PluginInfo()
	}
};
