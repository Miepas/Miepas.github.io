<template>
  <div class="gsap">
      <div class="test">
      <div class="circle green" @click="goBack"></div>
      <div class="circle orange"></div>
      <div class="circle pink"></div>
      <div class="circle grey"></div>
      <div class="circle aqua"></div>
      <div class="circle pink1"></div>
      </div>
      <div class="box green1"></div>
      <div>
          <button id="play" @click="Play">play()</button>
          <button id="pause" @click="Pause">pause()</button>
          <button id="resume" @click="Resume">resume()</button>
          <button id="reverse" @click="Reverse">reverse()</button>
          <button id="restart" @click="Restart">restart()</button>
      </div>
  </div>
</template>

<script>
import gsap  from "gsap";
export default {
    
    name: 'Gsap',
    data(){
        return{
         tween:'',
           // tween : gsap.to(".green1",{duration:4,x:750,rotation:360,ease:"none",paused:true}),
        }
    },
    computed:{},
    mounted() {
        console.log('1111');
        this.tween=gsap.to(".green1",{duration:4,x:750,rotation:360,ease:"none",paused:true})
        gsap.from('.circle',{duration:2,scale:0.5,opacity:0,delay:0.5,stagger:0.2,ease:"elastic",force3D:true});
        //gsap.from('.circle',{duration:0.5,opacity:0,y:-100,stagger:0.1,ease:"back.in"})
    },
        
    methods:{ 
        Play(){
            this.tween.play();
        },
        Pause(){
            this.tween.pause();
        },
        Resume(){
            this.tween.resume();
        },
        Reverse(){
            this.tween.reverse();
        },
        Restart(){
            this.tween.restart();
        },
        goBack(){
            console.log('222');
            var tl = gsap.timeline({defaults:{duration:0.3,opacity:0,y:-100,ease:"back.in"},onComplete:this.comeBack});
            tl.to(".circle",{stagger:0.2});
            // tl.to(".orange",{});
            // tl.to(".pink",{});
            // tl.to(".grey",{});
            // tl.to(".aqua",{});
            // tl.to(".pink1",{});
            //gsap.to(".circle",{duration:2,scale:0.5,opacity:0,delay:0.5,stagger:0.2,ease:"elastic",force3D:true})
        },
        comeBack(){
            console.log("333");
            //gsap.from('.circle',{duration:2,scale:0.5,opacity:0,delay:5,stagger:0.2,ease:"elastic",force3D:true})
            gsap.to(".circle",{duration:0.5,opacity:1,y:0,stagger:0.3,ease:"back.out"});
            //gsap.to(".circle",{duration:2,scale:0.5,opacity:0,delay:0.5,stagger:0.2,ease:"elastic",force3D:true})
        }
    }
}

</script>

<style scoped>
div{
    margin: 20px;
    display: inline-block;
}
button{
    margin: 10px;
    text-transform: none;
}
.test{
    align-items: center;
}
.circle{
    height: 100px;
    width: 100px;
    border-radius: 15%;
    cursor: pointer;
}
.box{
    height: 100px;
    width: 100px;
    border-radius: 15%;
    display: block;
}
.green{background-color: forestgreen;}
.green1{background-color: forestgreen;}
.orange{background-color: orange;}
.pink{background-color: pink;}
.grey{background-color: grey;}
.aqua{background-color: aquamarine;}
.pink1{background-color: pink;}

</style>