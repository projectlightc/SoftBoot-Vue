<template>
<section class="section-soft-boost container-fluid">
  <div class="container">
    <div class="row">
        <div class="col-md-5 col-xs-5 soft-boost">
              <div class="digital-black-blocks">
                <div class="digital-softboot-block">
                  <img src="../assets/images/test4.png" alt="softboot-logo">
                </div>
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
    <div class="information-block">
          <marquee behavior="alternate" direction="right" class="text">Analytics Design Development Testing Management Analytics Design Development Testing Management</marquee>
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

  .digital-text {
    width: 665px;
  }

  .soft-boost {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .digital-text span { 
    font-size: 60px;
    font-weight: 700;
    line-height: 72px;
    font-family: 'Zilla Slab', serif;
  }

  .information-block {
    padding: 26px 0;
    margin-top: 70px;
    transform: rotate(4.31deg); 
    background-color: #2E3A59;
  }

  .information-block .text {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    letter-spacing: 1px;
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

  .digital-black-blocks {
    position: relative;
    width: 400px;
    height: 200px;
  }
  .digital-softboot-block img { 
    width: 300px;
  }
</style>
