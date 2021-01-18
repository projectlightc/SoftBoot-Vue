<template>
    <section class="section-acquainted container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-xs-5 acquainted">
                    <div class="acquainted-title">
                        <h2>Давайте знакомиться</h2>
                    </div>
                    <div class="image-block">
                        <img src="../assets/images/Arrow_3.png" alt="acquainted">
                    </div>
                </div>
                <div class="col-md-7 col-xs-7 acquainted-text">
                    <div class="acquainted-first-text">
                       С другой стороны сложившаяся структура организации влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации.
                    </div>
                    <div class="acquainted-second-text">
                       Товарищи! рамки и место обучения кадров представляет собой интересный эксперимент проверки систем массового участия. Товарищи! консультация с широким активом позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Равным образом начало повседневной работы по формированию позиции требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение существенных финансовых и административных условий.
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

</style>
