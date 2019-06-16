// component/shouquan/shouquan.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    sq:false,

  },
  ready: function () {
    if(app.globalData.userid){
      this.setData({
        sq:true,
      })
    }

   


  },
  /**
   * 组件的方法列表
   */
  methods: {

    onGotUserInfo(e) {
      var that=this;
      console.log(e.detail.userInfo)
      if (e.detail.errMsg) {
        app.globalData.nickname = e.detail.userInfo.nickName;
        wx.login({
          success:res=>{
            console.log("微信小程序登陆")
            wx.request({
              url: 'https://xiaoyibang.top:8003/ddl/login',
              data:{
                'nickname':app.globalData.nickname,
                'code':res.code,
              },
              success:(res)=>{
                console.log(res)
                app.globalData.userid=res.data.userid;
                that.setData({
                  sq:true,
                })
                console.log(that.data.sq)
                wx.setStorage({
                  key: 'information',
                  data: res.data.userid,
                })

              }
            })
          }
        })



      } else {

      }
    },






  }
})