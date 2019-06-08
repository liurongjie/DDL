var app=getApp();

Page({
  
  data: {
    things: [
     
      
    ]
  },

  onReady: function () {
    this.setData({
      things:app.globalData.newthings,
    });
    console.log("thing")
    console.log(this.data.things)
  
  },
  onShow:function(){
    console.log("页面周期");
    this.setData({
      things: app.globalData.newthings,
    });
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
  deletelong:function(e){
    var that=this;
    var id = e.currentTarget.dataset.index.id;
    var newthings=[];
    wx.showModal({
      title: '是否删除该DDL~',
      content: '删除后不可恢复哦',
      success: function (res) {
        if (res.confirm) {
          //console.log(e.currentTarget.dataset.index)
          for(var i=0;i<app.globalData.things.length;i++){
            if(id==app.globalData.things[i].id){

            }
            else{
              newthings.push(app.globalData.things[i]);
            }
          }
          app.globalData.things=newthings;
          app.order();
          that.setData({
            things:app.globalData.newthings,
          })
          console.log("删除后");
          console.log(that.data.things);



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
