// pages/home/home.js
Page({ 
  data: {
    count: 0,
    list: ["流行","新款","精选"]
  },
  increment() {
    this.setData({
      count: this.data.count += 1
    })
  },
  tabBarEvents(e){
    console.log(e)
  },
  clickBtn(){
    //拿到组件对象 通过 this.selectComponent("class/id选择器")
    const cpnData = this.selectComponent("#cpn")

    // 调用my-sel组件内的方法
    cpnData.increment(10)
  }
})