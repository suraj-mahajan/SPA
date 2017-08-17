define(['app'], function (myApp) {

 myApp.register.controller('AddLaptopCtrl',function($scope,$uibModalInstance,$indexedDB,laptop){


   $scope.um=angular.copy(laptop);
   var OBJECT_STORE_NAME = 'LaptopMaster';  
   var myObjectStore = $indexedDB.objectStore(OBJECT_STORE_NAME);
   
   $scope.save=function()
   {
      myObjectStore.upsert($scope.um);
      $uibModalInstance.close(true);
   }
   
 });  
});  
