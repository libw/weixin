//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    lenX:0,
    lenY:0,
    x:0,
    y:0,
    show:false,
    clientWidth:0,
    clientHeight:0
  },
  //事件处理函数
  start: function(e) {
    var cx = e.touches[0].clientX;
    var cy = e.touches[0].clientY;
    this.setData({
      lenX:cx-e.currentTarget.offsetLeft,
      lenY:cy-e.currentTarget.offsetTop
    })
  },
  move:function(e){
    console.log(e);
    var cx = e.touches[0].clientX;
    var cy = e.touches[0].clientY;
    var x = cx-this.data.lenX;
    var y = cy-this.data.lenY
    if(x<0){
      x =0
    }
    if(y<0){
      y=0
    }
    if(x>this.data.clientWidth){
      x=this.data.clientWidth
    }
    if(y>this.data.clientHeight){
      y=this.data.clientHeight
    }
    this.setData({
      x:x,
      y:y
    })
  },
  showSlide:function(){
      var f = !this.data.show;
      this.setData({
        show:f
      })
  },
  showMask:function(){
    var f = !this.data.show;
      this.setData({
        show:f
      })
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
       that.setData({
         clientWidth:res.windowWidth-40,
         clientHeight:res.windowHeight-40
       })    
      }
    })
  }
})

