<template>
<div >
	<p>指令的职责就是当其表达式的值改变时相应地将某些行为应用到 DOM 上。</p>
	<p>条件渲染</p>
	 <span v-if="seen">为true</span>
	 <span v-else>为false</span>
	 <p>这里， <span :style="getStyle()">v-if</span> 指令将根据表达式 <span :style="getStyle()">seen</span> 的值的真假来移除/插入 <span :style="getStyle()">&lt;p&gt;</span> 元素。</p>
	 <p>列表渲染</p>
	 <div v-for="(item,index) in list">{{index+1}}.{{item}}</div>
</div>
</template>
<script >
	export default{
		data(){
			return {  
				seen:false,
				 list:['文本1','文本2','文本3']
			}
		}, 
		methods:{
			 getStyle(){
			 	return "color:#e6a23c;background:#eee;padding:5px;";
			 }
		}
	}
</script>