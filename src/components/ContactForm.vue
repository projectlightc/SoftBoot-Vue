<template>
    <section class="section-contact-form container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-xs-7 contact-form">
                <div class="contact-form-title">
                    <span>Готовы пообщаться ?</span>
                </div>
                <div class="contact-form__form">
                    <form action="#" method="#" id="contact-form">
                        <div class="row">
                            <div class="form-group col-md-4 name">
                                <input type="text" placeholder="Имя">
                            </div> 
                            <div class="form-group col-md-5 phone">
                                <input type="tel" placeholder="Телефон">
                            </div>
                            <div class="form-group col-md-4 button">
                                <button class="contact-button">Общаться</button>
                            </div>
                            <div class="form-group col-md-4 icons">
                               <span class="facebook">
                                   <a href="#"><img src="../assets/images/facebook.png" alt="facebook"></a>
                               </span>
                               <span class="linkedin">
                                   <a href="#"><img src="../assets/images/linkedin.png" alt="linkedin"></a>
                               </span>
                               <span class="instagram">
                                   <a href="#"><img src="../assets/images/instagram.png" alt="instagram"></a>
                               </span>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                <div class="col-md-4 col-xs-4 image">
                    <div class="contact-form-corner">
                        <div class="corner-top">Soft</div>
                        <div class="corner-bottom">Boost</div>
                    </div>
                    <!-- <div class="contact-form-image">
                        <img src="../assets/images/black-2.png" alt="soft-boost">
                        <img src="../assets/images/Rectangle_20.png" alt="soft-boost">
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .section-contact-form { 
        padding: 60px 172px 72px 61px;
        background-color: #2E3A59;
        background-image: url('../assets/images/Vector2.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .contact-form-title {
        font-family: Zilla Slab;
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        color: #FFFFFF;        
    }

    .contact-form__form { 
        margin-top: 60px;
    }

    .button { 
        margin-top: 20px;
    }
    .contact-button { 
        padding: 15px 80px;
        background-color: #F5DF4D;
        border: 1px solid #F5DF4D;
        border-radius: 0;
    }

    .icons { 
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    .icons span { 
        margin-right: 34px;
    }

    input[type="text"] {
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #fff;
        padding-bottom: 6px;
        width: 100%;
    }

    input[type="tel"] {
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #fff;
        padding-bottom: 6px;
        width: 80%;
    }

    ::placeholder {
        color: #fff;
    }
</style>
