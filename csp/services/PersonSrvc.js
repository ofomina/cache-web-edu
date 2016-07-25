'use strict';

servicesModule.factory('PersonSrvc', ["RESTSrvc", function(RESTSrvc) {	
	return {
		getAll: function(){
            return RESTSrvc.getPromise({method: 'GET' , url: 'broker/GetPersons'});
		},
		save: function(object){
			console.log(object);
		}
	}
}]);
