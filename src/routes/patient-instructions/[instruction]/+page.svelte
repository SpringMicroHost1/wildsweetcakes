<script>
// @ts-nocheck

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
	<title>{data.title} | Wild Sweet Cakes</title>
    <meta name="description" content={data.metaDescription}>
</svelte:head>

<div class="procedure-information">
    <h3>{data.title}</h3>
    {@html data.content}
</div>