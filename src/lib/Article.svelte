<script>
    export let question;
    export let answer;
</script>
<article>
    <h2>{question}</h2>
    <hr>
    <p>{answer}</p>
</article>

<style>
    article {
        text-align: left;
        width: 100%;
    }
    hr {
        width: 100%;
        border-bottom: 1px solid var(--primary-color);
        margin: 2% auto;
    }
    p {
        max-width: 60ch;
    }
</style>