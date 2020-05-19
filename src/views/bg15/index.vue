<template>
  <CodeView title="背景15" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg15',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt15"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt15 {
    background-color: #BB0033;
    background-image:
        -webkit-radial-gradient(closest-side circle at 60% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
        -webkit-radial-gradient(closest-side circle at 40% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
        -webkit-radial-gradient(closest-side circle at 40% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
         -webkit-radial-gradient(closest-side circle at 60% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
         -webkit-radial-gradient(closest-side circle at 50% 35%, #DD3355 30%, rgba(221, 51, 85, 0) 31%),
         -webkit-radial-gradient(closest-side circle at 60% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
         -webkit-radial-gradient(closest-side circle at 40% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
         -webkit-radial-gradient(closest-side circle at 40% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
         -webkit-radial-gradient(closest-side circle at 60% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
         -webkit-radial-gradient(closest-side circle at 50% 35%, #DD3355 30%, rgba(221, 51, 85, 0) 31%);
    background-image:
        radial-gradient(closest-side circle at 60% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
        radial-gradient(closest-side circle at 40% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
        radial-gradient(closest-side circle at 40% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
        radial-gradient(closest-side circle at 60% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
        radial-gradient(closest-side circle at 50% 35%, #DD3355 30%, rgba(221, 51, 85, 0) 31%),
        radial-gradient(closest-side circle at 60% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
        radial-gradient(closest-side circle at 40% 43%, #BB0033 26%, rgba(187, 0, 51, 0) 27%),
        radial-gradient(closest-side circle at 40% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
        radial-gradient(closest-side circle at 60% 22%, #DD3355 45%, rgba(221, 51, 85, 0) 46%),
        radial-gradient(closest-side circle at 50% 35%, #DD3355 30%, rgba(221, 51, 85, 0) 31%);
    background-position: 0 0%, 0 0%, 0 0%, 0 0%, 0 0%, 50px 50px, 50px 50px, 50px 50px, 50px 50px, 50px 50px;
    background-size: 100px 100px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
