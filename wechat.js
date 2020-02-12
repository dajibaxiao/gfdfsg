/*一年四季每周一到周日的每一天都需要在上午九点钟下午15点钟提醒到一个群里：内容：今日巡检别忘记
说明这种方式的实现存在弊端：
1、电脑微信网页版不能掉线，不能刷新网页。刷新网页了需要重新操作
2、微信网页版跟网页客户端只能有一个在线，所以这种实现方式存在缺陷
实现方法：
第一步：登录网页版微信 https://wx.qq.com
第二步：打开群对话窗口
第三部：打开开发者模式
第四步：在控制台里粘贴以下代码，按下回车键
操作说明：当前微信对话网页不能关掉。如果关掉则设置的代码失效
原理说明：javascript代码设置了每隔一秒查看当前时间是否是 ： 上午9:00:00 或者 下午3:00:00 如果是的话，就发送指定消息 “今日巡检别忘记”，否则的话什么也不做。*/
var appElement = document.querySelector('[ng-controller=chatSenderController]');
var $scope = angular.element(appElement).scope();
setInterval(function(){
    var localTimeString = new Date().toLocaleTimeString();
    if(localTimeString.indexOf('上午9:00:00') === 0 || localTimeString.indexOf('下午3:00:00') === 0){
        $scope.editAreaCtn = "今日巡检别忘记";
        $scope.sendTextMessage();
    }
},1000);