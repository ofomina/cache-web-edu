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
						
						for (var i = 0; i < $scope.data.length; i++)
							$scope.data[i].margin = 10;
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
					console.log("open person");
					
					var index;
					for (var i = 0; i < $scope.data.length; i++) {
						if ($scope.data[i].Id == person.Id)
						{
						 	index = i;
						 	break;
						}
					}
					
					$scope.restFunctions.get(person.Id,$scope.columns).
						then(function(data,status,headers,config){
							for (var i = 0; i < data.data.list.length; i++)
							{
								data.data.list[i].margin = person.margin + 30;
								$scope.data.splice(index+1, 0, data.data.list[i]);
								index++;
							}
							person.childCount = data.data.list.length;
							person.open = true;
						},
						function(data,status,headers,config){
							console.log("childrens is dead");
						});
				};
				
				
				$scope.close = function(person){
					console.log("open person");
					
					var index;
					for (var i = 0; i < $scope.data.length; i++) {
						if ($scope.data[i].Id == person.Id)
						{
						 	index = i;
						 	break;
						}
					}
					
					
					for (var i = 0; i < person.childCount; i++)
					{
						console.log($scope.data[index + i + 1]);
						$scope.close($scope.data[index + i + 1]);
					}
					$scope.data.splice(index+1, person.childCount);
					person.childCount = 0;
					person.open = false;
						
				};

				
				$scope.sortered = function(column){
					if (column.sorted == "top"){
						column.sorted = "bottom";
					} else if(column.sorted == "bottom"){
						column.sorted = "false";
					} else {
						column.sorted = "top";
					}
					$scope.update();
				};


				
				$scope.remove = function(person){
					$scope.restFunctions.remove(person);
					$scope.update();
				}

				
		}]
	};	
	}
);
