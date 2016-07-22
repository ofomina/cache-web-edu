var treeModule = angular.module('ui.tree',[]);

treeModule.directive('tree',function($scope,$http){
	$scope.person=[];
	$scope.loadPerson=function(){
		$http({method:'GET',url:getPersons})

	};
});