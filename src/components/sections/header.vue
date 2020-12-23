<template>
    <header class="mt-4">
        <transition name="canav">
            <div class="canav" v-if="sideMenuOpen || userMenuOpen" @click="close()"></div>
        </transition>
        <div class="d-flex ml-auto justify-content-lg-around head">
            <div class="ml-3">
                <h2>LOGO</h2>
            </div>

            <div class="mobile">
                <div class="search"><i class="far fa-search"></i></div>
                <div class="user" @click="userMenuOpen = !userMenuOpen"><i class="far fa-user"></i></div>
                <div class="hamberger" @click="sideMenuOpen = !sideMenuOpen"><i class="far fa-bars"></i></div>
            </div>

            <transition name="menu-side">
                <div :class="['sidebar-menu', { 'menu-side-open': sideMenuOpen }]" v-if="sideMenuOpen">
                    <div class="close-side" @click="sideMenuOpen = !sideMenuOpen"><i class="fas fa-times"></i></div>
                </div>
            </transition>

            <transition name="user-side">
                <div :class="['sidebar-user', { 'user-side-open': userMenuOpen }]" v-if="userMenuOpen">
                    <div class="close-side" @click="userMenuOpen = !userMenuOpen"><i class="fas fa-times"></i></div>
                </div>
            </transition>

            <nav class="d-flex nav">
                <li v-for="nav in navs" :key="nav.title" v-text="nav.title"></li>
                <li><btn-dang-out>مدرس شوید !</btn-dang-out></li>
            </nav>

            <div class="logr d-flex align-items-lg-center">
                <btn-prime-flat class="fas fa-search search-btn ml-2"></btn-prime-flat>
                <btn-prime-flat style="border-bottom: 2px solid #023e8a;">ثبت نام</btn-prime-flat>
                <btn-sccss-flat style="border-bottom: 2px solid #0ead69;" class="mr-3">ورود</btn-sccss-flat>
            </div>
        </div>

        <div class="row container-fluid header-2">
            <div class="col-lg-6 d-flex flex-column justify-content-center head-center">
                <h1>با ویرولرن</h1>
                <h2 class="mt-3">لحظه ای از تکنولوژی عقب نمانید !</h2>
                <p class="mt-3 head-p">آموزش آنلاین توسط بهترین اساتید برای ساخت آینده کاری شما و تضمین یادگیری شما در ویرولرن</p>
                <div class="buttons mt-5">
                    <btn-warn-out>از دوره های ما دیدن کنید</btn-warn-out>
                    <btn-prime-out>از فروشگاه ما دیدن کنید</btn-prime-out>
                </div>
            </div>

            <div class="col-lg-6">
                <img src="../../assets/svg/online-course.svg" alt="Online Course SVG" draggable="false" class="d-none d-sm-block col-sm-12 mt-5" />
            </div>
        </div>
    </header>
</template>

<script>
    import btnPrimeFlat from "../buttons/primary/flat";
    import btnPrimeOut from "../buttons/primary/outline";
    import btnWarnOut from "../buttons/warning/outline";
    import btnSccssFlat from "../buttons/success/flat";
    import btnDangOut from "../buttons/danger/outline";
    export default {
        name: "Header",
        components: {
            btnPrimeFlat,
            btnPrimeOut,
            btnWarnOut,
            btnSccssFlat,
            btnDangOut,
        },
        data() {
            return {
                sideMenuOpen: false,
                userMenuOpen: false,
                navs: [
                    {
                        title: "صفحه اصلی",
                        link: "#",
                    },
                    {
                        title: "وبلاگ",
                        link: "#",
                    },
                    {
                        title: "درباره ما",
                        link: "#",
                    },
                    {
                        title: "تماس باما",
                        link: "#",
                    },
                ],
            };
        },
        methods: {
            close() {
                if (this.sideMenuOpen) {
                    return (this.sideMenuOpen = false);
                }
                return (this.userMenuOpen = false);
            },
        },
    };
</script>
