/*
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-18 16:54:20
 * @LastEditTime: 2021-05-24 12:16:46
 */
import "./chat";
import "./lzy";

const xhr = new window._XMLHttpRequest();
window.XMLHttpRequest.prototype.upload = xhr.upload;
