<template>
  <CodeView title="背景7" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg7',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt7"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt7 {
    background-color: #eee;
    background-size: 60px 60px;
    background-image:
        -webkit-linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
        -webkit-linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
    background-image:
        linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
        linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
