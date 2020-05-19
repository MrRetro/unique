<template>
  <div class="container">
    <CodeLayout :title="title || `展示`">
      <Content slot="content" :new-code="code" />
    </CodeLayout>
  </div>
</template>

<script>
import CodeLayout from '../../layouts/codelLayout'
import Content from './components/content'
export default {
  name: 'code',
  components: {
    CodeLayout,
    Content
  },
  props: {
    title: String,
    code: String
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
