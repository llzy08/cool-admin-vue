/*
 * @Description: 1
 * @Autor: lzy
 * @Date: 2021-05-18 16:54:20
 * @LastEditTime: 2021-05-20 14:25:01
 */
import Mock from "mockjs";

Mock.mock("/im/session/page", "post", options => {
	const { keyWord = "" } = JSON.parse(options.body);

	const data = Mock.mock({
		"list|20": [
			{
				id: "@id",
				nickname: "@name",
				createTime: "@datetime(yy-MM-dd HH:mm:ss)",
				text: "@cparagraph(5)",
				content() {
					return JSON.stringify({ text: this.text });
				},
				"contentType|0-3": 0,
				"serviceUnreadCount|0-10": 0,
				headimgurl() {
					return Mock.Random.image(
						"40x40",
						Mock.Random.color(),
						"#FFF",
						"png",
						this.nickname[0]
					);
				}
			}
		]
	});

	return {
		code: 1000,
		data: {
			list: data.list.filter(e => e.nickname.includes(keyWord)),
			pagination: {}
		}
	};
});

Mock.mock("/im/session/unreadCount", "get", options => {
	const data = Mock.mock({
		"count|1-50": 1
	});

	return {
		code: 1000,
		data: data.count
	};
});

Mock.setup({
	timeout: "500-1000"
});

Mock.mock("/im/message/page", "post", options => {
	const data = Mock.mock({
		"list|20": [
			{
				id: "@id",
				nickname: "@name",
				createTime: "@datetime",
				text: "@cparagraph(1, 4)",
				content() {
					return JSON.stringify({ text: this.text });
				},
				contentType: 0,
				"type|0-1": 1
			}
		]
	});

	return {
		code: 1000,
		data: {
			list: data.list,
			pagination: {}
		}
	};
});

// Mock.mock("/dev/admin/base/open/login", "post", options => {
// 	console.log(options)
// 	return {
// 		code: 1000,
// 		data: {
// 			token: "123",
// 			expire: 7200,
// 			refreshToken: "456",
// 			refreshExpire :84880
// 		}
// 	};
// });

Mock.mock("https://api.szsige.com/dev/lzy/account/page", "post", options => {
	console.log(options)
	let table = [];
		for (let index = 0; index < 20; index++) {
			table.push({
				website: "www。",
				account: "account" + index,
				password: "password" + index,
				date: "2016-05-02",
				name: "王小虎",
				address: "上海市普陀区金沙江路 1518 弄"
			});
		}
	return {
		
			list: table,
			pagination: { "page": 1, "size": 20, "total": table.length }
		
	};
});

Mock.mock("https://api.szsige.com/dev/lzy/account/delete", "post", options => {
	let table = [];
		for (let index = 0; index < 20; index++) {
			table.push({
				id: index,
				website: "www。",
				account: "account" + index,
				password: "password" + index,
				date: "2016-05-02",
				name: "王小虎",
				address: "上海市普陀区金沙江路 1518 弄"
			});
		}
	return {
		list: table,
		pagination: { "page": 1, "size": 20, "total": table.length }
	};
});
