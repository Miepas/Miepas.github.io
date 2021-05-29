<template>
  <div>
    <div class="banner"></div>
    <el-row>
      <el-col :md="7" :xs="5" :sm="5"><div class="bg-purple"></div></el-col>
      <el-col :md="10" :xs="14" :sm="14"><div class="welContent">
          <h1>欢迎来到我的页面</h1>
          <h4>我会在这里分享一些关于我的事情</h4>
        </div></el-col>
      <el-col :md="7" :xs="5" :sm="5"><div class="bg-purple"></div></el-col>
    </el-row>
    <div class="banner"></div>  
    <el-row >
      <el-col :md="3" :xs="24" :sm="24"><div class="bg-purple"></div></el-col>
      <el-col :md="6" :xs="24" :sm="24"><div class="bg-purple box">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>这是我的摩托车</span>
                <el-button class="button" type="text" @click="isShow1 = !isShow1">图片介绍</el-button>
              </div>
            </template>
            <div class="text item">
              <!-- <img src="https://wx4.sinaimg.cn/mw1024/9058c28aly1gq14vq3f91j22bc2bce82.jpg" class="image"> -->
              <div class="myImg1">
                <transition name="el-zoom-in-top">
                  <div class="imgInfo3" v-show="isShow1">
                    世界上只有两种男人，<br/>一种是喜欢摩托车的，<br/>一种是还不知道自己喜欢摩托车的。
                  </div>
                </transition>
              </div>
            </div>
          </el-card>
        </div></el-col>
      <el-col :md="6" :xs="24" :sm="24"><div class="bg-purple box">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>这是我们公司楼下的猫</span>
                <el-button class="button" type="text" @click="isShow2 = !isShow2">图片介绍</el-button>
              </div>
            </template>
            <div class="text item">
              <!-- <img src="https://wx4.sinaimg.cn/mw1024/9058c28aly1gq14vq3f91j22bc2bce82.jpg" class="image"> -->
              <div class="myImg2">
                <transition name="el-zoom-in-top">
                  <div class="imgInfo3" v-show="isShow2">
                    嘘！他在睡觉，别打扰他。 
                  </div>
                </transition>
              </div>
            </div>
          </el-card>
        </div></el-col>
      <el-col :md="6" :xs="24" :sm="24"><div class="bg-purple box">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>这是我喜欢的一条路</span>
                <el-button class="button" type="text" @click="isShow3 = !isShow3">图片介绍</el-button>
              </div>
            </template>
            <div class="text item">
              <!-- <img src="https://wx4.sinaimg.cn/mw1024/9058c28aly1gq14vq3f91j22bc2bce82.jpg" class="image"> -->
              <div class="myImg3">
                <transition name="el-zoom-in-top">
                  <div class="imgInfo3" v-show="isShow3">
                    这是他曾经的样子，<br/>现在他两边都是工地，<br/>我可能快要不喜欢他了。
                  </div>
                </transition>
              </div>
            </div>
          </el-card>
        </div></el-col>
      <el-col :md="3" :xs="24" :sm="24"><div class="bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import gsap  from "gsap";

export default {
  data() {
    return {
      show: false,
      isShow1:false,
      isShow2:false,
      isShow3:false,
    };
  },
  mounted() {
    //console.log(this.$route.params.userId);
    if (!this.$route.params.userId) {
      //this.$router.push({path:'/'});
      //this.show = true;
    }
    gsap.timeline().fromTo('.box',{autoAlpha:0,scaleX:0},{duration:0.8,ease:'power2.inOut',autoAlpha:1,stagger:0.3,scaleX:1});
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 90px;
}
.box{
  margin: 10px;
}
.welContent {
  text-align: center;
}
.card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
}
.imgInfo3{
  position: absolute;
  text-align: center;
  width: 100%;
  height: calc(70%);
  padding-top: 30%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}
.myImg1{
  width: 100%;
  background: url(../assets/2.jpg);
  background-size: cover;
  text-align: center;
  padding-bottom: 100%;
  position: relative;
}
.myImg2{
  width: 100%;
  background: url(../assets/3.jpg);
  background-size: cover;
  text-align: center;
  padding-bottom: 100%;
  position: relative;
}
.myImg3{
  width: 100%;
  background: url(../assets/1.jpg);
  background-size: cover;
  text-align: center;
  padding-bottom: 100%;
  position: relative;
}
</style>
