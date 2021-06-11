<script>
    let day = new Date().toISOString().substr(0, 10);
    export let selectedDay;
    export let duration = 1;
</script>

<label for="from">From: </label>
<input name="from" type="date" min={day} bind:value={selectedDay}>
<label for="days">Rental days: </label>
<input name="days" type="number" max={2} min={1} bind:value={duration}>

<style>
    input {
        margin: 3% auto;
        width: 100%;
    }
    @media (min-width: 780px) { 
        input {
            width: 80%;
            margin: 3% auto 3% 0;
        }
    }
</style>