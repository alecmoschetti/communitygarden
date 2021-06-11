<button on:click>
    <slot name="icon">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        </div>
    </slot>
    <slot name="title"></slot>
</button>

<style>
    button {
        position: relative;
        z-index: 1;
        display: block;
        background: var(--primary-color);
        color: var(--black-color);
        margin: 2% auto;
        transition: background-color 0.3s, color 0.3s;
    }
    button::before {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        bottom: -20px;
        right: -20px;
        background: inherit;
        border-radius: 50px;
        z-index: -1;
        opacity: 0.4;
        transform: scale3d(0.8, 0.5, 1);
    }
    button:hover {
        transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
        color: var(--off-white);
        background-color: var(--secondary-color);
        animation: animate1 0.3s forwards;
    }
    button:hover::before {
        animation: animate2 0.3s 0.3s forwards;
    }
    .icon {
        display: inline-block;
        width: 1.333rem;
        margin: 0 .333rem;
        vertical-align: middle;
    }

/*     https://tympanus.net/Development/ButtonStylesInspiration/ */
    @keyframes animate1 {
        60% {
            -webkit-transform: scale3d(0.8, 0.8, 1);
            transform: scale3d(0.8, 0.8, 1);
        }
        85% {
            -webkit-transform: scale3d(1.1, 1.1, 1);
            transform: scale3d(1.1, 1.1, 1);
        }
        100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }
    @keyframes animate2 {
	to {
		opacity: 0;
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
}
</style>