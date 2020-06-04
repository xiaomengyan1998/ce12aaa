<template>
  <div class="shop">
    <!-- 头部 -->
    <header>
      <h3>购物车</h3>
    </header>
    <!-- 主体 -->
   <div class="main">
     <img src="../../assets/icon/gwc.png" alt="">
   </div>
   <!-- footer -->
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
  name: "Shop"
};
</script>
<style scoped lang='scss'>
.shop {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  header {
    /* width: 105px; */
    height: 80px;
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(18, 18, 18, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* 主体 */
  .main{
    background: #f0f0f0;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
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
    #s{
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