//navBar.js

function statusList() {//定义在组件外部的函数，为了让内部的函数每次能够重新调用
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
    status: statusList(),//调用一次外部函数
    btnChildrenArray: [
      {
        id: 0,
        name: "按钮一",
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
        name: "按钮二",
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
        name: "按钮三",
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
    test1: function () {//data中methods属性的值对应的函数
      console.log('test1234')
    },
    clickTest: function (e) {
      var index = parseInt(e.currentTarget.dataset.index)//可以console.log(e)查看到获取每次点击的索引值
      var listData = this.data.status//这是定义在data中的数组,第一次点击时为外部函数返回的数组
      //当点击第二次的时候,这里的数组值为上一次存储的值(setData方法),即某一个被改变了的值的数组
      var newStatusList = statusList()//这是调用外部函数，返回的数组
      //第二次点击之后,重新变为全部都是false,重点就在这里,每次返回的都是新的数组,即三个false
      if (listData[index] === false) {//我们要判断的数组值的这个数组，一定是data中定义的数组，即listData，不会判断外部函数返回的数组。因为newStatusList，这是每执行一次点击事件，都会重新调用外部函数，所以每一次走到这里时，它的值都是固定的值，都是外部函数返回的值。而data中的status只会调用一次外部函数，所以，他的值时相对固定的，不会再被外部函数改变
        newStatusList[index] = true//此时改变内部调用函数所返回的数组，如果改变的是listData，那下面的setData也要改成listData，这时如果第二次的index值不一样，那么status里第一次被更改的值无法被恢复，所以这也是有两个数组，且其中一个是每一次都会恢复默认值得原因
      } else {
        //console.log("haha")
      }
      this.setData({
        status: newStatusList//status等于方法返回的数组(即被改变的数组)
      })
      //console.log(newStatusList)
      //console.log(status)
    },
  }
})
