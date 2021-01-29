<template>
<section class="section-soft-boost container-fluid" id="item_1">
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
                <div class="digital-text"><span>{{ $t('digital_title') }}<span class="yellow"> <br>{{ $t('digital_yellow_text') }}</span></span></div>
                <div class="digital-description">
                    <p>{{ $t('digital_description') }}</p>
                </div>
                <div class="digital-button">
                    <button class="btn cooperate" data-toggle="modal" data-target="#exampleModal">{{ $t('digital_button') }}</button>
                </div>
                
                                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="modal-title">
                                            <h5 id="exampleModalLabel">{{ exampleModalLabel }}<br>{{ call }}</h5>
                                        </div>
                        
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="#">
                                            <div class="row">
                                                <div class="form-group col-md-12 name">
                                                    <input type="text" name="name" id="idName" placeholder="Имя">
                                                </div>
                                                <div class="form-group col-md-12 post">
                                                    <input type="text" placeholder="Почта">
                                                </div>
                                                <div class="form-group col-md-12 phone">
                                                    <input type="tel" placeholder="Телефон">
                                                </div>
                                                <div class="form-group col-md-12 button">
                                                    <button class="btn btn-send">{{ modal_btn }}</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" class="yellow-blur-container"></div> 
     <div class="information-block">
          <marquee behavior="alternate" class="marquee text"><span>{{ run_string }}</span></marquee>
    </div>
</section>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  },
  data: function () {
    return {
      digital_title: 'Цифровое сердце',
      digital_yellow_text: 'вашего бизнеса',
      digital_description: 'Качественно разработаем приложения на современных платформах и запустим его вместе .',
      digital_button: 'Хочу сотрудничать!',
      run_string: 'Analytics Design Development Testing Management Analytics Design Development Testing Management'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section-soft-boost { 
    padding: 150px 0;
  }

  /* .digital-text {
    width: 665px;
  } */

  .soft-boost {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .digital-text span { 
    font-size: 60px;
    font-weight: 700;
    line-height: 72px;
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

  .yellow-blur-container {
    width: 70px;
    height: 70px;
    background: #F5DF4D;
    filter: blur(65px);
    margin: 0 360px;
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

  /* .marquee {
   margin: 0 auto;
   white-space: nowrap;
   overflow: hidden;
}

.marquee span {
   display: inline-block;
   padding-left: 100%;
   animation: marquee 10s linear infinite;
}

.marquee span:hover {
   animation-play-state: paused;
}

@keyframes marquee {
 0%   { transform: translate(0, 0); }
 100% { transform: translate(-100%, 0); }
} */
.b-marquee { 
  font-family: 'Segoe UI', sans-serif; 
  white-space: nowrap; 
  overflow: hidden; 
  background: #333; 
  color: #fff; 
  padding: 10px; 
  position: relative; 
  margin-bottom: 10px; 
} 
 
.b-marquee__text { 
  -webkit-animation: animMarquee 5s linear infinite; 
  animation: animMarquee 5s linear infinite; 
} 
 
@-webkit-keyframes animMarquee { 
  0% { 
    -webkit-transform: translateX(0); 
    transform: translateX(0); 
  } 
  100% { 
    -webkit-transform: translateX(100%); 
    transform: translateX(100%); 
  } 
} 
 
@keyframes animMarquee { 
  0% { 
    -webkit-transform: translateX(0); 
    transform: translateX(0); 
  } 
  100% { 
    -webkit-transform: translateX(100%); 
    transform: translateX(100%); 
  } 
} 
 
 
/* text right to left*/ 
 
/* .b-marquee--rtl {} 
 
.b-marquee--rtl .b-marquee__text { 
  -webkit-animation: animMarqueeRtl 5s linear infinite; 
  animation: animMarqueeRtl 5s linear infinite; 
} 
 
@-webkit-keyframes animMarqueeRtl { 
  0% { 
    -webkit-transform: translateX(100%); 
    transform: translateX(100%); 
  } 
  100% { 
    -webkit-transform: translateX(0%); 
    transform: translateX(0%); 
  } 
} 
 
@keyframes animMarqueeRtl { 
  0% { 
    -webkit-transform: translateX(100%); 
    transform: translateX(100%); 
  } 
  100% { 
    -webkit-transform: translateX(0); 
    transform: translateX(0); 
  } 
} */
</style>
