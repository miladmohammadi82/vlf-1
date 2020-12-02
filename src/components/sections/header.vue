<template>
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

            <div class="col-lg-6">
                <img src="../../assets/svg/online-course.svg" alt="Online Course SVG" draggable="false" class="d-none d-sm-block">
            </div>
        </div>
    </header>
</template>

<script>
    import btnPrimeFlat from "../buttons/primary/flat";
    import btnPrimeOut from "../buttons/primary/outline";
    import btnWarnOut from "../buttons/warning/outline";
    import btnSccssFlat from "../buttons/success/flat";
    export default {
        name: "Header",
        components: {
            btnPrimeFlat,
            btnPrimeOut,
            btnWarnOut,
            btnSccssFlat,
        },
    };
</script>
