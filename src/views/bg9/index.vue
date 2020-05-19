<template>
  <CodeView title="背景9" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg9',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt9"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt9 {
    background:
        -webkit-radial-gradient(circle, white 10%, transparent 10%),
        -webkit-radial-gradient(circle, white 10%, black 10%) 50px 50px;
    background:
        radial-gradient(circle, white 10%, transparent 10%),
        radial-gradient(circle, white 10%, black 10%) 50px 50px;
    background-size: 100px 100px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
