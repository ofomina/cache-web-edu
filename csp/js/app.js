angular.module('app', ['ui.router','ui.tree'])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 
    function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider) {

      $stateProvider
              .state('person',{
                url:'/person',
                controller: 'PersonController',
                templateUrl: 'screens/person/person.html'
              });
              
      //$locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise("/person");
  }])
  

