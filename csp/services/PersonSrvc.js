'use strict';

servicesModule.factory('PersonSrvc', ["RESTSrvc", function(RESTSrvc) {	
	return {
		getAll: function(parentId,columns){
            return RESTSrvc.getPromise({method: 'POST' , url: 'broker/GetPersons',data:{parentId:parentId,columns:columns}});
		},
		get: function(personId){
			return RESTSrvc.getPromise({method:'GET',url:'broker/person/'+personId});
		},
		save: function(object){
			console.log(object);
			return RESTSrvc.getPromise({method: 'POST',url:'broker/person/save', data:object});;
		},
		remove: function(id){
			return RESTSrvc.getPromise({method: 'DELETE' , url: 'broker/person/' + id});
		}

	}
}]);
