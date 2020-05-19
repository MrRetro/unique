<template>
  <CodeView title="背景18" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg18',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt18"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt18{
  background-color: #63773F;
  background-image:
    -webkit-radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54, 78, 39, 0) 12%, rgba(54, 78, 39, 0)),
    -webkit-radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210, 202, 171, 0) 12%, rgba(210, 202, 171, 0)),
    -webkit-radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54, 78, 39, 0) 12%, rgba(54, 78, 39, 0)),
    -webkit-radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210, 202, 171, 0) 12%, rgba(210, 202, 171, 0)),
    -webkit-radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210, 202, 171, 0) 17%),
    -webkit-radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54, 78, 39, 0) 17%),
    -webkit-radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210, 202, 171, 0) 17%),
    -webkit-radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54, 78, 39, 0) 17%);
  background-image:
    radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54, 78, 39, 0) 12%, rgba(54, 78, 39, 0)),
    radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210, 202, 171, 0) 12%, rgba(210, 202, 171, 0)),
    radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54, 78, 39, 0) 12%, rgba(54, 78, 39, 0)),
    radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210, 202, 171, 0) 12%, rgba(210, 202, 171, 0)),
    radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210, 202, 171, 0) 17%),
    radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54, 78, 39, 0) 17%),
    radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210, 202, 171, 0) 17%),
    radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54, 78, 39, 0) 17%);
  background-position: 50px 0px, 50px 0px, 0 50px, 0 50px, 0 0%, 0 0%, 50px 50px, 50px 50px;
  background-size: 100px 100px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
