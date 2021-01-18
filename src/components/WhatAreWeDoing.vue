<template>
<section class="section-what-have-we-do-container container-fluid">
    
    <div class="info-container">
        <div class="info-title container">
             <h2>Что мы делаем?</h2>
        </div>
        <div class="sites">
            <div class="container-site container">
                <div class="sites-score-1">01.</div>
                <div class="sites-title title">Сайты</div>
                <div class="sites-description des">
            Создание дизайна, фирменного стиля, всевозможных логотипов и, конечно, разработка. На Тильде или ВордПресс — выбор всегда остаётся за вами.
                </div>
            </div>
        </div>
        <div class="mobile_app">
            <div class="container-mobile_app container">
                <div class="mobile_app-score-2">02.</div>
                <div class="mobile_app-title title">Мобильные приложения</div>
                <div class="mobile_app-description des">
                    Ищите решение для смартфонов? Приложение для фитнеса, или площадка для продажи в онлайне? Мы сможем найти точки соприкосновения в каждой нише.
                </div>
            </div>
            <div class="border"></div>
        </div>
        <div class="web_app">
            <div class="container-web_app container">
                <div class="web_app-score-3">03.</div>
                <div class="web_app-title title">Веб - приложения</div>
                <div class="web_app-description des">
                    Платформа для онлайн обучения? Или альтернативу тиндеру?
                    Мы создадим для вас то, что вам нужно, вкладывая туда свои знания и часть души.
                </div>
            </div>
        </div>
    </div>
  
</section>

</template>

<script>
export default {
  name: 'WhatAreWeDoing',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .container-fluid { 
        padding: 0;
    }

    .info-title h2 { 
        margin-bottom: 60px;
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 72px;
        color: #2E3A59;
    }

    .des { 
        max-width: 500px;
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 124.5%;
        letter-spacing: 0.015em;
        color: #2E3A59;
    }
    .sites { 
        padding: 40px 173px;
        background-color: #F5DF4D;
    }

    .title {
        max-width: 75px;
    }

    .border { 
        border: 1px solid #ddd;
        margin-top: 40px;
    }

    .mobile_app, .web_app { 
        padding: 40px 173px;
    }

    .container-site {
        display: flex;
        justify-content: space-between;
    }

    .sites-score-1 {
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59;       
    }

    .sites-title { 
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59;
    }
    
    .container-mobile_app { 
        display: flex;
        justify-content: space-between;
    }

    .mobile_app-score-2 {
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59;       
    }

    .mobile_app-title { 
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59;
    }

    .container-web_app { 
        display: flex;
        justify-content: space-between;
    }

    .web_app-score-3 {
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59;       
    }

    .web_app-title { 
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59;
    }
</style>
