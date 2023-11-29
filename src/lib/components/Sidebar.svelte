<script>
    import { getTestimonialHTML } from "$lib/testimonials";
    // import requestAppointmentOpen from "$lib/requestAppointment";

    let testimonialsHTML = getTestimonialHTML()
</script>

<section class="sidebar column">
    <!-- Mission Statement -->
    <blockquote class="mission-statement">
        <span class="quote-mark">&OpenCurlyDoubleQuote;</span>&NonBreakingSpace;At Dillman Facial and Oral Surgery, we are committed to treating you and your loved ones in a caring atmosphere.&NonBreakingSpace;<span class="quote-mark">&CloseCurlyDoubleQuote;</span>
    </blockquote>

    <!-- Dr. Dillman Profile -->
    <div class="person">
        <!-- MISSING IMAGE -->
        <!-- dr-dillman.jpg -->
        <img src="/src/lib/assets/images/doctor-1.jpg" alt="Dr. Dillman"/>
        <div class="column">
            <h2>Dr. Dillman</h2>
            <p>
                Facial and Oral Surgeon, Dr.
                Dillman, has extensive training in oral and maxillofacial surgery,
                including general anesthesia, wisdom teeth, dental implants and bone
                grafting, botox and cosmetic fillers, reconstructive surgery for
                oral and facial deformities and facial trauma. He has an excellent
                background in medicine and can appropriately treat each patient,
                especially those with significant medical problems.
                <br />
                <br />
                Dr. Dillman is happy to reside in beautiful North Idaho and
                provide comprehensive Oral and Maxillofacial Surgery treatment. Dr.
                Rob Dillman has lived in various places since growing up in
                Idaho. A Texas native, Dr. Dillman has also lived in: Alabama,
                Belgium, Wisconsin, and Missouri. He met his wife while he attended
                Brigham Young University in Utah. Dr. Dillman then enjoyed dental
                school at Temple University School of Dentistry in Philadelphia
                where he graduated Cum Laude. During dental school, he realized his
                passion was oral and maxillofacial surgery. His residency in Oral
                and Maxillofacial Surgery was in Loma Linda, California. He loves
                living in Coeur d’Alene with his wife, Tamar, and four children
                (Emma, Abigail, Kyle and Zac).
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
                    <a class="link" href="https://www.google.com/maps/place/Dillman+Facial+and+Oral+Surgery/@47.7506556,-116.7851645,17z/data=!4m5!3m4!1s0x5361c0df1c4bb8a9:0x8e04f02af49a455f!8m2!3d47.7509533!4d-116.7848188">
                        Dillman Facial and Oral Surgery<br />
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
                    <a class="link" href="tel:208-512-2957"> 208-512-2957 </a>
                </span>
                <span class="not-phone">208-512-2957</span>
            </div>
            <!-- Email -->
            <div class="contact-row">
                <i class="fas fa-envelope" />
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
    <!-- <button
        class="transparent-fancy main-action-button request-appointment-button"
        on:click={() => ($requestAppointmentOpen = true)}
        >Request an Appointment</button
    > -->
    <br /><br />
</section>