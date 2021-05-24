/*
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-24 12:16:27
 * @LastEditTime: 2021-05-24 14:49:35
 */
import Mock from "mockjs";

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

Mock.mock("https://api.szsige.com/dev/lzy/task/page", "post", options => {
    let table = [];
    for (let index = 0; index < 20; index++) {
        table.push({
            id: index,
            website: "www.coachoutlet.com",
            taskUrl: 'https://www.coachoutlet.com/products/city-tote-in-signature-canvas/5696.html',
            sku: 'IMCZ9',
            type: 0,
            num: 5,
            date: "2016-05-02"
        });
    }
    return {
        list: table,
        pagination: { "page": 1, "size": 20, "total": table.length }
    };
});

Mock.mock("https://api.szsige.com/dev/lzy/tasklog/page", "post", options => {
    let table = [];
    for (let index = 0; index < 20; index++) {
        table.push({
            id: index,
            website: "www.coachoutlet.com",
            taskUrl: 'https://www.coachoutlet.com/products/city-tote-in-signature-canvas/5696.html',
            account: `walking${index}@anncent.com`,
            sku: 'IMCZ9',
            num: 5,
            date: "2016-05-02",
            pay: '无'
        });
    }
    return {
        list: table,
        pagination: { "page": 1, "size": 20, "total": table.length }
    };
});

Mock.mock("https://api.szsige.com/dev/base/comm/person", "get", options => {

    return {
        "id": 1,
        "name": "超级管理员",
        "nickName": "管理员",
        "headImg": "https://show.cool-admin.com/uploads//20210311/2e393000-8226-11eb-abcf-fd7ae6caeb70.png",
        "remark": "拥有最高权限的用户",
        "status": 0,
        effective: 28,
        level: 1,
    }
});