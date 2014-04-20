'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$scope',/*, 'Movies', */ function($scope /*, Movies*/) {
		$scope.data = {};
		/* TEMPORARY */
		$scope.money = 200;
		$scope.floored_money = $scope.money;
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
			$scope.changeMoney($scope.multiplier)
		};

		$scope.upgrade = function(money, id){
			if (money > $scope.money){
				alert("FAIL!");
			}
			else {
				$scope.changeMoney(-1 * money);
				if (id === 1){
					$scope.multiplier = 2;
					$scope.upm2 = true;
				}
				else if (id === 2){
					$scope.multiplier = 4;
					$scope.upm2 = true;
					$scope.upm4 = true;
				}
				else if (id === 3){
					$scope.multiplier = 8;
					$scope.upm2 = true;
					$scope.upm4 = true;
					$scope.upm8 = true;
				}
				else if (id === 4){
					$scope.multiplier = 16;
					$scope.upm2 = true;
					$scope.upm4 = true;
					$scope.upm8 = true;
					$scope.upm16 = true;
				}
				else if (id === 5){
					$scope.multiplier = 32;
					$scope.upm2 = true;	
					$scope.upm4 = true;
					$scope.upm8 = true;
					$scope.upm16 = true;
					$scope.upm32= true;
				}
				else if (id === 6){
					$scope.multiplier = 64;
					$scope.upm2 = true;
					$scope.upm4 = true;
					$scope.upm8 = true;
					$scope.upm16 = true;
					$scope.upm32 = true;
					$scope.upm64 = true;
				}
				
			}
		};
		
		$scope.addWorker = function(money, id){
			if (money > $scope.money){
				alert("FAIL!");
			}
			else {
				if (id === 1){
					$scope.workers.intern += 1
				}
				else if (id === 2){
					$scope.workers.coder += 1
				}
				else if (id === 3){
					$scope.workers.college_graduate += 1
				}
				else if (id === 4){
					$scope.workers.curtis_larsen += 1
				}
				else if (id === 5){
					$scope.workers.einstein += 1
				}
				else if (id === 6){
					$scope.workers.dj_holt += 1
				}
				$scope.changeMoney(-1 * money)
			}
		}

		$scope.work = function(){
			$scope.changeMoney(.1 * $scope.workers.intern * $scope.multiplier);
			$scope.changeMoney(1 * $scope.workers.coder * $scope.multiplier);
			$scope.changeMoney(10 * $scope.workers.college_graduate * $scope.multiplier);
			$scope.changeMoney(101 * $scope.workers.curtis_larsen * $scope.multiplier);
			$scope.changeMoney(1000 * $scope.workers.einstein * $scope.multiplier);
			$scope.changeMoney(20000 * $scope.workers.dj_holt * $scope.multiplier);
			$scope.$apply();
			setTimeout($scope.work, 1000);
			};
			


		$scope.changeMoney = function(mooney){
			$scope.money += mooney
			$scope.floored_money = Math.floor($scope.money)
		};
		
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
