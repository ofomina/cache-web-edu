'use strict';

servicesModule.factory('StatusSrvc', ["RESTSrvc", function(RESTSrvc) {	
	return {
		getAll: function(){
            return RESTSrvc.getPromise({method: 'GET' , url: 'broker/GetStatuses'});
		}}}]);