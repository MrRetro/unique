<template>
  <CodeView title="背景20" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg20',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt20"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt20 {
  background-color: #DDEEFF;
  background-image:
    -webkit-radial-gradient(closest-side, transparent 98%, rgba(0, 0, 0, 0.3) 99%),
    -webkit-radial-gradient(closest-side, transparent 98%, rgba(0, 0, 0, 0.3) 99%);
  background-image:
    radial-gradient(closest-side, transparent 98%, rgba(0, 0, 0, 0.3) 99%),
    radial-gradient(closest-side, transparent 98%, rgba(0, 0, 0, 0.3) 99%);
  background-position: 0 0px, 40px 40px;
  background-size: 80px 80px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
