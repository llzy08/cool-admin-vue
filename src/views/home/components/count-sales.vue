<!--
 * @Description: 
 * @Autor: lzy
 * @Date: 2021-05-18 16:54:20
 * @LastEditTime: 2021-05-24 11:23:37
-->
<template>
	<div class="count-sales">
		<div class="card">
			<div class="card__header">
				<span class="label">总销抢购数</span>
				<span class="value">15920</span>
			</div>

			<div class="card__container">
				<ul class="count-sales__cop">
					<li>
						<span>周同比</span>

						<div class="fall">
							<i class="el-icon-bottom-right"></i>
							<span>-4%</span>
						</div>
					</li>

					<li>
						<span>日同比</span>

						<div class="rise">
							<i class="el-icon-top-right"></i>
							<span>+7%</span>
						</div>
					</li>
				</ul>
			</div>

			<div class="card__footer">
				<span class="label">日抢购数</span>
				<span class="value">1298</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.count-sales {
	&__cop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;

		li {
			display: flex;
			list-style: none;
			flex: 1;
			color: #d8d8d8;

			.fall,
			.rise {
				display: flex;
				align-items: center;
				margin-left: 10px;
			}

			.fall {
				color: #13ae7c;
			}

			.rise {
				color: #f21e37;
			}
		}
	}
}
</style>
