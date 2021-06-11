<script>
    import Button from '$lib/Button.svelte';
    import Dates from '$lib/Dates.svelte';
    import { checkout } from '../stores/tools.js';
    export let tool;
    let success = false;
    $: showMessage = success;
    function revertSuccess() {
        success = false;
    }
    function activateMessage() {
        success = true;
        setTimeout(revertSuccess, 1000);
    }
    function addCart() {
        if (!tool.pickupdate) return;
        if ($checkout.includes(tool)) {
            $checkout.map(item => {
                if(item.id === tool.id) {
                    item.duration = tool.duration;
                    item.pickupdate = tool.pickupdate;
                }
                $checkout = $checkout;
                activateMessage();
            })
            return;
        }
        $checkout.push(tool);
        $checkout = [...$checkout];
        activateMessage();
    }
</script>

<section>
    <div>
        <img src="{tool.src}" alt="{tool.title}">
    </div>
    <div class="info">
        <h1>{tool.title}</h1>
        <p><span>Condition:</span> {tool.condition}</p>
        <p><span>Suggested uses:</span> {tool.uses}</p>
        <Dates bind:selectedDay={tool.pickupdate} bind:duration={tool.duration} />
        <div class="button_container">
            <div>
                <Button on:click={addCart}>
                    <svelte:fragment slot="title">Add to cart</svelte:fragment>
                </Button>
            </div>
            {#if showMessage}
                <span class="message">Tool added to checkout</span>
            {/if}
            <button class="back"><a href="/rent">Back to rentals</a></button>
        </div>
    </div>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        place-items: center;
    }
    img {
        width: 15rem;
        border-radius: 12px;
        margin: 2% auto;
    }
    .info {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        width: 100%;
    }
    span {
        color: var(--primary-color);
    }
    .button_container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
    .message {
        background-color: #31462A;
        color: var(--off-white);
        padding: .5rem;
        border-radius: 6px;
        margin-top: .5rem;
    }
    a {
        color: var(--black-color);
    }
    .back {
        margin: 2% 0;
        background-color: var(--off-white);
        color: var(--black-color);
    }
    @media (min-width: 780px) {
        section {
            grid-template-columns: 50% 50%;
            grid-template-rows: 1fr;
            margin: auto 2%;
        }
        img {
            width: 20rem;
        }
        .button_container {
            align-items: flex-start;
        }
    }
</style>