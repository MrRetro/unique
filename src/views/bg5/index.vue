<template>
  <CodeView title="背景5" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg5',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt5"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt5 {
    background-size: 50px 50px;
    background-color: #c16;
    background-image: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
