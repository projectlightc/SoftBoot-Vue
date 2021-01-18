<template>
<section class="section-soft-boost container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-5 col-xs-5 soft-boost">
                <div class="image-block">
                    <img src="../assets/images/Rectangle_20.png" alt="soft-boost">
                </div>
            </div>
            <div class="col-md-7 col-xs-7 digital">
                <div class="digital-text"><span>Цифровое сердце <span class="yellow">вашего бизнеса</span></span></div>
                <div class="digital-description">
                    <p>Качественно разработаем приложения на современных платформах и запустим его вместе .</p>
                </div>
                <div class="digital-button">
                    <button class="btn cooperate">Хочу сотрудничать!</button>
                </div>
                <!-- <marquee behavior="alternate" direction="right">Бегущая строка</marquee> -->
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section-soft-boost { 
    padding: 150px 0;
  }

  .digital-text span { 
    font-size: 60px;
    font-weight: 700;
    line-height: 72px;
    font-family: 'Zilla Slab', serif;
  }

  .yellow {
    color: #F5DF4D;
  }

  .digital-description { 
    font-family: Zilla Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #2E3A59;
    margin-top: 20px;
    margin-bottom: 22px;
  }

  .cooperate { 
    padding: 16px 44px 15px 43px;
    background-color: #F5DF4D;
    border: 1px solid #F5DF4D;
    border-radius: 0;
  }
</style>
