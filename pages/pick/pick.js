var app = getApp();


Page({
  data: {
    change:false,//是否更改
    allday:0,
    way: 0,//进入方式0，1，2 点击进入，添加，他人分享
    id: 0,
    hidemiddle: true,
    items: [{
      id: 0,
      value: '学习',
      checked: false
    },
    {
      id: 1,
      value: '工作',
      checked: false
    },
    {
      id: 2,
      value: '比赛',
      checked: false
    },
    {
      id: 3,
      value: '生活',
      checked: false
    },
    {
      id: 4,
      value: '其他',
      checked: false
    },
    ],
    dates: '2016-11-08',
    nowdates: '2016-11-08',
    times: '12:00',
    nowtimes: '12:30',
    index: 0,

    title: '',
    kind: 0,
    importance: true,
    context: '',



  },
  onShareAppMessage: function () {
    return {
      title: '新的DDL请接收', // 转发后 所显示的title
      path: '/pages/index/index?title=' + this.data.title +
        '&' + 'dates=' + this.data.dates +
        '&' + 'times=' + this.data.times +
        '&' + 'kind=' + this.data.kind +
        '&' + 'importance=' + this.data.importance +
        '&' + 'context=' + this.data.context +
        '&' + 'way=' + 2, // 相对的路径
      success: (res) => { // 成功后要做的事情
        console.log("f")
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    }
    console.log("长按分享");
  },

  onReady: function () {

    console.log("无敌")
    var myDate = new Date();
    var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var date = myDate.getDate(); //获取当前日(1-31)
    var hour = myDate.getHours(); //获取当前小时数(0-23)
    var minute = myDate.getMinutes(); //获取当前分钟数(0-59)
    if (this.data.way == 1) {
      this.setData({
        dates: year + '-' + month + '-' + date,
        nowdates: year + '-' + month + '-' + date,
        way: 1,
      })

      this.setData({
        times: hour + ':' + minute,
        nowtimes: hour + ':' + minute,
        way: 1,
      })

    }
    else {
      this.setData({
        nowdates: year + '-' + month + '-' + date,
      })

      this.setData({
        nowtimes: hour + ':' + minute,
      })

    }
    var items = this.data.items;
    for (var i = 0; i < items.length; i++) {
      if (this.data.kind == items[i].id) {
        items[i].checked = true;
        break;

      }

    }
    this.setData({
      items: items,
    })



  },
  onLoad: function (options) {
    if (options.title) {
      this.setData({
        title: options.title,
        dates: options.dates,
        times: options.times,
        kind: options.kind,
        importance: options.importance,
        context: options.context,
        way: options.way,
        id: options.id,

      })


    }
    else {
      this.setData({
        way: 1,
      })
    }

  },
  //  点击时间组件确定事件  
  bindTimeChange: function (e) {
    console.log("谁哦按")
    this.setData({
      times: e.detail.value,
      change:true,
    })

  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value,
      change: true,
    })
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var items = this.data.items;
    if (e.detail.value.length != 0) {
      for (var i = 0; i < items.length; i++) {

        if (items[i].id == e.detail.value[e.detail.value.length - 1]) {
          items[i].checked = true;
          console.log(items[i].id)
        } else {
          items[i].checked = false;
        }


      }
      this.setData({
        items: items,
        kind: e.detail.value[e.detail.value.length - 1],
      })
    } else {
      console.log("空空空空")
      var kind = this.data.kind;
      console.log("kind", kind);
      for (var i = 0; i < items.length; i++) {
        if (items[i].id == kind) {
          items[i].checked = true;
        } else {
          items[i].checked = false;
        }

      }
      this.setData({
        items: items,
      })
    }



  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      importance: e.detail.value,
    })
  },
  changehide: function () {
    var hide = !this.data.hidemiddle;
    this.setData({
      hidemiddle: hide,
    })
  },
  bind1: function (e) {
    this.setData({
      title: e.detail.value,
      change: true,
    })
    console.log(this.data.title)
    console.log(this.data.change)
  },
  bind2: function (e) {
    this.setData({
      context: e.detail.value,
      change: true,
    })
    console.log(this.data.context)
    
  },


  create: function () {
    var that = this;
    wx.request({
      url: 'https://xiaoyibang.top:8003/ddl/createddl',
      data: {
        'userid': app.globalData.userid,
        'title': that.data.title,
        'dates': that.data.dates,
        'allday': 1,
        'times': that.data.times,
        'kind': that.data.kind,
        'importance': that.data.importance,
        'context': that.data.context,

      },
      success: (res) => {
        app.getdata();
        console.log(res.data)

      }
    })
  },
  update: function () {
    var that = this;
    wx.request({
      url: 'https://xiaoyibang.top:8003/ddl/changeddl',
      data: {
        'userid': app.globalData.userid,
        'thingid': that.data.id,
        'allday': 1,
        'title': that.data.title,
        'dates': that.data.dates,
        'allday': 1,
        'times': that.data.times,
        'kind': that.data.kind,
        'importance': that.data.importance,
        'context': that.data.context,

      },
      success: (res) => {
        app.getdata();

        console.log(res.data)

      }
    })

  },

  createDDL: function () {
    var that = this;
    if (this.data.title) {
      if (this.data.nowdates < this.data.dates) {
        wx.showToast({
          title: 'DDL时间应超过当前时间1',
          icon: "none",
          duration: 1000,
        })
      } else {
        if (this.data.nowdates == this.data.dates && this.data.times <= this.data.nowtimes) {
          wx.showToast({
            title: 'DDL时间应超过当前时间2',
            icon: "none",
            duration: 1000,
          })
        } else {
          if (this.data.way != 0) {

            that.create();//添加ddl



            wx.showToast({
              title: 'DDL添加成功',
              icon: "none",
              duration: 1500,
            })
            setTimeout(function () {
              wx.navigateBack({
                delta: 1,
              })

            }, 1000);
           


          }
          else {
            that.update();
            

            wx.showToast({
              title: 'DDL更改成功',
              icon: "none",
              duration: 1500,
            })
            setTimeout(function () {
              wx.navigateBack({
                delta: 1,
              })

            }, 1000);
           }


          
        }




      }

    } else {
      wx.showToast({
        title: 'DDL为空',
        icon: "none",
        duration: 1000,
      })
    }

  }

})