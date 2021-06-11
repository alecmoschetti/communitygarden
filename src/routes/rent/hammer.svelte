<script>
    import { tools } from '../../stores/tools.js';
    import Tool from '$lib/Tool.svelte';
    const hammer = $tools.find(tool => tool.title === 'hammer');
</script>

<Tool tool={hammer} />