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
              })
              .state('edit.item',{
              	url:'/:id',
              	controller:'PersonEdit',
              	templateUrl:'screens/edit/edit.html'
              })
              .state('addChild',{
              	url:'/addChild/:id',
              	controller:'PersonEdit',
              	templateUrl:'screens/addChild/addChild.html'
              });
              
      //$locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise("/person");
      
  }])
  

