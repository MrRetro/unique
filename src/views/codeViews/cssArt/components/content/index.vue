<template>
  <div class="content">
    <div class="box">
      <h3>代码:</h3>
      <div class="text">
        <textarea class="code" v-model="code" />
      </div>
    </div>
    <div class="box">
      <h3>效果:</h3>
      <div class="text">
        <div class="code" v-html="result"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Content from '../../../../../components/content'
export default {
  name: 'code-content',
  mixins: [Content],
  watch: {
    code: {
      handler (vl) {
        try {
          this.result = vl
        } catch (e) {
          console.log(e)
        }
      },
      deep: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.code = `<a href="https://mp.weixin.qq.com/s/eAQPxOmioHtZTlkt8tMXxA" target="_blank">效果</a>`
    })
  }
}
</script>
<style lang="scss" scoped>
.content{
  display: flex;
  width: 100vw;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;

  .box{
    display: flex;
    width: 50%;
    flex-direction: column;

    &:nth-child(1){
      position: relative;
      left: -1px;
    }
    h3{
      font-size: 16px;
      display: flex;
      height: 30px;
      line-height: 30px;
      background: #fff7ee;
      padding-left: 10px;
      border-bottom: 1px solid #f3f3f3;
    }
    .text{
      display: flex;
      flex: 1;
      flex-direction: column;
      background-color: white;

      .code{
        font: 400 16px system-ui;
        color: black;
        line-height: 22px;
        display: flex;
        flex: 1;
        padding: 10px;
        outline: none;
        border: none;
        resize: none;
        text-align: left;
        flex-direction: column;
      }
    }
  }
}
</style>
