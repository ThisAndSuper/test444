<template>
  <div>
    <Header>
      
    </Header>
    <div v-for="item in newsList" :key="item.id" class="news_box">
      <div class="news_title">{{item.title}}</div>
      <div class="news_time">
        <div>{{'发表时间: '}}{{item.add_time|dateFormatNotTime}}</div>
        <div>{{'点击次数:'+item.click}}</div>
        
      </div>
      <div v-html="item.content">{{item.content}}</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
      id: ""
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    async getNews() {
      this.id = this.$route.params.id;
      const { data: res } = await this.$http.get("/api/getnew/" + this.id);
      console.log(res);

      if (res.status !== 0) {
        return console.log("获取商品列表失败");
      }
      console.log(res);
      this.newsList = res.message;
    }
  }
};
</script>
<style lang="less" scoped>
.news_box{
    padding: 0 10px
}
.news_title {
  color: #1989fa;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  margin: 0;
  padding: 5px 0;
}
.news_time {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #1989fa;
  border-bottom: 1px solid #ccc;
  padding: 7px 0;
}
</style>