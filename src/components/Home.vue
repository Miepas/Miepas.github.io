<template>
  <div>
    <myheader />
    <div class="demo"><Demo1 /></div>
    <div class="musicPlayer" ><musicPlayer /></div>
    <Game />
    <CodeDemo class="codedemo"/>
    <div style="text-align: center;">
      <h2>有意思的滚动页面演示</h2>
      <a href="#/scroll_demo"><el-button style="width: 300px; margin-bottom:30px;" type="primary">去看看</el-button></a>
    </div>
  </div>
</template>

<script>
import musicPlayer from './musicPlayer.vue'
import Demo1 from './demo1.vue'
import Game from './game.vue'
import CodeDemo from './codeDemo.vue'
import Header from './header.vue';

export default {
    components: {
    //HelloWorld,
    musicPlayer,
    Demo1,
    Game,
    CodeDemo,
    'myheader': Header,
    //divdemoVue,
  },
}
</script>

<style scoped>

.demo{
height: 93vh;/*100vh;*/
}

@media (min-width: 576px) { 
  .musicPlayer{
  height: 300px;
}
.codedemo{
  display: block;
}
}
@media (max-width: 575.98px) { 
  .musicPlayer{
  height: 240px;
}
.codedemo{
  display: none;
}
}
</style>
