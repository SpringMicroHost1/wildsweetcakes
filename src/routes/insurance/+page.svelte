<script>
    // import requestAppointmentOpen from "$lib/requestAppointment";

    import insurance from "$lib/assets/images/insurance.jpg";
</script>
<svelte:head>
    <title>Insurance | Dillman Facial and Oral Surgery</title>
    <meta
        name="description"
        content="At Dillman Facial and Oral Surgery, we are
        committed to treating you and your loved ones in a caring
        atmosphere."
    />
</svelte:head>
<div class="mostly-full column">
    <h1 class="page-header">Insurance</h1>
    <div class="paragraph-img-wrap">
        <div
            class="wrap-front-img"
            style={`background-image: url('${insurance}'); background-position: center 50%`}
        />
        <p>
            Navigating insurance can sometimes be one of the most stressful and confusing
            parts of a health operation. At <b>Dillman Facial and Oral Surgery</b>,
            we keep you informed every step of the way. Call our agents at
            <strong class="non-breaking">
                <i class="fas fa-phone-alt" />
                <span class="phone">
                    <a class="link" href="tel:208-512-2957">208-512-2957 </a>
                </span>
                <span class="not-phone">208-512-2957</span>
            </strong>
            if you have any questions. Below is a list of insurance companies and payment
            plans that we accept.
        </p>
    </div>
    <h3>Covered Insurance Plans</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
    <p>
        If you do not see your plan listed, call our agents at
        <strong class="non-breaking">
            <i class="fas fa-phone-alt" />
            <span class="phone">
                <a class="link" href="tel:208-512-2957">208-512-2957 </a>
            </span>
            <span class="not-phone">208-512-2957</span>
        </strong>.
    </p>
</div>
<!-- <button
    class="transparent-fancy main-action-button request-appointment-button"
    on:click={() => ($requestAppointmentOpen = true)}
    >Request an Appointment</button
> -->
<br/><br/>