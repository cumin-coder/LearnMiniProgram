// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      // 指定类型
      type: String,
      // 指定默认值
      value: null,
      // 观察者
      observer: (newVal, oldVal) => {}
    },
    age:{
      type: Number,
      value: null
    }
  },
  // 页面 向 组件自定义样式
  externalClasses: ["nameclass", "ageclass"],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})