 'use strict';

 angular.module('app')
 .controller('AddChildController', ['$scope','$window','$state','StatusSrvc','PersonSrvc', function($scope,$window,$state,StatusSrvc,PersonSrvc) {
  		console.log("plovobok");
  		$scope.object = {};
  		$scope.id = $state.params.id;
  		
  		$scope.save = function(){
  			console.log('goTo PersonSrvc');
  			PersonSrvc.save($scope.object);
        $window.location.href= '#/person';
  		};

  		if ($scope.id) {
  			   $scope.object.Parent = $scope.id;
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