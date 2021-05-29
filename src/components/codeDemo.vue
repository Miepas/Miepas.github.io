<template>
  <div class="code-demo">
    <div class="code-text">
        <h2>下面我将用gsap来演示怎么用gsap</h2>
    </div>
    <div class="code-box">
    <div class="code-over">
        <div class="code-explain">
            <div class="explain e1">
                <h3>让我们开始吧！</h3>
            </div>
            <div class="explain e2">
                <h3>先写Html代码</h3>
            </div>
            <div class="explain e3">
                <h3>再给他一个CSS样式</h3>
            </div>
            <div class="explain e4">
                <h3>最后写上Js代码</h3>
            </div>
            <div class="explain e5">
                <h3>现在你的方块就动起来了</h3>
            </div>
        </div>
        <div class="code-content">
            <div class="code-code">
                <div class="code-html">
                    <div class="code-title">
                        <span>Html</span>
                    </div>
                    <div class="text-html">
                        <pre>  &lt;div class="box"&gt;&lt;/div&gt;</pre>
                    </div>
                </div>
                <div class="code-css">
                    <div class="code-title">
                        <span> Css</span>
                    </div>
                    <div class="text-css">
                        <pre>  .box{width: 100px; height: 100px; background: aquamarine;}</pre>
                    </div>
                </div>
                <div class="code-js">
                    <div class="code-title">
                        <span> Js</span>
                    </div>
                    <div class="text-js">
                        <pre>  gsap.to('.box',{duration:1,x:200})</pre>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="code-show">
                <div class="code-title">
                    <span> Result</span>
                </div>
                <div class="show-box"></div>
            </div>
        </div>
    </div>
    </div>
    <div class="code-shadow" v-if="showPlay">
        <el-button type="primary" icon="el-icon-caret-right" @click="play">开始演示</el-button>
    </div>
    <div class="code-shadow" v-if="rePlay">
        <el-button type="primary" icon="el-icon-refresh-right" @click="play">重新演示</el-button>
    </div>
  </div>
</template>

<script>
import gsap  from "gsap";

export default {
    data(){
        return{
            showPlay:true,
            rePlay:false,
            tl:undefined,
        }
    },
    mounted() {
        this.Init();
    },
    methods:{
        Init(){
            gsap.set('.e1,.e2,.e3,.e4,.e5,.code-explain',{scaleY:0})
            gsap.set('.divider,.code-title,.text-css,.text-html,.text-js',{opacity:0});
            gsap.set('.show-box',{scale:0})
            const tl = gsap.timeline({paused:true});
            tl.to('.code-explain',{duration:0.5,scaleY:1})
              .to('.divider',{duration:1,opacity:1})
              .to('.code-title',{duration:0.5,opacity:1,stagger:0.3})
              .to('.e1',{duration:0.5,scaleY:1},"<2")
              .to('.e1',{duration:0.5,scaleY:0},"<2")
              .to('.e2',{duration:0.5,scaleY:1},"<1")
              .to('.text-html',{duration:1,opacity:1},"<1.5")
              .to('.e2',{duration:0.5,scaleY:0},"<2")
              .to('.e3',{duration:0.5,scaleY:1},"<1")
              .to('.text-css',{duration:1,opacity:1},"<1.5")
              .to('.show-box',{duration:0.5,scale:1},"<1")
              .to('.e3',{duration:0.5,scaleY:0},"<2")
              .to('.e4',{duration:0.5,scaleY:1},"<1")
              .to('.text-js',{duration:1,opacity:1},"<1.5")
              .to('.e4',{duration:0.5,scaleY:0},"<2")
              .to('.e5',{duration:0.5,scaleY:1},"<1")
              .to('.show-box',{duration:1,x:200,onComplete:()=>{this.rePlay=true;}},"<1")

            this.tl = tl;
        },
        play(){
            this.showPlay = false;
            this.rePlay = false;
            this.tl.restart();
        }
    }
};
</script>

<style scoped>
.show-box{width: 100px; 
    height: 100px; 
    background: aquamarine;
    margin-left: 20px;
    margin-top: 20px;
}
.code-demo{
    height: 430px;
    width: 100%;
}
.code-text{
    text-align: center;
}
.code-box{
    position: relative;
    margin: 0 auto;
    width: 1000px;
    height: 350px;
    border: 1px solid rgb(0, 0, 0);
}
.code-shadow{
    margin: 0 auto;
    text-align: center;
    line-height: 350px;
    width: 1000px;
    height: 350px;
    background-color: rgba(0, 0, 0, 0.1);
    position: relative;
    top:-351px;
}
.code-explain{
    text-align: center;
    height: 60px;
    background-color: aliceblue;
}
.explain{
    width: 400px;
    position: absolute;
    top: 0;
    left: 300px;
}
.code-content{
    width: 1000px;
    height: 290px;
}
.code-code{
    height: 290px;
    width: 498px;
    display: inline-block;
    position: absolute;
    top: 60px;
}
.code-show{
    height: 290px;
    width: 498px;
    display: inline-block;
    position: absolute;
    top: 60px;
    left: 502px;
}
.divider{
    height: 280px;
    width: 4px;
    background-color: rgb(219, 236, 252);
    display: inline-block;
    margin: 5px 0;
    border-radius: 25px;
    position: absolute;
    top: 60px;
    left: 498px;
}
.code-html,.code-css,.code-js{
    width: 498px;
    height: 90px;
}
.code-title{
    margin-left: 20px;
}
</style>
