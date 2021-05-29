<template>
  <div id="demo" >
      <div class="main" @mousemove="mouseMove">
          <div class="mainBox">
              <div v-for="n in 12" :key="n" :id="'box'+(n-1)" class="photoBox" @mouseenter="enterBox" @mouseleave="leaveBox" @click="clickBox"></div>
            <!-- <div id="box1" class="photoBox pb-col0" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col1" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col2" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col3" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col4" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col5" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col6" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col7" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col8" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col9" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col10" @mouseenter="clickBox"></div>
            <div class="photoBox pb-col11" @mouseenter="clickBox"></div> -->
          </div>
          <div class="mainClose"></div>
          <div class="mainText mdtext">
               <h1 class="info1">Welcome to my page!</h1>
               <h4 class="info1">I will show some things I have learned</h4>
               <h4 class="info1">recently on this page. I hope you have </h4>
               <h4 class="info1">a good time here.</h4>
               <h5 class="info1">  Look at photos on the right  --></h5>
          </div> 
          <div class="mainText smtext">
               <span>抱歉，移动端体验较差</span><br>
               <span>建议使用PC查看本页面</span>
          </div> 
      </div>
  </div>
</template>

<script>
import gsap  from "gsap";

export default {
    
    name: 'demo',
    data(){
        return{
         tween:'',
         tl:[],
         currentImg:undefined,
         currentImgProps : {x:0, y:0},
         mouse : {x:0, y:0},
         isZooming: undefined,
           // tween : gsap.to(".green1",{duration:4,x:750,rotation:360,ease:"none",paused:true}),
        }
    },
    mounted() {
        this.createBox();
        this.initW();
        //gsap.to(this.tl, {duration:0.4, timeScale:1, ease:'sine.in', overwrite:true});
    },
    methods:{
        initW(){
            this.isZooming = false;
            gsap.timeline({onStart:this.playBoxes()})
                .set('.main',{perspective:800})
                .set('.photoBox',{opacity:1,cursor:'pointer'})
                .set('.mainBox',{left:'75%',xPercent:-50,width:1200,rotationX:14, rotationY:-15, rotationZ:10})
                .set('.mainClose',{autoAlpha:0, width:60, height:60, left:-30, top:-31, pointerEvents:'none'})
                .fromTo('.main',{autoAlpha:0},{duration:0.6,ease:'power2.inOut',autoAlpha:1},0.2);
        },
        mouseMove(e){
            this.mouse.x = e.x;
            this.mouse.y = e.layerY;
            if (this.currentImg) gsap.to('.mainClose', {duration:0.1, x:this.mouse.x, y:this.mouse.y, overwrite:'auto'});
        },
        createBox(){
            gsap.set('.photoBox',{backgroundSize:'cover',backgroundPosition:'center',overflow:'hidden',width:400,height:640,  borderRadius:20,scale:0.5,zIndex:1});
            // var index = 0;
            // var b = document.getElementsByClassName('pb-col'+index);
            // var tl0= gsap.timeline({paused:true,repeat:-1});
            // tl0.fromTo(b,{y:[-575,800,800][0],rotation:-0.05},{duration:[40,35,26][0],y:[800,-575,-575][0],rotation:0.05,ease:'none'}).    progress(0);
            // var tl1= gsap.timeline({paused:true,repeat:-1});
            // tl1.fromTo('.pb-col1',{y:[-575,800,800][0],rotation:-0.05},{duration:[40,35,26][0],y:[800,-575,-575][0],rotation:0.05,ease:'none'}).    progress(0.25);
            // var tl2= gsap.timeline({paused:true,repeat:-1});
            // tl2.fromTo('.pb-col2',{y:[-575,800,800][0],rotation:-0.05},{duration:[40,35,26][0],y:[800,-575,-575][0],rotation:0.05,ease:'none'}).    progress(0.5);
            // var tl3= gsap.timeline({paused:true,repeat:-1});
            // tl3.fromTo('.pb-col3',{y:[-575,800,800][0],rotation:-0.05},{duration:[40,35,26][0],y:[800,-575,-575][0],rotation:0.05,ease:'none'}).    progress(0.75);
           let column_test = -1;
            for (let index = 0; index < 12; index+=1) {
                if (index%4==0) {
                    column_test=column_test+1;
                    //console.log("=================",column_test);
                }
                let b = document.getElementById('box'+index);
                gsap.set(b,{attr:{class:'photoBox pb-col'+column_test },x:[60,280,500][column_test] ,backgroundImage:"url(https://assets.codepen.io/721952/" + index + ".jpg)"});
                let tl = gsap.timeline({paused:true,repeat:-1}).fromTo(b,{y:[-575,800,800][column_test],rotation:-0.05},{duration:[40,35,26][column_test],y:[800,-575,-575][column_test],rotation:0.05,ease:'none'}).progress(index/4);    
                this.tl.push(tl);
            }
            //this.playBoxes();
            // tl0.play();
            // tl1.play();
            // tl2.play();
            // tl3.play(); 
        },
        enterBox(e){
            //console.log('enter start');
            if (this.currentImg) return;
            let temp = e.currentTarget;//.getAttributeNode('class').value;
            this.pauseBoxes(temp);
            gsap.to('.photoBox',{duration:0.2,overwrite:'auto',opacity:function (i,t) {return (t==temp)? 1:0.33}});
            gsap.fromTo(temp,{zIndex:100},{duration:0.2,scale:0.62,overwrite:'auto',ease:'power3'})
        },
        leaveBox(e){
            if (this.currentImg) return; 
            let _t = e.currentTarget;
            //let delayPlay;
            if (gsap.getProperty(_t,'scale')>0.62) {
                gsap.delayedCall(0.3,this.playBoxes());
            }else{
                this.playBoxes();
            }
            gsap.timeline()
                .set(_t,{zIndex:1})
                .to(_t,{duration:0.3,scale:0.5,overwrite:'auto',ease:'expo'},0)
                .to('.photoBox',{duration:0.5,opacity:1,ease:'Power2.inOut'},0);
        },
        playBoxes(){
                for (let index = 0; index < 12; index++) {
                let tl = this.tl[index];
                tl.play();
                gsap.to(tl, {duration:0.4, timeScale:1, ease:'sine.in', overwrite:true});
            }
        },
        pauseBoxes(e){
            let classstr = 0;
            if (e.classList.contains('pb-col1')){
                classstr = 1;
            }
            if (e.classList.contains('pb-col2')){
                classstr = 2;
            }
            //console.log(classstr);
            for (let index = 0; index < 12; index++) {
                let tl = this.tl[index];
                if (index/4 < (classstr+1) && index/4 >= classstr) {
                    gsap.to(tl, {timeScale:0, ease:'sine'});  
                    //console.log('index'+index);
                }
                
            }
        },
        clickBox(e){
            //this.isZooming = !this.isZooming;
            if (!this.isZooming){
                this.isZooming = true;
                gsap.delayedCall(0.8, ()=>{
                    this.isZooming = false; 
                });
            //this.currentImg = e.currentTarget;
            if (this.currentImg) {
                gsap.timeline({defaults:{ease:'expo.inOut'}})
                    .to('.mainClose',   {duration:0.1, autoAlpha:0, overwrite:true}, 0)
                    .to('.mainBox',{duration:0.5,scale:1,left:'75%',width:1200,rotationX:14,rotationY:-15,rotationZ:10,overwrite:true},0)
                    .to('.photoBox',{duration:0.6,opacity:1,ease:'power4.inOut'},0)
                    .set('.mainText',{zIndex:100})
                    .to(this.currentImg,{duration:0.6,width:400,height:640,borderRadius:20,x:this.currentImgProps.x,y:this.currentImgProps.y, scale:0.5, rotation:0, zIndex:1},0)
                    .to('.info1',{duration:0.1,scaleY:1,stagger: 0.1,ease: "sine"});
                    this.currentImg = undefined;
            } else {
                if(e.currentTarget.id === 'box6'){
                    console.log('真厉害啊，这是最后一条线索了:听听音乐吧！');
                }
                this.pauseBoxes(e.currentTarget)
                this.currentImg = e.currentTarget;
                this.currentImgProps.x = gsap.getProperty(this.currentImg, 'x');
                this.currentImgProps.y = gsap.getProperty(this.currentImg, 'y');
                gsap.timeline({defaults:{duration:0.6,ease:'expo.inOut'}})
                    .fromTo('.mainClose',  {x:this.mouse.x, y:this.mouse.y}, {autoAlpha:1, duration:0.3, ease:'power3.inOut'}, 0)
                    .to('.photoBox',{opacity:0},0)
                    .to(this.currentImg,{width:'100%',height:'100%',borderRadius:0,x:0,y:0,scale:1,opacity:1},0)
                    .to('.mainBox',{duration:0.5,left:'50%',width:'100%',rotationX:0,rotationY:0,rotationZ:0},0.15)
                    .to('.info1',{duration:0.1,scaleY:0,stagger: 0.1,ease: "sine"},"-=0.7")
                    .set(this.currentImg,{zIndex:100})
                    .set('.mainText',{zIndex:-1})
                    .to('.mainBox',{duration:5,scale:1.1,rotation:0.05,ease:'none'},0.65);    
            }
        }
        }
    }
}
</script>

<style scoped>
div{
    width: 100%;
    height: 100%;
    max-height: 880px;
    overflow: hidden;
    background-color:#000;
    position: absolute;
}
h4{
    line-height: 18px;
}
h5{
    margin-top: 100px;
    margin-left: 200px;
}
.mainText{
    font-size: 27px;
    padding-top: 7em;
    left: 10%;
    width: 600px;
    height: 880px;
    color: aliceblue;
    background-color:rgba(0,0,0,0);
}

.mainClose{
    background: url(../assets/close.svg) no-repeat;
}
@media (min-width: 576px) { 
    .smtext{
        display: none;
    }
    .mdtext{
        display: block;
    }
}
@media (max-width: 575.98px) { 
    .smtext{
        display: block;
    }
    .mdtext{
        display: none;
    }
}
</style>
