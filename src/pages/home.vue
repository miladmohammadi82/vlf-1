<template>
    <div class="container-fluid-lg">
        <!-- Header -->
        <Header />
        <!-- End Header -->

        <!-- Main -->
        <main class="main">
            <!-- Container -->
            <div class="container-fluid-lg">

                <!-- Services Box -->
                <services-box />
                <!-- End Services Box -->

                <!-- Slider -->
                <slider class="mb-5" />
                <!-- End Slider -->

                <!-- New Cources -->
                <new-courses />
                <!-- End New Cources -->

                <!-- Best Teacher -->
                <best-teacher />
                <!-- End Best Teacher -->

                <!-- Posts -->
                <posts />
                <!-- End Posts -->

                <!-- Newsletter -->
                <newsletter />
                <!-- End Newsletter -->

            </div>
            <!-- End Container -->
        </main>
        <!-- End Main -->

        <!-- Footer -->
        <Footer />
        <!-- End Footer -->
    </div>
</template>

<script>

    // Import Sections
    import Header from "../components/sections/header";
    import ServicesBox from "../components/sections/services-box";
    import newCourses from "../components/sections/new-cources";
    import bestTeacher from "../components/sections/best-teacher";
    import Posts from "../components/sections/posts";
    import Footer from "../components/sections/footer";

    import slider from "../components/slider/slider.vue";
    import Newsletter from "../components/newsletter.vue";

    export default {
        name: "Home",
        components: {
            Header,
            ServicesBox,
            newCourses,
            bestTeacher,
            Posts,
            Footer,
            slider,
            Newsletter,
        },
    };
</script>
