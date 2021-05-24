/*
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-18 16:54:20
 * @LastEditTime: 2021-05-24 10:04:40
 */
import Vue from "vue";
import VueECharts from "vue-echarts";
import { bootstrap } from "cl-admin";
import { app } from "@/config/env";
import App from "./App.vue";
import "./element";

// 路由
import router from "@/router";

// 缓存
import store from "@/store";

// mock
import "@/mock";

// echarts 可视图表
Vue.component("v-chart", VueECharts);

// 阻止显示生产模式的消息
Vue.config.productionTip = false;

var _ticks = 0;
var _onTimerComp = [];

function tick1s() {
	compTick1s(_ticks);
	++_ticks;
}

function setTimer(obj) {
	if (!_onTimerComp.includes(obj))
		_onTimerComp.push(obj);
}

function removeTimer(obj) {
	_onTimerComp = _onTimerComp.filter(d => d != obj);
}

function compTick1s(ticks) {
	_onTimerComp.forEach(d => {
		if (d) compOnTimer(d, ticks);
	});
	_onTimerComp = _onTimerComp.filter(d => d);
}

function compOnTimer(obj, ticks) {
	//console.info('compOnTimer', obj)
	let key = '$children';
	if (obj.hasOwnProperty(key) && obj[key])
		obj[key].forEach(d => compOnTimer(d, ticks));

	key = 'onTimer1s';
	if (obj.hasOwnProperty(key) && typeof obj[key] == 'function')
		obj[key](ticks);
		
	if (typeof obj == 'function') 
		obj(ticks);
}

setInterval(tick1s, 1000);

Vue.mixin({
	mounted() {
		if (this.onTimer1s) {
			setTimer(this)
		}
		
	},
	beforeDestroy() {
		if (this.onTimer1s) {
			removeTimer(this)
		}
	}
})

// 配置
bootstrap()
	.then(() => {
		// 加载菜单、用户信息
		store.dispatch("appLoad");

		new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount("#app");
	})
	.catch(err => {
		console.error(`${app.name} 启动失败`, err);
	});
