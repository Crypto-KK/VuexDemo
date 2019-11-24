<template>
  <div id="app">
    <p>click:{{count}} times, count {{evenOrOdd}}</p>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
    <button @click="incIfOdd">increment if odd</button>
    <button @click="incAsync">increment async</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  // methods: {
  //   inc () {
  //     // 通知更新
  //     this.$store.dispatch('inc')
  //   },
  //   dec () {
  //     this.$store.dispatch('dec')
  //   },
  //   incIfOdd () {
  //     this.$store.dispatch('incIfOdd')
  //   },
  //   incAsync () {
  //     this.$store.dispatch('incAsync')
  //   }
  // }
  methods: {
    ...mapActions(['inc', 'dec', 'incIfOdd', 'incAsync'])
  }
}
</script>

<style>

</style>
