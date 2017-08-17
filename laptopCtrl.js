

define(['app','AddLaptopCtrl'], function (myApp) {

myApp.register.controller('laptopCtrl',function($http,$scope,$uibModal,$indexedDB){


  console.log("login controller is called");
    var OBJECT_STORE_NAME = 'LaptopMaster';  
   var myObjectStore = $indexedDB.objectStore(OBJECT_STORE_NAME);
   
    function resolveController(names) {
          return {
              load: ['$q', '$rootScope', function ($q, $rootScope) {
                  var defer = $q.defer();
                  require(names, function () {
                      defer.resolve();
                      $rootScope.$apply();
                  });
                  return defer.promise;
              }]
          }
      }
   
   $scope.AddNew=function(laptop)
   {
        var modalInstance = $uibModal.open({
                templateUrl: 'AddLaptop.html',
                controller: 'AddLaptopCtrl',
                resolve: {
                    laptop: function(){ return laptop }
                }

            }).result.then(function (selectedLocale) {
                $scope.GetAll();
            });

   }
   
  
   $scope.GetAll=function()
   {
      myObjectStore.getAll().then(function(results) {  
      $scope.objects = results;
    });
   }
   $scope.edit=function(o)
   {
    var um=angular.copy(o);
          var modalInstance = $uibModal.open({
                templateUrl: 'AddLaptop.html',
                controller: 'AddLaptopCtrl',
                resolve: {
                    laptop: function(){ return um }
                }

            }).result.then(function (selectedLocale) {
                $scope.GetAll();
            });
   }
   $scope.delete=function(o)
   {
      myObjectStore.delete(o.Id);
      $scope.GetAll();
   }
 
  $scope.GetAll();
   

 });  
}); 
