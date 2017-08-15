//index.js
Page({
  data: {
     basic:{},
     daily:[],
     week:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
     day:0
  },
  onLoad: function () {
      var day = new Date().getDay();
      this.setData({
        day:day
      })
      var that = this;
 

      wx.getLocation({
        success:function(res){
          var lat = res.latitude;
          var lon = res.longitude;
          wx.request({
            url: 'http://api.map.baidu.com/geocoder/v2/?location='+lat+','+lon+'&output=json&pois=1&ak=WUgBFe3vbFidtq6Tz2tjrSFIdTnYVUYa',
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
              var city = res.data.result.addressComponent.city.slice(0,-1);
              var url = "https://free-api.heweather.com/v5/forecast?key=ed8f951a0af24c628b100185f5a76bf8&city="+city;
                  wx.request({
                    url: url,
                    header: {
                        'content-type': 'application/json'
                    },
                    success: function(res) {
                      var d = res.data['HeWeather5'][0];
                      that.setData({
                         basic:d.basic,
                         daily:d['daily_forecast']
                      })
                      console.log(that.data)
                    }
                  })

                  

            }
          })
        }
      })
  }
})
