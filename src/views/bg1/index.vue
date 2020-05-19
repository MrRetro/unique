<template>
  <CodeView title="背景1" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg1',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt1"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt1 {
    background-size: 50px 50px;
    background-color: #0ae;
    background-image: -webkit-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
    background-image: linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
