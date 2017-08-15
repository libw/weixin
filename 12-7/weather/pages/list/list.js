var app = getApp();
Page({
  data: {
    city:app.city,
    hotcity:['上海','北京','广州','深圳','太原'],
    inputCity:''
  },
  onLoad: function () {

  },
  addHot:function(){
    this.setData({
      hotcity:this.data.hotcity.concat([this.data.inputCity]),
      inputCity:''
    })
  },
  changeCity:function(e){    
    this.setData({
      'inputCity':e.detail.value
    })
    console.log(this.data.inputCity);
  },
  selectCity:function(e){
    var c = e.target.id;
    console.log(e.target.id);
     wx.setStorage({
        key:"city",
        data:c
      })
     app.city=c
     wx.redirectTo({url:'../index/index?cc='+c})
  }
})
