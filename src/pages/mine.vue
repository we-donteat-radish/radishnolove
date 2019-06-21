<template>
	<div class="mine">
		<div class="names">
			<p class="left"><img src="../../public/img/2.jpg"></p>
			<div class="left1">
				<li class="ni">昵称<font class="fa fa-venus"></font></li>
				<li class="add">此人没有添加个性签名</li>
			</div>
		</div>
		<div class="apply">
			<button class="btn"><font class="fa fa-download"></font>申请认证</button>
			<li>关注<span>0</span></li>
			<li>粉丝<span>0</span></li>
			<li>萝卜坑<span>0</span></li>
		</div>
		<div class="publish">
			<ul class="tab">
				<li v-for='(tab,index) in tabs' :class="'tab-link' + index" @click="list(index)">
					{{tab.name}}</br>{{tab.name1}}
				</li>
			</ul>
			<div class="content">
				<!--第一块-->
				<div class="childs" style="display:block;">
					<div class="type">
						<h2><font class="fa fa-file-text-o"></font>按内容类型</h2>
						<ul class="type1">
							<li><font class="fa fa-th-large"></font><p></p></li>
							<li><font class="fa fa-file-excel-o "></font><p></p></li>
							<li><font class="fa fa-file-word-o"></font><p></p></li>
						</ul>
						<p class="type2">
							<i>全部</i>
							<i>书摘</i>
							<i>随笔</i>
						</p>
					</div>
					<div class="type pub">
						<h2><font class="fa fa-map-marker"></font>按发布位置</h2>
						<ul class="type1">
							<li><font class="fa fa-unlock"></font><p></p></li>
							<li><font class="fa fa-lock "></font><p></p></li>
						</ul>
						<p class="type2">
							<i>公开</i>
							<i>私密</i>
						</p>
					</div>
				</div>
				<!--第二块-->
				<div class="childs" style="display: none;">
					<div class="type">
						<h2><font class="fa fa-file-text-o"></font>按内容类型</h2>
						<ul class="type1">
							<li><font class="fa fa-th-large"></font><p></p></li>
							<li><font class="fa fa-file-excel-o "></font><p></p></li>
							<li><font class="fa fa-file-word-o"></font><p></p></li>
						</ul>
						<p class="type2">
							<i>全部</i>
							<i>书摘</i>
							<i>随笔</i>
						</p>
					</div>
					<div class="type pub">
						<h2><font class="fa fa-map-marker"></font>按转发位置</h2>
						<ul class="type1">
							<li><font class="fa fa-unlock"></font><p></p></li>
						</ul>
						<p class="type2">
							<i>公开</i>
						</p>
					</div>
				</div>
				<!--第三块-->
				<div class="childs" style="display: none;">
					<div class="type">
						<h2><font class="fa fa-file-text-o"></font>按内容类型</h2>
						<ul class="type1">
							<li><font class="fa fa-th-large"></font><p></p></li>
							<li><font class="fa fa-file-excel-o "></font><p></p></li>
							<li><font class="fa fa-file-word-o"></font><p></p></li>
						</ul>
						<p class="type2">
							<i>全部</i>
							<i>书摘</i>
							<i>随笔</i>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="content"></div>
		<div class="place"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tabs:[
					{name:"0",name1:"发布"},
					{name:"0",name1:"转发"},
					{name:"0",name1:"赞过"}
				],
			}
		},
		methods:{
			list(index){
				var childs = document.querySelectorAll(".childs");
					var len = childs.length;
					for(var i = 0;i < len;i ++){
						childs[i].style.display = "none";
						 document.querySelector('.tab-link' + i).style.color = "#000";
					}
					childs[index].style.display = "block";
					document.querySelector('.tab-link' + index).style.color = "#842b31";
			}
		},
		mounted(){
			document.querySelector('.tab-link0').style.color = "#842b31";
			this.$eventbus.$emit('Show3')
			this.$eventbus.$emit('title',"我")
			this.$eventbus.$emit('Hide1')
			this.$eventbus.$emit('Hide2')
			this.$eventbus.$emit('hide4',true)
			
		}
	}
</script>

<style lang="scss" scoped>
	.mine{
		.names{
			height:1.5rem;
			display: flex;
			padding:0 .3rem;
			margin-top:.2rem;
			/*align-items: center;*/
			img{
				width:1.6rem;
				height:1.6rem;
				border-radius: .2rem;
			}
			.left1{
				height:1.6rem;
				margin-left:.4rem;
				padding: .3rem 0;
				justify-content: space-between;
				display: flex;
				flex-direction:column;
				.ni{
					font-size:.3rem;
				}
				.add{
					color:#8e8e8e;
				}
				.fa-venus{
					margin-left: 0.1rem;
				}
			}
		}
		.apply{
			padding:0 .3rem;
			display: flex;
			height:1rem;
			border-bottom: 0.02rem solid #d5d5d5;
			align-items: center;
			.fa-download{
				margin-right:.1rem;
			}
			.btn{
				display: block;
				height:.5rem;
				width:1.8rem;
				background: none;
				border-radius: .1rem;
				border-color:#d5d5d5;
				color:#842b31;
			}
			li{
				color:#8e8e8e;
				margin-left:.5rem;
				span{
					color:#842b31;
				}
			}
		}
		.publish{
			.tab{
				height:1.1rem;
				display: flex;
				align-items: center;
				justify-content: space-around;
				border-bottom: 0.02rem solid #d5d5d5;
				li{
					text-align: center;
				}
			}
			.type{
				
				height:3.5rem;
				padding:.3rem;
				border-bottom: 0.02rem solid #D5D5D5;
				.fa-file-text-o,.fa-map-marker{
					margin-right:.1rem;
				}
			}
			.pub{
				border:0
			}
			.type1{
				margin-top:.3rem;
				display: flex;
				li{
					height:1.7rem;
					width:1.3rem;
					border:0.02rem solid #D5D5D5;
					margin-right: .5rem;
					text-align: center;
					line-height: 1.4rem;
					p{
						height:.3rem;
						background: #D5D5D5;
						font-size:.2rem;
						text-align: center;
					}
				}
				.fa-th-large{
					color:#74b1c4;
					font-size:.5rem;
				}
				.fa-file-excel-o{
					color:#edb57a;
					font-size:.45rem;
				}
				.fa-file-word-o,.fa-unlock{
					color:#b86e6d;
					font-size:.45rem;
				}
				.fa-lock{
					color:#715f8f;
					font-size:.45rem;
				}
			}
			.type2{
				display: flex;
				padding:.13rem 0 0 .3rem;
				i{
					margin-right:1.3rem;
					color:#D5D5D5;
					font-size:.28rem
				}
			}
		}
		.site{
			
		}
	}
</style>
