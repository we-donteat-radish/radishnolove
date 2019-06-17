<template>
  <div class="box">
    <Header class="header"></Header>
    <router-view class="main"></router-view>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>

 import Header from './components/Header.vue'
 import Footer from './components/Footer.vue'

export default {
  components:{
    Header,
    Footer
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
      background: #f2f2f2;
      border-bottom: 1px solid #dfdfdf;
    }
    .footer{
      width: 100%;
      height: 1rem;
      background: #f0f0f0;
    }
    .main{
      flex: 1;
    }
}
</style>
