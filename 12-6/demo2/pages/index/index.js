//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
     imgList:[
        "../../images/1.jpg",
        "../../images/2.jpg",
        "../../images/3.jpg",
        "../../images/4.jpg"
     ],
     danmuList: [
        {
          text: '第 1s 出现的弹幕',
          color: '#ff0000',
          time: 1
        },
        {
          text: '第 3s 出现的弹幕',
          color: '#ff00ff',
          time: 3
        }
      ],
      markers: [{
        latitude: 23.099994,
        longitude: 113.324520,
        name: '山西',
        desc: '我de位置'
      }],
      covers: [{
        latitude: 23.099794,
        longitude: 113.324520,
        iconPath: '../../images/1.jpg',
        rotate: 10
      }, {
        latitude: 23.099298,
        longitude: 113.324129,
        iconPath: '../../images/2.jpg',
        rotate: 90
      }],
      lat:0,
      lot:0
  },
  getAdd:function(){
      var that = this; 
wx.getLocation({
  type: 'wgs84',
  success: function(res) {
    console.log(res)
    var latitude = res.latitude
    var longitude = res.longitude
    var speed = res.speed
    var accuracy = res.accuracy
  },
  fail:function(){
    console.log('失败')
  }
})
      that.setData({markers:[{
            latitude: 37.87059,
            longitude: 112.548879,
            name: '山西',
            desc: '我de位置'
      }] })
  },
  onLoad:function(){
    this.getAdd();
  },
  toTop:function(event){
    console.log(event)
    console.log('顶部')
  },
  toBottom:function(event){
    console.log(event)
    console.log('底部') 
  },
  scrolls:function(){
    console.log('scroll')
  }
})
