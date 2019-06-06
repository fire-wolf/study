
<template>
  <div class="news"> 
    <h1>新闻</h1>
    <ol>
    <li><router-link :to="'/news/1'">新闻一</router-link></li>
    <li><router-link :to="'/news/2'">新闻二</router-link></li>
    <li><router-link :to="'/news/3'">新闻三</router-link></li>
    </ol>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default { 
  data () {
    return {
      msg:'aaaaa'
    }
  },
  created(){
    console.log(this.$watch);
  },
  computed:{

  },
  method(){

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
