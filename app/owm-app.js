var app = angular.module('OWMApp', ['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        }).when("/cities/:city", {
        		templateUrl: "city.html",
        		controller: "CityCtrl",
        		resolve: {
        			city: function(owmFindCity, $route) {
        				var city = $route.current.params.city;
        				return owmFindCity(city);
        			}
        		}
        }).when("/error", {
        		template:"<p>Error - page not found"
        });
    }]);
 	app.controller('HomeCtrl', ["$scope", function($scope) {
        //empty for now
    }]);
 	app.controller("CityCtrl", function($scope, city) {
			$scope.city = city;
	 	});
 	app.value("owmCities", ["New York", "Dallas", "Chicago"]);