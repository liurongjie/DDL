//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    interval:'',
    second:0,
    oldsecond:0,
    list:[
      {
        thing:'吃饭',
        year:2019,
        month:'05',
        day:21,
        hour:21,
        minute:21,
        date:'二',
        day1:2,
        hour1:12,
        minute1:21,


      },
      {
        thing: '吃饭',
        year: 2019,
        month: '05',
        day: 21,
        hour: 21,
        minute: 21,
        date: '二',
        day1: 2,
        hour1: 12,
        minute1: 21,


      },
      {
        thing: '吃饭',
        year: 2019,
        month: '05',
        day: 21,
        hour: 21,
        minute: 21,
        date: '二',
        day1: 2,
        hour1: 12,
        minute1: 21,


      }, {
        thing: '吃饭',
        year: 2019,
        month: '05',
        day: 21,
        hour: 21,
        minute: 21,
        date: '二',
        day1: 2,
        hour1: 12,
        minute1: 21,


      }
      , {
        thing: '吃饭',
        year: 2019,
        month: '05',
        day: 21,
        hour: 21,
        minute: 21,
        date: '二',
        day1: 2,
        hour1: 12,
        minute1: 21,


      }
      , {
        thing: '吃饭',
        year: 2019,
        month: '05',
        day: 21,
        hour: 21,
        minute: 21,
        date: '二',
        day1: 2,
        hour1: 12,
        minute1: 21,


      },
      {
        thing: '吃饭',
        year: 2019,
        month: '05',
        day: 21,
        hour: 21,
        minute: 21,
        date: '二',
        day1: 2,
        hour1: 12,
        minute1: 21,


      },
      {
        thing: '吃饭',
        year: 2019,
        month: '05',
        day: 21,
        hour: 21,
        minute: 21,
        date: '二',
        day1: 2,
        hour1: 12,
        minute1: 21,


      }
    ]
    
  },
  //事件处理函数
 
  onLoad: function () {
    var i=0;
    var that=this;
    setInterval(function(){
      i++;
      that.setData({
        oldsecond:that.data.second,
        second:i,

      })
      

    },1000);
   
  },
  getUserInfo: function(e) {
    
  }

})
