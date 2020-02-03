<template>
  <div class="head">
    {{logo}}
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      logo: 'Mr.Retro'
    }
  }
}
</script>

<style scoped>
.head{
  line-height: 80px;
  padding-left: 10vw;
  font-size: 58px;
}
</style>
