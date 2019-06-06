<template>
<div v-html="rawHtml()"></div>
</template>
<script >
	export default{
		data(){
			return { 
			}
		},
		methods:{
			rawHtml(){
				// this.msg1='aaa';
				return "<p>hello world</p><p>下一行</p>";
			}
		}
	}
</script>