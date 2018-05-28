// pages/component/person/person.js
var userInfoData = require("../../../utils/listData.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    orderStatus: [],
    personalInfo: [],
    contact: '联系我们'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      orderStatus: userInfoData.userInfoData().orderStatus,
      personalInfo: userInfoData.userInfoData().personalInfo
    });
    console.log(this.data.orderStatus);
    // 获取用户个人信息
    app.getUserInfo(function(userInfo) {
      that.setData({
        userInfo: userInfo
      })
     
    })
  },

  tell: function(){
    const selt = this;
    // 拨打电话
    wx.makePhoneCall({
      phoneNumber: '888888888888',
    })
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