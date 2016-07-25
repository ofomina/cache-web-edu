'use strict';

servicesModule.factory('PersonSrvc', function(RESTSrvc) {	
	return {
		getAll: function(){
            return RESTSrvc.getPromise({method: 'GET' , url: 'Broker/GetPersons'});
		}}});


            