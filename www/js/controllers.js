angular.module('starter.controllers',[])
.controller('DashCtrl', function($ionicPlatform, $scope, $rootScope, $timeout, $ionicLoading, $cordovaNetwork, $log) {
    var mostrar;
 $timeout(function(){ 
   $ionicLoading.show({template: '<p class="item-icon-left">Cargandoooo...<ion-spinner icon="ripple"/></p>'});
   });
   $ionicPlatform.ready(function(){    
   $timeout(function(){
          var offline = $cordovaNetwork.isOffline();
          var online = $cordovaNetwork.isOnline();
          $rootScope.$on('$cordovaNetwork:offline', function( event, networkState){
          mostrar=offline;
          $log.log("Offline"+offline);        
          $ionicLoading.hide();
          $scope.$apply();
          });
          $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
          mostrar= online;
          $log.log("online"+online);
          $ionicLoading.hide();
          $scope.$apply();
          });
      });
    });
   return mostrar;
 })
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when theuy are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
//$scope.$on('$ionicView.enter', function(e) {
  //});
    
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});/*
.controller('syncronized', function ($scope, $http, $ionicLoading) {  
      $scope.loading = false;
        $http.get('/tab/dash').success(function () {
            $ionicLoading.show({template: 'loading'});
            $ionicLoading.hide();
           }).finally(function (){
             $scope.loading = true;
             });
})*/
