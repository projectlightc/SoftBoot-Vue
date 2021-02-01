<template>
  
<footer class="footer-section-contact-form container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-7 col-xs-7 contact-form">
                <div class="contact-form-title">
                    <span>{{ $t('footer_cf_title') }}</span>
                </div>
                <div class="contact-form__form">
                    <form action="#" method="#" id="contact-form">
                        <div class="row">
                            <div class="form-group col-md-4 name">
                                <input type="text" :placeholder="$t('footer_placeholder_cf_name')">
                            </div> 
                            <div class="form-group col-md-5 phone">
                                <input type="tel" :placeholder="$t('footer_placeholder_cf_number')">
                            </div>
                            <div class="form-group col-md-5 button">
                                <button class="contact-button">{{ $t('footer_cf_button') }}</button>
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
                    <span class="connection">{{ $t('connection_1') }}<span class="yellow">{{ $t('connection_2') }}</span>{{ $t('connection_3') }}</span>
                    <span class="call">+38 (063) 999 99 99</span>
                    <span class="email">soft.boost@gmail.com</span>
                </div>
            </div>
            <div class="contact-form-bottom-text">
                <div class="confident">
                    <span>{{ $t('confident_text') }}</span>
                </div>
                <div class="softboot">
                    <span>{{ $t('softboot') }}</span>
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
  },
  data: function() {
      return {
          footer_cf_title: 'Готовы пообщаться ?',
          footer_placeholder_cf_name: 'Имя',
          footer_placeholder_cf_number: 'Телефон',
          footer_cf_button: 'Перезвоните мне',
          // info block 
          connection_1: 'Мы ',
          connection_2: ' всегда',
          connection_3: ' на связи',
          // confident
          confident_text: 'Политика конфеденциальности',
          softboot: '© “Soft Boost”. Все права защищены'

      };
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
        padding: 15px 65px;
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

    .yellow { 
        color: #F5DF4D;
    }

    ::placeholder {
        color: #fff;
    }
</style>
