<script>
    // import requestAppointmentOpen from "$lib/requestAppointment";

    import bannerElephants from "$lib/assets/images/banner-elephants.jpeg";
</script>
<svelte:head>
    <title>Why Choose Us | Wild Sweet Cakes</title>
    <meta
        name="description"
        content="Why choose us? Our highly qualified staff sets us apart.
            Facial and Oral Surgeon, Dr.
            Wild, has extensive training in oral and maxillofacial surgery,"
    />
</svelte:head>
<div class="mostly-full column">
    <h1 class="page-header">Why Choose Us?</h1>
    <p>
        Why choose us? What sets <b>Wild Sweet Cakes</b> apart?
    </p>
    <div class="paragraph-img-wrap">
        <div
            class="wrap-front-img"
            style={`background-image: url('${bannerElephants}'); background-position: center 50%`}
        />
        <p>
            Our highly qualified staff sets us apart.
            <br/><br/>
            Facial and Oral Surgeon, Dr.
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