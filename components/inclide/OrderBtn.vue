<template>
    <a
      class="card__order"
      @click="sendOrder(name)"
      type="button"
    >{{$t('portfolio.send_order_project')}}</a>
</template>

<script>
  export default {
    name: 'OrderBtn',
    props:{
      name: {
        type: String,
        request: true
      }
    },
    methods:{
      sendOrder(name){
        return console.log(name)
      }
    }
  }

</script>

<style scoped>

</style>
