// pages/home/home.js
Page({
  data: {
    timer: new Date().toLocaleString(),
    showColor: false,
    score: 59,
    movies: ["罗宾汉·起源", "王牌特工·黄金圈"]
  },
  clickSwitch() {
    this.setData({
      showColor : !this.data.showColor
    })

   
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        timer: new Date().toLocaleString()
      })
    }, 1000)
  },
  handlerSwitchScore(){
    this.setData({
      score: this.data.score += 5
    })
    if (this.data.score >= 150) {
      this.data.score = 150
    }
  }


})