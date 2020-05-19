<template>
  <CodeView title="背景13" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg13',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt13"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt13 {
    background-color: white;
    background-image:
        -webkit-radial-gradient(midnightblue 9px, transparent 10px),
        -webkit-repeating-radial-gradient(midnightblue 0px, midnightblue 4px, transparent 5px, transparent 20px, midnightblue 21px, midnightblue 25px, transparent 26px, transparent 50px);
    background-image:
    radial-gradient(midnightblue 9px, transparent 10px),
    repeating-radial-gradient(midnightblue 0px, midnightblue 4px, transparent 5px, transparent 20px, midnightblue 21px, midnightblue 25px, transparent 26px, transparent 50px);
    background-position: 0 0;
    background-size: 30px 30px, 90px 90px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
