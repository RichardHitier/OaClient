var app = angular.module("oaApp",[]);


var agendadescFake={
    data:{
        title: "waiting for agenda title", 
        uid: "no uid"}
};

app.controller('oaCtl', function($scope, $http){
    $scope.agendadesc=agendadescFake;
    $scope.show=function(){
        $scope.agendadesc=agendadescFake;
        $http.get('/api/agendadesc').success(function(data){
            $scope.agendadesc=data;
        })
    };
});
