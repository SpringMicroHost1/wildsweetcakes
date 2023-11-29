<script>
    /** @type {import('./$types').PageData} */
    export let data;

    // import requestAppointmentOpen from "$lib/requestAppointment";

    import { onMount, onDestroy } from "svelte";
    import { switchTo, startInterval, stopInterval } from "./+page";
    // MISSING IMAGE
    // banner-building.jpg
    import bannerBuilding from "$lib/assets/images/banner-smile.jpg";
    import bannerTools from "$lib/assets/images/banner-tools.jpg";
    import bannerSmile from "$lib/assets/images/banner-smile.jpg";
    
    
    

    onMount(startInterval)
    onDestroy(stopInterval)
</script>

<svelte:head>
    <title>Dillman Facial and Oral Surgery</title>
    <meta name="description" content="
        At Dillman Facial and Oral Surgery in Coeur d’Alene, Idaho, we are
        committed to treating you and your loved ones in a caring
        atmosphere. To do this, we offer general anesthesia for your comfort
        during your surgical procedure. Facial and Oral Surgeon, Dr.
        Dillman, has extensive training in oral and maxillofacial surgery,
        including general anesthesia, wisdom teeth, dental implants and bone
        grafting, botox and cosmetic fillers, reconstructive surgery for
        oral and facial deformities and facial trauma.
    ">
</svelte:head>

<div id="banner">
    <article style={`background-image: url('${bannerBuilding}'); background-position: center;`} class="visible top">
        <div class="inner">
            <div class="features">
                <a href="./testimonials" class="accent1 alt link">
                    <h2>Local and Friendly</h2>
                    <p>Visit our testimonials page.</p>
                </a>
            </div>
        </div>
    </article>
    <article style={`background-image: url('${bannerTools}'); background-position: center;`}>
        <div class="inner">
            <div class="features">
                <a href="./contact" class="accent1 alt link">
                    <h2>Dedicated to Quality</h2>
                    <p>Contact our team to ask questions or give feedback.</p>
                </a>
            </div>
        </div>
    </article>
    <!-- <article style={`background-image: url('${bannerSmile}'); background-position: center;`}>
        <div class="inner">
            <div class="features">
                <span
                    on:click={() => ($requestAppointmentOpen = true)}
                    on:keydown={() => {}}
                    class="accent1 alt link"
                >
                    <h2>Patient Paperwork</h2>
                    <p>Fill out your paperwork online.</p>
                </span>
            </div>
        </div>
    </article> -->
    <article style={`background-image: url('${bannerSmile}'); background-position: center;`}>
        <div class="inner">
            <div class="features">
                <a href="./first-appointment" class="accent1 alt link">
                    <h2>Patient Information</h2>
                    <p>Learn everything you need to know, online.</p>
                </a>
            </div>
        </div>
    </article>
    <!-- <button
        class="transparent-fancy main-action-button request-appointment-button"
        on:click={() => ($requestAppointmentOpen = true)}
        >Request an Appointment</button
    > -->
    <ul class="indicators">
        <li class="visible" on:click={()=>switchTo(0, true)} on:keydown={(e)=>{if(e.key==="Enter")switchTo(0, true)}}><span>0</span></li>
        <li on:click={()=>switchTo(1, true)} on:keydown={(e)=>{if(e.key==="Enter")switchTo(1, true)}}><span>1</span></li>
        <li on:click={()=>switchTo(2, true)} on:keydown={(e)=>{if(e.key==="Enter")switchTo(2, true)}}><span>2</span></li>
    </ul>
</div>
<div class="row">
    <a class="transparent-fancy link" href="./procedures/dental-extraction"
        >Dental Extraction</a
    >
    <a class="transparent-fancy link" href="./procedures/wisdom-teeth-extraction"
        >Wisdom Teeth Extraction</a
    >
    <a class="transparent-fancy link" href="./procedures/dental-implants"
        >Dental Implants</a
    >
    <a class="transparent-fancy link" href="./procedures/oral-tumors-and-cancer"
        >Oral Tumors/Cancer</a
    >
    <a class="transparent-fancy link" href="./procedures/tmj-surgery">TMJ Surgery</a>
    <a class="transparent-fancy link" href="./procedures/sleep-apnea">Sleep Apnea</a>
