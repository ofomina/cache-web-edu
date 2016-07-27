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
				console.log('tree initiated');				
				
				$scope.update = function(){
					$scope.restFunctions.get("", $scope.columns).
					then(function(data, status, headers, config){
						console.log('truth branch');
						$scope.data = data.data.list;
						//console.log($scope.data);
					},
					function(data, status, headers, config){
						console.log('everything is bad')
					});
				};

				$scope.update();
					
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
					};
				
				
				$scope.sortered = function(column){
					if (column.sorted == "top"){
						column.sorted = "bottom";
					} else if(column.sorted == "bottom"){
						column.sorted = "false";
					} else {
						column.sorted = "top";
					}
				};
				
				$scope.remove = function(person){
					$scope.restFunctions.remove(person);
					$scope.update();
				}
				
		}]
	};	
	}
);
