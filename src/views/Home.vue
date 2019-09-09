<template>
  <div id="app">
    <!-- 头部区域 -->
    <div class="header">黑马程序员.vant</div>

    <!-- 宫格区域 -->
    <van-grid :column-num="3">
      <van-grid-item text="新闻资讯" to="/newslist" center>
        <img src="../assets/img/menu1.png" />
        <p>新闻资讯</p>


        fdasdfasdfasdfasdf
      </van-grid-item>
      <van-grid-item text="图片分享" to="/photo/list">
        <img src="../assets/img/menu2.png" />
        <p>图片分享</p>
    
      <van-grid-item text="留言反馈">
        <img src="../assets/img/menu4.png" />
        <p>留言反馈</p>
      

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const { data: res } = await this.$http.get("/api/getlunbo");
      console.log(res);

      if (res.status !== 0) {
      }
      this.list = res.message;
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 40px;
  background: #1989fa;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.van-swipe {
  height: 200px;
  // background-color: pink;
  width: 100%;
  .van-swipe-item {
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.van-grid {
  height: 276.97px;
  .van-grid-item img {
    height: 60px;
  }
}
</style>
