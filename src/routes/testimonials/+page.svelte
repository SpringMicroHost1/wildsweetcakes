<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { sortCardContainers } from "./+page";
    import { onMount } from "svelte";
    import biteSized from "$lib/assets/images/wild-sweet-cakes-bite-sized.jpeg";

    onMount(async () => {
        sortCardContainers();
    });
</script>

<svelte:head>
    <title>Testimonials | Wild Sweet Cakes</title>
    <meta
        name="description"
        content="Want to verify our quality care? Browse the ratings and testimonials left by our patients."
    />
</svelte:head>

<svelte:window on:resize={sortCardContainers} />

<h1 class="page-header">Testimonials</h1>
<div class="paragraph-img-wrap">
    <div
        class="wrap-front-img"
        style={`background-image: url('${biteSized}'); background-position: center 30%`}
    />
    <p>
        Want to verify our quality care? Browse the ratings and testimonials
        left by our patients. We are dedicated to providing a quality
        experience, and our patients can attest to that. Our staff are here to
        assist you and help you feel at ease regarding each phase of your oral
        and maxillofacial surgery treatment.
        <!-- <a
            class="transparent-fancy main-action-button leave-a-testimonial-button link"
            href="../testimonials/leave-a-testimonial"
            ><span class="stars">★</span> Leave a Testimonial</a
        > -->
    </p>
</div>
<div class="card-container" id="testimonials-container">
    {@html data.content}
</div>
