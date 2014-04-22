'use strict';

/* Services */
angular.module("myApp.services", ['ngResource'])
	.factory("CodeLine", function($resource){
		return $resource('http://localhost:8080/api/codes/:lineId', {}, {
			'query': {method: 'GET', isArray: false }
		})
	})

	.value('version', '0.1');

// Demonstrate how to register services
// In this case it is a simple value service.

