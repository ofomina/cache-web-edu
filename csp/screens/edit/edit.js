 'use strict';

 angular.module('app')
 .controller('PersonEdit', ['$scope','$window','$state','StatusSrvc','PersonSrvc', function($scope,$window,$state,StatusSrvc,PersonSrvc) {
  		console.log("plovobok");
  		$scope.object = {};
  		$scope.id = $state.params.id;
  		
  		$scope.save = function(){
  			console.log('goTo PersonSrvc');
  			PersonSrvc.save($scope.object);
  		};

  		if ($scope.id) {
  			PersonSrvc.get($scope.id).then(
  				function(data,status,headers,config){
  					console.log("good person");
  					$scope.object = data.data;
  					console.log($scope.object);
  				},
  				function(data,status,headers,config){
  					console.log("bad person");
  				}
  			);
		}
		
  		StatusSrvc.getAll().then(
  			function(data,status,headers,config) {
  				$scope.statuses = data.data.list;
  				//console.log(data);
  				console.log("good status");
  			},
  			function(data,status,headers,config) {
  				console.log("bad status");
  			}
  		);
  		
  		$scope.back = function(){
  			console.log('goTo person.html');
  			$window.location.href= '#/person';
  		}; 
  		

  }]);