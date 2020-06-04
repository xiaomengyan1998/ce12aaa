<template>
  <div class="my">
    <header>我的</header>
    <div class="main">
      <!-- 背景图 -->
      <section>
        <div class="bj">
          <div class="left">
            <router-link to="Myi">
            <img src="../../assets/icon/my/gr.png" alt />
            </router-link>
            <span>J.K</span>
          </div>
          <div class="right">
            <img src="../../assets/icon/my/ewm.png" alt />
          </div>
        </div>
      </section>
      <!-- 商家入驻 -->
      <div class="merchant">
        <div class="lt">
          <img src="../../assets/icon/my/sjrz.png" alt />
          <span>商家入驻</span>
        </div>
        <div class="rt">
          <img src="../../assets/icon/my/jz.png" alt />
        </div>
      </div>
      <!-- 我的订单 -->

      <div class="top">
        <div class="lt1">
          <img src="../../assets/icon/my/dd.png" alt />
          <span>我的订单</span>
        </div>
        <div class="rt1">
          <img src="../../assets/icon/my/jz.png" alt />
        </div>
      </div>

      <nav class="index-nav">
        <a href>
          <div class="nav-item">
            <img src="../../assets/icon/my/dzf.png" alt />
            <p class="nav-text font-24">待支付</p>
          </div>
        </a>
        <a href>
          <div class="nav-item">
            <img src="../../assets/icon/my/dcl.png" alt />
            <p class="nav-text font-24">待处理</p>
          </div>
        </a>
        <a href=" ">
          <div class="nav-item">
            <img src="../../assets/icon/my/ycl.png" alt />
            <p class="nav-text font-24">已处理</p>
          </div>
        </a>
        <a href=" ">
          <div class="nav-item">
            <img src="../../assets/icon/my/ywc.png" alt />
            <p class="nav-text font-24">已完成</p>
          </div>
        </a>
      </nav>
    </div>
    <!-- footer -->
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
</template>

<script>
export default {
  name: "My"
};
</script>
<style scoped lang="scss">
@import "~@/assets/styles/mixins.scss";
.my {
  height: 100%;
  /* width: 100%; */
  display: flex;
  flex-flow: column;
  header {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(18, 18, 18, 1);
    background: coral;
  }
  /* 主体部分 */
  .main {
    flex: 1;
    overflow: auto;
    background: #f0f0f0;
    section {
      display: flex;
      justify-content: space-between;
      /* padding:0 10px; */
      .bj {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        width: 100%;
        height: 200px;
        /* background: url('../../assets/icon/my/bj.png') no-repeat center; */
        background: linear-gradient(
          0deg,
          rgba(255, 105, 0, 1) 0%,
          rgba(246, 169, 0, 1) 100%
        );

        .left {
          display: flex;
          align-items: center;
          img {
            width: 85px;
            height: 85px;
            margin-right: 25px;
          }
          span {
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 48px;
          }
        }
        .right {
          img {
            width: 70px;
            height: 70px;
          }
        }
      }
    }
    /* 商家入驻 */
    .merchant {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      height: 60px;
      background: white;
      .lt {
        img {
          widows: 20px;
          height: 20px;
          margin-right: 10px;
        }
        span {
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(50, 50, 50, 1);
          line-height: 48px;
        }
      }
      .rt {
        img {
          width: 16px;
          height: 20px;
        }
      }
    }
    /* 我的订单 */
    .top {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      height: 60px;
      background: white;
      @include border-bottom;
      .lt1 {
        img {
          widows: 20px;
          height: 20px;
          margin-right: 10px;
        }
        span {
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(50, 50, 50, 1);
          line-height: 48px;
        }
      }
      .rt1 {
        img {
          width: 16px;
          height: 20px;
        }
      }
    }
    .index-nav {
      /* height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white; */
      width: 100%;
      height: 100px;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      /* flex-flow: wrap; */
      /* margin-top: -80px; */
      .nav-item {
        width: 35px;
        height: 35px;
        margin: 0 26px;
        line-height: 30px;
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
    #my{
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