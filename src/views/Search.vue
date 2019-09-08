<template>
  <div>
    <Header>
      <template v-slot:span>
        <span class="goback" @click="goback">
          <van-icon class="van-icon-arrow-left"></van-icon>返回
        </span>
      </template>
      <template v-slot:add>
        <span class="goadd" @click="addShangPin">添加</span>
      </template>
    </Header>
    <div class="search" v-if="showSearchAdd==false">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
          @clear="onCancel"
        />
      </form>
    </div>
    <div class="showMain">
      <!-- 搜索历史 -->
      <van-row v-if="showSearch==false">
        <van-col span="8">搜索历史</van-col>
        <van-col span="8"></van-col>
        <van-col span="8">
          <van-icon name="close" @click="quXiao" />
        </van-col>
      </van-row>
      <div class="hasHistory" v-if="showSearch==false && historyWrite.length>0">
        <div>
          <van-tag v-for="(item,index) in historyWrite" :key="index">{{item}}</van-tag>
        </div>
      </div>
      <div class="noHistory" v-if="showSearch==false && historyWrite.length==0">
        <van-divider>暂无搜索历史</van-divider>
      </div>
      <!-- 遍历的单元格 -->
      <div v-if="showSearch==true">
        <van-swipe-cell v-for="item in searchResult" :key="item.id">
          <!-- <van-cell-group  :border="false"> -->
          <van-cell :title="item.name" :value="'商品上架时间:'+item.ctime.slice(0,10)" :border="false" />
          <template slot="right">
            <van-button square type="danger" text="删除" @click="deleteShangPin(item.id)" />
          </template>
          <!-- </van-cell-group> -->
        </van-swipe-cell>
      </div>

      <!-- 怎加商品 -->
      <div v-if="showSearchAdd==true">
        <van-cell-group>
          <van-field v-model="inputValue" class="addShangPinInput" placeholder="请输入用户名" />
          <div class="addShangPinBtn">
            <van-button type="info" size="large" @click="addShangPinSendHttp">添加商品</van-button>
          </div>
        </van-cell-group>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
//引入dialog
import Vue from "vue";
import { Dialog } from "vant";
import { Notify } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Notify);
Vue.use(Dialog);

export default {
  data() {
    return {
      value: "",
      historyWrite: [],
      inputValue: "",
      showSearch: false,
      showSearchAdd: false,
      searchResult: []
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    async getShangPinList() {
      this.showSearch = !this.showSearch;
      const { data } = await this.$http.get("/api/getprodlist");
      console.log(data.message);
      this.searchResult = data.message;
    },
    onSearch() {
      if (this.value.trim().length > 0) {
        this.getShangPinList();
        if (this.historyWrite.indexOf(this.value) == -1) {
          this.historyWrite.push(this.value);
        }
        console.log(this.historyWrite, "这是查找历史");
      } else {
        Toast("请输入内容");
      }
    },
    onCancel() {
      console.log(111);
      this.showSearch = false;
    },
    quXiao() {
      this.showSearch = false;
      this.historyWrite = [];
    },
    goback() {
      this.$router.go(-1);
    },
    deleteShangPin(id) {
      Dialog.confirm({
        title: "删除警报",
        message: "确定删除吗"
      })
        .then(async () => {
          const { data } = await this.$http.get(`/api/delproduct/${id}`);
          if (data.status == 0) {
            this.getShangPinList();
            this.showSearch = true;
            Notify({ type: "success", message: "删除成功" });
          }
        })
        .catch(err => {
          Notify({ type: "warning", message: "已取消删除" });
        });
    },
    addShangPin() {
      this.showSearch = "noAll";
      this.showSearchAdd = true;
    },
    async addShangPinSendHttp() {
      let inputValue = this.inputValue;
      if (inputValue.trim().length > 0) {
        const { data } = await this.$http.post("/api/addproduct", {
          name: inputValue
        });
        if (data.status == 0) {
          Notify({ type: "success", message: "添加成功" });
          this.showSearch = false;
          this.showSearchAdd = false;
          this.inputValue = "";
        }
      }
      else {
        Notify({ type: "danger", message: "请输入内容" });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.search {
  margin-top: 40px;
}
.van-divider {
  color: #000;
  margin: 0px 20px;
}

.van-col:nth-child(1) {
  text-align: center;
}
.van-col:nth-child(3) {
  text-align: right;
  padding-right: 20px;
}
.van-row {
  height: 60px;
  line-height: 60px;
}
.goadd {
  position: fixed;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  right: 15px;
}
.goback {
}
.addShangPinBtn {
  margin: 10px auto;
  width: 95%;
  border: none;
}
.van-tag {
  margin: 10px;
  font-size: 14px;
}
</style>