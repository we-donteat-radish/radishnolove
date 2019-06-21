<template>
    <div class="all">
        <div class="numOne" v-if="hide1">
            <i><font class="fa fa-search" @click="glass"></font></i>
            <li><div>发现</div><div>精选</div></li>
            <span @click="reg">登录</span>
        </div>
		<div class="numTwo" v-if="hide2">
			<p><font class="fa fa-search" @click="glass"></font></p>
			<li>
				<router-link to="/msg" class="msg">通知</router-link>
				<router-link to="/comment">评论</router-link>
			</li>
			<p></p>
		</div>
		<div class="numThree" v-if="hide3">
			<i><font class="fa fa-search" @click="glass"></font></i>
			<p>{{title}}</p>
			<i v-if="hide4" @click="showBar"><font class="fa fa-cog"></font></i>
			<i v-if="!hide4"> </i>
		</div>
    </div>
</template>

<script>
export default {
	data(){
		return {
			hide1:true,
			hide2:false,
			hide3:false,
			title:"全部",
			hide4:false,
		}
	},
	methods:{
		showBar(){
			this.$eventbus.$emit('barShow') //调用显示设置侧边栏
		},
		reg(){
			this.$eventbus.$emit('regShow')  //调用显示登陆页面
			this.$eventbus.$emit('markShow')
		},
		glass(){
			this.$eventbus.$emit('Hide5')  // 显示搜索框
		}
	},
	created(){
		this.$eventbus.$on('Show1',()=>{  //创建首页top显示的方法
			this.hide1 = true;
		})
		this.$eventbus.$on('Show2',()=>{  //创建信息页top显示的方法
			this.hide2 =true;
		})
		this.$eventbus.$on('Show3',()=>{  //创建萝卜坑、我的页面top显示的方法
			this.hide3 =true;
		})
		this.$eventbus.$on('Hide1',()=>{  //创建首页top隐藏的方法
			this.hide1 = false;
		})
		this.$eventbus.$on('Hide2',()=>{   //创建信息页top隐藏的方法
			this.hide2 =false;
		})
		this.$eventbus.$on('Hide3',()=>{  //创建萝卜坑、我的页面top隐藏的方法
			this.hide3 =false;
		})
		this.$eventbus.$on('title',(str)=>{ //改变标题
			this.title =str;
		})
		this.$eventbus.$on('hide4',(str)=>{  //创建我的页面top，设置图标显示还是隐藏
			this.hide4 = str;
		})
	},
	
}
</script>

<style lang="scss" scoped>
.fa-search,.fa-cog{
	color:#DFDFDF;
}
.numOne{
	
    display: flex;
    justify-content: space-between;
    align-items: center;
    i{
        color: #909090;
        width: 0.8rem;
        height: 0.8rem;
        font-size: 0.4rem;
        line-height: 0.8rem;
        text-align: center;
    }
    span{
        color: #842b31;
        padding-right:0.2rem;
    }
    li{
        display: flex;
        justify-content: space-between;
        width: 1.6rem;
        font-size: 0.3rem;
        line-height: 0.6rem;
        color: #909090;
    }
}
.numTwo{
	display: flex;
	justify-content:space-between;
	align-items: center;
	height: 100%;
	i{
		padding-right: 0.3rem;
	}
	.msg{
		margin-right: .4rem;
	}
	p{
		display: block;
		color: #909090;
		width: 0.8rem;
		height: 0.8rem;
		font-size: 0.4rem;
		line-height: 0.8rem;
		text-align: center;
		float: left;
	}
}
.numThree {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 .2rem;
	width: 100%;
	height: 0.84rem;
	border-bottom: 1px solid #dfdfdf;
	i,a{
		color: #909090;
		height: 0.8rem;
		font-size: 0.4rem;
		line-height: 0.8rem;
	}
	
	p {
		text-align: center;
		line-height: 0.8rem;
		font-size: 0.32rem;
		color: #909090;
	}
}

</style>
