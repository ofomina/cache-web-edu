var treeModule = angular.module('ui.tree',[]);

treeModule.directive('tree', function(){
	return{
		replace: true,
		restrict: 'E',
		templateUrl: 'tree/tree.html',

		scope:{
			get:'='
		},
		controller: ["$scope",function($scope){
				console.log('tree initiated epta!11');
				get().
					success(function(data, status, headers, config){
						console.log('truth branch');
						$scope.data = data;}
					).
					error(function(data, status, headers, config){
						console.log('everything is bad')
					});
		}]
	}	
	}
);
