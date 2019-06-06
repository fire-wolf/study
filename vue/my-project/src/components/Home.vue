<template>
<div>
	<div>主页</div>

	<font></font>
 </div>
</template>

<script>
import font from './font'
export default { 
	components:{
		font
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App 1111'
    }
  },
  methods:{
    goUrl(url){
      var path = this.$route.path;
      if(/router1$/.test(path)){
        url = 'router1/'+url;
      }
      this.$router.push(url);
    }
  }
}
</script>


