<template>
  <div class="myi">
    <!-- 头部 -->
    <header>
      <a href>
        <img src="../../assets/icon/fh.png" alt />
      </a>
      <h3>个人信息</h3>
    </header>
    <!-- main -->
    <div class="main">
      <div class="pic">
        <img src="../../assets/icon/myi/myii.png" alt />
        <a href>点击修改图像</a>
      </div>
      <!-- 昵称 -->
      <div class="nc">
        <span>昵称</span>
        <span>J.K</span>
      </div>
      <!-- 输入信息 -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="姓名"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="myd"
          type="myd"
          name="身份证号"
          label="身份证号"
          placeholder="请输入身份证号"
          :rules="[{ required: true, message: '请填写身份证号' }]"
        />
        <van-field
          v-model="phone"
          type="phone"
          name="手机号"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <div style="margin: 16px;" >
          <van-button
            round
            block
            type="info"
            native-type="submit"
          >保存</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myi",
  data() {
    return {
      username: "",
      myd: "",
      phone: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>
<style scoped lang='scss'>
@import "~@/assets/styles/mixins.scss";
.myi {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  header {
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    @include border-bottom;
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
  /* main */
  .main {
    flex: 1;
    overflow: auto;
    background: #f0f0f0d0;
    .pic {
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      img {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
      }
      a {
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(100, 100, 100, 1);
        line-height: 20px;
      }
    }
    /* 昵称 */
    .nc {
      height: 44px;
      display: flex;
      background: white;
      padding-left: 20px;
      align-items: center;
      margin-bottom: 10px;
      font-size: 16px;
      span:nth-child(1) {
        margin-right: 100px;
      }
    }
    .van-button--info{
      margin-top:80px;
      background: #FF6600;
      border: none;
    }
  }
}
</style>