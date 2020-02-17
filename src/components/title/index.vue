<template>
  <div class="title" v-html="title"></div>
</template>

<script>
export default {
  name: 'title',
  props: {
    title: String
  }
}
</script>

<style scoped>
.title{
  width: 100%;
  line-height: 60px;
  font-size: 30px;
  background-color: antiquewhite;
  white-space: nowrap;
  overflow: hidden;
}
</style>
