<template>

  <div>
      
    <Header>
      <template v-slot:span>
        <span class="goback" @click="goback">
          <van-icon class="van-icon-arrow-left"></van-icon>返回
        </span>
      </template>
    </Header>
    <div>
      <template>
        <van-pull-refresh class="cardlist" v-model="isLoading" @refresh="onRefresh">
          <van-card
            v-for="item in newsList"
            :title="item.title"
            :thumb="item.img_url"
            :key="item.id"
            @click='click(item.id)'
          >
            <div slot="tags" class="van-card_down">
              <div>{{item.add_time | dateFormat}}</div>
              <div>{{'点击:'+item.click}}</div>
            </div>
          </van-card>
        </van-pull-refresh>
      </template>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
      isLoading: false
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    async getNewsList() {
      const { data: res } = await this.$http.get("/api/getnewslist");
      if (res.status !== 0) {
        return console.log("获取商品列表失败");
      }
      console.log(res);
      this.newsList = res.message;
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    click(id){
        this.$router.push('/news/detail/'+id)
    }
  }
};
</script>

<style lang="less" scoped>
.van-card{
    margin-top: 0px !important;
    background-color: #fff;
    border-bottom:1px solid #eee;
    margin: 0 10px
}
.van-card__content {
  min-height: 0;
}
.van-card__title {
  font-size: 14px;
  font-weight: 700;
  color: #000;
}
.van-card_down {
  display: flex;
  color: #226aff;
  line-height: 30px;
  justify-content: space-between;
}
.van-card__thumb {
  width: 42px;
  height: 42px;
}
.van-card__title{
   white-space:nowrap;
//    padding: 5px
//    overflow: hidden;
}
</style>