<template>
<section class="section-why-us container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xs-6 why-us">
                <div class="why-us-title">
                    <h2>Почему мы?</h2>
                </div>
                <div class="why-us-image">
                    <img src="../assets/images/Checkmark.png" alt="why-us">
                </div>
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
                            <h4>Точно в срок</h4>
                        </div>
                        <div class="item-description">
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptas, est exercitationem rerum quae repellendus consequuntur mollitia? Repellat, nisi. Quisquam, dolore. Commodi maxime minima natus ut atque laudantium voluptate exercitationem?
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
                            <h4>Точно в срок</h4>
                        </div>
                        <div class="item-description">
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptas, est exercitationem rerum quae repellendus consequuntur mollitia? Repellat, nisi. Quisquam, dolore. Commodi maxime minima natus ut atque laudantium voluptate exercitationem?
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
                            <h4>Точно в срок</h4>
                        </div>
                        <div class="item-description">
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptas, est exercitationem rerum quae repellendus consequuntur mollitia? Repellat, nisi. Quisquam, dolore. Commodi maxime minima natus ut atque laudantium voluptate exercitationem?
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
                            <h4>Точно в срок</h4>
                        </div>
                        <div class="item-description">
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptas, est exercitationem rerum quae repellendus consequuntur mollitia? Repellat, nisi. Quisquam, dolore. Commodi maxime minima natus ut atque laudantium voluptate exercitationem?
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .section-why-us {
        padding: 200px 0;
    }

    .why-us-title h2 {
        font-family: 'Zilla Slab', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 72px;
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
</style>
