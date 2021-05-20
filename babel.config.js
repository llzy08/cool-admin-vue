/*
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-18 16:54:20
 * @LastEditTime: 2021-05-19 14:41:07
 */
module.exports = {
	presets: ["@vue/app"],
	plugins: [
		["jsx-v-model"],
		[
			"component",
			{
				libraryName: "element-ui",
				styleLibraryName: "theme-chalk"
			}
		]
	]
};
