<template>
    <div class="musicPlayer">
        <h3>听听音乐，放松一下~</h3>
        <table class="tb1">
            
            <tr>
                <th><img :src="imgArr[imgIndex]" alt="" @click="play" ></th>
                <td><el-slider v-model="sliderVal" :format-tooltip="formatTooltip" :min="sliderMin" :max="sliderMax"     @change="spliderSelect" ></el-slider></td>
                <td><b>{{currentTime}}/{{duration}}</b></td>
            </tr>
        </table>  
        <audio ref="songBox"></audio>
         
    </div>
</template>

<script>
import axios from "axios";
    export default {
        //https://m7.music.126.net/20210506103110/dd09990f6776726e34a5eb134151abaa/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3715545213/4af4/4b21/69ab/ee6897e3025572b4e9fedb21d8573ae6.mp3
        //https://m7.music.126.net/20210506152358/9757e1efe532a73ff3d9eb1da26d7125/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3715545213/4af4/4b21/69ab/ee6897e3025572b4e9fedb21d8573ae6.mp3
        name:'musicPlayer',
        data(){
            return{
                value1:0,
                duration:undefined,
                currentTime:undefined,
                //进度条
                sliderVal: 0,
                sliderMin: 0,
                sliderMax: 0,

                box:undefined,
                list:[
                    {id:17423740,name:'Sunny Jim',url:''}
                ],
                imgArr:[
                    require('../assets/play.svg'),
                    require("../assets/pause.svg"),
                ],
                imgIndex:0,
            }
        },
        components:{
            
        },
        mounted(){
            this.initPlayer();
        },
        methods:{
            initPlayer(){
                this.box = this.$refs.songBox;
                axios.get('https://api.imjad.cn/cloudmusic/?type=song&id=17423740').then(response => {
                    //console.log(response.data.data[0].url);
                    this.box.src = response.data.data[0].url;
                });
                //this.box.src = this.list[0].url;
                this.box.onloadedmetadata = () => {
                  this.updateTime();
                }
                //    播放时间有变化的时候触发
                this.box.ontimeupdate = () =>{
                  this.updateTime();
                }
                //    音频播放完毕
                this.box.onended = () =>{
                  console.log('播放完毕，谢谢收听!偷偷告诉你，密码是sunny')
                }
            },
            updateTime(){
                const total = this.formatTime(this.box.duration);
                const current = this.formatTime(this.box.currentTime);
                this.duration = `${total.min}:${total.sec}`;
                this.currentTime = `${current.min}:${current.sec}`;
                this.sliderVal = Math.floor(this.box.currentTime);
                this.sliderMax = Math.floor(this.box.duration);
            },
            formatTime(time){
                if (!time) {
                    return {min:'00',sec:'00'}
                }
                return{
                    min: Math.floor(time/60).toString().padStart(2,'0'),
                    sec: Math.floor(time%60).toString().padStart(2,'0')
                }
            },
            formatTooltip(val){
                const time = this.formatTime(val);
                return `${time.min}:${time.sec}`;
            },
            spliderSelect() {
                // 滑块松动后触发。
                //console.log(this.sliderVal);
                // 更新
                this.box.currentTime = this.sliderVal;
                const time = this.formatTime(this.sliderVal);
                this.currentTime = `${time.min}:${time.sec}`;
            },
            play(){
                if(this.box.paused){
                    this.box.play();
                    this.imgIndex = 1;
                }else{
                    this.box.pause();
                    this.imgIndex = 0;
                }
            }
        }
    }
</script>

<style scoped>
.musicPlayer{
    height: 300px;
    width: 100%;
    /*overflow: hidden;*/
    position: absolute;
    text-align: center;
    margin-top: 50px;
}

img{
    width: 30px;
    height: 30px;
}
.tb1{
    margin: auto;
}
.tb1 td,th{
    height: 50px;
}
@media (min-width: 576px) { 
  .el-slider{
    width: 400px;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
}
}
@media (max-width: 575.98px) { 
  .el-slider{
    width: 150px;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
}
}
</style>