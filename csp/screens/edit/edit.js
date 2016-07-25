 'use strict';

 angular.module('app')
 .controller('PersonEdit', ['$scope','StatusSrvc', function($scope,StatusSrvc) {
  		console.log("plovobok");
  
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