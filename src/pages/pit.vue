<template>
	<div>
		<div class="top">
	
		</div>
	</div>
</template>

<script>
	export default {
		mounted(){
			this.$eventbus.$emit('Show3')
			this.$eventbus.$emit('title',"全部")
			this.$eventbus.$emit('Hide1')
			this.$eventbus.$emit('Hide2');
			this.$eventbus.$emit('hide4',false)
		},
	}
</script>

<style lang="scss" scoped>
	
</style>
