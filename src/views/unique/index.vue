<template>
  <div class="container">
      <Head />
      <Title title="数组去重(<span style='font-size: 22px; color: red;'>将数组粘贴到左边空白区</span>)" />
      <Content />
  </div>
</template>

<script>
import Head from '../../components/head'
import Title from './components/title'
import Content from './components/content'
export default {
  name: 'unique',
  components: {
    Head,
    Title,
    Content
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
