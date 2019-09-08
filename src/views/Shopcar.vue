<template>
  <div>
    <Header>
        <template v-slot:span>
        <span class="goback" @click="goback">
          <van-icon class="van-icon-arrow-left"></van-icon>返回
        </span>
      </template>
    </Header>
    <div>购物车</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>