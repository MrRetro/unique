<template>
  <CodeView title="背景14" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg14',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt14"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt14 {
    background-color: #282828;
    background-image:
        -webkit-radial-gradient(black 15%, transparent 16%),
        -webkit-radial-gradient(black 15%, transparent 16%),
        -webkit-radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%),
        -webkit-radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%);
    background-image:
        radial-gradient(black 15%, transparent 16%),
        radial-gradient(black 15%, transparent 16%),
        radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%),
        radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%);
    background-position: 0 0px, 8px 8px, 0 1px, 8px 9px;
    background-size: 16px 16px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
