//常量
const TOKEN = "token"

App({
  globalData: {
    token: ''
  },
  onLaunch: function() {
    // 从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    if (this.globalData.token.length !== undefined && token) {
      console.log("缓存进入")
      this.check_token(token)

    } else {
      console.log("登录进入")
      this.login()
    }
  },
  login() {
    wx.login({
      success: (res) => {
        //取出code
        const code = res.code;

        //发送网络请求
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: "post",
          data: {
            code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.token

            //2.存储到全局变量
            this.globalData.token = token

            //3.存储到storage中
            wx.setStorageSync(TOKEN, token)
            console.log(res)
          },
          fail: (err) => {
            console.log(err)
          }
        })
      },
      fial: (err) => {
        console.log(err)
      }
    })
  },
  check_token(token) {
    console.log(token)

    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  }
})