<template>
  <div class="container">
    <CodeLayout :title="`数组去重(<span style='font-size: 22px; color: red;'>将数组粘贴到左边空白区</span>)`">
      <Content slot="content" />
    </CodeLayout>
  </div>
</template>

<script>
import CodeLayout from '../../layouts/codelLayout'
import Content from '../../components/content'
export default {
  name: 'unique',
  components: {
    CodeLayout,
    Content
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
