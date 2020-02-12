// 周一----周五： 6:50 AM 提醒对方起床， 9：30 PM提醒对方回宿舍
    var appElement = document.querySelector('[ng-controller=chatSenderController]');
    var $scope = angular.element(appElement).scope();
    setInterval(function(){
        var localTime = new Date();
        if(localTime.getDay() < 6){ //非周末
            var localTimeString = localTime.toLocaleTimeString();
            if(localTimeString.indexOf('上午6:49:00') === 0){
                $scope.editAreaCtn = "6.50了，你该起床了！";
                $scope.sendTextMessage();
            }else if(localTimeString.indexOf('上午6:54:00') === 0){
                $scope.editAreaCtn = "今天又是新的一天，祝你好运！";
                $scope.sendTextMessage();
            }else if(localTimeString.indexOf('下午9:28:00') === 0){
                $scope.editAreaCtn = "时间快到9:30了，你该回去了！";
                $scope.sendTextMessage();
            }
        }
    },1000);
