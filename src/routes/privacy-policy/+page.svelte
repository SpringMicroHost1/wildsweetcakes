<script>
    import privacyPolicy from "$lib/assets/images/privacy-policy.jpg";
</script>
<svelte:head>
    <title>Privacy Policy | Wild Sweet Cakes</title>
    <meta
        name="description"
        content="We value our patients' privacy, both inside and outside the office.
            We keep your information safe and secure."
    />
</svelte:head>
<div class="mostly-full column">
    <h1 class="page-header">Privacy Policy</h1>
    <p>
        We value our patients' privacy, both inside and outside the office.
    </p>
    <div class="paragraph-img-wrap">
        <div
            class="wrap-front-img"
            style={`background-image: url('${privacyPolicy}'); background-position: center 50%`}
        />
        <p>
            We keep your information safe and secure. Call our agents at
            <strong class="non-breaking">
                <i class="fas fa-phone-alt" />
                <span class="phone">
                    <a class="link" href="tel:208-964-1707">208-964-1707 </a>
                </span>
                <span class="not-phone">208-964-1707</span>
            </strong>
            if you have any questions.
        </p>
    </div>
</div>