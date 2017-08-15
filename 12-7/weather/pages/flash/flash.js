Page({
  data: {
    
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    setTimeout(function(){
      wx.redirectTo({url:'../index/index'})
    },2000)

  }
})