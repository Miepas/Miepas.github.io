<template>
<div class="description panel1">
	<div class="d_text"></div>
    <div class="d_text">新学的滚动页面展示</div>
    <div class="d_text">
        Scroll down <br> <i class="el-icon-arrow-down arrow"></i>
    </div>
	
</div>
  <div id="container1">
      <section class="panel red1">
          <h1>ONE</h1>
      </section>
      <section class="panel orange1">
          <h1>TWO</h1>
      </section>
      <section class="panel purple1">
          <h1>THREE</h1>
      </section>
      <section class="panel green1">
          <h1>FOUR</h1>
      </section>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
mounted() {
    gsap.to(".arrow", {ease: 'power2', y: 15, yoyo: true, repeat: -1});
    const tl = gsap.timeline();
    tl.from(".orange1", {ease:"none", duration: 2, xPercent: -100})
      .from(".purple1", {ease:"none", duration: 2, xPercent: 100})
      .from(".green1", {ease:"none", duration: 2, yPercent: -100});
    ScrollTrigger.create({
        animation: tl,
        trigger: "#container1",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        // markers: true,
        // anticipatePin: 1
    });
}

}
</script>

<style scoped>
.d_text {
    height: 45vh;
    font-size: 3vh;
}
.panel {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 100vh;
}
#container1 {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
}
.red1 {
    background: crimson;
}
.orange1 {
    background: tomato;
}
.purple1 {
    background: plum;
}
.green1 {
    background: greenyellow;
}
.panel1.description {
	position: relative;
    height: 100vh;
    text-align: center;
    background: cornflowerblue;
}
</style>