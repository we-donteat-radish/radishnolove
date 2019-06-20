<template>
  <div class="box">
    <div class="box1">
      <div class="box1"></div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="..\assets\images\1.png" alt>
          </div>
          <div class="swiper-slide">
            <img src="..\assets\images\2.png" alt>
          </div>
          <div class="swiper-slide">
            <img src="..\assets\images\3.png" alt>
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
      <div class="box2">
        <h3>萝卜书友</h3>
        <div>
          <ul>
            <li v-for="item in arr" :key="item.id">
              <img :src="'http://10.70.10.6:3000/images/' + item.img" alt>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
        <h3>推荐萝卜坑</h3>
        <div>
          <ul>
            <li v-for="item in k" :key="item.id">
              <img :src="'http://10.70.10.6:3000/images2/' + item.img" alt>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="box3">
        <h3>专题集</h3>
        <ul>
          <li v-for="item in z" :key="item.id">
            <img :src="'http://10.70.10.6:3000/images3/' + item.img" alt>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IScroll from "iscroll";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import '../assets/css/slide.css';
export default {
  data() {
    return {
      arr: [],
      k: [],
      z: []
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  created() {
    this.$axios.get("http://10.70.10.6:3000/db.json").then(result => {
      // console.log(result.data);
      this.arr = result.data.pic;
    });
    this.$axios.get("http://10.70.10.6:3000/k.json").then(result => {
      // console.log(result.data);
      this.k = result.data.pic;
    });
    this.$axios.get("http://10.70.10.6:3000/z.json").then(result => {
      // console.log(result.data);
      this.z = result.data.pic;
    });
  }
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  background: #fcfcfc;
  overflow: auto;
  .box1 {
    width: 100%;
    position: absolute;
    .swiper-container {
      width: 100%;
      height: 3.5rem;
      text-align: center;
      img {
        display: inline-block;
        height: 3.5rem;
      }
    }
    .box2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      h3 {
        height: 0.35rem;
        margin: 0.16rem 0.3rem;
        padding-left: 0.52rem;
        background: url(../assets/images/6.jpg) no-repeat left center;
        background-size: 0.35rem;
        color: #7f2f2c;
        line-height: 0.35rem;
      }
      div {
        width: 100%;
        padding: 0.25rem 0.2rem;

        ul {
          display: flex;
          overflow: auto;
        }
        li {
          margin: 0 0.1rem;
          flex: 1;
          img {
            width: 2.1rem;
            height: 2.1rem;
          }
          p {
            font-size: 14px;
            color: #a9a9a9;
            text-align: center;
            margin-top: 0.2rem;
          }
        }
      }
    }
    .box3 {
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;
      h3 {
        height: 0.35rem;
        margin: 0.16rem 0.3rem;
        padding-left: 0.52rem;
        background: url(../assets/images/6.jpg) no-repeat left center;
        background-size: 0.35rem;
        color: #7f2f2c;
        line-height: 0.35rem;
      }
      ul{
        width: 100%;
        padding: 0.1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li{
          padding: 0.1rem;
          img{
            width: 3.45rem;
          }
        }
      }
    }
  }
}
</style>
