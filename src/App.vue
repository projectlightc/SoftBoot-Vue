<template>
  <div id="app">
    <Header />
    <Homepage />
    <WhatAreWeDoing />
    <MeetUs />
    <ContactForm />
    <WhyUs />
    <Process />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Homepage from './components/Homepage.vue'
import WhatAreWeDoing from './components/WhatAreWeDoing.vue'
import MeetUs from './components/MeetUs.vue'
import ContactForm from './components/ContactForm.vue'
import WhyUs from './components/WhyUs.vue'
import Process from './components/Process.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    Header,
    WhatAreWeDoing,
    MeetUs,
    ContactForm,
    WhyUs,
    Process,
    Footer
  }
}
</script>

<style>

</style>
