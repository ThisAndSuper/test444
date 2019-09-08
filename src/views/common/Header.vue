<template>
  <div class="header-box">
    <slot name="span"></slot>黑马程序员.vant<slot name="add"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.header-box {
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
  .goback {
    position: fixed;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    left: 15px;
  }
}
</style>