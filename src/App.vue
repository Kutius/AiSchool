<template>
	<div id="app">
		<Header></Header>
	</div>
</template>

<script>
import Header from "@/view/header";

export default {
	name: "App",
	components: {
		Header,
	},
};
</script>
<style scoped>
* {
	margin: 0;
	padding: 0;
}
</style>
