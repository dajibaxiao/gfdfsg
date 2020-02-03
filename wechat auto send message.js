{\rtf1\ansi\ansicpg936\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset134 PingFangSC-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // 
\f1 \'d6\'dc\'d2\'bb
\f0 ----
\f1 \'d6\'dc\'ce\'e5\'a3\'ba
\f0  6:50 AM 
\f1 \'cc\'e1\'d0\'d1\'b6\'d4\'b7\'bd\'c6\'f0\'b4\'b2\'a3\'ac
\f0  9
\f1 \'a3\'ba
\f0 30 PM
\f1 \'cc\'e1\'d0\'d1\'b6\'d4\'b7\'bd\'bb\'d8\'cb\'de\'c9\'e1
\f0 \
    var appElement = document.querySelector('[ng-controller=chatSenderController]');\
    var $scope = angular.element(appElement).scope();\
    setInterval(function()\{\
        var localTime = new Date();\
        if(localTime.getDay() < 6)\{ //
\f1 \'b7\'c7\'d6\'dc\'c4\'a9
\f0 \
            var localTimeString = localTime.toLocaleTimeString();\
            if(localTimeString.indexOf('
\f1 \'c9\'cf\'ce\'e7
\f0 6:49:00') === 0)\{\
                $scope.editAreaCtn = "6.50
\f1 \'c1\'cb\'a3\'ac\'c4\'e3\'b8\'c3\'c6\'f0\'b4\'b2\'c1\'cb\'a3\'a1
\f0 ";\
                $scope.sendTextMessage();\
            \}else if(localTimeString.indexOf('
\f1 \'c9\'cf\'ce\'e7
\f0 6:54:00') === 0)\{\
                $scope.editAreaCtn = "
\f1 \'bd\'f1\'cc\'ec\'d3\'d6\'ca\'c7\'d0\'c2\'b5\'c4\'d2\'bb\'cc\'ec\'a3\'ac\'d7\'a3\'c4\'e3\'ba\'c3\'d4\'cb\'a3\'a1
\f0 ";\
                $scope.sendTextMessage();\
            \}else if(localTimeString.indexOf('
\f1 \'cf\'c2\'ce\'e7
\f0 9:28:00') === 0)\{\
                $scope.editAreaCtn = "
\f1 \'ca\'b1\'bc\'e4\'bf\'ec\'b5\'bd
\f0 9:30
\f1 \'c1\'cb\'a3\'ac\'c4\'e3\'b8\'c3\'bb\'d8\'c8\'a5\'c1\'cb\'a3\'a1
\f0 ";\
                $scope.sendTextMessage();\
            \}\
        \}\
    \},1000);}