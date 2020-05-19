<template>
  <CodeView title="背景12" :code="code"></CodeView>
</template>

<script>
import CodeView from '../code'
export default {
  name: 'bg12',
  components: {
    CodeView
  },
  data () {
    return {
      code: `<div class="patterns pt12"></div>
<style>
.patterns{width: 100%;height: 100%;}
.pt12{
    background-color: #330000;
    background-image:
        -webkit-radial-gradient(#890000 4%, #5B0000 9%, rgba(102, 0, 0, 0) 9%),
        -webkit-radial-gradient(#890000 4%, #5B0000 8%, rgba(102, 0, 0, 0) 10%),
        -webkit-radial-gradient(rgba(153, 0, 0, 0.8) 20%, rgba(102, 0, 0, 0)),
        -webkit-radial-gradient(rgba(153, 0, 0, 0.8) 20%, rgba(102, 0, 0, 0)),
        -webkit-radial-gradient(#660000 35%, rgba(102, 0, 0, 0) 60%),
        -webkit-radial-gradient(#660000 35%, rgba(102, 0, 0, 0) 60%),
        -webkit-radial-gradient(rgba(76, 0, 0, 0.7), rgba(102, 0, 0, 0)),
        -webkit-radial-gradient(rgba(76, 0, 0, 0.7), rgba(102, 0, 0, 0)),
        -webkit-linear-gradient(45deg, rgba(102, 0, 0, 0) 49%, #000000 50%, rgba(102, 0, 0, 0) 70%),
        -webkit-linear-gradient(135deg, rgba(102, 0, 0, 0) 49%, #000000 50%, rgba(102, 0, 0, 0) 70%);
    background-image:
        radial-gradient(#890000 4%, #5B0000 9%, rgba(102, 0, 0, 0) 9%),
        radial-gradient(#890000 4%, #5B0000 8%, rgba(102, 0, 0, 0) 10%),
        radial-gradient(rgba(153, 0, 0, 0.8) 20%, rgba(102, 0, 0, 0)), radial-gradient(rgba(153, 0, 0, 0.8) 20%, rgba(102, 0, 0, 0)),
        radial-gradient(#660000 35%, rgba(102, 0, 0, 0) 60%),
        radial-gradient(#660000 35%, rgba(102, 0, 0, 0) 60%),
        radial-gradient(rgba(76, 0, 0, 0.7), rgba(102, 0, 0, 0)),
        radial-gradient(rgba(76, 0, 0, 0.7), rgba(102, 0, 0, 0)),
        linear-gradient(45deg, rgba(102, 0, 0, 0) 49%, #000000 50%, rgba(102, 0, 0, 0) 70%),
        linear-gradient(135deg, rgba(102, 0, 0, 0) 49%, #000000 50%, rgba(102, 0, 0, 0) 70%);
    background-position: 0 0px, 50px 50px, 50px 0px, 0 50px, 50px 0px, 100px 50px, 0 0px, 50px 50px, 0 0px, 0 0;
    background-size: 100px 100px;
}
</style>`
    }
  }
}
</script>

<style scoped>

</style>
