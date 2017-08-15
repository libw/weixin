App({
    onLaunch:function(){
    	//小程序初始化
    	console.log('onlaunch');
    },
    onShow:function(){
    	console.log('小程序显示')
    },
    onHide:function(){
    	console.log('小程序隐藏')
    },
    num:1000,
   	getDate:function(){
   		//2016-12-5
   		return [
   			new Date().getFullYear(),
   			new Date().getMonth()+1,
   			new Date().getDate()
   		].join('-');
   	}
})

var app = getApp()
console.log(app.num)
console.log(app.getDate())