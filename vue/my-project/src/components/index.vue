<template>
	<el-container style="height:100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="$route.path" router  
              text-color="#333"
                active-text-color="#66b1ff">
                <template v-for="item in menuList" >
                     <!-- <el-submenu :index="item.url">{{item.label}}</el-submenu> -->
                     <el-submenu v-if='item.children != null' :index="item.url" :key='item.url'>
                        <template slot="title">
                          <i :class="item.icon"></i>
                          <span>{{ item.label }}</span>
                        </template>
                        <el-menu-item-group>
                          <el-menu-item :index="child.url" :key='child.url' v-for='child in item.children'>
                            <template slot="title">
                                <i :class="child.icon"></i>
                                <span>{{ child.label }}</span>
                            </template>
                          </el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                    <el-menu-item v-else :index="item.url" :key='item.url'>
                      <i :class="item.icon"></i>
                          <span slot="title">{{ item.label }}</span>
                    </el-menu-item>
                </template>
        </el-menu>  
      </el-aside>
      <el-container>
        <!-- <el-header></el-header> -->
        <router-view></router-view>
       <!--  <el-main>
           
        </el-main> -->
      </el-container>
     </el-container> 
</template>
<script >
import menu from '@/assets/js/api/menu'
export default{
	data(){
	    return {
	      menuList:null
	    }
	  },
	  mounted(){
	    let _this = this;
	    menu.getMenuList().then((res)=>{
	      if(res.success){
	        _this.menuList = res.data; 
           
         

	      } 
	    })
	  }
}
</script>
<style type="text/css" >
	.el-submenu .el-menu-item{height:40px; line-height: 40px;}
#app{
  margin:0;
  padding:0;
}
	#netWork{
    margin:10px;
		width: 600px;
	    height: 400px;
	    border: 1px solid lightgray;
	}
	p{
    padding:10px;
    text-align:left;
  }
  .el-container{overflow:auto;}
</style>