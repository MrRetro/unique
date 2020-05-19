<template>
  <CodeView title="背景3" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg3',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt3"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt3 {
    background-size: 50px 50px;
    background-color: white;
    background-image:
        -webkit-linear-gradient(to top,transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)),
        -webkit-linear-gradient(to left, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5));
    background-image:
        linear-gradient(to top,transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5)),
        linear-gradient(to left, transparent 50%, rgba(200, 0, 0, .5) 50%, rgba(200, 0, 0, .5))
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
