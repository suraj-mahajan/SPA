require.config({
  baseUrl: "",
  
	// alias libraries paths
  paths: {
      'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min',
      'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.min',
      'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
     // 'uirouter':'angular-ui-router.min',
      'uibootstrap':'ui-bootstrap-tpls-2.5.0.min',
      'indexedDB':'indexeddb',
     'AddLaptopCtrl':'AddLaptopCtrl',
     // 'usermasterCtrl':'usermasterCtrl',
      'app': 'app'
  },

  shim: {
     // 'app': ['angular-route'],
    //  'angular-route': ['angular'],
      //'uirouter': ['angular'],
      //'uibootstrap': ['angular'],
      //'indexedDB': ['angular']
      'angular':{'exports':'angular'},
      'angular-route':{deps:['angular']},
      'uibootstrap':{deps:['angular']},
      'indexedDB':{deps:['angular']}
  },

  // kick start application
  deps: ['app']

});
