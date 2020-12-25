<template>
    <div class="container-fluid-lg">
        <Header />
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/sections/header";
    import Footer from "../components/sections/footer";
    export default {
        name: "PostSingle",
        components: {
            Header,
            Footer,
        },
    };
</script>
