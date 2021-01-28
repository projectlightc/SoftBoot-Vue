<template>
    <section class="section-what-have-we-do-container container-fluid" id="item_2">
        <div class="info-container">
            <div class="info-title container">
                <h2>{{ $t('info_title') }}</h2>
            </div>
            <div data-aos="example-anim2" class="sites">
                <div class="container-site container">
                    <div class="sites-counter-title">
                        <div class="sites-score-1">{{ $t('info_site_score') }}</div>
                        <div class="sites-title title">{{ $t('info_site_title') }}</div>
                    </div>
                    <div class="sites-description des"> {{ $t('info_site_description') }} </div>
                </div>
            </div>
            <div data-aos="example-anim2" class="mobile_app">
                <div class="container-mobile_app container">
                    <div class="mobile-app-counter-title">
                        <div class="mobile_app-score-2">{{ $t('mobile_app_score') }}</div>
                        <div class="mobile_app-title title">{{ $t('mobile_app_title') }}</div>
                    </div>
                    <div class="mobile_app-description des">{{ $t('mobile_app_description') }}</div>
                </div>
            </div>
            <div data-aos="example-anim2" class="web_app">
                <div class="container-web_app container">
                    <div class="web-app-counter-title">
                        <div class="web_app-score-3">{{ $t('web_app_score') }}</div>
                        <div class="web_app-title title">{{ $t('web_app_title') }}</div>
                    </div>
                    <div class="web_app-description des">{{ $t('web_app_description') }}</div>
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
  },
  data: function() {
      return {
          info_title: 'Что мы делаем ?',
          info_site_score: '01.',
          info_site_title: 'Сайты',
          info_site_description: 'Создание дизайна, фирменного стиля, всевозможных логотипов и, конечно, разработка. На Тильде или ВордПресс — выбор всегда остаётся за вами.',
          // данные для mobile_app блока
          mobile_app_score: '02.',
          mobile_app_title: 'Мобильные приложения',
          mobile_app_description: 'Ищите решение для смартфонов? Приложение для фитнеса, или площадка для продажи в онлайне? Мы сможем найти точки соприкосновения в каждой нише.',
          // данные для web_app блока
          web_app_score: '03.',
          web_app_title: 'Веб - приложения',
          web_app_description: 'Платформа для онлайн обучения? Или альтернативу тиндеру? Мы создадим для вас то, что вам нужно, вкладывая туда свои знания и часть души.'
      };
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
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 72px;
        color: #2E3A59;
    }

    .des { 
        max-width: 500px;
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
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59; 
        width: 82px;
        margin-right: 32px;      
    }

    .sites-title { 
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
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59; 
        width: 82px;
        margin-right: 32px;     
    }

    .mobile_app-title { 
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
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59;
        width: 82px;
        margin-right: 32px;       
    }

    .web_app-title { 
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59;
    }
</style>
