<template>
  <div class="home">
    <!--  头部start -->
    <header class="index-header">
      <!-- start -->
      <section>
        <!-- 左 -->
        <div class="left">
          <a href>
            青岛
            <img src="../../assets/icon/xl.png" alt />
          </a>
        </div>
        <!-- 中 -->

        <form action>
          <div class="search">
            <input type="submit" class="btn" value />
            <input type="text" value="搜索商品关键字" class="txt" />
          </div>
        </form>

        <!-- 右 -->
        <div class="right">
          <!-- <img src="../../assets/icon/sys.png" alt /> -->
        </div>
      </section>
      <!-- end -->
    </header>
    <!-- 头部end -->
    <div class="main">
      <!-- 平台积分背景色 -->
      <div class="colr">
        <!-- 平台累计start -->
        <div class="plat">
          <!-- 1 -->
          <aside>
            <span>平台累计母积分</span>
            <p>1200</p>
          </aside>
          <!-- 2 -->
          <aside>
            <span>平台剩余母积分</span>
            <p>600</p>
          </aside>
          <!-- 3 -->
          <aside>
            <span>今日子积分</span>
            <p>200</p>
          </aside>
        </div>
        <!-- 平台累计end -->
      </div>
      <!-- 轮播图start -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/icon/z2.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/icon/z2.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/icon/z2.png" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 轮播图end -->

      <!--分类区内容 start-->
      <nav class="index-nav">
        <a href>
          <div class="nav-item">
            <img src="../../assets/icon/xxyl.png" alt />
            <p class="nav-text font-24">休闲娱乐</p>
          </div>
        </a>
        <a href>
          <div class="nav-item">
            <img src="../../assets/icon/z3.png" alt />
            <p class="nav-text font-24">家政装修</p>
          </div>
        </a>
        <a href=" ">
          <div class="nav-item">
            <img src="../../assets/icon/jypx.png" alt />
            <p class="nav-text font-24">教育培训</p>
          </div>
        </a>
        <a href=" ">
          <div class="nav-item">
            <img src="../../assets/icon/yyjs.png" alt />
            <p class="nav-text font-24">游泳健身</p>
          </div>
        </a>
        <a href=" ">
          <div class="nav-item">
            <img src="../../assets/icon/yxmr.png" alt />
            <p class="nav-text font-24">医学美容</p>
          </div>
        </a>
        <a href=" ">
          <div class="nav-item">
            <img src="../../assets/icon/lrmf.png" alt />
            <p class="nav-text font-24">丽人美发</p>
          </div>
        </a>
        <a href=" ">
          <div class="nav-item">
            <img src="../../assets/icon/hssy.png" alt />
            <p class="nav-text font-24">婚纱摄影</p>
          </div>
        </a>
        <a href=" ">
          <div class="nav-item">
            <img src="../../assets/icon/gd.png" alt />
            <p class="nav-text font-24">更多</p>
          </div>
        </a>
      </nav>
      <!-- 分类区内容 end -->
      <!-- 广告图start -->
      <div class="cl"></div>
      <img class="gg" src="../../assets/icon/img.png" alt />
      <div class="cl"></div>
      <!-- 热门推荐 start-->
      <div class="hold">
        <!-- 头 -->
        <div class="rmtj">
          <img src="../../assets/icon/rmtj.png" alt />
        </div>
        <div class="choose">
          <!-- 左 -->
          <a class="lef">商品</a>
          <!-- 右 -->
          <a class="righ">商家</a>
        </div>
        <!-- 商品 -->
        <div class="sp">
          <article>
            <img src="../../assets/icon/sp.png" alt />
            <aside>FZKF1 878#桑蚕丝纤维..</aside>
            <p>
              ￥189
              <s>￥229</s>
            </p>
          </article>
          <!--  -->
          <article>
            <img src="../../assets/icon/sp.png" alt />
            <aside>FZKF1 878#桑蚕丝纤维..</aside>
            <p>
              ￥189
              <s>￥229</s>
            </p>
          </article>
          <!--  -->
          <article>
            <img src="../../assets/icon/sp.png" alt />
            <aside>FZKF1 878#桑蚕丝纤维..</aside>
            <p>
              ￥189
              <s>￥229</s>
            </p>
          </article>
          <!--  -->
          <article>
            <img src="../../assets/icon/sp.png" alt />
            <aside>FZKF1 878#桑蚕丝纤维..</aside>
            <p>
              ￥189
              <s>￥229</s>
            </p>
          </article>
          <!--  -->
          <article>
            <img src="../../assets/icon/sp.png" alt />
            <aside>FZKF1 878#桑蚕丝纤维..</aside>
            <p>
              ￥189
              <s>￥229</s>
            </p>
          </article>
          <!--  -->
          <article>
            <img src="../../assets/icon/sp.png" alt />
            <aside>FZKF1 878#桑蚕丝纤维..</aside>
            <p>
              ￥189
              <s>￥229</s>
            </p>
          </article>
        </div>
      </div>
      <!-- 热门推荐 end-->
      <!-- footer -->
      <!-- <Footo></Footo> -->

      <footer>
        <router-link to="/home" id="h">
          <section>
            <i class="iconfont icon-yemian"></i>
            <span>首页</span>
          </section>
        </router-link>
        <router-link to="/nearby" id="n">
          <section>
            <i class="iconfont icon-fujin"></i>
            <span>附近</span>
          </section>
        </router-link>
        <router-link to="/message" id="m">
          <section>
            <i class="iconfont icon-xiaoxi"></i>
            <span>消息</span>
          </section>
        </router-link>
        <router-link to="/shop" id="s">
          <section>
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
          </section>
        </router-link>
        <router-link to="/my" id="my">
          <section>
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
          </section>
        </router-link>
      </footer>
    </div>

    <!-- home end -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

