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
      this.code = `<a href="https://mp.weixin.qq.com/s/eAQPxOmioHtZTlkt8tMXxA" target="_blank">效果</a><div class="bg"><h1 class="h1" data-text="Text Crack">
    <span>Text Crack</span>
</h1></div>
<style>
.bg{background-color: black;position: relative;height: 60px;}
.h1 {
    position: relative;
    margin: auto;
    margin-top: 30px;
    margin-left: 260px;
    font-size: 12px
    font-weight: bold;
    color: #fff;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 0 10px blue;
    user-select: none;
    white-space: nowrap;
    filter: blur(0.007em);
    animation: shake 2.5s linear infinite;
}

.h1 span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
}

.h1::before,
.h1::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
}

.h1::before {
    animation: crack1 2.5s linear infinite;
    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
}

.h1::after {
    animation: crack2 2.5s linear infinite;
    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
}

@keyframes shake {
    5%,
    15%,
    25%,
    35%,
    55%,
    65%,
    75%,
    95% {
        filter: blur(0.018em);
        transform: translateY(0.018em) rotate(0deg);
    }

    10%,
    30%,
    40%,
    50%,
    70%,
    80%,
    90% {
        filter: blur(0.01em);
        transform: translateY(-0.018em) rotate(0deg);
    }

    20%,
    60% {
        filter: blur(0.03em);
        transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%,
    85% {
        filter: blur(0.03em);
        transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
        filter: blur(0.007em);
        transform: translate(0) rotate(-0.5deg);
    }
}

@keyframes crack1 {
    0%{
        transform: translate(-51%, -48%);
    }
    30%,
    100% {
        transform: translate(-50%, -50%);
    }
}

@keyframes crack2 {
    0%{
        transform: translate(-49%, -53%);
    }
    30%,
    100% {
        transform: translate(-50%, -50%);
    }
}
</style>`
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
