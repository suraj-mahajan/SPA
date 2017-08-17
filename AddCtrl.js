define(['app'], function (myApp) {

 myApp.register.controller('AddCtrl',function($scope,$uibModalInstance,$indexedDB,user){


   $scope.um=angular.copy(user);
   var OBJECT_STORE_NAME = 'UserMaster';  
   var myObjectStore = $indexedDB.objectStore(OBJECT_STORE_NAME);
   
   $scope.save=function()
   {
      myObjectStore.upsert($scope.um);
     $uibModalInstance.close(true);

   }
   
 });  
 
});  
