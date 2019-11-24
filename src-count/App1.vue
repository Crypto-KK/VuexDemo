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

export default {
  data () {
    return {
      count: 0
    }
  },
  computed: {
    evenOrOdd () {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    inc () {
      this.count = this.count + 1
    },
    dec () {
      this.count = this.count - 1
    },
    incIfOdd () {
      if (this.count % 2 === 1) {
        this.count = this.count + 1
      }
    },
    incAsync () {
      setTimeout(() => {
        this.count = this.count + 1
      }, 1000)
    }
  }
}
</script>

<style>

</style>
