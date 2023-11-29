<script>
    // import requestAppointmentOpen from "$lib/requestAppointment";

    import bannerWedding from "$lib/assets/images/banner-wedding.jpeg";
</script>
<svelte:head>
    <title>Mission Statement | Wild Sweet Cakes</title>
    <meta
        name="description"
        content="Welcome to Wild Sweet Cakes! I provide a variety of scratch baked goods for the Coeur d’Alene/Spokane vicinity. "
    />
</svelte:head>
<div class="mostly-full column">
    <h1 class="page-header">Mission Statement</h1>
    <blockquote class="mission-statement">
        <span class="quote-mark">&OpenCurlyDoubleQuote;</span>&NonBreakingSpace;I am self-taught baker that loves how sweet treats make a special occasion even more special.&NonBreakingSpace;<span class="quote-mark">&CloseCurlyDoubleQuote;</span>
    </blockquote>
    <div class="paragraph-img-wrap">
        <div
            class="wrap-front-img"
            style={`background-image: url('${bannerWedding}'); background-position: center 50%`}
        />
        <p>
            To do this, we offer general anesthesia for your comfort
            during your surgical procedure. Facial and Oral Surgeon, Dr.
            Wild, has extensive training in oral and maxillofacial surgery,
            including general anesthesia, wisdom teeth, dental implants and bone
            grafting, botox and cosmetic fillers, reconstructive surgery for
            oral and facial deformities and facial trauma. He has an excellent
            background in medicine and can appropriately treat each patient,
            especially those with significant medical problems. Our staff are
            here to assist you and help you feel at ease regarding each phase of
            your oral and maxillofacial surgery treatment. We are pleased you
            have chosen us as your facial and oral surgeon in Coeur d’Alene and
            we look forward to caring for you the best possible way.
        </p>
    </div>
</div>
<!-- <button
    class="transparent-fancy main-action-button request-appointment-button"
    on:click={() => ($requestAppointmentOpen = true)}
    >Request an Appointment</button
> -->
<br/><br/>