</div>
<h2 class="sub-page-header">Dillman Facial and Oral Surgery</h2>
<div class="paragraph-img-wrap">
    <div
        class="wrap-front-img"
        style={`background-image: url('${bannerBuilding}');`}
    />
    <div>
        <p>
            At Dillman Facial and Oral Surgery in Coeur d’Alene, Idaho, we are
            committed to treating you and your loved ones in a caring
            atmosphere. To do this, we offer general anesthesia for your comfort
            during your surgical procedure. Facial and Oral Surgeon, Dr.
            Dillman, has extensive training in oral and maxillofacial surgery,
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
        <p>
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
<h2 class="sub-page-header blue-text">Our Procedures</h2>
<div class="paragraph-img-wrap blue-bg">
    <div class="list-column">
        <h4>Oral & Maxillofacial</h4>
        <ul>
            <li>
                <a class="link" href="./procedures/dental-extraction">Dental Extraction</a>
            </li>
            <li>
                <a class="link" href="./procedures/wisdom-teeth-extraction"
                    >Wisdom Teeth Extraction</a
                >
            </li>
            <li><a class="link" href="./procedures/dental-implants">Dental Implants</a></li>
            <li>
                <a class="link" href="./procedures/oral-tumors-and-cancer"
                    >Oral Tumors/Cancer</a
                >
            </li>
            <li><a class="link" href="./procedures/tmj-surgery">TMJ Surgery</a></li>
            <li><a class="link" href="./procedures/sleep-apnea">Sleep Apnea</a></li>
        </ul>
    </div>

    <div class="list-column">
        <h4>Facial and Cosmetic</h4>
        <ul>
            <li>
                <a class="link" href="./procedures/botox-injections-cosmetic-and-medical"
                    >Botox injections (cosmetic and medical)</a
                >
            </li>
            <li>
                <a class="link" href="./procedures/cosmetic-fillers">Cosmetic Fillers</a>
            </li>
            <li><a class="link" href="./procedures/scar-revision">Scar revision</a></li>
        </ul>
    </div>

    <div class="list-column">
        <h4>Facial Reconstruction</h4>
        <ul>
            <li>
                <a class="link" href="./procedures/jaw-alignment-surgery"
                    >Jaw alignment surgery</a
                >
            </li>
            <li>
                <a class="link" href="./procedures/cleft-lip-and-palate-surgery"
                    >Cleft lip and palate surgery</a
                >
            </li>
            <li>
                <a class="link" href="./procedures/facial-trauma-repair"
                    >Facial trauma repair</a
                >
            </li>
        </ul>
    </div>
</div>
<!-- <div id="patientpaperwork-container">
    <div id="patientpaperwork"></div>
    <script src="https://square.site/appointments/buyer/widget/a6mythgby82hvu/LX9SGWVDQPNA7.js"></script>
</div> -->
<!-- <button
    class="transparent-fancy main-action-button request-appointment-button"
    on:click={() => ($requestAppointmentOpen = true)}
    >Request an Appointment</button
> -->
<!-- <img
    id="patientpaperwork"
    src="/src/lib/assets/images/booking.jpg"
    alt="Example patientpaperwork Widget"
/> -->
<!-- <img
    id="testimonials"
    src="/src/lib/assets/images/testimonials.jpg"
    alt="Example Testimonials"
/> -->
<br /><br />
<h2 class="sub-page-header">Testimonials</h2>
<!-- <a
    class="transparent-fancy main-action-button leave-a-testimonial-button link"
    href="./testimonials/leave-a-testimonial"
    ><span class="stars">★</span> Leave a Testimonial</a
> -->
<br/>
<div class="row no-wrap justify-left align-top scroll">
    {@html data.testimonialsHTML}
</div>

<h2 class="sub-page-header">Contact Us</h2>
<div class="paragraph-img-wrap">
    <div
        class="wrap-front-img"
        style={`background-image: url('${bannerTools}');`}
    />
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
</div>
