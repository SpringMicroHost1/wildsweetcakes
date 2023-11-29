<script>
    // import requestAppointmentOpen from "$lib/requestAppointment";

    import insurance from "$lib/assets/images/insurance.jpg";
</script>
<svelte:head>
    <title>Insurance | Wild Sweet Cakes</title>
    <meta
        name="description"
        content="Welcome to Wild Sweet Cakes! I provide a variety of scratch baked goods for the Coeur d’Alene/Spokane vicinity."
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
            parts of a health operation. At <b>Wild Sweet Cakes</b>,
            we keep you informed every step of the way. Call our agents at
            <strong class="non-breaking">
                <i class="fas fa-phone-alt" />
                <span class="phone">
                    <a class="link" href="tel:208-964-1707">208-964-1707 </a>
                </span>
                <span class="not-phone">208-964-1707</span>
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
                <a class="link" href="tel:208-964-1707">208-964-1707 </a>
            </span>
            <span class="not-phone">208-964-1707</span>
        </strong>.
    </p>
</div>
<!-- <button
    class="transparent-fancy main-action-button request-appointment-button"
    on:click={() => ($requestAppointmentOpen = true)}
    >Request an Appointment</button
> -->
<br/><br/>