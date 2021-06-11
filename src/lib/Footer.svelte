<script>
    import Social from '$lib/Social.svelte';
    import Legal from '$lib/Legal.svelte';
</script>

<footer>
    <h5>Community Toolshed LLC.</h5>
    <div class="flex">
        <Social />
        <Legal />
    </div>
</footer>

<style>
    footer {
        width: 90%;
        margin: 3% auto;
        background: var(--black-color);
        padding: .666rem;
        color: white;
        display: flex;
        flex-flow: column nowrap;
    }
    h5 {
        margin: 1% auto;
        text-align: center;
    }
    .flex {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    @media (min-width: 780px) {
        .flex {
            flex-flow: row wrap;
        }
    }
    @media (min-width: 1280px) {
        footer {
            margin: 0 auto;
        }
        .flex {
            justify-content: space-between;
        }
    }
</style>