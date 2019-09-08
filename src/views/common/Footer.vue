<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/member" icon="search">会员</van-tabbar-item>
    <van-tabbar-item to="/shopcar" icon="friends-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>