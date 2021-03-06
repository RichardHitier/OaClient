var app = angular.module("oaApp",[]);


var agendadescFake={
    data:{
        title: "waiting for agenda title", 
        uid: "no uid"},
    token:{
       access_token: '0b3ba66f7404b8d57c92008e46e8e427',
       expires_in: 901 }
};

var agendaevtsFake= {
    data:
    [ { uid: '83916262',
       link: 'http://openagenda.com/event/cecilia-a-la-claranda',
       updatedAt: '2015-09-30 14:02:52',
       spacetimeinfo: 'La Clanranda, Saturday, October 3, at 21:30',
       title: {'fr': 'La Clanranda'}},
     { uid: '6280439',
       link: 'http://openagenda.com/event/serge-lopez-francois-petit',
       updatedAt: '2015-09-30 14:26:00',
       spacetimeinfo: 'from Friday, October 2, to Sunday, October 4, at Espace Cathare',
       image: null,
       imageThumb: null,
       title: {'fr': 'Serg Logez'}},
     { uid: '84301257',
       link: 'http://openagenda.com/event/mawaran-quartet',
       updatedAt: '2015-10-16 20:13:19',
       spacetimeinfo: 'La Claranda, Saturday, October 17, at 21:30',
       image: null,
       imageThumb: null,
       title: {'fr': 'mawaran quartet'}},
    ]
};

app.controller('oaCtl', function($scope, $http){
    $scope.agendadesc=agendadescFake;
    $scope.agendaevts=agendaevtsFake;
    $scope.showToken=function(){
        $scope.evtsDisplay=false;
        $scope.formDisplay=false;
        $scope.tokenDisplay=true;
    };
    $scope.showForm=function(){
        $scope.tokenDisplay=false;
        $scope.evtsDisplay=false;
        $scope.formDisplay=true;
    };
    $scope.showEvts=function(){
        $scope.tokenDisplay=false;
        $scope.formDisplay=false;
        $scope.evtsDisplay=true;
        $scope.waiting="waiting for agenda description"; // TODO: put in get.waiting
        $http.get('/api/agendadesc').success(function(data){
            $scope.agendadesc=data;
            $scope.waiting="";
        })
        $scope.waiting="waiting for agenda events"; // TODO: put in get.waiting
        $http.get('/api/agendaevts').success(function(data){
            $scope.agendaevts=data;
        $scope.waiting="";
        })
    };
    $scope.addEvt=function(){
        $scope.waiting="adding new evt";
        $http.post('/api/addevt', $scope.agendaevt)
            .success(function(data){
                $scope.agendaevt={};
                $scope.waiting='';
            });
    };
});
