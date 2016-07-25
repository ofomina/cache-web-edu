var treeModule = angular.module('ui.tree',[]);

treeModule.directive('tree', function(){
	return{
		replace: true,
		restrict: 'E',
		templateUrl: 'tree/tree.html',

		scope:{
			get:'&',
			columns: '='
		},
		controller: ["$scope",function($scope){
				console.log('tree initiated epta!11');
				console.log($scope.columns);
				
				
				$scope.get().
					then(function(data, status, headers, config){
						console.log('truth branch');
						$scope.data = data.data;
						
						console.log($scope.data);
					},
					function(data, status, headers, config){
						console.log('everything is bad')
					});
					
				$scope.getPropertyValue = function(item,propertyStr){
					var value = item;
					
					try{
						var properties = propertyStr.split('.');
						for (var i=0; i<properties.length; i++){
							value = value[properties[i]];
							if (value !== Object(value))
								break;
						}

					}
					catch(ex){
						console.log('Дело пахнет керосином');
					}
					
					return value == undefined ? '' : value;
	
				};
				
				$scope.openPerson = function(person){
					person.close=!person.close;
				}


		}]
	};	
	}
);
