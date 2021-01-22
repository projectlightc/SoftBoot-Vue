<template>
    <header class="header">
        <div class="haeder-section-container container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-xs-2 logo">лого</div>
                    <div class="col-md-10 col-xs-10 menu">
                        <nav class="navbar navbar-expand-md sticky-top">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <span class="navbar-toggler-icon"></span>
                            </button>

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
                                <button class="btn talk-button">Пообщаемся ?</button>
                            </div>
                           
                        </nav>
                    </div>
                    <!-- <div class="col-md-3 col-xs-3">
                       
                    </div> -->
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
        padding: 13px 75px;
        background-color: #C4C4C4;
        border: 1px solid #C4C4C4;
        border-radius: 0;
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
</style>
