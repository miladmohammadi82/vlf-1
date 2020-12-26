<template>
    <div>
        <Header />
        <div class="container-lg">
            <h1 class="mt-5 post-title">عنوان پست را چگونه بنویسیم؟</h1>
            <Breadcrumb class="mt-4" :items="items" :active="active" />
            <PostHeader :img="require('../assets/img/posts/vue_js.jpg')" :author="author" alt="alt post" />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/sections/header";
    import Footer from "../components/sections/footer";
    import Breadcrumb from "../components/sections/breadcrumb";
    import PostHeader from "../components/sections/post-header";
    export default {
        name: "PostSingle",
        components: {
            Header,
            Footer,
            Breadcrumb,
            PostHeader,
        },
        data() {
            return {
                items: [
                    {
                        title: "خانه",
                        link: "#"
                    },
                    {
                        title: "پست ها",
                        link: "#"
                    },
                    {
                        title: "مطالب",
                        link: "#"
                    }
                ],
                active: "چگونه breadcrumb بسازیم",
                author: {
                    name: "Amirhossein",
                    avatar: require('../assets/img/Amir-developer-avatar.jpg'),
                    link: "#"
                },
            };
        },
    };
</script>
