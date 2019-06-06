<template>
<div >
	<p>修饰符（Modifiers）是以半角句号 . 指明的特殊后缀，用于指出一个指定应该以特殊方式绑定。例如，<span :style="getStyle()">.enter</span> 修饰符告诉 <span :style="getStyle()">v-on</span> 指令对于触发的事件调用：</p>
	 
	 <input type="text" @keyup.enter="show()" v-focus value="" />

</div>
</template>
<script >
	export default{
		data(){
			return {  
				 number:1
			}
		},
		directives: {  
			'focus': function(el,binding,vnode){
				el.focus(); 
				console.log(el.value); 
			}
		}, 
		methods:{
			 getStyle(){
			 	return "color:#e6a23c;background:#eee;padding:5px;";
			 },
			  show:function(){
	            alert('您按回车了');
	        }
		}
	}
</script>