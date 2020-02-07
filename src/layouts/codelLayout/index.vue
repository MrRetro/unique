<template>
  <div class="container">
    <Head />
    <Title :title="title" />
    <slot name="content"></slot>
  </div>
</template>

<script>
import Head from '../../components/head'
import Title from '../../components/title'
export default {
  name: 'code-layout',
  components: {
    Head,
    Title
  },
  props: {
    title: String
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    background-color: wheat;
  }
</style>
