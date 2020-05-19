<template>
  <CodeView title="背景10" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg10',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt10"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt10{
    background:
        -webkit-radial-gradient(circle at 0% 2%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px),
        -webkit-radial-gradient(circle at 100% 100%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px), none;
    background:
        radial-gradient(circle at 0% 2%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px),
        radial-gradient(circle at 100% 100%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px), none;
    background-size: 20px 20px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
