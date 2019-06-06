<template>
<div >
	<p>一些指令能接受一个“参数”，在指令后以冒号指明。例如，<span :style="getStyle()"> v-bind</span> 指令被用来响应地更新 HTML 属性：</p>
	 <a v-bind:href="url">baidu</a>
	 <p>在这里<span :style="getStyle()">  href</span> 是参数，告知 <span :style="getStyle()"> v-bind</span> 指令将该元素的 <span :style="getStyle()"> href</span> 属性与表达式<span :style="getStyle()">  url</span> 的值绑定。</p>
	 <p>另一个例子是 <span :style="getStyle()"> v-on</span> 指令，它用于监听 DOM 事件：</p>
	 <a v-on:click="doSomething">点击</a>
	 <p>在这里参数是监听的事件名。</p>

	 


</p>

</div>
</template>
<script >
	export default{
		data(){
			return {  
				url:"http://www.baidu.com"				 
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