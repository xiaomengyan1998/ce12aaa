<template>
  <div class="message">
    <!-- 头部 -->
    <header>
      <a href>
        <img src="../../assets/icon/fh.png" alt />
      </a>
      <h3>客服</h3>
    </header>
    <!-- 内容主体部分 -->
    <div class="main">
      <!-- 时间1 -->
      <div class="time">2020-05-12 10:03</div>
      <!-- 商家 -->
      <div class="sj">
        <img src="../../assets/icon/sj.png" alt />
        <img src="../../assets/icon/sjj.png" alt />
      </div>
      <!-- 时间2 -->
      <div class="time1">2020-05-12 10:03</div>
      <!-- 顾客 -->
      <div class="gk">
        <img src="../../assets/icon/gkk.png" alt />
        <img src="../../assets/icon/gk.png" alt />
      </div>
    </div>
    <!-- footer -->
    <footer>
      <input type="text" value="请输入消息" />
      <img src="../../assets/icon/sc.png" alt />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Message"
};
</script>
<style scoped lang='scss'>
.message {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  header {
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    img {
      display: block;
      widows: 25px;
      height: 25px;
      margin-left: 10px;
      background-size: contain;
    }
    h3 {
      margin: 0 auto;
      font-weight: bold;
    }
  }
  /* 主体部分 */
  .main {
    flex: 1;
    overflow: auto;
    background: #f0f0f0;
    position: relative;
    /* 时间1 */
    .time {
      /* margin-top: 30px; */
      width: 251px;
      height: 22px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(166, 166, 166, 1);
      margin: 95px auto;
    }
    .time1 {
      width: 251px;
      height: 22px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(166, 166, 166, 1);
      margin: 190px auto;
    }
    .sj {
      position: absolute;
      left: 15px;
      top: 150px;
      img:nth-child(1) {
        width: 50px;
        height: 50px;
        margin-right: 8px;
      }
      img:nth-child(2) {
        width: 100px;
        height: 50px;
      }
    }
    .gk {
      position: absolute;
      right: 15px;
      top: 350px;
      img:nth-child(2) {
        width: 50px;
        height: 50px;
      }
      img:nth-child(1) {
        width: 100px;
        height: 50px;
        margin-left: 10px;
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
    /* background: rgba(249, 249, 249, 1); */
    background: #f0f2f5e1;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    line-height: 25px;
    align-items: center;
    input {
      border: none;
      margin-left: 10px;
      font-size: 18px;
      color: #cccccc;
      width: 390px;
      height: 40px;
      background: rgba(255, 255, 255, 1);
      outline: none;
      border-radius: 6px;
    }
    img {
      width: 40px;
      height: 40px;
      margin: 0 20px;
    }
  }
}
</style>