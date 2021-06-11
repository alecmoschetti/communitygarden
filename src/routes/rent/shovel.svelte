<script>
    import { tools } from '../../stores/tools.js';
    import Tool from '$lib/Tool.svelte';
    const shovel = $tools.find(tool => tool.title === 'shovel');
</script>

<Tool tool={shovel} />