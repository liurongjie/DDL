Page({
  data: {
    hidemiddle:true,
    items: [
      { id: 0, value: '学习', checked: true },
      { id: 1, value: '工作', checked: false },
      { id: 2, value: '比赛', checked: false },
      { id: 3, value: '生活', checked: false },
      { id: 4, value: '其他', checked: false },
    ],
    dates: '2016-11-08',
    times: '12:00',
    
    index: 0,

    title:'',
    kind:0,
    importance:true,
    context:'',
    

    
  },

  onReady: function () {
    var myDate = new Date();
    var year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var month = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
    var date = myDate.getDate();        //获取当前日(1-31)
    this.setData({
      dates: year + '-' + month + '-' + date,
    })
    var hour = myDate.getHours();       //获取当前小时数(0-23)
    var minute = myDate.getMinutes();     //获取当前分钟数(0-59)
    this.setData({
      times: hour + ':' + minute,
    })


  },
  //  点击时间组件确定事件  
  bindTimeChange: function (e) {
    console.log("谁哦按")
    this.setData({
      times: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var items=this.data.items;
    for (var i = 0; i < items.length;i++){
      if(e.detail.value.length!=0){
        if (items[i].id == e.detail.value[e.detail.value.length-1]) {
          items[i].checked = true;
          console.log(items[i].id)
        }
        else {
          items[i].checked = false;
        }
      }
      else{
        items[i].checked = false;
      }
      
    }
    this.setData({
      items:items,
      kind: e.detail.value[e.detail.value.length - 1],
    })
    
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      importance:e.detail.value,
    })
  },
  changehide:function(){
    var hide=!this.data.hidemiddle;
    this.setData({
      hidemiddle:hide,
    })
  },
  bind1: function (e) {
    this.setData({
      title: e.detail.value,
    })
    console.log(this.data.title)
  },
  bind2:function(e){
    this.setData({
      context: e.detail.value,
    })
    console.log(this.data.context)
  },
  createDDL:function(){
    if(this.data.title){
      console.log(this.data.title);
      console.log(this.data.dates)
      console.log(this.data.times)
      console.log(this.data.kind)
      console.log(this.data.importance)
      console.log(this.data.context)
    }
    else{
      wx.showToast({
        title: 'DDL为空',
        icon:"none",
        duration:1000,
      })
    }
    
  }

})