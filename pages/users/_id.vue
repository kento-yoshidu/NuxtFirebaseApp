<template>
	<div class="container">
		<h1>{{ message }}</h1>
		<p>{{ this.$route.params.id }}</p>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			message: '表示中宇'
		}
	},
	validate({ params }) {
		return /^\d+$/.test(params.id)
	}
}
</script>
