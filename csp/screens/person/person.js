 'use strict';

 angular.module('app')
 
 .controller('PersonController', ['$scope','PersonSrvc', function($scope,PersonSrvc) {
  		console.log("Пловобок");
  		$scope.persons = PersonSrvc.getAll;
  		
  		$scope.columns = [{caption:"Имя",
  							property:"Name"},
							{caption:"Возраст",
  							property:"Age"},
							{caption:"Город",
  							property:"City"},
							{caption:"Адрес",
  							property:"Address"},
							{caption:"Возраст",
  							property:"Status.Name"}
						];
  }]);