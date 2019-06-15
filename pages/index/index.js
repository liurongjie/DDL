var app = getApp();
var common = require("../../common/index.js");

Page({

  data: {
    sharedata: {},
    things: [


    ]
  },
  onLoad: function (options) {

    if (options.way) {
      wx.navigateTo({
        url: '/pages/pick/pick?title=' + options.title +
          '&' + 'dates=' + options.dates +
          '&' + 'times=' + options.times +
          '&' + 'kind=' + options.kind +
          '&' + 'importance=' + options.importance +
          '&' + 'context=' + options.context +
          '&' + 'way=' + 2,
      })
    } else {
  


    }




  },


  onReady: function () {
    this.setData({
      things: app.globalData.newthings,
    });
    
    var tile = this.getnowdatetime();
    wx.setNavigationBarTitle({
      title: tile,
    })

  },
  getnowdatetime: function () {

    var now = new Date();
    var day = now.getDay();
    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = weeks[day];
    var month = now.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var date = now.getDate(); //获取当前日(1-31)
    return month + '月' + date + '日' + '' + week;
  },
  onShow: function () {
    
    this.setData({
      things: app.globalData.newthings,
    });
  },


  sharedata: function (e) {
    this.setData({
      sharedata: e.currentTarget.dataset.index,
    })
    var sharedata = this.data.sharedata;
    wx.navigateTo({
      url: '/pages/share/share?title=' + sharedata.title +
        '&' + 'dates=' + sharedata.dates +
        '&' + 'times=' + sharedata.times +
        '&' + 'kind=' + sharedata.kind +
        '&' + 'importance=' + sharedata.importance +
        '&' + 'context=' + sharedata.context,
    })
  },
  deletelong: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.index.id;
    var newthings = [];

    var deletething = "";

    wx.showModal({
      title: '是否删除该DDL~',
      content: '删除后不可恢复哦',
      success: function (res) {
        if (res.confirm) {
          
          for (var i = 0; i < app.globalData.iddata.length; i++) {
            if (id == app.globalData.iddata[i].id) {
              deletething = app.globalData.iddata[i];
              break;
            }
            // else {
            //   newthings.push(app.globalData.iddata[i]);
            // }
          }
        
        
          for (var i = 0; i < app.globalData.data.length; i++) {
            
            if (deletething.title == app.globalData.data[i].title) {

            }
            else {
              newthings.push(app.globalData.data[i]);
            }
          }
          app.globalData.data = newthings;
          app.getdataid();
          app.order();
          that.setData({
            things: app.globalData.newthings,
          })

        } else { //这里是点击了取消以后
      
        }
      }
    })
   
  },
  goto: function () {
    
    wx.navigateTo({
      url: '/pages/pick/pick',
    })
  },
  godetail: function (e) {
    var data = e.currentTarget.dataset.index;
    common.data.title = data.title;
    common.data.dates = data.dates;
    common.data.times = data.times;
    common.data.kind = data.kind;
    common.data.importance = data.importance;
    common.data.context = data.context;
    wx.navigateTo({
      url: '/pages/pick/pick?title=' + data.title +
        '&' + 'dates=' + data.dates +
        '&' + 'times=' + data.times +
        '&' + 'kind=' + data.kind +
        '&' + 'importance=' + data.importance +
        '&' + 'context=' + data.context +
        '&' + 'id=' + data.id +
        '&' + 'way=' + 0


      ,
    })


  }


}) //