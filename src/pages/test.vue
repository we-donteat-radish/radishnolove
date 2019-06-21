<template>
	<div></div>
</template>

<script>
	export default{
		created(){
			this.$eventbus.$emit('Show1')
			this.$eventbus.$emit('Hide2')
			this.$eventbus.$emit('Hide3')
		},

	}
</script>

<style lang="scss" scoped>
div{
}
</style>
