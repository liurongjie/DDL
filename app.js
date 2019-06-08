//app.js
App({
  onLaunch: function() {
    
    var nowdate = this.getnowdate();
    this.globalData.nowdate=nowdate;
    this.getdataid();
    this.order();
    
  },

  getnowdate:function(){
    var myDate = new Date();
    var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var date = myDate.getDate(); //获取当前日(1-31)
    return year + '-' + month + '-' + date;
    
  },
  getdataid:function(){
    var data = this.globalData.data;
    for (var i = 0; i < data.length; i++) {
      data[i].id = i;
    }
    this.globalData.iddata = data;

  },

  order: function() {

   this.globalData.things=this.globalData.iddata;





    var things = this.globalData.things.sort(function(a, b) {
      return a.dates > b.dates ? 1 : -1;
    })
   
    var newthings=[];
    var judge=true;
    var middle = [];//数据
    var middle1={};//这是日期
    var oldmidlle={};
    for(var i=0;i<things.length;i++){
      if(judge){
        
        if(i==things.length-1){
         
          middle.push(things[i]);


          middle1.date = middle[0].dates.substring(5);
          middle1.datediff = this.datediff(this.globalData.nowdate, middle[0].dates);

          middle1.data = middle;
          newthings.push(middle1);

        }
        else{
          middle.push(things[i])
          oldmidlle = things[i];
          judge = false;
        }
      }
      else{
        if(i==things.length-1){
          if (things[i].dates == oldmidlle.dates) {
            middle.push(things[i])
            middle = middle.sort(function (a, b) {
              return a.times > b.times ? 1 : -1;
            })
            middle1.date = middle[0].dates.substring(5);
            middle1.datediff = this.datediff(this.globalData.nowdate, middle[0].dates);
            
            middle1.data = middle;
            newthings.push(middle1);
        
          }
          else {
            middle = middle.sort(function (a, b) {
              return a.times > b.times ? 1 : -1;
            })
           
            middle1.date = middle[0].dates.substring(5);
            middle1.datediff = this.datediff(this.globalData.nowdate, middle[0].dates);
            middle1.data=middle;
            newthings.push(middle1);
            middle=[];
            middle1={};
            middle.push(things[i]);
            middle1.date = middle[0].dates.substring(5);
            middle1.datediff = this.datediff(this.globalData.nowdate, middle[0].dates);
            middle1.data = middle;
            newthings.push(middle1);
            

          }
        }
        else{
          if (things[i].dates == oldmidlle.dates) {
            middle.push(things[i]);
          }
          else {
            middle = middle.sort(function (a, b) {
              return a.times > b.times ? 1 : -1;
            })
            
      
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
    console.log("things")
    console.log(things)
    console.log("newthings")
    console.log(newthings)
    this.globalData.newthings=newthings;
    
   
   
  },

  datediff: function (sDate1, sDate2){
    var aDate, oDate1, oDate2, iDays
    aDate = sDate1.split("-")
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]) //转换为9-25-2017格式 
    aDate = sDate2.split("-")
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数 
    return iDays
  },


  globalData: {
    nowdate:'',
    data:[
      {
        'title': '和根基一块吃饭',
        'dates': '2016-11-02',
        'times': '12:01',
        'kind': 0,
        'importance': true,
        'context': '吃完饭我们去休息',
      },
      {
        'title': '和根基一块吃饭',
        'dates': '2016-11-02',
        'times': '12:02',
        'kind': 0,
        'importance': true,
        'context': '吃完饭我们去休息',
      },
      {
        'title': '和根基一块吃饭',
        'dates': '2016-11-08',
        'times': '12:04',
        'kind': 0,
        'importance': true,
        'context': '吃完饭我们去休息',
      },
      {
        'title': '和根基一块吃饭',
        'dates': '2016-11-08',
        'times': '12:04',
        'kind': 0,
        'importance': true,
        'context': '吃完饭我们去休息',
      },

    ],
    iddata:[],
    things: [],
    newthings:[],


    trythings:[
      {
        'date':'06-06',
        'data':[
          {
            'title': '和根基一块吃饭',
            'dates': '2016-11-08',
            'times': '12:04',
            'kind': 0,
            'importance': true,
            'context': '吃完饭我们去休息',
          },
          {
            'title': '和根基一块吃饭',
            'dates': '2016-11-08',
            'times': '12:04',
            'kind': 0,
            'importance': true,
            'context': '吃完饭我们去休息',
          },
          {
            'title': '和根基一块吃饭',
            'dates': '2016-11-08',
            'times': '12:04',
            'kind': 0,
            'importance': true,
            'context': '吃完饭我们去休息',
          },
        ]
      },
      {
        'date': '06-07',
        'data': [
          {
            'title': '和根基一块吃饭',
            'dates': '2016-11-08',
            'times': '12:04',
            'kind': 0,
            'importance': true,
            'context': '吃完饭我们去休息',
          },
          {
            'title': '和根基一块吃饭',
            'dates': '2016-11-08',
            'times': '12:04',
            'kind': 0,
            'importance': true,
            'context': '吃完饭我们去休息',
          },
          {
            'title': '和根基一块吃饭',
            'dates': '2016-11-08',
            'times': '12:04',
            'kind': 0,
            'importance': true,
            'context': '吃完饭我们去休息',
          },
        ]
      },
      {
        'date': '06-08',
        'data': [
          {
            'title': '和根基一块吃饭',
            'dates': '2016-11-08',
            'times': '12:04',
            'kind': 0,
            'importance': true,
            'context': '吃完饭我们去休息',
          },
          {
            'title': '和根基一块吃饭',
            'dates': '2016-11-08',
            'times': '12:04',
            'kind': 0,
            'importance': true,
            'context': '吃完饭我们去休息',
          },
          {
            'title': '和根基一块吃饭',
            'dates': '2016-11-08',
            'times': '12:04',
            'kind': 0,
            'importance': true,
            'context': '吃完饭我们去休息',
          },
        ]
      }
    ]



  }
})