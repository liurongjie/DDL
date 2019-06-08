Page({
  data: {
    touchStartPageX: [],
    scrollLeft: 0,
    isNeedAddClassifyButton: true,
    things: [
      {
        id: 0,
        scrollLeft: 0,
      },
      {
        id: 1,
        scrollLeft: 0,
      },
      {
        id: 2,
        scrollLeft: 0,
      },
      {
        id: 3,
        scrollLeft: 0,
      },
      
    ]
  },

  onReady: function () {
    var touchStartPageX = [];
    for (var i = 0; i < this.data.things.length; i++) {
      touchStartPageX.push(0);
    }
    this.setData({
      touchStartPageX: touchStartPageX,
    })
  },
  _touchStart: function (e) {
    var i = e.currentTarget.dataset.index;
    var touchStartPageX = this.data.touchStartPageX;
    touchStartPageX[i] = e.changedTouches[0].pageX;
    this.setData({
      touchStartPageX: touchStartPageX,
    })
  },
  /**
   * 手指触摸结束
   */
  _touchEnd: function (e) {
    //return ;
    var i = e.currentTarget.dataset.index;
    var touchStartPageX = this.data.touchStartPageX;

    var things = this.data.things;
    let touchEndPageX = e.changedTouches[0].pageX,
      offSetStartToEnd = touchEndPageX - touchStartPageX[i];
    if (offSetStartToEnd < 35 & offSetStartToEnd > -35) {
      return;
    };
    if (offSetStartToEnd > 35) {
      if (touchStartPageX[i] === 0) return;

      things[i].scrollLeft = 0;
      this.setData({
        things: things,
      });
    };
    if (offSetStartToEnd < -35) {
      things[i].scrollLeft = this.data.isNeedAddClassifyButton ? 120 : 60;
      this.setData({
        things: things,
      })
    }
  },
  /**
   * 点击删除按钮
   */
  _deleteTouchEnd: function (e) {
    let touchEndPageX = e.changedTouches[0].pageX,
      offSetStartToEnd = touchEndPageX - this.data.touchStartPageX;
    if (offSetStartToEnd < 10 & offSetStartToEnd > -10) {
      this.triggerEvent('delete', {});
    };
    return;
  },
  /**
   * 点击设置按钮
   */
  _setTouchEnd: function (e) {
    let touchEndPageX = e.changedTouches[0].pageX,
      offSetStartToEnd = touchEndPageX - this.data.touchStartPageX;
    if (offSetStartToEnd < 10 & offSetStartToEnd > -10) {
      this.triggerEvent('set', {});
    };
    return;
  },
  //  点击时间组件确定事件  
  goto:function(){
    console.log("进入");
    wx.navigateTo({
      url: '/pages/pick/pick',
    })
  }


})// 
