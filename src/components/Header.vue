<template>
  <header class="header">
    <div class="haeder-section-container container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-xs-2 logo"> лого </div>
                <div class="col-md-7 col-xs-7">
                    menu
                </div>
                <div class="col-md-3 col-xs-3">
                    <button class="btn talk-button">Пообщаемся ?</button>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header { 
        padding: 25px 0 25px 0;
    }

    .logo { 
        padding: 13px 75px;
        background-color: #C4C4C4;
        border: 1px solid #C4C4C4;
        border-radius: 0;
    }

    .talk-button { 
        padding: 15px 66px;
        background-color: #F5DF4D;
        border: 1px solid #F5DF4D;
        border-radius: 0;
    }
</style>
