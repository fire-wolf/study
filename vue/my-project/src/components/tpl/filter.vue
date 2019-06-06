<template>
<div >
	{{message | capitalize}}
	 
</div>
</template>
<script >
	export default{
		data(){
			return { 
				number:1,
				ok:false,
				message:'hello world'
			}
		},
		 filters: {    
		 	capitalize: function (value) {
		 		if (!value) return ''      
		 		value = value.toString()      
		 		return value.charAt(0).toUpperCase() + value.slice(1)    
		 	}  
		 },
		methods:{
			 
		}
	}
</script>