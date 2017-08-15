//index.js
var app = getApp();
Page({
    data: {
        imgUrls: [
        '../../images/bg1.jpg',
        '../../images/bg2.jpg'
        ],
        duration: 1000,
        basic:{},
        daily:{},
        now:{},
        aqi:{},
        lat:"",
        lon:"",
        city:app.city,
        day:["今天","明天","后天"],
        suggestion:{}
    },
    // 页面加载
    onLoad:function(option){
       
        var that = this;
        // console.log(this.data.city);
        var cc = option.cc ||this.data.city;
        
        if(cc){
            this.setData({
                city:cc
            })
            this.getWeather(cc);
            console.log('固定');
        }else{
            console.log('定位');
            this.getCity(function(city){
                wx.setStorage({
                  key:"city",
                  data:city
                })
                that.getWeather(city);
            }) 
        }
        
    },
    getCity:function(callback){
        // 获取当前经纬度
        wx.getLocation({
            type: 'wgs84',
            success: function(res) {
                var lat=res.latitude;
                var lon=res.longitude;
                //将当前经纬度转换成城市
                wx.request({
                    url:"https://api.map.baidu.com/geocoder/v2/?location="+lat+","+lon+"&output=json&pois=1&ak=WUgBFe3vbFidtq6Tz2tjrSFIdTnYVUYa",
                    success:function(res){
                        var city=res.data.result.addressComponent.city.slice(0,-1);
                        callback(city);
                    }
                });
            }
        })
    },
    getWeather:function(city){
        // 获取数据
        var that = this;
        wx.request({
            url: 'https://free-api.heweather.com/v5/weather?city='+city+'&key=0d3f140d576d4f989b49bfb99904851c',
            header: {
            'content-type': 'application/json'
            },
            success: function(res) {
                console.log(res);
                var obj=res.data["HeWeather5"][0];
                that.setData({
                    basic:obj.basic,
                    daily:obj["daily_forecast"],
                    now:obj["now"],
                    aqi:obj["aqi"]["city"],
                    suggestion:obj["suggestion"]
                })
            }
        })
    }
});




              
                  








                


              