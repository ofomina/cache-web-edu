 'use strict';

 angular.module('app')
 .controller('PersonController', ['$scope','PersonSrvc', function($scope,PersonSrvc) {
  		console.log("Пловобок");
  		$scope.Persons = PersonSrvc.GetAll; 

  }]);