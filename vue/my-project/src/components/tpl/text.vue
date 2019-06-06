<template>
	<div>
<span>{{ msg }}</span> <br/>
<span v-once>初始化不能改变，只能渲染一次 {{ msg1 }}</span>
 <el-button type="primary" @click="clickFun">改变msg值</el-button>
</div>
</template>
<script >
	export default{
		data(){
			return {
				msg:"Hello World!",
				msg1:"Hello World 222!"
			}
		},
		methods:{
			clickFun(){
				// this.msg1='aaa';
				this.msg = '改变了';
			}
		}
	}
</script>