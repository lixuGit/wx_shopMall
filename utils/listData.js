function formatListData() {
  var obj = {
    list: [
      {
        id: 'rexiao',
        banner: '../../../images/c2.png',
        cate: '热销',
        detail: [
          {
            name: '商品a',
            thumb: '../../../images/c2.png',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          },{
            name: '商品b',
            thumb: '../../../images/c3.png',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          },{
            name: '商品c',
            thumb: '../../../images/c2.png',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          },{
            name: '商品d',
            thumb: '../../../images/c2.png',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }
        ]
      },
      {
        id: 'zuhe',
        banner: '',
        cate: '精选组合',
        detail: [
          {
            name: '商品a',
            thumb: '../../../images/c5.png',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品b',
            thumb: '../../../images/c6.png',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品c',
            thumb: '../../../images/c7.png',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品d',
            thumb: '../../../images/c8.png',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          },
          {
            name: '商品e',
            thumb: '../../../images/c9.png',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }
        ]
      },
      {
        id: 'xiaohe',
        banner: '',
        cate: '精选小盒',
        detail: [
          {
            name: '商品a',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品b',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品c',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品d',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }
        ]
      },
      {
        id: 'dahe',
        banner: '',
        cate: '精选大盒',
        detail: [
          {
            name: '商品a',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品b',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品c',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品d',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }
        ]
      },
      {
        id: 'guowei',
        banner: '',
        cate: '果味',
        detail: [
          {
            name: '商品a',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品b',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品c',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品d',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }
        ]
      },
      {
        id: 'shucai',
        banner: '',
        cate: '蔬菜',
        detail: [
          {
            name: '商品a',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品b',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品c',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品d',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }
        ]
      },
      {
        id: 'chaohuo',
        banner: '',
        cate: '炒货',
        detail: [
          {
            name: '商品a',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品b',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品c',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }, {
            name: '商品d',
            thumb: '',
            price: '10.00',
            mouth: '10',
            goodRate: '98'
          }
        ]
      },
      
    ],
    attr: {
      month: "月售",
      favorable_rate: '好评率',
      part: "份"
    }
  };
  return obj;
}

function userInfoData() {
  var obj = {
    personalInfo: [
      {
        title: '我的钱包',
        imgUrl: '../../../images/qb.png'
      },{
        title: '我的发票',
        imgUrl: '../../../images/fp.png'
      },{
        title: '我的卡券',
        imgUrl: '../../../images/kq.png'
      },{
        title: '账户与安全',
        imgUrl: '../../../images/zhyg.png'
      },{
        title: '我的成长值',
        imgUrl: '../../../images/qb.png'
      },{
        title: '我的积分',
        imgUrl: '../../../images/fp.png'
      },{
        title: '我的级别',
        imgUrl: '../../../images/kq.png'
      },{
        title: '我的消息',
        imgUrl: '../../../images/zhyg.png'
      },{
        title: '我的地址',
        imgUrl: '../../../images/qb.png'
      },{
        title: '收藏店铺',
        imgUrl: '../../../images/fp.png'
      }
    ],
    orderStatus:[
      {
        title: '待付款',
        imgUrl: '../../../images/dfk.png',
        initNum: 0
      },{
        title: '待收货',
        imgUrl: '../../../images/dpl.png',
        initNum: 0
      },{
        title: '已完成',
        imgUrl: '../../../images/dsh.png',
        initNum: 0
      },{
        title: '退款/售后',
        imgUrl: '../../../images/tksh.png',
        initNum: 0
      }
    ],
    contact: '联系我们'
  }
  return obj;
}

module.exports = {
  formatListData: formatListData,
  userInfoData: userInfoData
}