// components/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabControl: {
      type: Array,
      value: null,
      observer: (newVal, oldVal) => {
        console.log(newVal, oldVal)
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTabBar(e) {
      // 从内置对象中取出index
      const index = e.currentTarget.dataset.index

      // 更新数据
      this.setData({
        currentIndex : index 
      })

      //发出事件
      this.triggerEvent("tabBarEvent", { index, title: this.properties.tabControl})

    }

  }
})