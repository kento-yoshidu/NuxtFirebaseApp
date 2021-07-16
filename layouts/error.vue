<template>
	<div>
		error

		<p v-if="error.statusCode = 404">404!</p>
	</div>
</template>

<script>
export default {
	props: [
		'error'
	]
}
</script>