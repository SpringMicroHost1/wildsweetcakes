<script>
    // import requestAppointmentOpen from "$lib/requestAppointment";

    import firstAppointment from "$lib/assets/images/first-appointment.jpg";
</script>
<svelte:head>
    <title>First Appointment | Dillman Facial and Oral Surgery</title>
    <meta
        name="description"
        content="At Dillman Facial and Oral Surgery, we are
        committed to treating you and your loved ones in a caring
        atmosphere."
    />
</svelte:head>
<div class="mostly-full column">
    <h1 class="page-header">First Appointment</h1>
    <p>
        Don't know what to expect from your first appointment? Don't worry, you
        can read all about it here.
    </p>
    <div class="paragraph-img-wrap">
        <div
            class="wrap-front-img"
            style={`background-image: url('${firstAppointment}'); background-position: center 50%`}
        />
        <p>
            During your initial appointment, a representative will explain 
            your diagnosis and treatment options. Surgery can sometimes be 
            performed at the initial appointment, but a complicated medical 
            history or an involved treatment plan may require an evaluation
            and a second appointment to be made for treatment to be provided.
        </p>
    </div>
    <p>
        Please bring the following information for your first appointment
        for the best possible experience:
    </p>
    <ul>
        <li>A complete list of medications you are currently taking.</li>
        <li>Completed medical or dental insurance forms, if applicable.</li>
        <li>Your surgical referral slip and any x-rays, if applicable.</li>
    </ul>
    <p>
        At your appointment you will be asked to alert the office 
        of any medical condition you have that may be of concern
        (for example high blood pressure, diabetes, rheumatic fever, 
        artificial heart valves and joints, etc.) or if you are currently taking any 
        medications (for example aspirin, heart medications, anticoagulant 
        therapy, etc.).
    </p>
    <p>
        <strong>NOTE:</strong> A parent or guardian must accompany 
        patients under the age of 18.
    </p>
</div>
<!-- <button
    class="transparent-fancy main-action-button request-appointment-button"
    on:click={() => ($requestAppointmentOpen = true)}
    >Request an Appointment</button
> -->
<br/><br/>