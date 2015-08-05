(function(){
  var app = angular.module('rssApp', ['ionic'])

  app.controller("rssAppController", function($http, $scope) {
    $scope.podcasts = [];
    $http.get("http://clasificaciona.com/?feed=json")
      .success(function(response) {
        console.log(response);
        angular.forEach(response.posts,function(podcast){
          $scope.podcasts.push(podcast);
        });
          
      })
      .error(function(data) {
          console.log("ERROR: " + response);
      });
  
   
  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  
}());
