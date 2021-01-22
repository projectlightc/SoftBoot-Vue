<template>
    <section class="section-what-have-we-do-container container-fluid">
        <div class="info-container">
            <div class="info-title container">
                <h2>Что мы делаем?</h2>
            </div>
            <div data-aos="example-anim2" class="sites">
                <div class="container-site container">
                    <div class="sites-counter-title">
                        <div class="sites-score-1">01.</div>
                        <div class="sites-title title">Сайты</div>
                    </div>
                    <div class="sites-description des">
                        Создание дизайна, фирменного стиля, всевозможных логотипов и, конечно, разработка. На Тильде или ВордПресс — выбор всегда остаётся за вами.
                    </div>
                </div>
            </div>
            <div data-aos="example-anim2" class="mobile_app">
                <div class="container-mobile_app container">
                    <div class="mobile-app-counter-title">
                        <div class="mobile_app-score-2">02.</div>
                        <div class="mobile_app-title title">Мобильные приложения</div>
                    </div>
                    <div class="mobile_app-description des">
                        Ищите решение для смартфонов? Приложение для фитнеса, или площадка для продажи в онлайне? Мы сможем найти точки соприкосновения в каждой нише.
                    </div>
                </div>
            </div>
            <div data-aos="example-anim2" class="web_app">
                <div class="container-web_app container">
                    <div class="web-app-counter-title">
                        <div class="web_app-score-3">03.</div>
                        <div class="web_app-title title">Веб - приложения</div>
                    </div>
                    <div class="web_app-description des">
                        Платформа для онлайн обучения? Или альтернативу тиндеру? Мы создадим для вас то, что вам нужно, вкладывая туда свои знания и часть души.
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

    [data-aos="example-anim2"] { 
        padding: 40px 0px;
        background-color: #fff;
    }

    [data-aos="example-anim2"].aos-animate {
        background-color: #F5DF4D;
        border-bottom: 1px solid #ddd;
        padding-bottom: 40px;
    }

    .title {
        max-width: 75px;
    }

    .border { 
        border: 1px solid #ddd;
        margin-top: 40px;
    }

    .mobile_app, .web_app { 
        padding: 40px 0;
    }

    .container-site {
        display: flex;
        justify-content: space-between;
    }

    .sites-counter-title,
    .mobile-app-counter-title,
    .web-app-counter-title {
        display: flex;
    }

    .sites-score-1 {
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59; 
        width: 82px;
        margin-right: 32px;      
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
        width: 82px;
        margin-right: 32px;     
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
        width: 82px;
        margin-right: 32px;       
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
