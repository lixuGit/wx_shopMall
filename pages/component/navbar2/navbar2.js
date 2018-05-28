// pages/component/navbar2/navbar2.js
function statusList() {
  return [true, false, false];
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    status: [true, false, false],//调用一次外部函数
    btnChildrenArray: [
      {
        id: 0,
        name: "Tab1",
        msg: [
          {
            id: 10,
            msgName: '000',
            methods: 'test1'
          },
          {
            id: 20,
            msgName: '111',
            url: '/bb'
          },
          {
            id: 30,
            msgName: '222',
            url: '/ccaa'
          }
        ]
      },
      {
        id: 1,
        name: "Tab2",
        msg: [
          {
            id: 11,
            msgName: '999',
            url: '/aa'
          },
          {
            id: 12,
            msgName: '111',
            isContact: true
          },
          {
            id: 13,
            msgName: '222',
            url: '/aa'
          }
        ]
      },
      {
        id: 2,
        name: "Tab3",
        status: false,
        msg: [
          {
            id: 21,
            msgName: '888',
            url: '/aa'
          },
          {
            id: 22,
            msgName: '111',
            url: '/aa'
          },
          {
            id: 23,
            msgName: 'test',
            methods: 'test1'
          }
        ]
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTab: function(e) {
      var index = parseInt(e.currentTarget.dataset.index);
      var listData = this.data.status;
      var s = [false, false, false];
      this.setData({
        status: s
      })
      if(listData[index] === false) {
          s[index] = true;
      }else{
        console.log("haha");
      }
      this.setData({
        status: s
      })
      
    }
  }
})
