 'use strict';

 angular.module('app')
 .controller('PersonEdit', ['$scope','StatusSrvc','PersonSrvc', function($scope,StatusSrvc,PersonSrvc) {
  		console.log("plovobok");
  		$scope.object = {};
  		$scope.save = function(){
  			console.log('goTo PersonSrvc');
  			PersonSrvc.save($scope.object);
  		};
  		StatusSrvc.getAll().then(
  			function(data,status,headers,config) {
  				$scope.statuses = data.data.list;
  				console.log(data);
  				console.log("good");
  			},
  			function(data,status,headers,config) {
  				console.log("bad");
  			}
  		); 

  }]);