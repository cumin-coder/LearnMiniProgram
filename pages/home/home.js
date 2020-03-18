// pages/home/home.js
Component({
  methods:{
    clickShowToast(){
      wx.showToast({
        title: 'Loading...',
        icon: 'loading',
        duration: 2000,
        mask: true,
        success:function(){
          console.log("调用成功")
        },
        fail:function(){
          console.log("调用失败")
        },
        complete:function(){
          console.log("完成调用")
        }
      })
    },
    clickShowModal(){
      wx.showModal({
        title: '我是带感情的工程师',
        content: '请输入通向你内心的路径',
        cancelText : "我爱她",
        confirmText: "爱我自己",
        cancelColor: "pink",
        confirmColor: "#f40",
      })
    },
    clickShowLoading(){
      wx.showLoading({
        title: 'loding...',
        mask: true
      })

      setTimeout(()=>{
        wx.hideLoading()
      },2000)
    },
    clickShowActionSheet(){
      wx.showActionSheet({
        itemList: ["相册","相机","中国心","待人礼之","不积跬步无以至千里","不积小流无以成江海"],
        success:function(res){
          switch(res.tapIndex){
            case 4: 
            console.log("不积跬步无以至千里");
            break;
            case 5: 
            console.log("不积小流无以成江海")
            break;
          }
        }
      })
    }
  }
})
