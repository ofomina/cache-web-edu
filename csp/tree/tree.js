var treeModule = angular.module('ui.tree',[]);

treeModule.directive('tree', function(){
	return{
		replace: true,
		restrict: 'E',
		templateUrl: 'tree/tree.html',

		scope:{
			columns: '=',
			restFunctions: '='
		},
		controller: ["$scope",function($scope){
				console.log('tree initiated epta!11');				
				
				$scope.restFunctions.get("", $scope.columns).
					then(function(data, status, headers, config){
						console.log('truth branch');
						$scope.data = data.data.list;
						console.log($scope.data);
					},
					function(data, status, headers, config){
						console.log('everything is bad')
					});
					
				$scope.getPropertyValue = function(item,propertyStr){
					var value = item;
					//console.log('123455667898078765432123567890856432456');
					//console.log(item);
					//console.log(propertyStr);
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
				
				$scope.open = function(person){
					person.close=!person.close;
					$scope.restFunctions.get(person.Id,$scope.columns).
					then(function(data,status,headers,config){
							console.log("childrens is coming");
							person.childrens = data.data.list;
						},
						function(data,status,headers,config){
							console.log("childrens is dead");
						});
					}
				}

				
		}]
	};	
	}
);
