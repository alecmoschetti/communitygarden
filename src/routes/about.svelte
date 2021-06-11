<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About our toolshed</h1>
	<div class="grid">
		<aside class="photo_1">
			<img src="static/stockdog.png" alt="corgi" loading=lazy>
		</aside>
		<article class="story_1">
			<h3>It all starts with a <span class="highlight">dog</span></h3>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia error voluptatem, vitae modi, fuga provident delectus aut culpa laborum aspernatur minus itaque minima, illum iure? Nesciunt maxime illum ut est.</p>
			<p>Doloribus eum molestias at excepturi, eaque fugiat mollitia quod reiciendis, soluta hic harum sed sit et id deserunt repellat veritatis ex expedita! Repudiandae, enim! Nemo accusamus iusto quisquam architecto delectus?</p>
			<p>Dolorem temporibus aliquid suscipit quo quae dolore tempore nihil culpa non ipsum cumque provident ipsa ducimus ullam veniam consequuntur praesentium unde quasi, animi numquam aut vel. Sint optio vero corrupti.</p>
			<p>Alias, a tempora! Deserunt quisquam a mollitia voluptatem, beatae veniam minima cum inventore, tempora vel debitis molestiae autem eligendi voluptate architecto cupiditate quae nostrum fuga. Dolore quidem debitis dolor non.</p>
		</article>
		<aside class="photo_2">
			<img src="static/stockscissors.png" alt="garden scissors" loading=lazy>
		</aside>
		<article class="story_2">
			<h3>Where we are <span class="highlight">now</span></h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, odit animi illum nemo corporis fugiat blanditiis libero nostrum reprehenderit ratione rem repellendus, excepturi, porro optio tempore. Doloremque in quos dolore!</p>
			<p>Voluptatibus odit soluta possimus fugiat expedita autem dicta consequatur explicabo nisi amet itaque ab molestiae maiores inventore delectus dolores facilis excepturi quaerat, debitis officia. Quisquam aperiam quasi excepturi quis voluptatum.</p>
			<p>Optio vitae doloremque impedit at esse, facere laboriosam minima ab molestias vero cum aliquam unde blanditiis similique, eum, perferendis nostrum quaerat ullam minus laborum. In sunt recusandae sint omnis non?</p>
			<p>Minima, corrupti. Earum accusamus hic et provident ad quos nihil debitis unde ipsum, neque repellendus voluptates enim veniam facere itaque asperiores aliquid, exercitationem assumenda! Nam ad nostrum hic consequuntur recusandae.</p>
		</article>
		<aside class="photo_3">
			<img src="static/stocktown.png" alt="aerial view of small town" loading=lazy>
		</aside>
	</div>
</div>

<style>
	.content {
		width: 100%;
	}
	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
	}
	.story_1 h3 {
		max-width: 12ch;
	}
	span.highlight {
		color: var(--primary-color);
		border-bottom: 1px solid var(--primary-color);
	}
	.photo_1,
	.photo_2,
	.photo_3 {
		place-self: center;
	}
	
	img {
		border-radius: 12px;
	}
	@media (min-width: 780px) {
		.grid {
			grid-template-columns: 50% 50%;
			grid-template-rows: 1200px 550px 1200px;
			gap: .666rem;
		}
		.story_1 h3 {
			max-width: 14ch;
		}
		.story_2 h3 {
			max-width: 10ch;
		}
		.story_1 {
			grid-column: 1 / span 1;
			grid-row: 1 / span 1;
		}
		.story_2 {
			grid-column: 2 / span 1;
			grid-row: 3 / span 1;
		}
		p {
			max-width: 55ch;
		}
		.photo_1 {
			grid-column: 2 / span 1;
			grid-row: 1 / span 1;
			width: 300px;
			margin: 0;
		}
		.photo_2 {
			grid-column: 1 / span 2;
			grid-row: 2 / span 1;
			width: 600px;
			margin: 0;
		}
		.photo_3 {
			grid-column: 1 / span 1;
			grid-row: 3 / span 1;
			margin: 0;
			width: 300px;
		}
	}
	@media (min-width: 875px) {
		.grid {
			grid-template-rows: 900px 550px 900px;
		}
	}
	@media (min-width: 1280px) {
		.grid {
			grid-template-rows: 800px 600px 800px;
		}
		.photo_1,
		.photo_3 {
			width: 575px;
		}
		.photo_2 {
			width: 800px;
		}
		.story_2 h3 {
			max-width: 16ch;
		}
	}
</style>
