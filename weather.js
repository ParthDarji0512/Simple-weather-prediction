 var app = angular.module('weatherApp', []);

    // Using $http service
    app.controller('WeatherController', function($scope, $http) {
      $scope.getWeather = function() {
        var apiKey = 'a49d3ddb2965d4df657f7ac3d81ee71a'; // Replace with your actual OpenWeatherMap API key
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${$scope.city}&appid=${apiKey}&units=metric`;

        $http.get(url)
          .then(function(response) {
            $scope.weather = response.data;
          }, function(error) {
            alert('City not found or API error!');
            console.error(error);
          });
      };
    });