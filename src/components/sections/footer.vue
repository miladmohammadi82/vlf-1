<template>
    <footer class="footer mt-5 pt-5">
        <button class="top-button mx-auto" @click="backToTop">
            <i class="far fa-angle-up"></i>
        </button>
        <div class="container-fluid">
            <div class="row mt-5 pt-3 mx-auto">
                <div class="col-lg-4 infos">
                    <img src="../../assets/svg/video-cources.svg" alt="video cource logo" />
                    <ul>
                        <li>5 دوره</li>
                        <li>تعداد دوره ها</li>
                    </ul>
                </div>

                <div class="col-lg-4 infos">
                    <img src="../../assets/svg/cap-student.svg" alt="student cap" />
                    <ul>
                        <li>180 دانشجو</li>
                        <li>تعداد دانشجویان</li>
                    </ul>
                </div>

                <div class="col-lg-4 infos">
                    <img src="../../assets/svg/articles.svg" alt="articles count" />
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
                        <img src="../../assets/img/enamad.png" alt="نماد اعتماد تجارت الکترونیک (اینماد)" />
                        <img src="../../assets/img/samandehi.png" alt="نماد ساماندهی" />
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div class="copyright d-flex justify-content-between">
        <p style="color: #404040;">هر گونه کپی برداری از دوره ها و مطالب سایت و  تکثیر و انتشار آن، غیر قانونی بوده و موجب نارضایتی دنیوی و اخروی صاحب اثر می باشد. ©</p>

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
</template>

<script>
    import scrollTop from "../../js/assist";
    import social from "../buttons/socials/social";
    export default {
        name: "Footer",
        components: {
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
