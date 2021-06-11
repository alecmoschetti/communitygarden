<script context="module">
	export const prerender = true;
</script>
<script>
    import Article from '$lib/Article.svelte';
    const faqs = [
        {question: 'Is this free?', answer: `Yes, although donations are greatly appreciated as we depend on community support alone.`},
        {question: `How long can I rent a tool?`, answer: `Two days. Our tools are intended to be borrowed soley for a weekend project. In the future, we may expand our borrowing dates when we have a greater supply of each tool.`},
        {question: `Why can't I find an address?`, answer: `We only supply the address for the toolshed when your order is completed. Before we give you our address we need to have your information on record with us (this is our home, so it's only fair). You'll get all of our information in your order confirmation email. We're located in Camas, Washington about 20 minutes outside of Portland, Oregon.`},
        {question: `I broke something... Do I have to pay for it?`, answer: `Depends. Things break, that's the nature of hard work and tools in general. We totally get it, so most of the time, no. However, if you broke something through neglect that's a different story.`},
        {question: `How can I donate?`, answer: `First off, thank you for wanting to contribute to our project, every minor donation makes this all possible. So truly, thank you. Since we are so early in our lifecycle of the community toolshed, their are many items and tools we are looking for. If you have an old tool that you don't need and it's still functional, we'll gladly use it in our collection. Email us at communitytoolshed@gmail.com to schedule a drop off with us.`},
        {question: `What kind of tools do you need donated?`, answer: `Everything!!! Hammers, Shovels, Saws, Rakes, Drills, Screwdrivers, Wrenches, Air Pressure Tanks, Push/Electric Lawn Mowers, Leafblowers, etc. Ideally we'll have a tool for every project from gardening to wood working to shoe repair.`},
    ];
</script>
<section>
    <h1>
        FAQ
    </h1>
    {#each faqs as faq}
        <Article {...faq} />
    {/each}
</section>
<style>
    section {
        width: 70%;
        margin: 1% auto 1% 0;
    }
</style>
