<template>
    <header class="header">
        <div class="haeder-section-container container-fluid">
            <div class="container">
                <div class="row">
                    <nav class="navbar navbar-expand-md sticky-top">
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
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Главная</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">О нас</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Почему мы?</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Как работаем?</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Контакты</a>
                                    </li>
                                </ul>
                                <button type="button" class="btn talk-button" data-toggle="modal" data-target="#exampleModal">Пообщаемся ?</button>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="modal-title">
                                            <h5 id="exampleModalLabel">Оставьте контакты<br> и мы с вами свяжемся</h5>
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
                                                    <button class="btn btn-send">Отправить</button>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header { 
        padding: 25px 0 25px 0;
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

</style>
