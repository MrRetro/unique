<template>
  <div class="content">
    <div class="box">
      <h3>代码:</h3>
      <div class="text">
        <textarea class="code" v-model="code" />
        <textarea class="code code2" v-model="code2" />
      </div>
    </div>
    <div class="box">
      <h3>效果:</h3>
      <div class="text" @click="copy">
        <div class="code" v-html="result"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Content from '../../../../components/content'
const err = `对比失败：<br />1.必须用双引号严格模式对比<br /> 2.输入的必须是对象`
export default {
  name: 'equal-content',
  mixins: [Content],
  watch: {
    code: {
      handler (vl) {
        try {
          let x = vl
          let y = this.code2
          if (typeof x === 'string') x = JSON.parse(x)
          if (typeof y === 'string') y = JSON.parse(y)
          this.result = this.calculate(x, y)
        } catch (e) {
          console.log(e)
          this.result = err
        }
      },
      deep: true
    },
    code2: {
      handler (vl) {
        try {
          let x = this.code
          let y = vl
          if (typeof x === 'string') x = JSON.parse(x)
          if (typeof y === 'string') y = JSON.parse(y)
          this.result = this.calculate(x, y)
        } catch (e) {
          console.log(e)
          this.result = err
        }
      },
      deep: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.code = JSON.stringify({a: 1, b: NaN})
      this.code2 = JSON.stringify({a: 1, b: NaN})
    })
  },
  data () {
    return {
      code2: ''
    }
  },
  methods: {
    calculate (x, y) {
      try {
        const ok = Object.keys
        const tx = typeof x
        const ty = typeof y
        return x && y && tx === 'object' && tx === ty ? (
          ok(x).length === ok(y).length &&
          ok(x).every(key => this.calculate(x[key], y[key]))
        ) : (x === y)
      } catch (e) {
        this.result = err
      }
    }
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
      }
      .code2{
        border-top: 1px solid wheat;
      }
    }
  }
}
</style>
