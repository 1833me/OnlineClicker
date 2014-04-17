'use strict';

/* Services */
angular.module("myApp.services", ['ngResource'])
	.factory("Movies", function($resource){
		return $resource('http://localhost:8080/api/movies/:movieId', {}, {
			'query': {method: 'GET', isArray: false }
		})
	})
	.value('version', '0.1')

// Demonstrate how to register services
// In this case it is a simple value service.

