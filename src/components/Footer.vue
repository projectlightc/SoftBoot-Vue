<template>
  
<footer class="footer-section-contact-form container-fluid">
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
                            <div class="form-group col-md-5 button">
                                <button class="contact-button">Перезвоните мне</button>
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
            <div class="col-md-5 col-xs-5 info">
                <div class="contact-form-info">
                    <span class="connection">Мы <span class="yellow">всегда</span> на связи</span>
                    <span class="call">+38 (063) 999 99 99</span>
                    <span class="email">soft.boost@gmail.com</span>
                </div>
            </div>
            <div class="contact-form-bottom-text">
                <div class="confident">
                    <span>Политика конфеденциальности</span>
                </div>
                <div class="softboot">
                    <span>© “Soft Boost”. Все права защищены</span>
                </div>
            </div>
        </div>
    </div>
</footer>
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
    footer { 
        padding: 60px 10px;
        background-color: #2E3A59;
    }

    .contact-form-info { 
        display: flex;
        flex-direction: column;
    }

    .contact-form-title { 
        font-family: Zilla Slab;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #FFFFFF;           
    }

    .contact-form-bottom-text {
        margin-top: 140px;
        width: 90%;
        display: flex;
        justify-content: space-between;
        padding-left: 15px;
    }

    .connection { 
        font-family: Zilla Slab;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #FFFFFF;
    }

    .call { 
        margin-top: 60px; 
        font-family: Zilla Slab;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 48px;

        color: #FFFFFF;
    }

    .email {
        margin-top: 10px;
        font-family: Zilla Slab;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 48px;

        color: #FFFFFF;
    }

    .confident span { 
        font-family: Zilla Slab;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 124.5%;
        /* identical to box height, or 20px */

        letter-spacing: 0.015em;

        color: #FFFFFF;
    }

    .softboot span{ 
        font-family: Zilla Slab;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 124.5%;
        /* identical to box height, or 20px */

        letter-spacing: 0.015em;

        color: #FFFFFF;
    }

    .contact-form__form { 
        margin-top: 60px;
    }

    .button { 
        margin-top: 20px;
    }
    .contact-button { 
        padding: 15px 50px;
        background-color: #F5DF4D;
        border: 1px solid #F5DF4D;
        border-radius: 0;
    }

    .icons { 
        display: flex;
        align-items: center;
        margin-top: 20px;
        margin-left: -60px;
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
        width: 80%;
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

    .yellow { 
        color: #F5DF4D;
    }

    ::placeholder {
        color: #fff;
    }
</style>
