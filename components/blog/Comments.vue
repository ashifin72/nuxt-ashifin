<template>
  <div class="comments">
    <h3 v-if="!comments.length"> К записи Пока комментариев нет</h3>
    форма для комментирования

    <div v-if="comments.length">список комментариев</div>
  </div>
</template>

<script>
  export default {
    props:{
      comments:{
        type: Array,
        default(){
          return {}
        }
      }
    },
    name: 'Comments'
  }
</script>

<style scoped>

</style>
