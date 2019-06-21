<template>
	<transition
	    leave-active-class="zoomOut" >
		<div class="numFour animated zoomIn" v-if="hide5">
			<div class="top">
            <p><i><font class="fa fa-search"></font></i>
            <input type="text" placeholder="搜索自己的书摘与随笔"/></p>
            <span @click="del">取消</span>
            </div>
        </div>
     </transition>
</template>

<script>
	export default{
		data(){
			return {
				hide5:false
			}
		},
		created(){
			this.$eventbus.$on("Hide5",()=>{  //创建设置搜索框显示
				this.hide5 = !this.hide5
			})
		},
		methods:{
			del(){
				this.$eventbus.$emit("Hide5")  //调用取消搜索框
			}
		}
		
	}
</script>

<style lang="scss" scoped>
.fa-search{
	color:#DFDFDF;
}
.numFour{
	position: absolute;
	width: 100%;
	height:100%;
	background: white;
	.top{
		display: flex;
	    background: white;
	    width: 100%;
	    justify-content: space-between;
	    align-items: center;
	    height:1rem;
	    border-bottom: .02rem solid #D5D5D5;
	}
   
    p{
    	display: flex;
    }
    i{
        display: block;
        color: #909090;
        width: 0.6rem;
        height: 0.6rem;
        font-size: 0.35rem;
        line-height: 0.6rem;
        text-align: center;
        margin-left: .3rem;
        border:.02rem solid #D5D5D5;
        border-right: none;
        background: white;
    }
    input{
    	display: block;
    	width:5.6rem;
    	height:.6rem;
    	border:.02rem solid #D5D5D5;
        border-left: none;
    }
    input::-webkit-input-placeholder{
    	font-size:.2rem;
    	color:#DFDFDF;
    }
    span{
        color: #842b31;
        padding-right: 0.2rem;
    }
}
</style>