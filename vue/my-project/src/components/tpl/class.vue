<template>
<div >
	 
	<p>Class与style绑定</p>
	 <div v-bind:class="{ active: 'isActive' }"></div>

 

</div>
</template>
<script >
	export default{
		data(){
			return {  
				active:true				 
			}
		}, 
		methods:{
			 getStyle(){
			 	return "color:#e6a23c;background:#eee;padding:5px;";
			 },
			 doSomething(){
			 	alert('aaa');
			 }
		}
	}
</script>
<style scope lang="scss">
.isActive{
	width:100px;
	height:100px;
	background:#f5f5f5;
}
</style>