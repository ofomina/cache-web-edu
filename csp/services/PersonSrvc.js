'use strict';

servicesModule.factory('PersonSrvc', ["RESTSrvc", function(RESTSrvc) {	
	return {
		getAll: function(){
            return RESTSrvc.getPromise({method: 'GET' , url: 'broker/GetPersons'});
		},
		save: function(object){
			return RESTSrvc.getPromise({method: 'POST',url:'broker/person/save', data:object});;
		},
		remove: function(id){
			return RESTSrvc.getPromise({method: 'DELETE' , url: 'broker/person' + id});
		}

	}
}]);
