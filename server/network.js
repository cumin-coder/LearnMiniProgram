export default function networkPromise(option) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: option.url,
      method: option.method || 'get',
      data: option.data || {},
      success: resolve,
      fail: reject
    })
  })
}