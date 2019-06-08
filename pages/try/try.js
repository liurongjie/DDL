var app=getApp();

Page({
  
  data: {
    things: [
     
      
    ]
  },

  onReady: function () {
    this.setData({
      things:app.globalData.things,
    });
    console.log("thing")
  
  },

  onShareAppMessage:function(){
    console.log("分享")
    return {
      title: '新的DDL请接收', // 转发后 所显示的title
      path: '/pages/try/try', // 相对的路径
      success: (res) => {    // 成功后要做的事情
       console.log("f")
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    }
    console.log("长按分享");
  },
  deletelong:function(){
    wx.showModal({
      title: '是否删除该DDL~',
      content: '删除后不可恢复哦',
      success: function (res) {
        if (res.confirm) {
          




        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
    console.log("长按删除")
  },
  goto:function(){
    console.log("进入");
    wx.navigateTo({
      url: '/pages/pick/pick',
    })
  }


})// 
