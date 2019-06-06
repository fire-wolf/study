
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="'/router1'" >路由</router-link>
    <router-link :to="'/elementUI'" >ElementUI</router-link>
    <router-link :to="'/mintUI'" >mintUI</router-link>
    <router-link :to="'/basics'" >基础事件</router-link> 
    <div>{{routers.name}}</div>
    <div>{{$route.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg: '第一个Vue',
      routers:this.$route
    }
  },
  methods:{
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
