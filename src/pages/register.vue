<template>
	<transition
	    leave-active-class="fadeOutDown" 
	>
	<div class="animated fadeInDown bar">
			<div class="top">
				<i @click="back" class="back"><font class="fa fa-hand-o-left"></font></i>
			</div>
			<div class="logo">
				<img src="../../public/img/3.png" alt="">
				<h2>萝卜书斋</h2>
			</div>
			<div class="num">
				<form>
					<input type="text" name="" id="" placeholder="请输入您的账号"/>
					<input type="text" name="" id="" placeholder="输入密码"/>	
					<input type="submit" value="登 录"/>
					<div class="check">
						<p>
							<input type="checkbox" checked="checked" style="vertical-align:middle"/>记住账号</p>
						<p class="log" @click="log">去注册</p>
					</div>
				</form>
			</div>
		
	</div></transition>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$eventbus.$emit('regShow')
				this.$eventbus.$emit('markShow')
			},
			log(){
				this.$eventbus.$emit('logShow')
				this.$eventbus.$emit('regShow')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bar{
		position: fixed;
		top:20%;
		left:.8rem;
		width:80%;
		/*height:6rem;*/
		.top{
			display: flex;
			align-items: center;
			padding: 0 .2rem;
			width: 100%;
			height: 0.84rem;
			border-bottom: 1px solid #dfdfdf;
			i{
				color: #b4b4b4;
				height: 0.6rem;
				width: .6rem;
				font-size: 0.4rem;
				text-align: center;
				line-height: 0.6rem;
				background: white;
				border-radius: .4rem;
			}
		}
		.logo{
			border-radius:.2rem .2rem 0 0;
			height:1.5rem;
			background:white;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			padding:.15rem 0;
			img{
				display: block;
				width:.7rem;
				height:.7rem;
				border-radius: .1rem;
			}
		}
		.num{
            width:100%;
            border-radius:0 0 .2rem .2rem;
            height:3.4rem;
            padding-top:.2rem;
            background:white;
            text-align: center;
            input{
                width:5rem;
                height:.7rem;
                padding:0 .2rem;
                border-radius:.1rem;
            }
            input:nth-child(1){
                border:.02rem solid #c9c9c9;
            }
            input:nth-child(2){
                margin:.2rem 0 .25rem 0;
                border:1px solid #c9c9c9;
            }
            input:nth-child(3){
                width:5rem;
                height:.7rem;
                padding:0 .2rem;
                background:#DC4F45;
                border-radius:2px;
                font-size:.35rem;
                color:white;
            }
            .check{
                height:.2rem;
                margin-top:.15rem;
                display: flex;
                padding: 0 .2rem;
                justify-content: space-between;
                p{
                  width:1.6rem;
                  height:.2rem;
                  font-size:.2rem;
                  color:#DC4F45;
                  line-height:.2rem;
                  input{
                      width:.28rem;
                      height:.32rem;
                  } 
                }
                a{
                  font-size:.2rem;
                  color:#DC4F45;
                  display: block; 
                  line-height:.2rem;
                }   
            }
        }
        .exit{
        	width:3.4rem;
        	height:5rem;
        	background:red;
        }
	}
</style>
