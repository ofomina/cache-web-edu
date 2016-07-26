 'use strict';

 angular.module('app')
 
 .controller('PersonController', ['$scope','PersonSrvc', function($scope,PersonSrvc) {
  		console.log("Пловобок");
  		$scope.persons = PersonSrvc.getAll;
  		
  		$scope.columns = [{caption:"Имя",
  							property:"Name",
  							valuer:""},
							{caption:"Возраст",
  							property:"Age",
  							value:""},
							{caption:"Город",
  							property:"City",
  							value:""},
							{caption:"Адрес",
  							property:"Address",
  							value:""},
							{caption:"Возраст",
  							property:"Status.Name",
  							value:""}
						];
  }]);