<template>
  <el-row>
    <h3>事件</h3>
    <el-button v-on:click="clickme">点我</el-button>
    <el-button type="primary" @click="clickme">点我</el-button>
    <el-button type="success" @click="add">添加</el-button>
    <el-button type="info"  @dblclick.native="add">点两次添加</el-button>

    <p>{{num}}</p>

     <ul>
          <li v-for="(value,index) in arr">
              {{value}} {{index}}
          </li>
      </ul>

      <hr>
      <h3>图片</h3>
      <img v-bind:src="url" alt="">
      <img :src="url" alt="" :width="w" :title="t">
      <hr>
      <h3>循环</h3>
      <ul>
                <li v-for="(item,key,index) in json">
                    {{item}} {{key}} {{index}}
                </li>
            </ul>
       <hr>
       <h3>模板</h3>
       <el-input v-model="input" placeholder="请输入内容"></el-input>
       <p>input框内容:{{input}}</p>
       <hr>
       <h3>事件交互</h3>
       <el-button type="info"  @click="change()">显示隐藏</el-button>
        <div style="width:100px; height:100px; background: red" v-show="bool"></div>
        <hr>
        <h3>事件冒泡</h3>
        <div @click="show2()">
            <el-button type="info"  @click="show($event)">点击</el-button>
            <el-button type="info"  @click.stop="show()">点击</el-button>
             <el-button type="info"  @click="show(12,$event)">点击</el-button>
        </div>
        <hr>
        <h3>键盘事件</h3>
        <div class="el-input">
             <input type="text" placeholder="请输入内容" class="el-input__inner" @keydown="keyFun($event)" />
             <input type="text" placeholder="请输入内容" class="el-input__inner" @keyup.13="keyFun1($event)" />
        </div>
  </el-row>
</template>
<script>
  export default {
       data(){
        // 定义一个数据默认是1
        return{
          num:1,
          arr:['apple','banana','orange','pear'],
          json:{a:'apple',b:'banana',c:'orange'},
          url:'https://www.baidu.com/img/bd_logo1.png',
          w:'200px',
          t:'这是一张美丽的图片',
          input:'',
          bool:false
        }
      },
      methods:{
        clickme(){
          this.num++
        },
        add(){
            this.arr.push('tomato');
        },
        change(){
          this.bool = this.bool?false:true;
        },
        show(ev,obj){
            this.$message('这是按钮点击提示');
            console.log(ev);
            console.log(obj);
            //ev.cancelBubble=true;
        },
        show2(){
            this.$message('这是div点击提示');
        },
        keyFun(ev){
          console.log(ev.keyCode);
          this.$message('这是键盘事件');
        },
         keyFun1(){
          this.$message('按回车了');
         }

      }
    }
  </script>
