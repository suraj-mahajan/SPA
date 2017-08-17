define(['angular','angular-route','uibootstrap','indexedDB'],function () {

  var app = angular.module("myApp", ['ngRoute','xc.indexedDB','ui.bootstrap']);


 app.config(function ($indexedDBProvider) {
    $indexedDBProvider
      .connection('example5')
      .upgradeDatabase(3, function(event, db, tx){
        var objStore = db.createObjectStore('UserMaster', {keyPath: 'Id',autoIncrement : true });
        objStore.createIndex('name_idx', 'name', {unique: false});
        objStore.createIndex('age_idx', 'age', {unique: false});
        objStore.createIndex('EmailId_idx', 'EmailId', {unique: false});
        objStore.createIndex('MobileNumber_idx', 'MobileNumber', {unique: false});
        
        var objStore = db.createObjectStore('LaptopMaster', {keyPath: 'Id',autoIncrement : true });
        objStore.createIndex('name_idx', 'name', {unique: false});
        objStore.createIndex('RAM_idx', 'RAM', {unique: false});
        objStore.createIndex('OS_idx', 'OS', {unique: false});
        objStore.createIndex('HDD_idx', 'HDD', {unique: false});
      });
  });


  app.config(['$routeProvider', '$controllerProvider', '$provide', function ($routeProvider, $controllerProvider, $provide) {
      
      app.register = {
          controller: $controllerProvider.register,
          factory: $provide.factory
      };
      
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
      
      $routeProvider
          .when("/user", {
              templateUrl: "usermastertpl.html", controller: "usermasterCtrl",
              resolve: resolveController(["usermasterCtrl"])
          })
          //usermastertpl.html
          .when("/laptop", {
              templateUrl: "laptopMastertpl.html", 
              controller: "laptopCtrl",
              resolve: resolveController(["laptopCtrl"])
          });
        
  }]);

  angular.element(document).ready(function () {
      angular.bootstrap(document, ['myApp']);
  });

  return app;
});
