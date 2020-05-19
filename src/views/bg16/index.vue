<template>
  <CodeView title="背景16" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg16',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt16"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt16 {
    background-color: #6d695c;
    background-image:
        -webkit-repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
        -webkit-repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
        -webkit-linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),
        -webkit-linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));
    background-image:
        repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
        repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
        linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),
        linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));
    background-size: 70px 120px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
