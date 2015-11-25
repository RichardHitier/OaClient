var app = angular.module("oaApp",[]);



app.controller('oaCtl', function($scope, $http){
    $scope.show=function(){
        console.log('on va montrer l agenda');
        $http.get('/api/agendadesc').success(function(data){
            $scope.agendadesc=data;
        })
    };
});
