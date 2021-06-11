<script>
    import { tools } from '../../stores/tools.js';
    import Card from '$lib/Card.svelte'; 
    let search = '';
    let filteredTool = [];
    $: (search) ? filteredTool = $tools.filter(tool => tool.title.toLowerCase().includes(search.toLowerCase())) : filteredTool = [...$tools];
</script>
<h1>
    Rentals
</h1>

<input type="text" bind:value={search} placeholder="search" >
<section>
    {#each filteredTool as tool}
        <Card {tool} />
    {/each}
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        width: 100%;
    }
    @media (min-width: 780px) {
        section {
            grid: auto-flow / 1fr 1fr;
            place-content: center;
        }
        input {
            width: 45%;
        }
    }
</style>


