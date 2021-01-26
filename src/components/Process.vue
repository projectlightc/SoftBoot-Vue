<template>

<section class="section-proccess container-fluid">
    <div class="container">
        <div class="proccess-title">
            <h2>{{ message }}</h2>
        </div>
        <div class="row">
            <div class="first-block">
                <div data-aos="fade-up" class="process-box">
                    <div class="prototype">
                        <div class="block-title">
                            <span class="title">{{ prototype_block_title }}</span>
                            <span class="number">01</span>
                        </div>
                        <div class="block-list">
                            <span class="name-list">{{ prototype_list_item_1 }}</span>
                            <span class="name-list">{{ prototype_list_item_2 }}</span>
                            <span class="name-list">{{ prototype_list_item_3 }}</span>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" class="process-box">
                    <div class="prototype">
                        <div class="block-title">
                            <span class="title">{{ study_block_title }}</span>
                            <span class="number">02</span>
                        </div>
                        <div class="block-list">
                            <span class="name-list">{{ study_list_item_1 }}</span>
                            <span class="name-list">{{ study_list_item_2 }}</span>
                            <span class="name-list">{{ study_list_item_3 }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="second-block">
                <div data-aos="fade-down" class="process-box">
                    <div class="prototype">
                        <div class="block-title">
                            <span class="title">{{ create_block_title }}</span>
                            <span class="number">03</span>
                        </div>
                        <div class="block-list">
                            <span class="name-list">{{ create_list_item_1 }}</span>
                            <span class="name-list">{{ create_list_item_2 }}</span>
                            <span class="name-list">{{ create_list_item_3 }}</span>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down" class="process-box">
                    <div class="responsiveness">
                        <div class="block-title">
                            <span class="title">{{ responsiveness_block_title }}</span>
                            <span class="number">04</span>
                        </div>
                        <div class="block-list">
                            <span class="name-list">{{ responsiveness_list_item_1 }}</span>
                            <span class="name-list">{{ responsiveness_list_item_2 }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-text">
            <h2>{{ process_bottom_text_1 }}<br>{{ process_bottom_text_2 }}</h2>
        </div>
    </div>
</section>

</template>

<script>

export default {
  name: 'Process',
  props: {
    msg: String
  },
  data: function() {
      return { 
          message: 'А процесс ?',
          //prototype block items
          prototype_block_title: 'Прототип',
          prototype_list_item_1: '- Брифинг',
          prototype_list_item_2: '- Общение с заказчиком',
          prototype_list_item_3: '- Прототипирование',
          //Исследование 
          study_block_title: 'Исследование',
          study_list_item_1: '- Поиск референсов',
          study_list_item_2: '- Брейншторм',
          study_list_item_3: '- Концепт',
          // Создание сайтов
          create_block_title: 'Создание дизайна',
          create_list_item_1: '- Подбор шрифтов',
          create_list_item_2: '- Подбор цветовой палитры',
          create_list_item_3: '- Создание креативного UI',
          //Отзывчивость 
          responsiveness_block_title: 'Отзывчивость',
          responsiveness_list_item_1: '- Версия для планшета',
          responsiveness_list_item_2: '- Мобильная версия',
          //Нижний текст 
          process_bottom_text_1: 'Никаких общих фраз, пустых обещаний и ',
          process_bottom_text_2: 'равнодушного отношения'
      };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .proccess-title {
        margin-bottom: 100px;
    }
    .proccess-title h2 { 
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 72px;
        color: #2E3A59;
    }

    .first-block {
        width: 100%;
        display: flex;
    }

    .process-box {
        padding: 0 15px;
        flex: 0 1 420px;
    }

    .second-block { 
        width: 100%;
        display: flex;
        margin-top: 30px;
        justify-content: center;
    }

    .blocks {
        margin-top: 100px;
    }

    .prototype { 
        padding: 30px 40px;
        border: 1px solid #2e3a59;
    }
    
    .responsiveness {
        padding: 30px 40px 58px;
        border: 1px solid #2e3a59;
    }

    .study { 
        padding: 30px 40px;
        border: 1px solid #2e3a59;
        margin-left: 30px;
    }

    .block-title { 
        display: flex;
        justify-content: space-between;
    }

    .block-title .title { 
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #2E3A59;
    }

    .block-list { 
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    .name-list { 
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 124.5%;
        /* identical to box height, or 20px */
        letter-spacing: 0.015em;
        margin-bottom: 10px;
        color: #2E3A59;
    }

    .number {
        padding: 5px 7px;
        border-radius: 999px;
        border: 1px solid #2E3A59;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: #F5DF4D;
    }

    .bottom-text { 
        margin: 200px 0;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
        text-align: center;
        color: #2E3A59;
    }
</style>
