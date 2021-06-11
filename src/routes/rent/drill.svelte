<script>
    import { tools } from '../../stores/tools.js';
    import Tool from '$lib/Tool.svelte';
    const drill = $tools.find(tool => tool.title === 'drill');
</script>

<Tool tool={drill} />