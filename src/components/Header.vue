<template>
    <header class="header sticky-top">
        <div class="haeder-section-container container-fluid">
            <div class="container">
                <div class="row">
                    <nav class="navbar navbar-expand-md">
                        <div class="col-md-2 col-xs-2">
                            <div class="navbar-block-button-logo">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                                            <path
                                                fill-rule="evenodd"
                                                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <div class="logo">
                                    <img src="../assets/images/softboot-logo.png" alt="softboot-logo" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 col-xs-10 menu">
                            <div class="collapse navbar-collapse" id="collapseExample">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#item_1">{{ $t('li_item_1') }}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#item_2">{{ $t('li_item_2') }}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#item_3">{{ $t('li_item_3') }}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#item_4">{{ $t('li_item_4') }}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#item_5">{{ $t('li_item_5') }}</a>
                                    </li>
                                </ul>
                                <!-- <div class="locale_switcher">
                                    <div class="en">
                                        <span class="active"><a href="#" @click="setLocale('en')" class="nav-eng">eng</a></span>
                                    </div>
                                    <div class="ru">
                                        <span><a href="#" @click="setLocale('ru')" class="nav-ru">ru</a></span>
                                    </div>
                                </div> -->
                                <div class="site-nav">
                                    <a href="#" @click="setLocale('en')" class="active">eng</a>
                                    <a href="#" @click="setLocale('ru')" class="nav-link">ru</a>
                                </div>
                                <button type="button" class="btn talk-button" data-toggle="modal" data-target="#exampleModal">{{ $t('buttonText') }}</button>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="modal-title">
                                            <h5 id="exampleModalLabel">{{ exampleModalLabel }}<br>{{ call }}</h5>
                                        </div>
                        
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="#">
                                            <div class="row">
                                                <div class="form-group col-md-12 name">
                                                    <input type="text" name="name" id="idName" placeholder="Имя">
                                                </div>
                                                <div class="form-group col-md-12 post">
                                                    <input type="text" placeholder="Почта">
                                                </div>
                                                <div class="form-group col-md-12 phone">
                                                    <input type="tel" placeholder="Телефон">
                                                </div>
                                                <div class="form-group col-md-12 button">
                                                    <button class="btn btn-send">{{ modal_btn }}</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>



<script>

export default {
  name: 'Header',
  props: {
    msg: String
  },

  methods : {
      setLocale(locale) {
          this.$i18n.locale = locale
      }
  },

  data: function () {
      return {
          li_item_1: 'Главная',
          li_item_2: 'О нас',
          li_item_3: 'Почему мы?',
          li_item_4: 'Как работаем?',
          li_item_5: 'Контакты',
          buttonText: 'Пообщаемся ?',
          exampleModalLabel: 'Оставьте контакты',
          call: 'и мы с вами свяжемся',
          modal_btn: 'Отправить',
          isActive: false
      };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header { 
        padding: 25px 0 25px 0;
        background: #fff;
    }

    .logo { 
        width: 110px;
        height: 64px;
    }

    .talk-button { 
        padding: 15px 66px;
        background-color: #F5DF4D;
        border: 1px solid #F5DF4D;
        border-radius: 0;
    }

    /* .menu { 
        display: flex;
        justify-content: center;
        align-items: center;
    } */

    .nav-link {
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: #2E3A59;
    }

    .navbar-expand-md .navbar-nav .nav-link {
        padding-right: 1.87rem;
    }

    .button[data-v-61dd7a3d] {
        background: #fff;
        border: none;
    }

     .navbar-block-button-logo {
        display: flex;
    }

    .btn-send {
        padding: 10px 77px;
        background-color: #F5DF4D;
    }

    .form-group{
        display: flex;
        justify-content: center;
    }

    .modal-header {
        border: none;
    }

    .modal-title {
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    input[type="tel"] {
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #374567;
        padding-bottom: 6px;
    }

    input[type="text"] {
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #374567;
        padding-bottom: 6px;
    }

    ::placeholder {
        color: #374567;
    }

    .button {
        margin-top: 66px;
    }

    .site-nav .active { 
        background-color: #F5DF4D;
    }

    .site-nav .active,
    .site-nav .active:focus,
    .site-nav .nav-link:focus { 
        background: red;
    }

    /* .locale_switcher {
        width: 80px;
        height: 26px;
        display: flex;
        justify-content: space-around;
        margin-right: 60px;
        border: 1px solid #cdcdcd;
    }

    .en span a { 
        text-decoration: none;
        color: #000;
    }

    .ru span a {
        text-decoration: none;
        color: #000;
    }

    .nav-eng {
        border-right: 1px solid #cdcdcd;
    }

    .nav-eng,
    .nav-ru {
        padding: 3px 10px;
    }

    .nav-eng:hover,
    .nav-ru:hover {
        background: #F5DF4D;
    }

    span.active > a,
    span.active > a:focus {
        background: #F5DF4D;
    }

    .nav-eng:active,
    .nav-ru:active {
        background: #F5DF4D;
        } */
    /* .nav-link {
        display: inline-block;
        margin-right: 20px;
        color: #000;
        font-weight: 600;
        font-size: 1.1em;
        line-height: 1.3;
        text-decoration: none;
    }
    .nav-link:hover, .nav-link:focus {
        color: #be790d;
        border-bottom: 10px solid rgba(190, 121, 13, 0.3);
    }
    .nav-link:active {
        border-bottom: 20px solid rgba(190, 121, 13, 0.3);
    } */

</style>
