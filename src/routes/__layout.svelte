<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav />
<main>
	<hr class="hr_top">
	<slot />
</main>
<hr class="hr_bottom">
<Footer />
<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: var(--nav-height) 1rem 1rem 1rem;
		width: 90%;
		margin: 1% auto;
	}
	hr {
		border-top: 1px solid var(--off-white);
		width: 90%;
		margin: 0 auto;
	}
	.hr_top {
		width: 100%;
		margin-bottom: .666rem;
	}
	.hr_bottom {
		margin-top: 10px;
	}
</style>
