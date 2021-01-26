<template>
    <section class="section-acquainted container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-xs-5 acquainted">
                    <div class="acquainted-title">
                        <h2>{{ $t('acquainted_title') }}</h2>
                    </div>
                    <div class="image-block">
                        <img src="../assets/images/Arrow_3.png" alt="acquainted">
                    </div>
                </div>
                <div class="col-md-7 col-xs-7 acquainted-text">
                    <div class="acquainted-first-text">
                       <span class="bold-text">{{ $t('acquainted_first_bold_text') }}</span>, {{ $t('acquainted_bit_text') }}
                    </div>
                    <div class="acquainted-second-text">
                       <span class="bold-text">{{ $t('acquainted_second_bold_text') }}</span> <br />
                        {{ $t('acquainted_text_1') }} <br />
                        {{ $t('acquainted_text_2') }} <br />
                        {{ $t('acquainted_text_3') }} <br />
                        {{ $t('acquainted_text_4') }}<br />
                        {{ $t('acquainted_text_5') }}<br />
                        <span class="bold-text">{{ $t('acquainted_third_bold_text') }}</span> 

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'MeetUs',
  props: {
    msg: String
  },
  data: function() {
      return {
          acquainted_title: 'Давайте знакомиться',
          acquainted_first_bold_text: 'Мы - команда прогрессивных мечтателей',
          acquainted_bit_text: 'которые вдохновляются современными стартапами и технологиями на рынке IT. Мы интегрируем прогрессивные технологии в существующие бизнесы, создаем некий диджитализированый бустер и апгрейд, который утоляет бизнес потребность нашего клиента, а в последствии и его клиентов. Совместно с командой разрабатываем инновационное для компаний решение переводя существующие оффлайн процессы в онлайн. Так же помогаем стартапам в реализации задуманной идеи.',
          acquainted_second_bold_text: 'Нашими особенностями являются:',
          acquainted_text_1: '1. Френдли коммуникация с заказчиком ',
          acquainted_text_2: '2. Полное выявление потребности ',
          acquainted_text_3: '3. Завершаем проект только при 100% удовлетворении заказчика',
          acquainted_text_4: '4. Заводим отношения не на единоразовой основе, а на долгие-долгие периоды сотрудничества',
          acquainted_text_5: 'Так все же кто мы?',
          acquainted_third_bold_text: 'Мы - твой турбо-ускоритель в диджитализации'
      };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .section-acquainted { 
        padding: 250px 0;
    }

    .image-block { 
        margin-top: 40px;
    }

    .acquainted-text { 
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .acquainted-title h2 {
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 72px;
        color: #2E3A59;
    }

    .acquainted-first-text{
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 124.5%;
        /* or 20px */
        max-width: 585px;
        letter-spacing: 0.015em;

        color: #2E3A59;
    }

    .acquainted-second-text {
        font-family: 'Zilla Slab', serif; 
        margin-top: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 124.5%;
        /* or 20px */
        max-width: 585px;
        letter-spacing: 0.015em;

        color: #2E3A59;
    }

    .bold-text { 
        font-weight: 700;
    }

</style>
