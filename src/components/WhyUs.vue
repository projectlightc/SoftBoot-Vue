<template>
<section class="section-why-us container-fluid" id="item_4">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xs-6 why-us">
                <div class="why-us-title">
                    <h2>{{ $t('why_us_title') }}</h2>
                </div>
                <div class="why-us-image">
                    <img src="../assets/images/Checkmark.png" alt="why-us">
                </div>
                <div data-aos="zoom-in" class="pink-blur-container"></div>
                <div data-aos="zoom-down" class="blue-blur-container"></div>
            </div>
            <div class="col-md-6 col-xs-6 inner-section">
                <div class="inner-section item">
                    <div class="calendar-icon icon">
                        <div class="item-icon">
                            <img src="../assets/images/coolicon.png" alt="icon">
                        </div>
                    </div>
                    <div class="calendar-title-description">
                        <div class="item-title">
                            <h4>{{ $t('calendar_item_title') }}</h4>
                        </div>
                        <div class="item-description">
                            <span>
                                {{ $t('calendar_item_description_1') }} <span class="bold-text">{{ $t('calendar_item_description_2') }}</span>
                            </span>
                        </div>  
                    </div>
                </div>
                <div class="inner-section item">
                    <div class="select-icon icon">
                        <div class="item-icon">
                            <img src="../assets/images/coolicon_select.png" alt="icon">
                        </div>
                    </div>
                    <div class="select-title-description">
                        <div class="item-title">
                            <h4>{{ $t('select_item_title') }}</h4>
                        </div>
                        <div class="item-description">
                            <span>
                                {{ $t('select_item_description_1') }}<span class="bold-text">{{ $t('select_item_description_2') }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="inner-section item">
                    <div class="coolicon-icon icon">
                        <div class="item-icon">
                            <img src="../assets/images/coolicon_smile.png" alt="icon">
                        </div>
                    </div>
                    <div class="coolicon-title-description">
                         <div class="item-title">
                            <h4>{{ $t('coolicon_title') }}</h4>
                        </div>
                        <div class="item-description">
                            <span>
                                {{ $t('coolicon_item_description_1') }}<span class="bold-text">{{ $t('coolicon_item_description_2') }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="inner-section item">
                    <div class="coolicon-flag-icon icon">
                        <div class="item-icon">
                            <img src="../assets/images/coolicon_flag.png" alt="icon">
                        </div>
                    </div>
                    <div class="coolicon-flag-title-description">
                        <div class="item-title">
                            <h4>{{ $t('coolicon_flag_title') }}</h4>
                        </div>
                        <div class="item-description">
                            <span>
                                {{ $t('coolicon_flag_description_1') }}<span class="bold-text">{{ $t('coolicon_flag_description_2') }}</span>
                            </span>
                        </div>
                    </div>
                </div>
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
  },
  data: function() {
      return {
          why_us_title: 'Почему мы?',
          calendar_item_title: 'Точно в срок',
          calendar_item_description_1: 'Мы знаем, как умеют обещать “менеджеры”, поэтому не перекладываем ответственность.',
          calendar_item_description_2: 'Все процессы контроллируем лично, и несем за них ответственность.',
          // select item 
          select_item_title: 'Всегда на связи',
          select_item_description_1: 'Это не просто слова, а реальные действия.',
          select_item_description_2: 'Вы — наш приоритет, поэтому все планы подстраиваем так, чтобы удобно было Вам.',
          // coolicon item
          coolicon_title: 'Сотрудничество, которое порадует',
          coolicon_item_description_1: 'Ждете от сотрудничества такой отдачи, будто делаем проект для себя? С нами вы получите больше, ведь главное',
          coolicon_item_description_2: '— результат на 100% и еще чуть чуть сверху.',
          // coolicon_flag item 
          coolicon_flag_title: 'Ваши достижения — наша цель',
          coolicon_flag_description_1: 'Наша цель — привести каждый проект к успеху, ведь',
          coolicon_flag_description_2: 'вместе с вами растем и развиваемся и мы!'
      };
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .section-why-us {
        padding: 200px 0;
    }

    .why-us-title h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 72px;
        color: #2E3A59;
    }

    .item-title h4 { 
        font-weight: 700;
        color: #2E3A59;
    }

    .why-us-image {
        margin-top: 40px;
    }

    .item  {
        display: flex;
        margin-bottom: 64px;
    }

    .icon {
        margin-right: 43px;
    }

    .pink-blur-container {
        width: 70px;
        height: 70px;
        background: #DD4DF5;
        filter: blur(40px);
        margin: 10px 180px;
    }

    .blue-blur-container {
        width: 70px;
        height: 70px;
        background: #6764FF;
        filter: blur(40px);
        margin: 20px 60px;
    }

    .bold-text {
        color: #2E3A59;
        font-weight: bold;
    }
</style>
