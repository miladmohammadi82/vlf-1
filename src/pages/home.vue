<template>
    <div>
        <div class="container-fluid-lg">
            <!-- Header -->
            <header class="mt-4">
                <div class="row ml-auto justify-content-lg-around">
                    <div class="ml-3">
                        <h2>LOGO</h2>
                    </div>
                    <nav class="d-flex nav">
                        <li>صفحه اصلی</li>
                        <li>فرانت اند <i class="fas fa-angle-down"></i></li>
                        <li>بک اند <i class="fas fa-angle-down"></i></li>
                        <li>زبان ها <i class="fas fa-angle-down"></i></li>
                        <li>رابط کاربری <i class="fas fa-angle-down"></i></li>
                        <li>گرافیک <i class="fas fa-angle-down"></i></li>
                        <li>CMS ها <i class="fas fa-angle-down"></i></li>
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

                    <div class="col-lg-6 online-course"></div>
                </div>
            </header>
            <!-- End Header -->
            <main class="main">
                <div class="container-fluid">
                    <div class="row justify-content-around services-box">
                        <!-- <div class="col-lg-3">
                            
                            <div class="service-body">
                                <div class="icon best"></div>
                                <h3>لورم ایپسوم</h3>
                            </div>
                        </div> -->

                        <!-- <div class="col-lg-3">
                            
                            <div class="service-body">
                                <h3 class="d-inline-block">
                                    لورم ایپسوم
                                </h3>
                                <div class="icon best"></div>
                            </div>
                        </div>
    
                        <div class="col-lg-3">
                            
                            <div class="service-body">
                                <h3 class="d-inline-block">
                                    لورم ایپسوم
                                </h3>
                                <div class="icon best"></div>
                            </div>
                        </div> -->
                    </div>
                    <Title>پیشنهادات ویژه</Title>
                    <slider class="mb-5"></slider>
                    <Title>جدید ترین دوره ها</Title>
                    <div class="container">
                        <div class="row mb-5">
                            <div class="col-lg-3">
                                <course-card title="حل مسائل و تمرین های الگوریتم و فلوچارت" :teacher="{ name: 'امیرحسین فضلی', link: '#' }" :image="require('../assets/img/products/algoritm.png')" link="#" price="100,000" lenght="12:00 ساعت" :special="true"></course-card>
                            </div>

                            <div class="col-lg-3">
                                <course-card title="آموزش گرافیک تبلیغاتی پیشرفته" :teacher="{ name: 'میلاد محمدی', link: '#' }" :image="require('../assets/img/products/graphic.png')" link="#" price="250,000" lenght="15:00 ساعت" :special="true"></course-card>
                            </div>

                            <div class="col-lg-3">
                                <course-card title="طراحی های خلاقانه رابط کاربری (Html, Css, JQuery)" :teacher="{ name: 'امیرحسین فضلی', link: '#' }" :image="require('../assets/img/products/html-css-jquery.png')" link="#" price="300,000" lenght="22:40 ساعت"></course-card>
                            </div>

                            <div class="col-lg-3">
                                <course-card title="برنامه نویسی شی گرا در جاوااسکریپت" :teacher="{ name: 'میلاد محمدی', link: '#' }" :image="require('../assets/img/products/javascriptOOP.png')" link="#" price="160,000" lenght="32:35 ساعت" :special="true"></course-card>
                            </div>

                            <div class="col-lg-3">
                                <course-card title="آموزش متریال بوت استرپ (mdbootstrap)" :teacher="{ name: 'امیرحسین فضلی', link: '#' }" :image="require('../assets/img/products/mdbootstrap.png')" link="#" price="200,000" lenght="18:20 ساعت"></course-card>
                            </div>

                            <div class="col-lg-3">
                                <course-card title="آموزش امنیت در php" :teacher="{ name: 'میلاد محمدی', link: '#' }" :image="require('../assets/img/products/php-security.png')" link="#" price="60,000" lenght="5:28 ساعت"></course-card>
                            </div>

                            <div class="col-lg-3">
                                <course-card title="آموزش selenium در سی شارپ از صفر تا صد" :teacher="{ name: 'امیرحسین فضلی', link: '#' }" :image="require('../assets/img/products/seleniumc-sharp.png')" link="#" price="560,000" lenght="42:32 ساعت" :special="true"></course-card>
                            </div>

                            <div class="col-lg-3">
                                <course-card title="تحلیل و پیش بینی بورس در پایتون" :teacher="{ name: 'میلاد محمدی', link: '#' }" :image="require('../assets/img/products/Stock-analysis.png')" link="#" price="750,000" lenght="58:36 ساعت" :special="true"></course-card>
                            </div>
                        </div>
                    </div>

                    <Title>مدرس برتر این هفته</Title>
                    <best-teacher></best-teacher>

                    <Title>وبلاگ ویرولرن</Title>

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <article-card title="ویژگی های جدید Asp.ne Core 5 !" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../assets/img/posts/Asp_net_core5.png')" link="#" :author="{ name: 'امیرحسین فضلی', link: '#' }" views="25,000"></article-card>
                            </div>

                            <div class="col-lg-4">
                                <article-card title="چند نکته مهم برای امنیت در شبکه های اجتماعی" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../assets/img/posts/social_network.png')" link="#" :author="{ name: 'میلاد محمدی', link: '#' }" views="55,000"></article-card>
                            </div>

                            <div class="col-lg-4">
                                <article-card title="دستیار صوتی چیست ؟" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../assets/img/posts/voice-assistant.png')" link="#" :author="{ name: 'امیرحسین فضلی', link: '#' }" views="35,000"></article-card>
                            </div>

                            <div class="col-lg-4">
                                <article-card title="5 مورد از بهترین افزونه های vscode برا توسعه دهندگان جاوااسکریپت" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../assets/img/posts/VS_Code_Extension.png')" link="#" :author="{ name: 'میلاد محمدی', link: '#' }" views="105,000"></article-card>
                            </div>

                            <div class="col-lg-4">
                                <article-card title="نکات مهم و کلیدی در طراحی لوگو" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../assets/img/posts/nmvldt-logo.png')" link="#" :author="{ name: 'امیرحسین فضلی', link: '#' }" views="83,000"></article-card>
                            </div>

                            <div class="col-lg-4">
                                <article-card title="مهم ترین تکنیک ها در سئو" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../assets/img/posts/seo.png')" link="#" :author="{ name: 'میلاد محمدی', link: '#' }" views="93,000"></article-card>
                            </div>

                            <btn-sccss-out class="mt-5 mx-auto">مشاهده همه مطالب</btn-sccss-out>
                        </div>
                    </div>
                </div>

                <newsletter></newsletter>
            </main>

            <footer class="footer mt-5 pt-5">
                <button class="top-button mx-auto" @click="backToTop">
                    <i class="far fa-angle-up"></i>
                </button>
                <div class="container-fluid">
                    <div class="row mt-5 pt-3 mx-auto">
                        <div class="col-lg-4 infos">
                            <img src="../assets/svg/video-cources.svg" alt="video cource logo" />
                            <ul>
                                <li>5 دوره</li>
                                <li>تعداد دوره ها</li>
                            </ul>
                        </div>

                        <div class="col-lg-4 infos">
                            <img src="../assets/svg/cap-student.svg" alt="student cap" />
                            <ul>
                                <li>180 دانشجو</li>
                                <li>تعداد دانشجویان</li>
                            </ul>
                        </div>

                        <div class="col-lg-4 infos">
                            <img src="../assets/svg/articles.svg" alt="articles count" />
                            <ul>
                                <li>53 مقاله</li>
                                <li>تعداد مطالب وبلاگ</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-5 pt-5">
                        <div class="col-lg-4 footer-section-1">
                            <h3>درباره ما</h3>
                            <p class="mt-3">
                                از سال 1399 شروع کرده ایم و همواره برای بالا بردن سطح دانش همه شما عزیزان، به صورت شبانه روزی تلاش میکنیم. در مجموعه ویرولرن، بهترین اساتید بهترین دوره های آموزش را برای شما میسازند و آینده کاری شما را ضمانت میکنند.
                            </p>
                            <p class="mt-3">
                                سازندگان این مجموعه، با شعار " آموزش برای همه " و با هدف تکثیر علم و دانش اساتید مجرب به همه اقشار جامعه، به فعالیت خود ادامه می دهند.
                            </p>
                        </div>

                        <div class="col-lg-4 footer-section-2">
                            <h3>دوره های آینده ما</h3>
                            <ul class="mt-3">
                                <li>آموزش پایتون مقدماتی</li>
                                <li>آموزش پایتون پیشرفته</li>
                                <li>آموزش کامل php</li>
                                <li>آموزش فریمورک django از صفر تا صد</li>
                                <li>آموزش Asp.net Core</li>
                            </ul>
                        </div>

                        <div class="col-lg-4 footer-section-3">
                            <h3>نماد ها و افتخارات</h3>
                            <div class="d-flex mt-3 justify-content-around">
                                <img src="../assets/img/enamad.png" alt="نماد اعتماد تجارت الکترونیک (اینماد)" />
                                <img src="../assets/img/samandehi.png" alt="نماد ساماندهی" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="copyright d-flex justify-content-between">
                <p style="color: #404040;">هر گونه کپی برداری از محصولات و مطالب سایت و انتشار آن در سایر مارکت ها غیر قانونی و مورد رضایت ما نمی باشد. ©</p>

                <ul class="social-networks d-flex">
                    <li>
                        <social to="" icon="fab fa-facebook"></social>
                    </li>

                    <li>
                        <social to="" icon="fab fa-twitter"></social>
                    </li>

                    <li>
                        <social to="" icon="fab fa-youtube"></social>
                    </li>

                    <li>
                        <social to="" icon="fab fa-instagram"></social>
                    </li>

                    <li>
                        <social to="" icon="fab fa-telegram-plane"></social>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import btnWarnOut from "../components/buttons/warning/outline.vue";
    import btnPrimeOut from "../components/buttons/primary/outline.vue";
    import btnPrimeFlat from "../components/buttons/primary/flat.vue";
    import btnSccssFlat from "../components/buttons/success/flat.vue";
    import btnSccssOut from "../components/buttons/success/outline.vue";
    import courseCard from "../components/course-card";
    import Title from "../components/title";
    import slider from "../components/slider/slider.vue";
    import CourseCard from "../components/course-card.vue";
    import bestTeacher from "../components/sections/best-teacher";
    import articleCard from "../components/article-card";
    import Newsletter from "../components/newsletter.vue";
    import scrollTop from "../js/assist";
    import social from "../components/buttons/socials/social";

    export default {
        name: "Home",
        components: {
            btnWarnOut,
            btnPrimeOut,
            btnPrimeFlat,
            btnSccssFlat,
            slider,
            Title,
            courseCard,
            CourseCard,
            bestTeacher,
            articleCard,
            btnSccssOut,
            Newsletter,
            social
        },
        methods: {
            backToTop() {
                const sTop = document.documentElement.scrollTop || document.body.scrollTop;
                scrollTop(window, sTop, 0);
                this.$emit("click");
            },
        },
    };
</script>
