App({

  /**
   * 生命周期函数：后台会存活2小时
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log("小程序初始化完成... onLaunch")
    // console.log(options)

    //自定义一个错误用于测试onError
    // setTimeout(() => {
    //   const err = new Error()
    //   throw err
    // }, 3000)
      // 异步操作
      wx.getUserInfo({
        //数据拿到之后，再进行回调的
        success: (res) => {
          console.log(res)
        }
      })

  },

  /**
   * 小程序界面显示出来之后会执行的生命周期函数
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    console.log("小程序界面显示完成... onShow")
    // console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {
    console.log("当小程序从前台进入后台，会触发onHide ")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    // console.log(msg)
    console.log("小程序发生了错误 onError")
  },
  //全局对象
  globalData: {
    name: "coderabstract",
    age: 17

  }
})