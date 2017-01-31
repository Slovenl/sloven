var CONFIG = require('../../utils/constant.js')
Page({
  data: {
    storylist:CONFIG.news,
    hidden: true,
    imgUrls: [
      'http://www.slovenl.cn/images/girl2.jpeg',
      'http://www.slovenl.cn/images/girl3.jpeg',
      'http://www.slovenl.cn/images/girl4.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 1000,
    showLoading: false
  },

  onLoad: function () {
    var that = this;
    // wx.request({
    //   url: 'http://www.slovenl.cn/wxdemo/storylist.txt',

    //   header: {
    //     'content-type': 'application/txt'
    //   },
    //   success: function (res) {

    //     var data = res.data;
    //     console.log("=======" + data[0].title)
    //     that.setData({
    //       showLoading: false,
    //       storylist: data
    //     })
    //   }
    // })
  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
