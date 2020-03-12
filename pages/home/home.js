//come from ： app.js中的globalData对象
let getInfo = getApp()
let name = getInfo.globalData.name
let age = getInfo.globalData.age
console.log("昵称：" + name)
console.log("年龄：" + age)

/**
 * 注册页面
 * 页面也有属于自己的一个生命周期函数Page(Object)
 */
Page({
  // ---------------------2.初始化数据-----------------------

  data: {
    name: "lzw",
    age: 17,
    students: [{
        name: "lzw",
        age: 17
      },
      {
        name: "lzl",
        age: 17
      },
      {
        name: "xl",
        age: 16
      },
      {
        name: "zmq",
        age: 18
      }
    ],
    count: 0,
    //存放商品信息
    list: []
  },
  puls() {
    //this.setData(Object)
    console.log("Puls")
    this.setData({
      count: this.data.count = 100
    })

  },
  subtract() {
    console.log("Subtract")
    this.setData({
      count: this.data.count -= 1
    })
  },
  getuserinfo(event) {
    console.log(event.detail.rawData)
  },


  // ---------------------1.监听页面的生命周期函数-----------------------

  // 页面被加载完成
  onLoad() {
    console.log("onLoad")

    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res) => {
        console.log(res)
        const data = res.data.data.banner.list
        this.setData({
          list: data
        })
      }
    })

  },

  //页面未加载完成
  onShow() {
    console.log("onShow")

  },

  //页面初次渲染时加载
  onReady() {
    console.log("onReady")

  },

  //离开当前页面时加载
  onHide() {
    console.log("onHide")

  },

  // 切面切换时加载
  onUnload() {
    console.log("onUnload")

  },

  // ---------------------3.监听wxml中相关的一些事-----------------------

  //用户下拉了
  onPullDownRefresh() {
    console.log("用户下拉了")
  },

  //用户下拉 加载到底部
  onReachBottom() {
    console.log("到达底部.. 用户上拉了")
  },

  //页面滚动实时监听
  onPageScroll(obj) {
    console.log(obj)
  }
})