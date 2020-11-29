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
                    
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import btnWarnOut from "../components/buttons/warning/outline.vue";
    import btnPrimeOut from "../components/buttons/primary/outline.vue";
    import btnPrimeFlat from "../components/buttons/primary/flat.vue";
    import btnSccssFlat from "../components/buttons/success/flat.vue";
    import courseCard from "../components/course-card";
    import Title from "../components/title";
    import slider from "../components/slider/slider.vue";
    import CourseCard from "../components/course-card.vue";
    import bestTeacher from "../components/sections/best-teacher";

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
        },
    };
</script>