// import Footo from '@/components/Footo '

export default {
  name: "Home",

  // components:{
  //   Footo
  // },

  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style scoped lang='scss'>
@import "~@/assets/styles/mixins.scss";
.home {
  height: 100%;
  /* width: 100%; */
  display: flex;
  flex-flow: column;
  /* background: pink; */
  .main {
    flex: 1;
    overflow-y: auto;
  }
  /* 头部start */
  .index-header {
    display: flex;
    outline: none;
    justify-content: space-between;
    /* height: 266px; */
    background: #ff9600;
    padding-bottom: 10px;
    /* 左边 */
    section {
      height: 60px;
      widows: 100%;
      /* background: chartreuse; */
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left a {
        width: 30px;
        height: 16px;
        font-size: 16px;
        font-family: PingFang SC;
        /* font-weight: bold; */
        color: rgba(255, 255, 255, 1);
        margin: 0 5px 0 15px;
        img {
          width: 10px;
          height: 8px;
        }
      }
      /* 中间 */
      form .search {
        width: 259px;
        height: 30px;
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.58);
        opacity: 0.6;
        border-radius: 30px;
        margin: 0 5px;
        outline: none;
        .btn {
          width: 13px;
          height: 14px;
          background: url("../../assets/icon/ss.png") no-repeat center;
          background-size: contain;
          border: none;
          margin: 0 8px;
          outline: none;
        }
        .txt {
          width: 106px;
          height: 14px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 1);
          /* color: red; */
          opacity: 0.8;
          border: none;
          outline: none;
        }
      }
      /* 右边 */
      .right {
        width: 21px;
        height: 18px;
        background: url("../../assets/icon/sys.png") no-repeat center;
        background-size: contain;
        margin: 0px 16px 0 0;
      }
    }
  }
  /*头部 end */

  /* 内容部分1start */
  .colr {
    height: 190px;
    background: linear-gradient(
      -30deg,
      rgba(255, 102, 0, 1),
      rgba(255, 150, 0, 1)
    );

    /* 平台积分start */
    .plat {
      display: flex;
      justify-content: space-between;
      padding: 10px 15px 0 15px;
      aside {
        width: 112px;
        height: 60px;
        background: #ff0000;
        border: 1px solid rgba(255, 255, 255, 1);
        opacity: 0.4;
        border-radius: 10px;
        margin-right: 5px;
        span {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgb(255, 255, 255);
          line-height: 30px;
        }
        p {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgb(255, 255, 255);
          line-height: 20px;
        }
      }
    }
    /* 平台积分end */
  }
  /* 内容分类部分2start */
  .index-nav {
    width: 100%;
    height: 150px;
    /* background: blue; */
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    margin-top: -80px;
    .nav-item {
      width: 45px;
      height: 45px;
      margin: 0 22px;

      img {
        width: 100%;
        height: 100%;
      }
      .nav-text {
        font-size: 10px;
        color: #8d8d8d;
        font-weight: 500;
        text-align: center;
      }
    }
  }
  /* 内容分类部分end */
  /* 内容分类部分3start gg */
  .cl {
    width: 100%;
    height: 10px;
    background: #ccc;
  }

  .gg {
    width: 100%;
    height: 100px;
    display: block;
  }

  .hold {
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    align-items: center;
    .rmtj {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0 0;
      @include border-bottom;
    }
    .choose {
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: center;

      align-items: center;
      @include border-bottom;
      .lef {
        width: 88px;
        height: 28px;
        border-bottom: 2px solid red;
        text-align: center;
        padding: 32px 0 0;
        margin-right: 150px;

        font-size: 24px;
        font-family: PingFang SC;

        color: rgba(50, 50, 50, 1);
        line-height: 24px;
      }
      .righ {
        width: 88px;
        height: 28px;
        border-bottom: 2px solid rgba(255, 255, 255, 0);
        text-align: center;
        padding: 32px 0 0;

        font-size: 24px;
        font-family: PingFang SC;

        color: rgba(50, 50, 50, 1);
        line-height: 24px;
      }
    }
    /* 商品 */
    .sp {
      width: 100%;
      height: 100%;
      flex-flow: wrap;
      display: flex;
      justify-content: space-between;

      margin-top: 20px;
      article {
        width: 166px;
        padding: 0 6px;
        img {
          width: 100%;
          height: 160px;
        }
        aside {
          font-size: 16px;
        }
        p {
          color: red;
          font-size: 24px;
          s {
            color: #333;
            font-size: 16px;
          }
        }
      }
    }
  }

  /* footer */
  footer {
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 999;
    background: rgba(249, 249, 249, 1);
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    line-height: 25px;
    align-items: center;
    section {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      .iconfont {
        font-size: 20px;
      }
      span {
        font-size: 14px;
        color: #323232;
      }
    }
    #h{
      section:nth-of-type(1) .iconfont {
      color: #ff6600;
      }
      section:nth-of-type(1) span {
        color: #ff6600;
      }
    }

  }
}
</style>

<style lang="scss">
/* 首页轮播图 */
.swiper-container {
  width: 375px;
  /* position: absolute;*/
  top: -100px;
  z-index: 1;
  .swiper-slide {
    img {
      width: 100%;
    }
  }
  .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.7);
  }
  .swiper-pagination-bullet-active {
    width: 20px;
    height: 10px;
    margin: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUBAMAAAANaGKIAAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/Pzs7Oyvr68AAADW1tYAAAD///8YAGtvAAAAD3RSTlMABBwyDQgVCyf2zXAQoC3PT9+CAAAAd0lEQVQY02PACQSRAFSIUTS83AUKyksDBcCCojVpSnCQdjwQrDAkqc8YDl6ouQqAFDp1r/wPB7N2qICUimfc/48E/rYVAgVjtP+jgE1HgUaGdaEKrkgVYGAs60QVnJGOXRCrdmwW4XISpuNxeBMzQHAEHWYg4wIAe7Sz99Wx/OUAAAAASUVORK5CYII=)
      no-repeat 50%;
    background-size: contain;
  }
}

/* 首页轮播图end */
</style>