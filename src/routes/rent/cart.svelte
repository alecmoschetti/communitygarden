<script>
    import { tools } from '../../stores/tools.js';
    import Tool from '$lib/Tool.svelte';
    const cart = $tools.find(tool => tool.title === 'cart');
</script>

<Tool tool={cart} />