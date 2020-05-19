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
      <div class="text" @click="copy">
        <div class="code" v-html="result"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content',
  props: {
    newCode: String
  },
  watch: {
    newCode: {
      handle (vl) {
        this.code = vl
      },
      deep: true,
      immediate: true
    },
    code: {
      handler (vl) {
        try {
          let value = vl
          console.log(111, typeof vl)
          if (typeof vl === 'string') {
            // if(vl.startsWith === '[' && vl.endsWith === ']')
            value = value.substring(1, value.length - 1)
            value = value.split(',')
          }
          let res = JSON.stringify(this.calculate(value))
          this.result = '[' + JSON.parse(res) + ']'
        } catch (e) {
          console.log(e)
        }
      },
      deep: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.code = "[1,1,true,true,false,false,'string','string',undefined,undefined, null,null, NaN, NaN,{},{},{a:1},{a:1},[],[],[0],[0],function(){},function(){},new Date(),new Date(),Symbol(),Symbol()]"
    })
  },
  data () {
    return {
      code: '',
      result: ''
    }
  },
  methods: {
    calculate (arr) {
      // 判断arr是否为数组
      if (!Array.isArray(arr)) {
        console.log('type error!')
        return
      }
      let list = []
      let obj = {}
      let isUnique = false // 是否唯一
      let type = '' // 元素类型
      let item = null // 新元素项
      arr.forEach(v => {
        type = Object.prototype.toString.call(v)
        switch (type) {
          case '[object Object]':
            // 对象 对象不能做为对象的key值
            item = '[object Object]' + JSON.stringify(v)
            isUnique = obj[item]
            break
          case '[object Symbol]':
            // Symbol Symbol不能隐式转String
            item = '[object Symbol]' + v.toString()
            isUnique = obj[item]
            break
          default:
            item = v
            isUnique = obj[v]
        }
        if (!isUnique) {
          obj[item] = true
          list.push(v)
        }
      })
      return list
    },
    copy () {
      alert('复制成功')
      let url = this.result
      let oInput = document.createElement('input')
      oInput.value = url
      document.body.appendChild(oInput)
      oInput.select() // 选择对象;
      console.log(oInput.value)
      document.execCommand('Copy') // 执行浏览器复制命令
      oInput.remove()
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
    }
  }
}
</style>
