'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$scope',/*, 'Movies', */ function($scope /*, Movies*/) {
		$scope.data = {};
		/* TEMPORARY */
		$scope.money = 0;
		$scope.multiplier = 1;
		$scope.workers = {intern: 0,
				coder: 0,
				college_graduate: 0,
				curtis_larsen: 0,
				einstein: 0,
				glados: 0,
				dj_holt: 0};
		/* TEMPORARY */
		$scope.writeCode = function(){
			$scope.money += (1 * $scope.multiplier);
		};
		$scope.spendMoney = function(money){
			$scope.money -= money;
		};

		$scope.upgrade = function(money, id){
			if (money > $scope.money){
				alert("FAIL!");
			}
			else {
				$scope.spendMoney(money);
				if (id === 1){
					$scope.multiplier = 2;
				}
				else if (id === 2){
					$scope.multiplier = 4;
				}
				else if (id === 3){
					$scope.multiplier = 8;
				}
				else if (id === 4){
					$scope.multiplier = 16;
				}
				else if (id === 5){
					$scope.multiplier = 32;
				}
				else if (id === 6){
					$scope.multiplier = 64;
				}
				
			}
		};
		
		$scope.work = function(){
			$scope.money += .1 * $scope.workers.intern * $scope.multiplier
			$scope.money += .5 * $scope.workers.coder * $scope.multiplier
			$scope.money += 1 * $scope.workers.college_graduate * $scope.multiplier
			setTimeout($scope.work, 100)
			
		$scope.work()
		/*
		$scope.searchMovies = function(){
			Movies.query( {search: $scope.searchQuery}, function(response){
				$scope.data.movies = response.movies;
			});
		};
		$scope.displayMovie = function(movie){
			$scope.addingMovie = false;
			Movies.get( {movieId: movie.id}, function(movie){
				$scope.data.displayMovie = movie;
				
			});
		};
		$scope.addMovie = function(){
			$scope.addingMovie = true;
			$scope.data.newMovie = {};
		};

		$scope.createMovie = function(){
			var new_movie = new Movies($scope.data.newMovie);
			newMovie.$save( function(){
			$scope.data.newMovie = {}
			alert("ALERT! ALERT! MOVIE CREATED!")	
			});
		};
		
	*/	
	}])
	.controller('MyCtrl2', [function() {

	}]);
