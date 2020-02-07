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
import Content from '../../../../components/content'
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
      this.code = `<a href="https://mp.weixin.qq.com/s/eVlGKn7CxXgAeEc6lFnkKw" target="_blank">效果</a><br />
<div class="loading">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
<style>
  .loading {
    display: flex;
    animation-delay: 1s;
  }
  .loading .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;
  }
  .loading .dot::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    animation: wave 2s ease-out infinite;
  }
  .loading .dot:nth-child(1) {
    background: #7ef9ff;
  }
  .loading .dot:nth-child(1)::before {
    animation-delay: 0.2s;
  }
  .loading .dot:nth-child(2) {
    background: #89cff0;
  }
  .loading .dot:nth-child(2)::before {
    animation-delay: 0.4s;
  }
  .loading .dot:nth-child(3) {
    background: #4682b4;
  }
  .loading .dot:nth-child(3)::before {
    animation-delay: 0.6s;
  }
  .loading .dot:nth-child(4) {
    background: #0f52ba;
  }
  .loading .dot:nth-child(4)::before {
    animation-delay: 0.8s;
  }
  .loading .dot:nth-child(5) {
    background: #000080;
  }
  .loading .dot:nth-child(5)::before {
    animation-delay: 1s;
  }

  @keyframes wave {
    50%,
    75% {
      transform: scale(2.5);
    }
    80%,
    100% {
      opacity: 0;
    }
  }
</style>
`
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
