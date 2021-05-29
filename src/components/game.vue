<template>
  <div class="game">
      <h3>做了个小游戏</h3>
      <p>{{msg}}</p>
    <div class="box">
      <ul class="puzzle-warp">
        <li
          :class="{ puzzle: true, 'puzzle-empty': !puzzle }"
          :key="puzzle"
          v-for="(puzzle, index) in puzzles"
          v-text="puzzle"
          @click="moveFn(index)"
        ></li>
      </ul>
      <div class="success" v-if="isShow">       
          <el-button class="restart_btn" type="primary" icon="el-icon-refresh-right" @click="restartGame">重新开始</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      puzzles: [],
      isShow: false,
      msg:'点击方块移动，试着把他们按顺序排列吧！'
    };
  },
  methods: {
    render() {
      let puzzleArr = [],
        i = 1;
      for (i; i < 16; i++) {
        puzzleArr.push(i);
      }
      puzzleArr = puzzleArr.sort(() => {
        return Math.random() - 0.5;
      });
      this.puzzles = puzzleArr;
      this.puzzles.push("");
      //console.log(this.puzzles);
    },
    moveFn(index) {
      let curNum = this.puzzles[index],
        leftNum = this.puzzles[index - 1],
        rightNum = this.puzzles[index + 1],
        topNum = this.puzzles[index - 4],
        bottomNum = this.puzzles[index + 4];
      //console.log(index);
      if (leftNum === "" && index % 4) {
        this.puzzles[index - 1] = curNum;
        this.puzzles[index] = "";
      } else if (rightNum === "" && 3 !== index % 4) {
        this.puzzles[index + 1] = curNum;
        this.puzzles[index] = "";
      } else if (topNum === "") {
        this.puzzles[index - 4] = curNum;
        this.puzzles[index] = "";
      } else if (bottomNum === "") {
        this.puzzles[index + 4] = curNum;
        this.puzzles[index] = "";
      }
      this.passFn();
    },
    passFn() {
      if (this.puzzles[15] === "") {
        console.log("pass?");
        const newPuzzles = this.puzzles.slice(0, 15);
        const isPass = newPuzzles.every((e, i) => e === i + 1);
        if (isPass) {
          this.isShow = true;
          this.msg = '恭喜你，完成了！';
        }
      }
    },
    restartGame(){
        this.isShow = false;
        this.msg = '点击方块移动，试着把他们按顺序排列吧！';
        this.render();
    }
  },
  mounted() {
    this.render();
  },
};
</script>

<style scoped>
.game{
    text-align: center;
}


@media (min-width: 576px) { 
  .box {
  width: 408px;
  margin: 0 auto;
  height: 408px;
  margin-bottom: 40px;
}
.success {
  width: 408px;
  height: 408px;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  top: -408px;
  text-align: center;
  line-height: 408px;
}
.puzzle-warp {
  width: 408px;
  height: 408px;
  padding: 0;
  background: #ccc;
  list-style: none;
  margin: 0;
}
.puzzle {
  float: left;
  width: 100px;
  height: 100px;
  font-size: 20px;
  background: rgb(41, 185, 241);
  text-align: center;
  line-height: 100px;
  border: 1px solid rgb(198, 225, 231);
  box-shadow: 1px 1px 4px rgb(41, 185, 241);
  text-shadow: 1px 1px 1px #48dbee;
  cursor: pointer;
}
.puzzle-empty {
  background: #ccc;
  box-shadow: inset 2px 2px 18px rgb(49, 162, 207);
}
}
@media (max-width: 575.98px) { 
  .box {
  width: 308px;
  margin: 0 auto;
  height: 308px;
  margin-bottom: 20px;
}
.success {
  width: 308px;
  height: 308px;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  top: -308px;
  text-align: center;
  line-height: 308px;
}
.puzzle-warp {
  width: 308px;
  height: 308px;
  padding: 0;
  background: #ccc;
  list-style: none;
  margin: 0;
}
.puzzle {
  float: left;
  width: 75px;
  height: 75px;
  font-size: 16px;
  background: rgb(41, 185, 241);
  text-align: center;
  line-height: 75px;
  border: 1px solid rgb(198, 225, 231);
  box-shadow: 1px 1px 4px rgb(41, 185, 241);
  text-shadow: 1px 1px 1px #48dbee;
  cursor: pointer;
}
.puzzle-empty {
  background: #ccc;
  box-shadow: inset 2px 2px 18px rgb(49, 162, 207);
}
}
</style>
