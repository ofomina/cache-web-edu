'use strict';

/*===========================================================================================
Доступ к БД через REST
===========================================================================================*/

servicesModule.factory('RESTSrvc', ["$http", "$q", function($http, $q) {	
	return {
		getPromise: function(config){
            var deferred = $q.defer();

            $http(config).
                then(
                function(data, status, headers, config){
                    deferred.resolve(data);
                },
                function(data, status, headers, config){
                    deferred.reject(data, status, headers, config);
                });

            return deferred.promise;
    	}
    }
}]);