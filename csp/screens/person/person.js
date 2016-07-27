 'use strict';

 angular.module('app')
 
 .controller('PersonController', ['$scope','$window','PersonSrvc', function($scope,$window,PersonSrvc) {
  		//console.log("Пловобок");
  		
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
			get: function(parentId, columns){
				//console.log(PersonSrvc);
				return PersonSrvc.getAll(parentId, columns);
			},
			
			add: function(){
				//console.log('фывапроьбю');
				$window.location.href= '#/edit';
			},
			addChild: function(item){
				$window.location.href ='#/addChild/'+item.Id;
			}
			edit: function(person){
				console.log(person);
				$window.location.href= '#/edit/'+person.Id;
			},
            remove: function(person){
				return PersonSrvc.remove(person.Id);
			}
		};
		

  }]);