Page({
  clickInput(e){
    console.log("输入内容了...")
    console.log(e.detail.value)

    if(e.detail.value.length <= 0){
      console.log("肖莉把心给了我")
    }
  },
  clickFocus(e){
    console.log("聚焦")
    console.log(e)

  },
  clickBlur(e){
    console.log("离焦")
    console.log(e)
  }
})