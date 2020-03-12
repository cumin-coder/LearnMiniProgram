Page({
  distanceTop(e) {
    console.log("滚动中...")
    let value = parseInt(e.detail.scrollTop)
    console.log(value)

    if (value === 150) {
      console.log("终于找到你喏！！！")
    }

  }
})