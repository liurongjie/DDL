// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'和根基一起吃饭',
    dates:'2019-06-08',
    times:'18:00',
    kind: 0,
    importance: '',
    way: '',



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.title) {
      console.log("haha")
      this.setData({
        title: options.title,
        dates: options.dates,
        times: options.times,
        kind: options.kind,
        importance: options.importance,
        context: options.context,
      })


    }
    else {
      this.setData({
        way: 1,
      })
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '新的DDL请接收', // 转发后 所显示的title
      path: '/pages/try/try?title=' + this.data.title +
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
})