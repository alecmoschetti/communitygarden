<script>
    import { checkout } from '../stores/tools.js';
</script>
<nav>
    <h3><a href="/">Community Toolshed</a></h3>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/rent">Rent</a></li>
        <li class="checkoutLI">
            <a href="/checkout" class="checkout">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D99898" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
            </a>
            {#if $checkout.length > 0}
                <span class="cartCounter">{$checkout.length}</span>
            {/if}
        </li>
    </ul>
</nav>

<style>
    nav,
    ul {
        display: flex;
        color: var(--off-white);
    }
    nav {
        flex-flow: column nowrap;
        align-items: center;
        padding: .5rem;
        width: 90%;
        margin: 0 auto 1% auto;
        background: var(--black-color);
        height: var(--nav-height);
        position: fixed;
        left: 0;
        right: 0;
    }
    ul {
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
    }
    h3 {
        text-align: center;
        margin: 0;
    }
    li {
        margin: 0 .5rem;
    }
    li.checkoutLI {
        width: 2rem;
        height: 2rem;
        position: relative;
    }
    .checkout {
        width: 100%;
        height: 100%;
    }
    .cartCounter {
        position: absolute;
        z-index: 5;
        top: 0;
        left: 20px;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background-color: var(--secondary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .8rem;
    }
    /* media queries */

    @media (min-width: 780px) {
        nav,
        ul {
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
        }
        nav {
            padding: 1rem;
        }
        ul {
            width: 25rem;
        }
    }
</style>