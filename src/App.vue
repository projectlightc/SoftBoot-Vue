<template>
  <div id="app">
    <Header />
    <Homepage />
    <WhatAreWeDoing />
    <MeetUs />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Homepage from './components/Homepage.vue'
import WhatAreWeDoing from './components/WhatAreWeDoing.vue'
import MeetUs from './components/MeetUs.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    Header,
    WhatAreWeDoing,
    MeetUs
  }
}
</script>

<style>

</style>
