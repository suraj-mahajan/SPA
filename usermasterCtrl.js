define(['app','AddCtrl'], function (myApp) {

 myApp.register.controller('usermasterCtrl',function($http,$scope,$uibModal,$indexedDB){
  
    var OBJECT_STORE_NAME = 'UserMaster';  
   var myObjectStore = $indexedDB.objectStore(OBJECT_STORE_NAME);
   
   
   $scope.AddNew=function(user)
   {
        var modalInstance = $uibModal.open({
                templateUrl: 'add.html',
                controller: 'AddCtrl',
                resolve: {
                    user: function(){ return user }
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
                templateUrl: 'add.html',
                controller: 'AddCtrl',
                resolve: {
                    user: function(){ return um }
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
