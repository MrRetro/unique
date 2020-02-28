<template>
  <div class="content" @mousemove="getMousePos">
    <span id="mouse" @click="handleClick()"></span>
    <span style="color: gray;margin: 50px;border-radius: 10px;border: 1px dashed #fff;width: 200px;font-size: 16px;padding: 10px;">打开两个相同的窗体看看</span>
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'sync-mouse',
  created () {
    this.$nextTick(() => {
      window.addEventListener('message', (event) => {
        // console.log(111, event)
        const obj = event.data
        switch (obj.type) {
          case 'mouseMove':
            this.changeMouse(obj.data)
            break
        }
      }, false)
      window.addEventListener('storage', (e) => {
        // console.log(222, e)
        switch (e.key) {
          case 'position':
            this.changeMouse(JSON.parse(localStorage.position))
            break
          case 'mouseClick':
            this.text = '(移动鼠标看看)'
            break
        }
      }, false)
    })
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    getMousePos (event) {
      let e = event || window.event
      let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
      let scrollY = document.documentElement.scrollTop || document.body.scrollTop
      let x = e.pageX || e.clientX + scrollX
      let y = e.pageY || e.clientY + scrollY
      window.postMessage(
        {
          type: 'mouseMove',
          data: {x, y}
        },
        '*'
      )
      localStorage.position = JSON.stringify({x, y})
      return { x, y }
    },
    // 实时移动
    changeMouse (obj) {
      this.text = '(点击鼠标左键看看)'
      const mouse = document.getElementById('mouse')
      mouse.style.left = obj.x + 'px'
      mouse.style.top = obj.y + 'px'
    },
    handleClick () {
      this.text = '(移动鼠标看看)'
      localStorage.mouseClick = Math.random()
    }
  }
}
</script>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  background-color: wheat;
  z-index: 1;
}
  #mouse{
    position: absolute;
    width: 12px;
    height: 16px;
    background-color: red;
    z-index: 10;
    left: 0px;
    top: 0px;
  }
</style>
