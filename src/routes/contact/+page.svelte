<script>
    import bannerTools from "$lib/assets/images/banner-tools.jpg";
    // import requestAppointmentOpen from "$lib/requestAppointment";
</script>

<svelte:head>
    <title>Contact | Dillman Facial and Oral Surgery</title>
    <meta
        name="description"
        content="Contact us if you have questions or feedback. We'd love to hear from you!"
    />
</svelte:head>

<h1 class="page-header">Contact Us</h1>
<div class="paragraph-img-wrap">
    Contact us if you have questions or feedback. We'd love to hear from you!
</div>
<div class="paragraph-img-wrap">
    <div
        class="wrap-front-img"
        style={`background-image: url('${bannerTools}'); background-position: center 30%`}
    />
    <div class="contact-container">
        <div class="contact-column">
            <!-- Address -->
            <div class="contact-row">
                <i class="fas fa-map-marked-alt"></i>
                <span>Address: </span>
                <span class="address">
                    <a class="link" href="https://www.google.com/maps/place/Dillman+Facial+and+Oral+Surgery/@47.7506556,-116.7851645,17z/data=!4m5!3m4!1s0x5361c0df1c4bb8a9:0x8e04f02af49a455f!8m2!3d47.7509533!4d-116.7848188">
                        Dillman Facial and Oral Surgery<br />
                        4123 W Yellen St,<br />
                        Paysville, ID 10529
                    </a>
                </span>
            </div>
            <!-- Phone -->
            <div class="contact-row">
                <i class="fas fa-phone-alt"></i>
                <span>Phone: </span>
                <span class="phone">
                    <a class="link" href="tel:208-512-2957">
                        208-512-2957
                    </a>
                </span>
                <span class="not-phone">208-512-2957</span>
            </div>
            <!-- Email -->
            <div class="contact-row">
                <i class="fas fa-envelope"></i>
                <span>Email: </span>
                <span>
                    <a class="link" href="mailto:rob@dillmanoralsurgery.com">
                    rob@dillmanoralsurgery.com
                    </a>
                </span>
            </div>
            <!-- Fax -->
            <!-- <div class="contact-row">
                <i class="fas fa-fax"></i>
                <span>Fax: </span>
                <span>480.376.7883</span>
            </div> -->
        </div>
    </div>
</div>

<!-- <button
class="transparent-fancy main-action-button request-appointment-button"
on:click={() => ($requestAppointmentOpen = true)}
>Request an Appointment</button
> -->
<br /><br />