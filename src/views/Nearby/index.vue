<template>
  <div class="nearby">
    <!-- 头部 -->
    <header>
      <h4>附近</h4>
      <div class="cls">
        <aside>美食</aside>
        <aside>休闲</aside>
        <aside>娱乐</aside>
        <aside>学习</aside>
        <aside>家装</aside>
        <aside>家政</aside>
      </div>
      <!-- 分割线 -->
      <div class="xx"></div>
    </header>
    <!-- 主题内容 -->
    <div class="main">
      <section>
        <img src="../../assets/icon/dcf.png" alt />
        <div class="rigt">
          <h4>正经饭儿新派炒饭&轻食</h4>
          <a href>
            <i>青岛市黄岛区黄浦江路电子科技市场</i>
          </a>
          <p>距离128m</p>
        </div>
      </section>
      <!--  -->
      <section>
        <img src="../../assets/icon/dcf.png" alt />
        <div class="rigt">
          <h4>正经饭儿新派炒饭&轻食</h4>
          <a href>
            <i>青岛市黄岛区黄浦江路电子科技市场</i>
          </a>
          <p>距离128m</p>
        </div>
      </section>
      <section>
        <img src="../../assets/icon/dcf.png" alt />
        <div class="rigt">
          <h4>正经饭儿新派炒饭&轻食</h4>
          <a href>
            <i>青岛市黄岛区黄浦江路电子科技市场</i>
          </a>
          <p>距离128m</p>
        </div>
      </section>
      <section>
        <img src="../../assets/icon/dcf.png" alt />
        <div class="rigt">
          <h4>正经饭儿新派炒饭&轻食</h4>
          <a href>
            <i>青岛市黄岛区黄浦江路电子科技市场</i>
          </a>
          <p>距离128m</p>
        </div>
      </section>
      <section>
        <img src="../../assets/icon/dcf.png" alt />
        <div class="rigt">
          <h4>正经饭儿新派炒饭&轻食</h4>
          <a href>
            <i>青岛市黄岛区黄浦江路电子科技市场</i>
          </a>
          <p>距离128m</p>
        </div>
      </section>
      <section>
        <img src="../../assets/icon/dcf.png" alt />
        <div class="rigt">
          <h4>正经饭儿新派炒饭&轻食</h4>
          <a href>
            <i>青岛市黄岛区黄浦江路电子科技市场</i>
          </a>
          <p>距离128m</p>
        </div>
      </section>
      <section>
        <img src="../../assets/icon/dcf.png" alt />
        <div class="rigt">
          <h4>正经饭儿新派炒饭&轻食</h4>
          <a href>
            <i>青岛市黄岛区黄浦江路电子科技市场</i>
          </a>
          <p>距离128m</p>
        </div>
      </section>
      <section>
        <img src="../../assets/icon/dcf.png" alt />
        <div class="rigt">
          <h4>正经饭儿新派炒饭&轻食</h4>
          <a href>
            <i>青岛市黄岛区黄浦江路电子科技市场</i>
          </a>
          <p>距离128m</p>
        </div>
      </section>

      <section>
        <img src="../../assets/icon/dcf.png" alt />
        <div class="rigt">
          <h4>正经饭儿新派炒饭&轻食</h4>
          <a href>
            <i>青岛市黄岛区黄浦江路电子科技市场</i>
          </a>
          <p>距离128m</p>
        </div>
      </section>
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
  name: "Nearby"
};
</script>
<style scoped lang='scss'>
@import "~@/assets/styles/mixins.scss";
/* 头部start */
.nearby {
  display: flex;
  height: 100%;
  flex-flow: column;
  /* 头部 */
  header {
    width: 100%;
    height: 116px;
    /* background: pink; */
    h4 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(18, 18, 18, 1);
      @include border-bottom;
    }
    .xx {
      height: 3px;
      background: rgba(102, 102, 102, 0.24);
    }
    .cls {
      height: 56px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      aside {
        width: 60px;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        border-bottom: 2px solid rgba(255, 255, 255, 0);
      }

      aside:nth-child(1) {
        color: #ff6600;
        font-size: 20px;
        border-bottom: 2px solid rgba(255, 82, 0, 1);
        /* width:25px; */
      }
    }
  }
  /*主体内容部分 */
  .main {
    flex: 1;
    overflow: auto;
    section {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: space-between;
      padding: 10px 10px 0;
      margin-top: 10px;
      img {
        width: 80px;
        height: 80px;
      }
      .rigt {
        width: 300px;

        h4 {
          color: black;
          line-height: 30px;
          font-weight: bold;
        }
        a {
          display: inline-block;
          width: 250px;
          /*height: 12px; */
          color: #576b95;
          background: url("../../assets/icon/dw.png") 1px center no-repeat;
          /* background-position: 1px 1px; */
          background-size: 12px;
          /* font-size: 16px; */
          line-height: 30px;
          i {
            font-size: 14px;
            padding-left: 10px;
          }
        }
        p {
          font-size: 14px;
          margin-left: -190px;
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
    #n {
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