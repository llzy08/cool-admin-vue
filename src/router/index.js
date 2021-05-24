/*
 * @Description: router
 * @Autor: lzy
 * @Date: 2021-05-18 16:54:20
 * @LastEditTime: 2021-05-24 14:27:12
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { routerMode } from "@/config/env";
import { menuList } from "@/config/env.js";
Vue.use(VueRouter);

// 忽略规则
const ignore = {
	token: ["/login", "/403", "/404", "/500", "/502"]
};

let list = []
function mapRoute(_list) {
	_list.forEach(item => {
		if (item.type == 0) {
			mapRoute(item.children);
		} else if (item.type == 1) {
			list.push({name: item.name, path: item.router, component: () => import(`@/${item.viewPath}`)});
		}
	})
}

mapRoute(menuList);

// 路由列表
const routes = [
	{
		path: "/",
		name: "index",
		component: () => import(`@/pages/layout/index.vue`),
		children: list
	}
];

const Router = new VueRouter({
	mode: routerMode || "history",
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	}
});

export { ignore, routes };
export default Router;
