'use strict';

servicesModule.factory('PersonSrvc', ["RESTSrvc", function(RESTSrvc) {	
	return {
		getAll: function(parentId,columns){
            return RESTSrvc.getPromise({method: 'POST' , url: 'broker/GetPersons',data:{parentId:parentId,columns:columns}});
		},
		save: function(object){
			return RESTSrvc.getPromise({method: 'POST',url:'broker/person/save', data:object});
		}
	}
}]);
