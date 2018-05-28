// pages/component/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: {
      id: 1,
      image: '../../../images/goods1.png',
      title: '新鲜梨花带雨',
      price: 0.01,
      stock: '有货',
      detail: '这里是梨花带雨详情。',
      parameter: '125g/个',
      service: '不支持退货'
    },
    tabList: [
      {
        id: 0,
        title: '商品详情'
      },{
        id: 1, 
        title: '产品参数'
      },{
        id: 2,
        title: '售后保障'
      }
    ],
    currentIndex: 0,
    goodsNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  currentTab: function(e) {
    const index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      currentIndex: index
    })
  },
  addCount: function() {
    let num = this.data.goodsNum;
    num++;
    this.setData({
      goodsNum: num
    })
  },
  subCount: function() {
    let num = this.data.goodsNum;
    parseInt(num) > 0 ? num-- : (num = 0);
    this.setData({
      goodsNum: num
    })
  },
  addToCart: function(e) {
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