var servicesModule = angular.module('ServicesModule',[]);
var app = angular.module('app', ['ui.router','ui.tree','ServicesModule'])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 
    function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider) {

      $stateProvider
              .state('person',{
                url:'/person',
                controller: 'PersonController',
                templateUrl: 'screens/person/person.html'

              })
              .state('edit',{
              	url:'/edit',
              	controller:'PersonEdit',
              	templateUrl:'screens/edit/edit.html'
              });
              
      //$locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise("/person");

  }])
  

