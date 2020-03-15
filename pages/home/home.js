// pages/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    lists: ["小米", "小夜", "小岚"],
    currentActive: 0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlerTap1() {
      console.log("handlerTap1")
    },
    captureBindHandlerTap1() {
      console.log("captureBindHandlerTap1")
    },
    handlerTap2() {
      console.log("handlerTap2")
    },
    captureBindHandlerTap2() {
      console.log("captureBindHandlerTap2")
    },
    handlerTap3() {
      console.log("handlerTap3")
    },
    captureBindHandlerTap3() {
      console.log("captureBindHandlerTap3")
    },


    // --------------事件对象函数测试
    start(e) {
      console.log("start", e)
    },
    end(e) {
      console.log("end", e)
    },
    move(e) {
      console.log("move", e)
    },
    cancel(e) {
      console.log("cancel".e)
    },
    tap(e) {
      console.log("tap", e)
    },
    press(e) {
      console.log("press", e)
    },

    // ---------------Exercise 取出对象某个属性
    clickName(e) {
      const property = e.currentTarget.dataset;
      let item = property.item;
      let index = property.index;
      this.setData({
        currentActive: index
      })
    }
  }
})