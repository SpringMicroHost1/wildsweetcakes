<script>
    import { getTestimonialHTML } from "$lib/testimonials";
    // import requestAppointmentOpen from "$lib/requestAppointment";

    let testimonialsHTML = getTestimonialHTML()
</script>

<section class="sidebar column">
    <!-- Mission Statement -->
    <blockquote class="mission-statement">
        <span class="quote-mark">&OpenCurlyDoubleQuote;</span>&NonBreakingSpace;I am self-taught baker that loves how sweet treats make a special occasion even more special.&NonBreakingSpace;<span class="quote-mark">&CloseCurlyDoubleQuote;</span>
    </blockquote>

    <!-- Stacey Wild Profile -->
    <div class="person">
        <!-- MISSING IMAGE -->
        <!-- dr-wild.jpg -->
        <img src="/src/lib/assets/images/logo.png" alt="Stacey Wild"/>
        <div class="column">
            <h2>Stacey Wild</h2>
            <p>
                Welcome to Wild Sweet Cakes! I provide a variety of scratch baked goods for the Coeur d’Alene/Spokane vicinity.
                <br />
                <br />
                Wild Sweet Cakes started in my kitchen baking for friends and family. Soon my friends and family started referring me to their friends and family. I am self-taught baker that loves how sweet treats make a special occasion even more special. Baking brings me so much joy and I love being a part of my customer’s special day.
                <br />
                <br />
                I bake anything from my signature cupcakes and cakes to French macarons, pies, cookies and cheesecakes. I use “real” ingredients! No margarine, or imitation flavorings in these delicious baked creations.
            </p>
        </div>
    </div>
    <br/><br/>


    <!-- Testimonials -->
    <h2 class="sub-page-header">Testimonials</h2>
    <div class="row no-wrap justify-left align-top scroll">
        {@html testimonialsHTML}
    </div>
    <br/><br/>


    <!-- Contact Information and Request Appointment Button -->
    <h2 class="sub-page-header">Contact Us</h2>
    <div class="contact-container">
        <div class="contact-column">
            <!-- Address -->
            <div class="contact-row">
                <i class="fas fa-map-marked-alt" />
                <span>Address: </span>
                <span class="address">
                    <a class="link" href="https://www.google.com/maps/place/Wild+Facial+and+Oral+Surgery/@47.7506556,-116.7851645,17z/data=!4m5!3m4!1s0x5361c0df1c4bb8a9:0x8e04f02af49a455f!8m2!3d47.7509533!4d-116.7848188">
                        Wild Sweet Cakes<br />
                        4123 W Yellen St,<br />
                        Paysville, ID 10529
                    </a>
                </span>
            </div>
            <!-- Phone -->
            <div class="contact-row">
                <i class="fas fa-phone-alt" />
                <span>Phone: </span>
                <span class="phone">
                    <a class="link" href="tel:208-964-1707"> 208-964-1707 </a>
                </span>
                <span class="not-phone">208-964-1707</span>
            </div>
            <!-- Email -->
            <div class="contact-row">
                <i class="fas fa-envelope" />
                <span>Email: </span>
                <span>
                    <a class="link" href="mailto:stacey@wildsweetcakes.com">
                        stacey@wildsweetcakes.com
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
    <!-- <button
        class="transparent-fancy main-action-button request-appointment-button"
        on:click={() => ($requestAppointmentOpen = true)}
        >Request an Appointment</button
    > -->
    <br /><br />
</section>