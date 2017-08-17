 var myApp = angular.module('myApp', ['xc.indexedDB','ui.bootstrap','ui.router']);
 
 myApp.config(function ($indexedDBProvider) {
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
  
  
  myApp.config(function($urlRouterProvider,$stateProvider,$controllerProvider) 
  {
  


  
  $stateProvider
			.state('laptop', {
				name: 'laptop',
				url: '/laptop',
				templateUrl: 'laptopMastertpl.html',
				controller:'laptopCtrl'
			})
			.state('usermaster', {
				name: 'usermaster',
				url: '/usermaster',
				templateUrl: 'usermastertpl.html',
				controller:'usermasterCtrl'
			});

 
  // $routeProvider
  //    .when('/laptop',{
  //        templateUrl: 'laptopMastertpl.html',
//           controller:'laptopCtrl'
  //    })
  //    .when('/user',{
  //        template: '<h1>Test</h1><a href="#/">Back</a>'
  //    })
  //    .otherwise({ 
  //      templateUrl: 'laptopMastertpl.html',
  //        resolve: {
  //          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
  //              return $ocLazyLoad.load('state1'); // Resolve promise and load before view
  //          }]
  //      }
  //    });
  
  // $stateProvider.state(laptopState);
  // $stateProvider.state(userState);
  // $urlServiceProvider.rules.otherwise({ state: 'laptop' });
    
  

});
  
  
  
  myApp.controller('HomeCtrl',function($scope, $window){
    
      $scope.tabs = [
        { title:'User Master', content:'<usermaster></usermaster>' },
        { title:'Laptop Master', content:'<laptopmaster></laptopmaster>' }
      ];
    
  });
