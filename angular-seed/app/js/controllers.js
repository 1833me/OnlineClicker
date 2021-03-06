'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$scope', 'CodeLine',  function($scope , CodeLine) {
		$scope.data = {};
		$scope.data.price_increase = 1.25;
		$scope.user = {};	
		$scope.user.email = '';
		$scope.user.password = '';
                $scope.user.gender = '';
		
	        $scope.splash_page_active = true;
                $scope.signup_active = false;
                

        $scope.master = {};
  $scope.isActive = function() {
    $scope.signup_active = true;
  };
  $scope.update = function(user) {
    $scope.master = angular.copy(user);
    $scope.splash_page_active = false;
  };
 
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
 
  $scope.isUnchanged = function(user) {
    return angular.equals(user, $scope.master);
  };
 
  $scope.reset();
		/* TEMPORARY */
		$scope.data.money = 0;
		$scope.data.floored_money = $scope.data.money;
		$scope.data.multiplier = 1;
        $scope.data.code = {};
		$scope.data.workers = {
                noob:
                    {amount:0,
                     price:10},
                intern:
					{amount:0,
					price:100},
				coder:
                    {amount:0,
					price:250},
				college_graduate:
                    {amount:0,
					price:10000},
				curtis_larsen:
                    {amount:0,
					price:100000},
				einstein:
                    {amount:0,
					price:1000000},
				dj_holt:
                    {amount:0,
					price:10000000}};
		/* TEMPORARY */
		$scope.writeCode = function(){
			$scope.changeMoney($scope.data.multiplier)
            $scope.displayCodeLine();
		};

		$scope.upgrade = function(money, id){
			if (money > $scope.data.money){
				alert("FAIL!");
			}
			else {
				$scope.changeMoney(-1 * money);
				if (id === 1){
					$scope.data.multiplier = 2;
					$scope.data.upm2 = true;
				}
				else if (id === 2){
					$scope.data.multiplier = 4;
					$scope.data.upm2 = true;
					$scope.data.upm4 = true;
				}
				else if (id === 3){
					$scope.data.multiplier = 8;
					$scope.data.upm2 = true;
					$scope.data.upm4 = true;
					$scope.data.upm8 = true;
				}
				else if (id === 4){
					$scope.data.multiplier = 16;
					$scope.data.upm2 = true;
					$scope.data.upm4 = true;
					$scope.data.upm8 = true;
					$scope.data.upm16 = true;
				}
				else if (id === 5){
					$scope.data.multiplier = 32;
					$scope.data.upm2 = true;	
					$scope.data.upm4 = true;
					$scope.data.upm8 = true;
					$scope.data.upm16 = true;
					$scope.data.upm32= true;
				}
				else if (id === 6){
					$scope.data.multiplier = 64;
					$scope.data.upm2 = true;
					$scope.data.upm4 = true;
					$scope.data.upm8 = true;
					$scope.data.upm16 = true;
					$scope.data.upm32 = true;
					$scope.data.upm64 = true;
				}
				
			}
		};
		$scope.addWorker = function(money, id){
			if (money > $scope.data.money){
				alert("FAIL!");
			}
			else {
                $scope.changeMoney(-1 * money);
                if (id === 0){
                    $scope.data.workers.noob.amount += 1;
                    $scope.data.workers.noob.price = Math.floor($scope.data.workers.noob.price * $scope.data.price_increase)
                }
				else if (id === 1){
					$scope.data.workers.intern.amount += 1;
					$scope.data.workers.intern.price = Math.floor($scope.data.workers.intern.price * $scope.data.price_increase)
				}
				else if (id === 2){
					$scope.data.workers.coder.amount += 1;
					$scope.data.workers.coder.price = Math.floor($scope.data.workers.coder.price  * $scope.data.price_increase)
				}
				else if (id === 3){
					$scope.data.workers.college_graduate.amount += 1;
					$scope.data.workers.college_graduate.price = Math.floor($scope.data.workers.college_graduate.price  * $scope.data.price_increase)
				}
				else if (id === 4){
					$scope.data.workers.curtis_larsen.amount += 1;
					$scope.data.workers.curtis_larsen.price = Math.floor($scope.data.workers.curtis_larsen.price  * $scope.data.price_increase)
				}
				else if (id === 5){
					$scope.data.workers.einstein.amount += 1;
					$scope.data.workers.einstein.price = Math.floor($scope.data.workers.einstein.price  * $scope.data.price_increase)
				}
				else if (id === 6){
					$scope.data.workers.dj_holt.amount += 1;
					$scope.data.workers.dj_holt.price = Math.floor($scope.data.workers.dj_holt.price  * $scope.data.price_increase)
				}
			}
		};
		$scope.work = function(){
            $scope.changeMoney(.1 * $scope.data.workers.noob.amount * $scope.data.multiplier);
			$scope.changeMoney(.5 * $scope.data.workers.intern.amount * $scope.data.multiplier);
			$scope.changeMoney(/*1 **/ $scope.data.workers.coder.amount * $scope.data.multiplier);
			$scope.changeMoney(10 * $scope.data.workers.college_graduate.amount * $scope.data.multiplier);
			$scope.changeMoney(101 * $scope.data.workers.curtis_larsen.amount * $scope.data.multiplier);
			$scope.changeMoney(1000 * $scope.data.workers.einstein.amount * $scope.data.multiplier);
			$scope.changeMoney(20000 * $scope.data.workers.dj_holt.amount * $scope.data.multiplier);
            if(!$scope.$$phase) {
                $scope.$apply();
            }

			setTimeout($scope.work, 1000);
			};
			

		$scope.changeMoney = function(mooney){
			$scope.data.money += mooney;
			$scope.data.floored_money = Math.floor($scope.data.money);
		};
        $scope.displayCodeLine = function() {
            CodeLine.get({lineId: "random"}, function (code_line) {
                $scope.data.code = code_line;
            });
        };
		$scope.work();
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

    // check if there is query in url
    // and fire search in case its value is not empty
// and fire it after definition
