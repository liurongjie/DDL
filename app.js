//app.js
App({
  onLaunch: function() {
    this.order();
  },
  order: function() {

    var things = this.globalData.things.sort(function(a, b) {
      return a.dates > b.dates ? 1 : -1;
    })
    console.log(things)
    var newthings=[];
    var judge=true;
    var middle = [];
    var oldmidlle={};
    for(var i=0;i<things.length;i++){
      if(judge){
        middle.push(things[i])
        oldmidlle=things[i];
        judge=false;
        if(i==things.length-1){
          //newthings.push(things[i]);
          middle.push(things[i]);
          newthings.push(middle);
        }
      }
      else{
        if(i==things.length-1){
          if (things[i].dates == oldmidlle.dates) {
            middle.push(things[i])
            middle = middle.sort(function (a, b) {
              return a.times > b.times ? 1 : -1;
            })
            //newthings=this.mypush(middle,newthings);
            newthings.push(middle)
          }
          else {
            middle = middle.sort(function (a, b) {
              return a.times > b.times ? 1 : -1;
            })
            //newthings = this.mypush(middle, newthings);
            newthings.push(middle);
            middle=[];
            middle.push(things[i]);
            newthings.push(middle);
            //newthings.push(things[i]);

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
            //newthings = this.mypush(middle, newthings);
            newthings.push(middle)
            middle = [];
            middle.push(things[i])
            oldmidlle = things[i];

          }

        }
       
      }

    }
    this.globalData.things=newthings;
    
   
    // for(var i=0;i<newthings.length;i++){
    //   newthings[i].id=i;
    //   newthings[i].scrollLeft=0;
    // }
    // console.log(newthings)
  },
  mypush:function(data,newthings){
    for(var i=0;i<data.length;i++){
      newthings.push(data[i]);
    }
    return newthings;
  },

  globalData: {
    userInfo: null,
    things: [{
        'id':0,
        'scrollLeft':0,
        'title': '和根基一块吃饭',
        'dates': '2016-11-08',
        'times': '12:04',
        'kind': 0,
        'importance': true,
        'context': '吃完饭我们去休息',
      },
      {
        'id': 1,
        'scrollLeft': 0,
        'title': '和根基一块吃饭',
        'dates': '2016-11-09',
        'times': '12:03',
        'kind': 0,
        'importance': true,
        'context': '吃完饭我们去休息',
      },

      {
        'id': 2,
        'scrollLeft': 0,
        'title': '和根基一块吃饭',
        'dates': '2016-11-10',
        'times': '12:02',
        'kind': 0,
        'importance': true,
        'context': '吃完饭我们去休息',
      },
      {
        'id': 2,
        'scrollLeft': 0,
        'title': '和根基一块吃饭',
        'dates': '2016-11-10',
        'times': '12:02',
        'kind': 0,
        'importance': true,
        'context': '吃完饭我们去休息',
      },

      {
        'id': 3,
        'scrollLeft': 0,
        'title': '和根基一块吃饭',
        'dates': '2016-11-08',
        'times': '12:01',
        'kind': 0,
        'importance': true,
        'context': '吃完饭我们去休息',
      },





    ],
  }
})