<template>
  <CodeView title="背景2" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg2',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt2"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt2 {
    background-size: 50px 50px;
    background-color: #f90;
    background-image: -webkit-linear-gradient(0deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
    background-image: linear-gradient(0deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
