<script context="module">
	export const prerender = true;
</script>

<script>
	import Button from '$lib/Button.svelte';
	import Image from '$lib/Image.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
<h1>Community Toolshed</h1>
<h2>Need a tool for that project you're working on?</h2>
<Image />
<h3>From our backyard to yours</h3>
<a href="/rent">
	<Button>
		<span slot="title">Rent Some Tools</span>
	</Button>
</a>
</section>

<style>
	h1,
	h2,
	h3 {
		text-align: center;
	}
	h2 {
		max-width: 19ch;
		margin: 2% auto;
	}
</style>
