<template>
  <div>
    <div class="demo"><Demo1 /></div>
    <div class="musicPlayer" ><musicPlayer /></div>
    <Game />
    <CodeDemo class="codedemo"/>
  </div>
</template>

<script>
import musicPlayer from './musicPlayer.vue'
import Demo1 from './demo1.vue'
import Game from './game.vue'
import CodeDemo from './codeDemo.vue'

export default {
    components: {
    //HelloWorld,
    musicPlayer,
    Demo1,
    Game,
    CodeDemo,
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
