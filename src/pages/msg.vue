<template>
	<div class="msg">
		<p>--还没有任何消息--</p>
	</div> 
</template>

<script>
	export default{
		created(){
			this.$eventbus.$emit('Show2')
			this.$eventbus.$emit('Hide1')
			this.$eventbus.$emit('Hide3')
		},
	}
</script>

<style lang="scss" scoped>
	.msg {
			
		p{
			width:3rem;
			height:.5rem;
			margin:60% 35%;
			
		}
	}
</style>
