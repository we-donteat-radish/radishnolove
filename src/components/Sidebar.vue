<template>
	<transition
	    leave-active-class="fadeOutRight" 
	>
	<div class="animated fadeInRight bar">
			<div class="top">
				<i @click="back"><font class="fa fa-chevron-left"></font></i>
				<p>设置</p>
			</div>
			<div class="same">我的钱包<font class="fa fa-angle-right"></font></div>
			<div class="same">邀请好友<font class="fa fa-angle-right"></font></div>
			<ul>
				<li>推送消息<font class="fa fa-angle-right"></font></li>
				<li>书摘/随笔分享图分辨率<span>高清(1080px)</span></li>
				<li>我屏蔽的人<font class="fa fa-angle-right"></font></li>
				<li>账号绑定<font class="fa fa-angle-right"></font></li>
				<li>清除缓存<font class="fa fa-angle-right"></font></li>
				<li>吐槽产品狗<font class="fa fa-angle-right"></font></li>
				<li>关于<font class="fa fa-angle-right"></font></li>
			</ul>
			<i class="out">退出账号</i>
	</div></transition>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$eventbus.$emit('barShow')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bar{
		position: fixed;
		background:#ebebeb;
		top:0;
		left: 0;
		width:100%;
		height:100%;
		.top{
			display: flex;
			align-items: center;
			padding: 0 .2rem;
			width: 100%;
			height: 0.84rem;
			background:white;
			border-bottom: 1px solid #dfdfdf;
			i{
				color: #b4b4b4;
				height: 0.8rem;
				font-size: 0.4rem;
				line-height: 0.8rem;
			}
			p {
				width:6.5rem;
				text-align: center;
				line-height: 0.8rem;
				font-size: 0.32rem;
				color: #9c9c9c;
			}
		}
		.same{
			height:.8rem;
			background: white;
			margin-top:.5rem;
			padding:0 .2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.fa-angle-right{
				font-size:.5rem;
				color:#cdcdcd;
			}
		}
		ul{
			background: white;
			margin-top:.5rem;
			padding:0 .2rem;
			li{
				height:.8rem;
				border-bottom: 0.02rem solid #ededed;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.fa-angle-right{
					font-size:.5rem;
					color:#cdcdcd;
				}
			}
		}
		.out{
			height:.8rem;
			background: white;
			margin-top:.5rem;
			padding:0 .2rem;
			display: flex;
			justify-content:center;
			align-items: center;
			color:#842b31;
		}
	}
</style>
