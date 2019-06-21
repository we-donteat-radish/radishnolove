<template>
  <div class="box">
    <Header class="header"></Header>
    <router-view class="main"></router-view>
    <Footer class="footer"></Footer>
		<Sidebar v-if='bar'></Sidebar>
		<div class="mark" v-if="mark"></div>
		<register v-if="reg" class="reg"></register>
		<login class="log" v-if="log"></login>
		<glass></glass>
  </div>
</template>

<script>

 import Header from './components/Header.vue';
 import Footer from './components/Footer.vue';
 import Sidebar from './components/Sidebar.vue';
 import register from './pages/register.vue';
 import login from './pages/login.vue';
 import glass from './pages/glass.vue';

export default {
	data(){
		return{
			bar:false,
			reg:false,
			mark:false,
			log:false
		}
	},
	created(){
		this.$eventbus.$on('barShow',()=>{  //我的页面里设置侧边栏
			this.bar = !this.bar
		})
		this.$eventbus.$on('regShow',()=>{
			this.reg = !this.reg
		})
		this.$eventbus.$on('markShow',()=>{
			this.mark = !this.mark
		})
		this.$eventbus.$on('logShow',()=>{
			this.log = !this.log
		})
	},
	  components:{
			Header,
			Footer,
			Sidebar,
			register,
			login,
			glass
	  }
}
</script>

<style lang="scss" scoped>
  .box{
    height:100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    .header{
      width: 100%;
      height: .84rem;
      background: white;
      border-bottom: 1px solid #dfdfdf;
    }
    .footer{
      width: 100%;
      height: 1rem;
      background: white;
       border-top: 1px solid #dfdfdf;
    }
    .main{
			width:100%;
			height:100%;
      flex: 1;
    }
    .mark{
    	position: absolute;
    	top:0;
    	width:100%;
    	height: 100%;
    	background: rgba(0,0,0,.3);
    }
    .reg{
    	z-index: 2;
    }
}
</style>
