var treeModule = angular.module('ui.tree',[]);

treeModule.directive('tree', function(){
	return{
		replace: true,
		restrict: 'E',
		templateUrl: 'tree/tree.html',

		scope:{

		},
		controller: ['$scope',function($scope){
				console.log('tree initiated epta!11');
		}]
	}	
	}
);