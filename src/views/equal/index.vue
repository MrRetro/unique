<template>
  <div class="container">
    <CodeLayout :title="`对象比较(<span style='font-size: 22px; color: red;'>严格比较</span>)`">
      <Content slot="content" />
    </CodeLayout>
  </div>
</template>

<script>
import CodeLayout from '../../layouts/codelLayout'
import Content from './components/content'
export default {
  name: 'equal',
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
