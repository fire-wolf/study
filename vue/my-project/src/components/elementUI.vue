<template>
<div class="elementUI">
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
        <el-col :span="12">
          <h5>组件</h5>
          <el-menu :default-active="activeIndex"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose" router>
            <el-menu-item index="/elementUI/layout"  >布局</el-menu-item>
             <el-menu-item index="/elementUI/form" >表单</el-menu-item>
              <el-menu-item index="/elementUI/table"  >表格</el-menu-item>
           </el-menu>
         </el-col>
        </el-row>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
	</div>
</template>
<script>
    export default { 
    data() {
      return {
        'boolRouter':true,
        'activeIndex':'/elementUI/layout'
      }
    },
    mounted(){
      this.$router.push({'path':'/elementUI/layout'});
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

</style>
