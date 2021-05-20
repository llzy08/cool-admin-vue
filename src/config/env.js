/*
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-18 16:54:20
 * @LastEditTime: 2021-05-20 15:47:49
 */
import store from "store";
import { getUrlParam } from "cl-admin/utils";

// 路由模式
export const routerMode = "hash";

// 开发模式
export const isDev = process.env.NODE_ENV == "development";

// Host
export const host = "https://show.cool-admin.com";

// Socket
export const socketUrl = (isDev ? `${host}` : "") + "/socket";

// 请求地址，本地会使用代理请求
export const baseUrl = (function () {
	let proxy = getUrlParam("proxy");

	if (proxy) {
		store.set("proxy", proxy);
	} else {
		proxy = store.get("proxy") || "dev";
	}

	return isDev ? `/${proxy}` : `/api`;
})();

// 阿里字体图标库 https://at.alicdn.com/t/**.css
export const iconfontUrl = ``;

// 程序配置参数
export const app = store.get("__app__") || {
	name: "JINGXIAO-ADMIN",

	conf: {
		showAMenu: false, // 是否显示一级菜单栏
		showRouteNav: true, // 是否显示路由导航栏
		showProcess: false, // 是否显示页面进程栏
		customMenu: true // 自定义菜单
	},

	theme: {
		color: "", // 主题色
		url: "" // 主题样式地址
	}
};

// 自定义菜单列表
export const menuList = [
	{
		icon: "icon-workbench",
		name: "工作台",
		router: "/",
		// 菜单类型，0：目录，1：菜单，2：权限
		type: 1,
		viewPath: "views/home/index.vue",
	},
	{
		icon: "icon-rank",
		name: "监控管理",
		type: 0,
		children: [{
			icon: "icon-menu",
			name: "监控列表",
			router: "/task/index",
			type: 1,
			children: [],
			viewPath: "views/task/index.vue",
		},{
			icon: "icon-log",
			name: "运行日志",
			router: "/task/log",
			type: 1,
			children: [],
			viewPath: "views/task/log.vue",
		}],
	},
	{
		icon: "icon-user",
		name: "账号管理",
		type: 0,
		children: [{
			icon: "icon-user",
			name: "账号列表",
			router: "/user/index",
			type: 1,
			children: [],
			viewPath: "views/user/index.vue",
		}, {
			icon: "icon-user",
			name: "批量注册",
			router: "/user/register",
			type: 1,
			children: [],
			viewPath: "views/user/register.vue",
		}],
	},
	{
		icon: "icon-user",
		name: "支付管理",
		router: "/pay",
		type: 1,
		children: [],
		viewPath: "views/errorpage/development.vue",
	},
	{
		icon: "icon-user",
		name: "个人信息",
		router: "/personal",
		type: 1,
		children: [],
		viewPath: "views/personal/index.vue",
	},
];


