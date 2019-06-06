
<template>
  <div class="router1"> 
    <a @click="goUrl('Home')">主页</a>
    <a @click="goUrl('news')">新闻</a>
    <div >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default { 
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
