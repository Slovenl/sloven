var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
   news:{"title":"小程序的未来不是很光明"}
  },
  onLoad: function (options) {
    
    var that = this;
    var id=options.id;
    wx.request({
      url: 'http://www.jsssha.com/?json=1&page_id=358',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.post);

        if (res.statusCode == 200 && res.data.status == 'ok') {
          var data = res.data;

          that.setData({
            news: data.post,
          })
          WxParse.wxParse('content', 'html', data.post.content, that, 25)
        } else {

        }
      }
    })
  }
})