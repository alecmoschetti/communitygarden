<script>
    export let tool;
</script>

<section>
    <h2>{tool.title}</h2>
    <div>
        <a href={`/rent/${tool.title}`}>
            <img src="{tool.src}" alt="{tool.title}" loading=lazy >
        </a>
    </div>
</section>

<style>
    div {
        width: 12rem;
        margin: 2% auto;
    }
    img {
        border-radius: 12px;
    }
    @media (min-width: 780px) {
        h2 {
            text-align: center;
        }
    }
</style>
