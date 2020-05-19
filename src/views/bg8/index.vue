<template>
  <CodeView title="背景8" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg8',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt8"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt8 {
    background-color: #fff;
    background-size: 100% 1.2em;
    background-image:
        -webkit-linear-gradient(to right, transparent 21px, #abced4 21px, #abced4 23px, transparent 23px),
        -webkit-linear-gradient(#eee .05em, transparent .05em);
    background-image:
        linear-gradient(to right, transparent 21px, #abced4 21px, #abced4 23px, transparent 23px),
        linear-gradient(#eee .05em, transparent .05em);
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
