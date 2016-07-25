'use strict';

/*===========================================================================================
Доступ к БД через REST
===========================================================================================*/

servicesModule.factory('RESTSrvc', function($http, $q) {	
	return {
		getPromise: function(config){
            var deferred = $q.defer();

            $http(config).
                success(function(data, status, headers, config){
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config){
                    deferred.reject(data, status, headers, config);
                });

            return deferred.promise;
    	}
    }
});