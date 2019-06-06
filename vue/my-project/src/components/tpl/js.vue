<template>
<div >
	
	{{ number + 1 }}<br/>{{ ok ? 'YES' : 'NO' }}<br/>{{ message.split(' ').join('-') }}
</div>
</template>
<script >
	export default{
		data(){
			return { 
				number:1,
				ok:false,
				message:'2018 12 12'
			}
		},
		methods:{
			 
		}
	}
</script>