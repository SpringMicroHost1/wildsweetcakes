<script lang="js">
    import navOpen from '$lib/navOpen';
    // import requestAppointmentOpen from '$lib/requestAppointment';
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import { page } from '$app/stores';
    import Sidebar from '$lib/components/Sidebar.svelte';

    let currentFontMultiplier = 1;
    function largerText() {
        currentFontMultiplier *= 1.1;
        document.documentElement.style.fontSize =
            currentFontMultiplier * 100 + "%";
    }
    function smallerText() {
        currentFontMultiplier /= 1.1;
        document.documentElement.style.fontSize =
            currentFontMultiplier * 100 + "%";
    }
    let accessibilityContainerOpen = false;
</script>

<style>
    :global(body) {
        background: linear-gradient(#0000, #0000), url('/src/lib/assets/images/background.svg') repeat-y center top;
        background-size: cover;
    }
</style>

<svelte:window on:click={(e)=>{
    // Close the nav when a link is clicked
    // @ts-ignore
    if (e.target?.href) {
        $navOpen = false
    }
}} />

<!-- {#if $requestAppointmentOpen}
    <style>
        body {
          scrollbar-width: none;
          padding-right: 17px;
        }
        
        body::-webkit-scrollbar {
          display: none;
        }
    </style>
{/if} -->

<a class="full-logo-container special-position link" href="/">
    <img
        class="full-logo"
        src="/src/lib/assets/images/logo.png"
        alt="Dillman Facial and Oral Surgery Home Page"
    />
    <h1>Dillman Facial and Oral Surgery</h1>
</a>
<h3 class="phone-button-container">
    <!-- <span class="link" on:click={() => ($requestAppointmentOpen = true)} on:keydown={(e) => {if(e.key==="Enter")($requestAppointmentOpen = true)}}
        >Request an Appointment</span
    >
    <span>- or -</span> -->
    <a class="phone-button link" href="tel:208-512-2957"
        ><i class="fas fa-phone-alt" /> (208) 667-0824</a
    >
</h3>

<!-- Header -->
<header id="header">
    <div class="inner">
        <span class="nav-toggle" on:click={() => ($navOpen = !$navOpen)} on:keydown={(e)=>{if(e.key==="Enter")($navOpen = !$navOpen)}}><i class="fas fa-solid fa-bars" /></span>
        <nav id="nav" class={$navOpen ? "open" : ""}>
            <span class="nav-close" on:click={() => ($navOpen = false)} on:keydown={(e)=>{if(e.key==="Enter")($navOpen = false)}}
                >&#x2715;</span
            >
            <ul>
                <li><a class="logo link" href="/">Home</a></li>
                <li><a class="logo remove link" href="#">Students</a></li>
                <li><a class="logo remove link" href="# ">Parents</a></li>
                <li><a class="logo remove link" href="# ">Educators</a></li>
                <li>
                    <a class="logo remove link" href="/testimonials">Testimonials</a>
                    <ul>
                        <li><a class="link" href="/testimonials">View Testimonials</a></li>
                        <!-- <li><a class="link" href="/testimonials/leave-a-testimonial">Leave a Testimonial</a></li> -->
                    </ul>
                </li>
                <li><a class="logo remove link" href="/contact">Contact Us</a></li>
            </ul>
        </nav>
    </div>
</header>

<!-- <div id="request-appointment" on:click={() => ($requestAppointmentOpen = false)} on:keydown={(e)=>{if(e.key==="Enter")($requestAppointmentOpen = false)}} class={$requestAppointmentOpen ? "open" : ""}>
    <div class="modal-dialog" on:click|stopPropagation={null} on:keydown={()=>{}}>
        <div class="modal-content">
            <div class="modal-header">
                <button
                    aria-hidden="true"
                    data-dismiss="modal"
                    class="close"
                    type="button"
                    on:click={() => ($requestAppointmentOpen = false)}>×</button
                >
                <h3 class="modal-title">Request an Appointment</h3>
            </div>
            <div class="modal-body">
                <div
                    class="gf_browser_chrome gform_wrapper _wrapper bs3-form_wrapper"
                    id="gform_wrapper_62a10295e13a5"
                >
                    <div id="gf_1" class="gform_anchor" tabindex="-1" />
                    <form
                        method="post"
                        id="gform_62a10295e13a5"
                        class=" bs3-form"
                        action="https://formspree.io/f/xoqroryd"
                    >
                        <div class="gform_heading">
                            <span class="gform_description">
                                <div>
                                    <img
                                        src="/src/lib/assets/images/logo.png"
                                        alt="Lakeside Oral Surgery &amp; Dental Implants"
                                        style="width:90%;margin-left:auto;margin-right:auto;"
                                        class="aligncenter size-full"
                                    />
                                </div>
                                Looking for a healthy, beautiful smile? 
                                Schedule an appointment with <strong
                                    >Dillman Facial and Oral Surgery</strong
                                >. Call us at
                                <strong class="non-breaking">
                                    <i class="fas fa-phone-alt" />
                                    <span class="phone">
                                        <a class="link" href="tel:208-512-2957">208-512-2957 </a>
                                    </span>
                                    <span class="not-phone">208-512-2957</span>
                                </strong>
                                or complete the form below to request an appointment. Our
                                representative will contact you to confirm
                                your appointment.
                            </span>
                        </div>
                        <div class="gform_body">
                            <ul
                                id="gform_fields_1"
                                class="gform_fields top_label form_sublabel_below description_below"
                            >
                                <li
                                    id="field_1_1"
                                    class="gfield gfield_html gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible"
                                >
                                    <p>
                                        <a class="link" href="/disclaimer/"
                                            ><strong>Privacy Policy</strong></a
                                        >
                                    </p>
                                </li>
                                <li
                                    id="field_1_2"
                                    class="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                                >
                                    <label
                                        for="input_1_2"
                                        class="gfield_label gfield_label_before_complex"
                                        >Your Name<span class="gfield_required"
                                            >*</span
                                        ></label
                                    >
                                    <div
                                        class="ginput_container ginput_container_name"
                                    >
                                        <input
                                            name="Your_name"
                                            id="input_1_2"
                                            type="text"
                                            value=""
                                            class="large form-control"
                                            aria-required="true"
                                            aria-invalid="false"
                                            style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;"
                                        />
                                    </div>
                                </li>
                                <li
                                    id="field_1_3"
                                    class="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                                >
                                    <label class="gfield_label" for="input_1_3"
                                        >Your E-mail Address<span
                                            class="gfield_required">*</span
                                        ></label
                                    >
                                    <div
                                        class="ginput_container ginput_container_email"
                                    >
                                        <input
                                            name="Your_e-mail_address"
                                            id="input_1_3"
                                            type="text"
                                            value=""
                                            class="large form-control"
                                            aria-required="true"
                                            aria-invalid="false"
                                        />
                                    </div>
                                </li>
                                <li
                                    id="field_1_4"
                                    class="gfield field_sublabel_below field_description_below gfield_visibility_visible"
                                >
                                    <label class="gfield_label" for="input_1_4"
                                        >Your Phone Number</label
                                    >
                                    <div
                                        class="ginput_container ginput_container_phone"
                                    >
                                        <input
                                            name="Your_phone_number"
                                            id="input_1_4"
                                            type="text"
                                            value=""
                                            class="large form-control"
                                            aria-invalid="false"
                                        />
                                    </div>
                                </li>
                                <li
                                    id="field_1_7"
                                    class="gfield field_sublabel_below field_description_below gfield_visibility_visible"
                                >
                                    <label class="gfield_label" for="input_1_7"
                                        >Referred By</label
                                    >
                                    <div
                                        class="ginput_container ginput_container_text"
                                    >
                                        <input
                                            name="Referred_by"
                                            id="input_1_7"
                                            type="text"
                                            value=""
                                            class="medium form-control"
                                            aria-invalid="false"
                                        />
                                    </div>
                                </li>
                                <li
                                    id="field_1_8"
                                    class="gfield field_sublabel_below field_description_below gfield_visibility_visible checkbox"
                                >
                                    <span class="gfield_label"
                                        >I am interested in</span
                                    >
                                    <div
                                        class="ginput_container ginput_container_checkbox"
                                    >
                                        <ul
                                            class="gfield_checkbox"
                                            id="input_1_8"
                                        >
                                            <li class="gchoice_1_8_1">
                                                <input
                                                    name="I_am_interested_in"
                                                    type="checkbox"
                                                    value="Scheduling an Appointment"
                                                    id="choice_1_8_1"
                                                />
                                                <label
                                                    for="choice_1_8_1"
                                                    id="label_1_8_1"
                                                    >Scheduling an Appointment</label
                                                >
                                            </li>
                                            <li class="gchoice_1_8_2">
                                                <input
                                                    name="I_am_interested_in"
                                                    type="checkbox"
                                                    value="Teeth Removal"
                                                    id="choice_1_8_2"
                                                />
                                                <label
                                                    for="choice_1_8_2"
                                                    id="label_1_8_2"
                                                    >Teeth Removal</label
                                                >
                                            </li>
                                            <li class="gchoice_1_8_3">
                                                <input
                                                    name="I_am_interested_in"
                                                    type="checkbox"
                                                    value="Wisdom Teeth"
                                                    id="choice_1_8_3"
                                                />
                                                <label
                                                    for="choice_1_8_3"
                                                    id="label_1_8_3"
                                                    >Wisdom Teeth</label
                                                >
                                            </li>
                                            <li class="gchoice_1_8_4">
                                                <input
                                                    name="I_am_interested_in"
                                                    type="checkbox"
                                                    value="Dental Implants"
                                                    id="choice_1_8_4"
                                                />
                                                <label
                                                    for="choice_1_8_4"
                                                    id="label_1_8_4"
                                                    >Dental Implants</label
                                                >
                                            </li>
                                            <li class="gchoice_1_8_5">
                                                <input
                                                    name="I_am_interested_in"
                                                    type="checkbox"
                                                    value="Bone Grafting"
                                                    id="choice_1_8_5"
                                                />
                                                <label
                                                    for="choice_1_8_5"
                                                    id="label_1_8_5"
                                                    >Bone Grafting</label
                                                >
                                            </li>
                                            <li class="gchoice_1_8_6">
                                                <input
                                                    name="I_am_interested_in"
                                                    type="checkbox"
                                                    value="Other"
                                                    id="choice_1_8_6"
                                                />
                                                <label
                                                    for="choice_1_8_6"
                                                    id="label_1_8_6"
                                                    >Other</label
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li
                                    id="field_1_9"
                                    class="gfield field_sublabel_below field_description_below gfield_visibility_visible checkbox"
                                >
                                    <span class="gfield_label"
                                        >Best Time for Appointment</span
                                    >
                                    <div
                                        class="ginput_container ginput_container_checkbox"
                                    >
                                        <ul
                                            class="gfield_checkbox"
                                            id="input_1_9"
                                        >
                                            <li class="gchoice_1_9_1">
                                                <input
                                                    name="Best_time_for_Appointment"
                                                    type="checkbox"
                                                    value="Morning"
                                                    id="choice_1_9_1"
                                                />
                                                <label
                                                    for="choice_1_9_1"
                                                    id="label_1_9_1"
                                                    >Morning</label
                                                >
                                            </li>
                                            <li class="gchoice_1_9_2">
                                                <input
                                                    name="Best_time_for_Appointment"
                                                    type="checkbox"
                                                    value="Afternoon"
                                                    id="choice_1_9_2"
                                                />
                                                <label
                                                    for="choice_1_9_2"
                                                    id="label_1_9_2"
                                                    >Afternoon</label
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li
                                    id="field_1_10"
                                    class="gfield field_sublabel_below field_description_below gfield_visibility_visible checkbox"
                                >
                                    <span class="gfield_label"
                                        >Preferred Day of Week</span
                                    >
                                    <div
                                        class="ginput_container ginput_container_checkbox"
                                    >
                                        <ul
                                            class="gfield_checkbox"
                                            id="input_1_10"
                                        >
                                            <li class="gchoice_1_10_1">
                                                <input
                                                    name="Preferred_day_of_week"
                                                    type="checkbox"
                                                    value="M"
                                                    id="choice_1_10_1"
                                                />
                                                <label
                                                    for="choice_1_10_1"
                                                    id="label_1_10_1">M</label
                                                >
                                            </li>
                                            <li class="gchoice_1_10_2">
                                                <input
                                                    name="Preferred_day_of_week"
                                                    type="checkbox"
                                                    value="T"
                                                    id="choice_1_10_2"
                                                />
                                                <label
                                                    for="choice_1_10_2"
                                                    id="label_1_10_2">T</label
                                                >
                                            </li>
                                            <li class="gchoice_1_10_3">
                                                <input
                                                    name="Preferred_day_of_week"
                                                    type="checkbox"
                                                    value="W"
                                                    id="choice_1_10_3"
                                                />
                                                <label
                                                    for="choice_1_10_3"
                                                    id="label_1_10_3">W</label
                                                >
                                            </li>
                                            <li class="gchoice_1_10_4">
                                                <input
                                                    name="Preferred_day_of_week"
                                                    type="checkbox"
                                                    value="Th"
                                                    id="choice_1_10_4"
                                                />
                                                <label
                                                    for="choice_1_10_4"
                                                    id="label_1_10_4">Th</label
                                                >
                                            </li>
                                            <li class="gchoice_1_10_5">
                                                <input
                                                    name="Preferred_day_of_week"
                                                    type="checkbox"
                                                    value="F"
                                                    id="choice_1_10_5"
                                                />
                                                <label
                                                    for="choice_1_10_5"
                                                    id="label_1_10_5">F</label
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li
                                    id="field_1_5"
                                    class="gfield field_sublabel_below field_description_below gfield_visibility_visible"
                                >
                                    <label class="gfield_label" for="input_1_5"
                                        >How did you hear about us?</label
                                    >
                                    <div
                                        class="ginput_container ginput_container_select"
                                    >
                                        <select
                                            name="How_did_you_hear_about_us"
                                            id="input_1_5"
                                            class="large gfield_select form-control"
                                            aria-invalid="false"
                                        >
                                            <option value="" />
                                            <option value="Search Engine"
                                                >Search Engine</option
                                            >
                                            <option value="Friend/Family"
                                                >Friend/Family</option
                                            >
                                            <option value="Advertisement"
                                                >Advertisement</option
                                            >
                                            <option value="Facebook"
                                                >Facebook</option
                                            >
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </li>
                                <li
                                    id="field_1_6"
                                    class="gfield field_sublabel_below field_description_below gfield_visibility_visible"
                                >
                                    <label class="gfield_label" for="input_1_6"
                                        >Comments/Questions</label
                                    >
                                    <div
                                        class="ginput_container ginput_container_textarea"
                                    >
                                        <textarea
                                            name="Comments/questions"
                                            id="input_1_6"
                                            class="textarea medium form-control"
                                            aria-invalid="false"
                                            rows="10"
                                            cols="50"
                                        />
                                    </div>
                                </li>
                                <li
                                    id="field_1_11"
                                    class="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible"
                                >
                                    <label class="gfield_label" for="input_1_11"
                                        >Address</label
                                    >
                                    <div class="ginput_container">
                                        <input
                                            id="input_1_11"
                                            type="text"
                                            value=""
                                            class="form-control"
                                        />
                                    </div>
                                    <div
                                        class="gfield_description"
                                        id="gfield_description_1_11"
                                    >
                                        This field is for validation purposes
                                        and should be left unchanged.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="gform_footer top_label">
                            <button
                                class="btn btn-default"
                                id="gform_submit_button_62a10295e13a5"
                                ><span>Submit</span></button
                            >
                            <input
                                type="hidden"
                                value="form_id=1&amp;title=&amp;description=1&amp;tabindex=0"
                            />
                            <input
                                type="hidden"
                                class="gform_hidden"
                                value="1"
                            />
                            <input
                                type="hidden"
                                class="gform_hidden"
                                value="1"
                            />
                            <input
                                type="hidden"
                                class="gform_hidden"
                                value=""
                            />
                            <input
                                type="hidden"
                                class="gform_hidden"
                                value="WyJbXSIsIjAyMWRkOWI4MTg2NjQ4MTdmYmRjOTI3OWM4ZThmYzFkIl0="
                            />
                            <input
                                type="hidden"
                                class="gform_hidden"
                                id="gform_target_page_number_1"
                                value="0"
                            />
                            <input
                                type="hidden"
                                class="gform_hidden"
                                id="gform_source_page_number_1"
                                value="1"
                            />
                            <input type="hidden" value="" />
                        </div>
                        <input type="hidden" value="62a10295e13a5" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> -->
<div class="top-level row">
    <main class={$page.url.pathname.length > 1 ? "" : "home"}>
        {#if $page.url.pathname.length > 1}
          <Breadcrumb pathname={$page.url.pathname} />
        {/if}
        <slot />
    </main>
    {#if $page.url.pathname.length > 1}
        <!-- Don't show sidebar on main page -->
        <Sidebar />
    {/if}
</div>

<div class={"accessibility-container special-position" + (accessibilityContainerOpen ? " open" : "")}>
    <div on:click={largerText} on:keydown={(e)=>{if(e.key==="Enter")largerText}}>+</div>
    <div on:click={smallerText} on:keydown={(e)=>{if(e.key==="Enter")smallerText}}>-</div>
    <div class="wheelchair">
        <img
            on:click={() =>
                (accessibilityContainerOpen = !accessibilityContainerOpen)} 
            on:keydown={(e)=>{if(e.key==="Enter")(accessibilityContainerOpen = !accessibilityContainerOpen)}}
            src="/src/lib/assets/images/accessible-white.png"
            alt="Open Accessibility Panel"
        />
    </div>
</div>

<!-- Footer -->
<footer id="footer">
    <div class="inner">
        <div class="row">
            <div class="social-media">
                <a class="link" href="https://facebook.com">
                    <img
                        src="/src/lib/assets/images/facebook-square-brands.svg"
                        alt="Facebook"
                    />
                </a>
                <a class="link" href="https://twitter.com">
                    <img
                        src="/src/lib/assets/images/twitter-square-brands.svg"
                        alt="Twitter"
                    />
                </a>
                <a class="link" href="https://pinterest.com">
                    <img
                        src="/src/lib/assets/images/pinterest-square-brands.svg"
                        alt="Pinterest"
                    />
                </a>
            </div>
            <address>
                <a class="link"
                    href="https://www.google.com/maps/place/Dillman+Facial+and+Oral+Surgery/@47.7506556,-116.7851645,17z/data=!4m5!3m4!1s0x5361c0df1c4bb8a9:0x8e04f02af49a455f!8m2!3d47.7509533!4d-116.7848188"
                >
                    <i class="fas fa-map-marked-alt" />
                    Dillman Facial and Oral Surgery<br />
                    4123 W Yellen St,<br />
                    Paysville, ID 10529
                </a>
            </address>
            <div>
                <i class="fas fa-phone-alt" />
                <span class="phone">
                    <a class="link" href="tel:208-512-2957"> 208-512-2957 </a>
                </span>
                <span class="not-phone">208-512-2957</span>
                <!-- <span class="link"
                    on:click={() => ($requestAppointmentOpen = true)}
                    on:keydown={(e)=>{if(e.key==="Enter")($requestAppointmentOpen = true)}}
                    >Request an Appointment</span
                > -->
            </div>
        </div>
        <div class="copyright">
            <a class="link" href="/" style="text-decoration:none;color:#d0d0d0">
                &copy; <span id="date">{new Date().getFullYear()}</span> Dillman
                Facial and Oral Surgery. All rights reserved.
            </a>
        </div>
        <div class="column">
            <a class="link" href="mailto:rob@dillmanoralsurgery.com">
                rob@dillmanoralsurgery.com
            </a>
        </div>
    </div>
</footer>
