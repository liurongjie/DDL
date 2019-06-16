//app.js

App({
  onLaunch: function () {

    var information = wx.getStorageSync('information');
    console.log(information)
    if (information) {
      this.globalData.userid = information;
      this.getdata();
    }










  },
  getdata: function () {
    var that = this;
    wx.request({
      url: 'https://xiaoyibang.top:8003/ddl/getthings',
      data: {
        'userid': this.globalData.userid,
      },
      success: (res) => {
        console.log(res.data)

        var data = [];
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].thing__delete==0){
            var middle = {};
            middle.id = res.data[i].thing_id;
            middle.title = res.data[i].thing__title;
            middle.dates = res.data[i].thing__dates;
            middle.times = res.data[i].thing__times;
            middle.kind = res.data[i].thing__kind;
            middle.context = res.data[i].thing__context;
            middle.importance = res.data[i].thing__importance;
            data.push(middle);

          }
         
        }

        that.globalData.data = data;
        that.order();
        console.log(that.globalData.data);

      }
    })

  },
  onHide: function () {
    console.log("onhide")
    wx.setStorage({
      key: 'data',
      data: this.globalData.data,
    })

  },



  getnowdate: function () {
    var myDate = new Date();
    var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var date = myDate.getDate(); //获取当前日(1-31)
    return year + '-' + month + '-' + date;

  },
  getweek: function (year, month, date) {
    if (month == 1 || month == 2) {
      month += 12;
      year--;
    }
    var iWeek = (date + 2 * month + 3 * (month + 1) / 5 + year + year / 4 - year / 100 + year / 400) % 7;
    return iWeek;
  },

 

  order: function () {

    







    var things = this.globalData.data;

    var newthings = [];
    var judge = true;
    var middle = [];//数据
    var middle1 = {};//这是日期
    var oldmidlle = {};
    for (var i = 0; i < things.length; i++) {
      if (judge) {

        if (i == things.length - 1) {

          middle.push(things[i]);


          middle1.date = middle[0].dates.substring(5);
          middle1.datediff = this.datediff(this.globalData.nowdate, middle[0].dates);
          // middle1.week=this.iWeek()

          middle1.data = middle;
          newthings.push(middle1);

        }
        else {
          middle.push(things[i])
          oldmidlle = things[i];
          judge = false;
        }
      }
      else {
        if (i == things.length - 1) {
          if (things[i].dates == oldmidlle.dates) {
            middle.push(things[i]) 
            middle1.date = middle[0].dates.substring(5);
            middle1.datediff = this.datediff(this.globalData.nowdate, middle[0].dates);

            middle1.data = middle;
            newthings.push(middle1);

          }
          else {
            middle1.date = middle[0].dates.substring(5);
            middle1.datediff = this.datediff(this.globalData.nowdate, middle[0].dates);
            middle1.data = middle;
            newthings.push(middle1);
            middle = [];
            middle1 = {};
            middle.push(things[i]);
            middle1.date = middle[0].dates.substring(5);
            middle1.datediff = this.datediff(this.globalData.nowdate, middle[0].dates);
            middle1.data = middle;
            newthings.push(middle1);
          }
        }
        else {
          if (things[i].dates == oldmidlle.dates) {
            middle.push(things[i]);
          }
          else {
            middle1.date = middle[0].dates.substring(5);
            middle1.datediff = this.datediff(this.globalData.nowdate, middle[0].dates);
            middle1.data = middle;
            newthings.push(middle1);
            middle = [];
            middle1 = {};
            middle.push(things[i])
            oldmidlle = things[i];

          }

        }

      }

    }
    this.globalData.newthings = newthings;



  },

  datediff: function (sDate1, sDate2) {
    var aDate, oDate1, oDate2, iDays
    aDate = sDate1.split("-")
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]) //转换为9-25-2017格式 
    aDate = sDate2.split("-")
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数 
    return iDays
  },


  globalData: {
    userid: '',
    nowdate: '',
    data: [
    ],
    things: [],
    newthings: [],


    



  }
})