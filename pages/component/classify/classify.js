// pages/component/classify/classify.js
var listData = require('../../../utils/listData.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      { title: '热销', id: 'rexiao'},
      { title: "精选组合", id: 'zuhe'},
      { title: "精选小盒", id: "xiaohe"},
      { title: "精选大盒", id: 'dahe'},
      { title: '果味', id: 'guowei' },
      { title: '蔬菜', id: 'shucai' },
      { title: '炒货', id: 'chaohuo' },
      { title: '点心', id: 'dianxin' },
      { title: '粗茶', id: 'cucha' },
      { title: '淡饭', id: 'danfan' }
    ],
    currentId: 0,
    detail: [],
    isScroll: false,
    toView: 'rexiao',
    attribute: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      detail: listData.formatListData().list,
      attribute: listData.formatListData().attr
    })
    console.log(this.data.detail);
  },
  // 点击左侧选项触发
  switchTab: function(e) {
      var that = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        that.setData({
          toView: e.target.dataset.id,
          currentId: e.target.dataset.index
        })
      },0)
      
      console.log(this.data.isScroll);
  },

  // 滚动时触发
  scroll: function(e) {
    console.log(e);
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
  
  }
})