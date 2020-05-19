<template>
  <CodeView title="背景17" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg17',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt17"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt17 {
    background-image:
        -webkit-radial-gradient( circle at 100% 50% , transparent 20%, rgba(255, 255, 255, 0.3) 21%, rgba(255, 255, 255, 0.3) 34%, transparent 35%, transparent),
        -webkit-radial-gradient( circle at 0% 50% , transparent 20%, rgba(255, 255, 255, 0.3) 21%, rgba(255, 255, 255, 0.3) 34%, transparent 35%, transparent);
    background-image:
        radial-gradient(circle at 100% 50%, transparent 20%, rgba(255, 255, 255, 0.3) 21%, rgba(255, 255, 255, 0.3) 34%, transparent 35%, transparent),
        radial-gradient( circle at 0% 50%, transparent 20%, rgba(255, 255, 255, 0.3) 21%, rgba(255, 255, 255, 0.3) 34%, transparent 35%, transparent);
    background-color: slategray;
    background-size:75px 100px;
  background-position: 0 0%, 0 -50px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
