<template>
  <div class="d-flex align-items-center">
      <div class="container">
        <div class="justify-content-center fade-in-y forgot row">
            <div class="content-register-box mt-5 row">
                <div class="col-lg-8">
                    <form action="" class="content-form-register row">
                        <div class="input-field-box col-md-6 col-sm-12 col-xs-12">
                            <div class="input-field-register">
                                <input type="text">
                                <label for=""><i class="fas fa-user"></i>&nbsp;&nbsp;نام</label>
                            </div>
                        </div>
                        <div class="input-field-box col-md-6 col-sm-12 col-xs-12">
                            <div class="input-field-register">
                                <input type="text">
                                <label for=""><i class="fas fa-user"></i>&nbsp;&nbsp;نام کاربری</label>
                            </div>
                        </div>
                        <div class="input-field-box col-md-12 col-sm-12 col-xs-12">
                            <div class="input-field-register">
                                <input type="text">
                                <label for=""><i class="fas fa-at"></i>&nbsp;&nbsp;ایمیل</label>
                            </div>
                        </div>
                        <div class="input-field-box col-md-6 col-sm-12 col-xs-12">
                            <div class="input-field-register">
                                <input type="text">
                                <label for=""><i class="fas fa-lock-alt"></i>&nbsp;&nbsp;رمز عبور</label>
                            </div>
                        </div>
                        <div class="input-field-box col-md-6 col-sm-12 col-xs-12">
                            <div class="input-field-register">
                                <input type="text">
                                <label for=""><i class="fas fa-lock-alt"></i>&nbsp;&nbsp;تکرار رمز عبور</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4 left-register-box">
                    <ul>
                        <li>
                            <div class="title-left-register-box">
                                <h2 class="d-flex justify-content-center pt-4">ثبت نام</h2>
                                <p class="d-flex pt-3 justify-content-center">برای دسترسی به تمامی بخش های این وبسایت لفا ثبت نام کنید !</p>
                            </div>
                        </li>
                        <li>
                            <div class="image-svg">
                                <img :src="img" alt="">
                            </div>
                        </li>
                    </ul>
                   
                   
                   
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "register-page",
    data(){
        return{
            img: require('../../assets/img/vectors/Login-rafiki.svg')
        }
    }
}
</script>

<style>

</style>