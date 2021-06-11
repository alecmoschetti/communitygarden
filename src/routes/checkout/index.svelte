<script>
    import { checkout } from '../../stores/tools.js';
    function handleClick() {
        alert(`We are still in production. Checkout tools feature to come soon!`);
    }
    let day = new Date().toISOString().substr(0, 10);
    $: totalCartItems = $checkout.length;
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<h1>Checkout</h1>

<section class="cart">
    {#if $checkout.length}
    {@debug $checkout}
        {#each $checkout as tool, index}
            <div class="flexible-grid">
                <h5>{tool.title.toUpperCase()}</h5>
                <div class="image">
                    <img src={tool.src} alt={tool.title}>
                </div>
                <div class="flex">
                    <p>Pickup: {new Date(`${tool.pickupdate} 00:00:00`).toLocaleDateString("en-US", options)}</p>
                    <input type="date" min={day} bind:value={tool.pickupdate}>
                </div>
                <div class="flex">
                    <p>Duration: {tool.duration} {#if tool.duration > 1} DAYS {:else} DAY {/if}</p>
                    <input type="number" min=1 max=2 bind:value={tool.duration}>
                </div>
                <button class="remove" on:click={() => {
                    $checkout.splice(index, 1);
                    $checkout = [...$checkout];
                }}>remove</button>
            </div>
        {/each}
        <div class="total">
            <h5>Total tools: {totalCartItems}</h5>
            <h5>Total price: FREE</h5>
        </div>
        <div class="flex">
            <button on:click={handleClick}>Checkout</button>
        </div>
    {:else}
    <p>Cart is empty</p>
    <p>Add tools to cart from the <a href="/rent">rental page</a></p>
    {/if}
</section>

<style>
    .flexible-grid {
        display: grid;
        place-items: center;
        max-width: 100%;
        gap: .666rem;
        margin: 2% auto;
        padding: .666rem;
        grid-template-columns: 1fr;
        background-color: var(--accent-color);
        border-radius: 12px;
    }
    .flex {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        align-items: center;
    }
    .flex button {
        margin: 5% auto;
    }
    .total {
        display: grid;
        place-items: center;
        max-width: 100%;
        background-color: var(--accent-color);
        border-radius: 12px;
    }
    img {
        width: 7rem;
        border-radius: 12px;
    }
    button.remove {
        background-color: var(--secondary-color);
        color: var(--off-white);
    }
    @media (min-width: 780px) {
        .flexible-grid {
            grid-template-columns: 1fr 1fr .75fr .5fr .25fr;
            padding: .5rem;
            gap: .333rem;
        }
        .total {
            grid-template-columns: 1fr 1fr;
            place-content: center space-between;
            place-items: start center;
            padding: 2rem 1rem;
        }
    }
</style>