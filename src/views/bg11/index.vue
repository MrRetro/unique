<template>
  <CodeView title="背景11" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg11',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt11"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt11 {
    background-color: #88AA33;
    background-image: -webkit-radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px), -webkit-radial-gradient(circle at 100% 100%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px), none;
    background-image: radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px), radial-gradient(circle at 100% 100%, rgba(96, 16, 48, 0) 9px, #661133 10px, rgba(96, 16, 48, 0) 11px), none;
    background-position: 0 10px, 0 0%, 0 0;
    background-size: 20px 20px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
