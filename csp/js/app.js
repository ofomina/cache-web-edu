angular.module('app', ['ui.router','ui.tree'])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 
    function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider) {

      $stateProvider
              .state('app', {
                  url: '/manager',
                  controller: 'AppController as appCtrl',
                  templateUrl: 'partial_app.html',
                  abstract: true,
              })
              .state('app.list', {
                  url: '',
                  controller: 'ListController',
                  templateUrl: 'partial_list.html'
              })
              .state('app.item', {
                  url: '/:index',
                  controller: 'ItemController',
                  templateUrl: 'partial_item.html'
              })
              .state('person',{
                url:'/person',
                controller: 'PersonController',
                templateUrl: 'tree/tree.html'
              });
              
      //$locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise("/manager");
  }])
  .factory('Data', [function(){
    var data = [
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'Item 2'}
    ];
    return data;
  }])
  .controller('AppController', ['$scope', function($scope) {
    this.info = 'Info from appCtrl';
  }])
  .controller('ListController', ['$scope', 'Data', function($scope, data) {
    $scope.list = data;
    $scope.newItem = {};
    
    $scope.addNewItem = function(){
        $scope.list.push($scope.newItem);
        $scope.newItem = {};
    }
  }])
  .controller('ItemController', ['$scope', '$state', 'Data', function($scope, $state, data) {
    $scope.item = data[$state.params.index];
  }])
  .controller('PersonController',['$scope', function($scope){

  }]);
