var appElement = document.querySelector('[ng-controller=chatSenderController]');
var $scope = angular.element(appElement).scope();
setInterval(function(){
    var localTimeString = new Date().toLocaleTimeString();
    if( localTimeString.indexOf('下午1:44:00') === 0){
        $scope.editAreaCtn = "健康";
        $scope.sendTextMessage();
    }
},1000);
