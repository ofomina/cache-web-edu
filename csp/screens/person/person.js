 'use strict';

 angular.module('app')
 
 .controller('PersonController', ['$scope','$location','PersonSrvc', function($scope,$location,PersonSrvc) {
  		console.log("Пловобок");
  		
  		$scope.columns = [{caption:"Имя",
  							property:"Name"},
							{caption:"Возраст",
  							property:"Age"},
							{caption:"Город",
  							property:"City"},
							{caption:"Адрес",
  							property:"Address"},
							{caption:"Статус",
  							property:"Status.Name"}
						];
						
		$scope.editFunctions = {
			get: function(){
				console.log(PersonSrvc);
				return PersonSrvc.getAll();
			},
			
			add: function(){
				$location.href= '/edit';
			},
            remove: function(){
				PersonSrvc.remove;
			}
		};
		

  }]);