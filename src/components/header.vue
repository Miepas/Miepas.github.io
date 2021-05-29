<template>
  <div
    class="header"
    :class="{ header_fixed: isScroll }"
    @scroll="handleScroll"
  >
    <div class="header_text">
      <span class="htext1">我是一个Header,虽然不知道为什么，但是网页应该有一个Header吧</span>
      <span class="htext2">我是一个Header</span>
    </div>
    <el-button
      class="right_h"
      type="primary"
      icon="el-icon-ice-cream-round"
      @click="personal"
      >个人中心</el-button>
    <div class="clen"></div>
    <el-dialog title="输入密码" v-model="dialogPass">
      <el-form @submit.prevent>
        <el-form-item>
          <el-input placeholder="第一条线索:调试Console" v-model="password" show-password></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogPass = false">取 消</el-button>
          <el-button type="primary" @click="confirmPass">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  data() {
    return {
      dialogPass: false,
      isScroll: false,
      password:''
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      const scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollPos > 10) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    },
    personal() {
      this.dialogPass = true;
      this.password = '';
    },
    confirmPass(){
    //console.log("sunny");
      
      if(this.password==='sunny'){
          this.$router.push({name:'Personal',params: { userId: 123 }});
      }else{
          ElMessage.error('输入错误，试着根据线索找到密码吧');
      }
      this.dialogPass = false;
    }
  },
};
</script>

<style scoped>
.right_h {
  float: right;
}
.clen {
  clear: both;
}
.header_text {
  float: left;
  padding-top: 10px;
}
@media (min-width: 576px) { 
  .header {
    padding: 10px 200px 10px 150px;
    z-index: 100;
    background-color: white;
  }
  .htext1{
    display: block;
  }
  .htext2{
    display: none;
  }
  .header_fixed {
  position: fixed;
  left: 0;
  right: 0;
  box-shadow: 0 0 5px 5px rgb(240, 241, 240);
}
}
@media (max-width: 575.98px) { 
  .header {
    padding: 10px 20px 10px 15px;
    z-index: 100;
    background-color: white;
    box-shadow: 0 0 5px 5px rgb(240, 241, 240);
  }
  .htext1{
    display: none;
  }
  .htext2{
    display: block;
  }
}
</style>
