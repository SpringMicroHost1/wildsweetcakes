<script>
    /**
     * @type {string}
     */
     export let pathname;
    /**
     * @type {Array<{label:string,href:string}>}
     */
     let crumbs;

    $: {
        // Remove zero-length tokens.
        const tokens = pathname.split('/').filter((t) => t !== '');

        // Create { label, href } pairs for each token.
        let tokenPath = '';
        crumbs = tokens.map((t) => {
            tokenPath += '/' + t;
            return {
                label: t,
                href: tokenPath,
            };
        });

        // Add a way to get home too.
        crumbs.unshift({ label: 'home', href: '/' });
    }
</script>

<div class="breadcrumbs">
    {#each crumbs as c, i}
        {#if i == crumbs.length-1}
            {c.label}
        {:else}
            <a href={c.href}>{c.label}</a> &gt;&nbsp;
        {/if}
    {/each}
</div>